import type { MenuItem } from "../types"
type MenuitemProps ={
  item: MenuItem
}

export default function Menuitem({item}:MenuitemProps) {
  return (
    <>
      <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full flex justify-between"
      >
      <p className="px-4">{item.name}</p>
      <p className="font-black px-4">${item.price}</p>
      </button>
      
    </>
  )
}
