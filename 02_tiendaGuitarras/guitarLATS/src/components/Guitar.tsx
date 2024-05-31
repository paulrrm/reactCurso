import type {Guitar} from '../types/types'

type GuitarProps ={
    guitar:Guitar;
    addToCard:(item:Guitar)=> void
}

export default function Guitar  ({guitar, addToCard}: GuitarProps) {
   const {id,price, name,image, description } = guitar
   
   const handleClick =(guitar:Guitar) =>{
    console.log(id)
    console.log(guitar)
    addToCard(guitar)
    

   }

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => handleClick(guitar)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}

