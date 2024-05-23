import React, {useState} from 'react'
import DuckPage from "./DuckPage"

const Home = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const ducksPerPage = 9

    const indexOfLastDuck = currentPage * ducksPerPage
    const indexOfFirstDuck = indexOfLastDuck - ducksPerPage
    const currentDucks = props.data.slice(indexOfFirstDuck, indexOfLastDuck)

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }
    return(
        <>
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {
                    currentDucks.map((ducks) => (
                        <DuckPage key={ducks._id} data={ducks}  addToCart={props.addToCart}/>
                    ))
                }
            </div>
            <div style={{ textAlign: 'center'}}>
                {currentPage > 1 && (
                    <button className="btn btn-dark" onClick={prevPage}>Previous</button>
                )}
                {indexOfLastDuck< props.data.length && (
                    <button className="btn btn-dark" onClick={nextPage}>Next</button>
                )}
            </div>
        </>
    )
}
export default Home