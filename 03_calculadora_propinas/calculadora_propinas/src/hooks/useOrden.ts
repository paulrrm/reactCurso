import { useState } from "react"
import type { MenuItem, OrdenItem } from "../types"

export default function useOrden() {

    const [orden, setorden] = useState<OrdenItem[]>([])
    const [tip, settip] = useState(0)

    const addItem = (item: MenuItem) => {
        const itemExist = orden.find(ordenItem => ordenItem.id === item.id)
        if (itemExist) {
            const updateOrder = orden.map(elemento => elemento.id === item.id ? { ...elemento, quantity: elemento.quantity += 1 } : elemento)

            setorden(updateOrder)
        }
        else {
            console.log('agregando' + item.id)
            const newItem: OrdenItem = { ...item, quantity: 1 }
            setorden([...orden, newItem])
        }



    }
    const removeItem = (OrdenItem: OrdenItem) => {
        
        const local = [...orden]
       
        setorden(local.filter(item => item !== OrdenItem))
    }


    return {
        orden,
        setorden,
        addItem,
        removeItem,
        tip,
        settip
    }
}