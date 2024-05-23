import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Recommendations from './Recommendations';
import duck_image from '../../../images/rubber_duck.png';

const Duck = (props) => {

    function message() {
        const animals = ['Dinosaur', 'Phoenix', 'Dragon']

        let theme = duck?.theme === 'Superhero';
        let start = theme ? "A brave little fellow for your desk." : "A cute little fellow for your desk.";
        let size = ['XLarge', 'Jumbo'].includes(duck?.size) ? " Actually, it's unusually large..." :
            duck?.size === 'XSmall' ? " It's unusually small..." : "";
        let animal = animals.includes(duck?.animal) ? " This duck looks quite special..." : "";
        let color = duck?.color === "Multicolored" ? " It's so colorful!" :
            ['Gold', 'Silver'].includes(duck?.color) ? " It's rather shimmery!" : "";
        let msg = `${start}${size}${animal}${color}`;
        return msg;
    }

    const { id } = useParams();
    const [duck, setDuck] = useState();
    const [recs, setRecs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/ducks/${id}`)
            .then(res => res.json())
            .then(d => setDuck(d))
            .catch(error => console.error("Error fetching duck:", error))
        }, [id])
    useEffect(() => {
        if (!duck) {
            return;
        }
        fetch("http://127.0.0.1:5000/api/predict", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(duck),
        })
        .then(res => res.json())
        .then(recommendations => setRecs(recommendations))
        .catch(error => console.error("Error posting data", error))
    }, [duck]);

    let stars = "⭐".repeat(duck?.popularity);

    return (
        <>
            <section id='img'>
                <img src={duck_image} />
            </section>
            <h5>{duck?.name}</h5>
            <section id='desc'>
                {message()}
            </section>
            <h5>Duck Details</h5>
            <section>
                <p>Color: {duck?.color} </p>
                <p>Size: {duck?.size} </p>
                <p>Material: {duck?.material} </p>
                <p>Animal: {duck?.animal} </p>
                <p>Pattern: {duck?.pattern} </p>
                <p>Theme: {duck?.theme} </p>
            </section>
            <h5>Additional Details</h5>
            <section>
                <p>Durability: {duck?.durability}/10 </p>
                <p>Popularity: {stars}</p>
                <p>Price: ${duck?.price}</p>
            </section>
            <h5>Other Recommended Ducks</h5>
            <section>
                <Recommendations recs={recs} addToCart={props.addToCart} />
            </section>
        </>
    )
};

export default Duck;