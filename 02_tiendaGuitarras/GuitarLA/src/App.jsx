
import { useEffect, useState } from 'react'
import './App.css'
import Guitar from './components/Guitar'
import Header from './components/Header'
import { db } from './data/db'

const App = () => {


  const [data, setdata] = useState([])
  useEffect(() => {
    setdata(db)
  }, [])

  console.log(data)
  return (
    <>
      <Header />


      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitars) =>(
            <Guitar 
            guitar = {guitars}
            />
          ))}
          

        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}


export default App
