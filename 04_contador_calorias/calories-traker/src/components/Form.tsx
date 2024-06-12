import { categories } from "../data/categories"
const Form = () => {
    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select
                    className="border border-slate-200 p-2 rounded-lg w-full bg-white"
                    id="category"
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
                <label htmlFor="activity" className="font-bold">Actividad:</label>
                <input 
                id="activity"
                type="text"
                className="border border-slate-200 p-2 rounded-lg"
                placeholder="Ej. Comida, jugo de naranjo, Ejercico, caminata , etc"
                >
                </input>
            </div>
        </form>
    )
}

export default Form