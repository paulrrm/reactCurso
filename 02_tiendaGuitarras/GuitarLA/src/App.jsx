
import { useEffect, useState } from 'react'
import './App.css'
import Guitar from './components/Guitar'
import Header from './components/Header'
import { db } from './data/db'

const App = () => {


  const [data, setdata] = useState([])
  const [card, setcard] = useState([])
  function addToCard(item){
    console.log("Agregando")
    const itemExist = card.findIndex((guitar)=> guitar.id === item.id )
    console.log(itemExist)
    if(itemExist > -1){
      console.log("YA existe")
      const updatedCard = [...card]
      updatedCard[itemExist].cantidad++
      setcard(updatedCard)
    }
    else{
      item.cantidad = 1
      setcard(prevCard => [...prevCard, item])
    }
    
  }
  function removeToCart(id){
    console.log('eliminando')
  }
  useEffect(() => {
    setdata(db)
  }, [])

  console.log(data)
  return (
    <>
      <Header 
        card = {card}
        setcard = {setcard}
        removeToCart = {removeToCart}
      />


      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitars) =>(
            <Guitar key={guitars.id}
            guitar = {guitars}
            addToCard = {addToCard}
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
