import { useEffect, useState,useMemo } from "react"
import {db} from '../data/db'

const useCart = () => {
    
    const initialCart =() =>{
      const localStorageItem = localStorage.getItem('cardGuitarLa')
      return localStorageItem ? JSON.parse(localStorageItem): []
    }
    const [data, setdata] = useState(db)
    const [card, setcard] = useState(initialCart)
    const isEmpty = useMemo( () => card.length === 0, [card])
    const cartTotal =useMemo( () => card.reduce((total, item)=> total + (item.cantidad * item.price),0),[card])
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

    return{
        vaciarCarrito,
        saveLocalStorage,
        variarCantidad,
        removeToCart,
        addToCard,
        card,
        setcard,
        data, isEmpty, cartTotal
    }

}

export default useCart