import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Recommendations from './Recommendations';
import duck_image from '../../../images/duck.jpg';

const Duck = (props) => {

    function message() {
        const animals = ['Dinosaur', 'Phoenix', 'Dragon']

        let theme = data?.theme === 'Superhero';
        let start = theme ? "A brave little fellow for your desk." : "A cute little fellow for your desk.";
        let size = ['XLarge', 'Jumbo'].includes(data?.size) ? " Actually, it's unusually large..." :
            data?.size === 'XSmall' ? " It's unusually small..." : "";
        let animal = animals.includes(data?.animal) ? " This duck looks quite special..." : "";
        let color = data?.color === "Multicolored" ? " It's so colorful!" :
            ['Gold', 'Silver'].includes(data?.color) ? " It's rather shimmery!" : "";

        let msg = `${start}${size}${animal}${color}`;
        return msg;
    }

    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const duck = await fetch(`http://localhost:3001/ducks/${id}`)
                    .then(res => res.json());

                setData(duck);
            }
            catch (error) {
                console.error("Error fetching duck:", error);
            }
        };

        fetchData();
    }, [data]);

    let stars = "⭐".repeat(data?.popularity);

    return (
        <>
            <section id='img'>
                <img src={duck_image} />
            </section>
            <h5>{data?.name}</h5>
            <section id='desc'>
                {message()}
            </section>
            <h5>Duck Details</h5>
            <section>
                <p>Color: {data?.color} </p>
                <p>Size: {data?.size} </p>
                <p>Material: {data?.material} </p>
                <p>Animal: {data?.animal} </p>
                <p>Pattern: {data?.pattern} </p>
                <p>Theme: {data?.theme} </p>
            </section>
            <h5>Additional Details</h5>
            <section>
                <p>Durability: {data?.durability}/10 </p>
                <p>Popularity: {stars}</p>
                <p>Price: ${data?.price}</p>
            </section>
            <h5>Other Ducks</h5>
            <section>
                <Recommendations data={data} addToCart={props.addToCart}/>
            </section>
        </>
    )
};

export default Duck;