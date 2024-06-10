import Menuitem from "./components/Menuitem"
import { OrdenContents } from "./components/OrdenContents"
import { menuItems } from "./data/db"
import  useOrden from "./hooks/useOrden"

const App = () => {
  console.log(menuItems)
  const {addItem,orden, removeItem}= useOrden()
  return (

    <div>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propina y consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto  py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2>Menu</h2>
          <div className="space-y-2">
            {menuItems.map(item => (
              <Menuitem
                key={item.id}
                item={item}
                addItem = {addItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        
          <OrdenContents
          orden ={orden}
          removeItem ={removeItem}
          />
        </div>
      </main>

    </div>
  )
}

export default App
