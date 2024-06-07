import { useState } from "react"
import { OrdenItem } from "../types"

export default function useOrden(){

    const [orden, setorden] = useState<OrdenItem[]>([])
    const [total, settotal] = useState(0)
    const [auth, setauth] = useState(false)
    return{

    }
}