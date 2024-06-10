import { formatCurrency } from "../helpers"
import type { OrdenItem } from "../types"
type OrdenitemProps = {
  orden: OrdenItem[],
  removeItem: (item:OrdenItem) => void

}
export const OrdenContents = ({ orden , removeItem}: OrdenitemProps) => {
  return (
    <div >
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-5">
        {orden.length === 0 ?
          <p className="text-center">LA ORDEN ESTA VACIA</p>
          :
          (
            orden.map(item => (
              <div
                key={item.id}
                className = "flex justify-between border-t border-gray-500 py-1 last-of-type:border-b border-gray-700"  
              >
                
                <div className="mt-1">
                  <p className="text-lg">
                    {item.name}-{formatCurrency(item.price)}
                  </p>
                  <p className="font-black">
                    Cantidad:{item.quantity} - {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black mt-3"
                        onClick={()=>removeItem(item)}
                >
                  X
                </button>
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}
