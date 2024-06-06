import Menuitem from "./components/Menuitem"
import { menuItems } from "./data/db"

const App = () => {
  console.log(menuItems)
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
              />
            ))}
          </div>
        </div>
        <div>
          <h2>Consumo</h2>
        </div>
      </main>

    </div>
  )
}

export default App
