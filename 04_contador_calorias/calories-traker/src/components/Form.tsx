import { useState } from "react"
import { categories } from "../data/categories"
import { Activity } from "../types"

const Form = () => {
    const [activity, setActivity] = useState<Activity>({
        category:1,
        name:'',
        calories: 0

    })
    const handleChange =(e: React.ChangeEvent<HTMLSelectElement>|React.ChangeEvent<HTMLInputElement>)=>{
        const isNumberField = ['category','calories'].includes(e.target.id)
        setActivity({
            ...activity,
            [e.target.id]:isNumberField ? +e.target.value: e.target.value
        })
        
    }
    const isValidActivity = () =>{
        const {name, calories} = activity 
        
        return (name.trim()!== '' && calories > 0 )

    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("SUBMITTTTTT")
    }
    return (
        <form
        onSubmit={handleSubmit }
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select
                    className="border border-slate-200 p-2 rounded-lg w-full bg-white"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}

                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input 
                id="name"
                type="text"
                className="border border-slate-200 p-2 rounded-lg"
                placeholder="Ej. Comida, jugo de naranjo, Ejercico, caminata , etc"
                value={activity.name}
                onChange={handleChange}
                >
                </input>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input 
                id="calories"
                type="number"
                className="border border-slate-200 p-2 rounded-lg"
                placeholder="Ej. 200 , 400 ,800"
                value={activity.calories}
                onChange={handleChange}
                >
                </input>
            </div>
            <input type="submit" 
            className="bg-gray-600 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
            value={activity.category === 1 ? 'Guardar Comida': 'Guardar Ejercicio' }
            disabled={!isValidActivity()}
            />
        </form>
    )
}

export default Form