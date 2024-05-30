import { useEffect, useState } from "react"


const useCart = () => {
    
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

    return{
        vaciarCarrito,
        saveLocalStorage,
        variarCantidad,
        removeToCart,
        addToCard,
        card,
        setcard,
        data
    }

}

export default useCart