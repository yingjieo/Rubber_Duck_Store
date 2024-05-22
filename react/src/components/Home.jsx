import DuckPage from "./DuckPage"

const Home = (props) => {
    return(
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {
                props.data.map((ducks) => (
                    <DuckPage key={ducks._id} data={ducks} />
                ))
            }
        </div>
    )
}
export default Home