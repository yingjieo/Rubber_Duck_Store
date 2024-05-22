import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DuckPage from './components/DuckPage'
import Cart from './components/Cart'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async ()=> {
      try {
        const response = await fetch(import.meta.env.VITE_DUCKS_API)
        if(!response.ok) {
          throw new Error('Data could not be fetched')
        }
        const json_response = await response.json()
        setData(json_response)
      } catch(error) {
        console.log('error fetching ducks:', error)
      }
    }
    fetchData()
  }, [page])
  
  const handleDelete = async (duck_id) => {
     try{
      const response = await fetch(`${import.meta.env.VITE_DUCK_API}/${duck_id}`, {
        method:'DELETE',
      })
      if(!response.ok) {
        throw new Error('Duck could not be deleted')
      }
  
     } catch (error) {
      console.log('error deleting duck')
     }
  }

  return (
    <>
      <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Rubber Duck Store</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                    Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                    Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="checkout">
                  Checkout
                </Link>
              </li>
            </ul>
            <Search setData={setData} />
          </div>
        </div>
      </nav>
      </Router>
    </>
  )
}

export default App
