import  { useCallback, useMemo } from 'react'
import { OrdenItem } from '../types'
import { formatCurrency } from '../helpers'

type OrdenTotalsProps = {
    orden:OrdenItem[],
    tip:number
}

const TotalOrden = ({orden,tip}:OrdenTotalsProps) => {
    const subTotal = useCallback(() => orden.reduce( (total , item) => total+(item.price*item.quantity), 0),[orden])
    const tipAmount = useCallback(()=> subTotal()*tip,[tip,orden])
    const totalOrd = useCallback(()=> subTotal()+tipAmount(),[tip,orden])
  return (
    <>
        <div className='space-y-3'>
            <h2 className='font-black text-2xl'>Totales y propina</h2>
            <p>Subtotal a pagar: <span className='font-bold ml-1'>{formatCurrency(subTotal())}</span></p>
            <p>Propina: <span className='font-bold ml-1'>{formatCurrency(tipAmount())}</span></p>
            <p>Total a pagar: <span className='font-bold ml-1'>{formatCurrency( totalOrd())}</span></p>
        </div>
        <button className='w-full bg-blue-800 p-3 uppercase rounded-lg text-white disabled:opacity-10'
        disabled = {totalOrd() === 0}
        >
            Guarder Orden
        </button>
    </>
  )
}

export default TotalOrden