import { CartItem } from "../types/types"
interface PropsHeader{
    card: CartItem[];
    setcard: () => void;
    removeToCart: () => void;
    variarCantidad: () => void;
    vaciarCarrito : () => void;
    isEmpty : () => void;
    cartTotal : () => void;
}
const Header = (PropsHeader) => {

   
   

    return (

        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div
                            className="carrito"
                        >
                            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                {PropsHeader.isEmpty ?
                                    (<p className="text-center">El carrito esta vacio</p>) :
                                    (
                                        <>
                                            <table className="w-100 table">
                                                <thead>
                                                    <tr>
                                                        <th>Imagen</th>
                                                        <th>Nombre</th>
                                                        <th>Precio</th>
                                                        <th>Cantidad</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {PropsHeader.card.map((guitar: CartItem) => (
                                                        <tr key={guitar.id}>
                                                            <td>
                                                                <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra" />
                                                            </td>
                                                            <td>{guitar.name}</td>
                                                            <td className="fw-bold">
                                                                ${guitar.price}
                                                            </td>
                                                            <td className="flex align-items-start gap-4">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                    onClick={()=>PropsHeader.variarCantidad(guitar.id, -1)}
                                                                >
                                                                    -
                                                                </button>
                                                                {guitar.cantidad}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                    onClick={()=>PropsHeader.variarCantidad(guitar.id, 1)}
                                                                >
                                                                    +
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-danger"
                                                                    type="button"
                                                                    onClick={()=>PropsHeader.removeToCart(guitar.id)}
                                                                >
                                                                    X
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}

                                                </tbody>
                                            </table>
                                            <p className="text-end">Total pagar: <span className="fw-bold">${PropsHeader.cartTotal}</span></p>
                                            <button 
                                             onClick={()=>PropsHeader.vaciarCarrito()}
                                            className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Header