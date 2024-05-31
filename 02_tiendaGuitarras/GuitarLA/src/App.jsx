
import './App.css'
import Guitar from './components/Guitar'
import Header from './components/Header'

import useCart from './hooks/useCart'

const App = () => {

  const {card, setcard, removeToCart,vaciarCarrito,variarCantidad,data,addToCard,isEmpty,cartTotal} = useCart();
  
  return (
    <>
      <Header 
        card = {card}
        setcard = {setcard}
        removeToCart = {removeToCart}
        variarCantidad = {variarCantidad}
        vaciarCarrito = {vaciarCarrito}
        isEmpty = {isEmpty}
        cartTotal = {cartTotal}
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
