
import { useEffect, useState } from 'react'
import './App.css'
import Guitar from './components/Guitar'
import Header from './components/Header'
import { db } from './data/db'
import useCart from './hooks/useCart'

const App = () => {

  const {auth} =useCart()
  const initialCart =() =>{
    const localStorageItem = localStorage.getItem('cardGuitarLa')
    return localStorageItem ? JSON.parse(localStorageItem): []
  }
  const [data, setdata] = useState([])
  const [card, setcard] = useState(initialCart)
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
    
    const updatedCard = [...card]
    const findIndex = updatedCard.findIndex(item => item.id === id)
    updatedCard.splice(findIndex,1)
    setcard(updatedCard)
     
  }
  function variarCantidad(id , cantidad){
    const updatedCard = [...card]
    const findIndex = updatedCard.findIndex(item => item.id === id)
    const resultadoVariarCantidad = updatedCard[findIndex].cantidad + cantidad
    if(resultadoVariarCantidad > 0){
      updatedCard[findIndex].cantidad = resultadoVariarCantidad
      setcard(updatedCard)
    }
    else{
        removeToCart(id)
    }
  }
  function vaciarCarrito(){
    setcard([])
  }
  function saveLocalStorage(){
    localStorage.setItem('cardGuitarLa', JSON.stringify(card))
  }
  useEffect(() => {
    setdata(db)
  }, [])

  useEffect(() => {
   saveLocalStorage()
  }, [card])
  

  console.log(data)
  return (
    <>
      <Header 
        card = {card}
        setcard = {setcard}
        removeToCart = {removeToCart}
        variarCantidad = {variarCantidad}
        vaciarCarrito = {vaciarCarrito}
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
