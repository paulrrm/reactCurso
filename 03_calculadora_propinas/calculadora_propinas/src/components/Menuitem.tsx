import type { MenuItem } from "../types"
type MenuitemProps ={
  item: MenuItem,
  addItem: (item:MenuItem) => void
}

export default function Menuitem({item,addItem}:MenuitemProps) {
  return (
    <>
      <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full flex justify-between"
      onClick={()=>addItem(item)}
      >
      <p className="px-4">{item.name}</p>
      <p className="font-black px-4">${item.price}</p>
      </button>
      
    </>
  )
}
