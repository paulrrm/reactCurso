export type MenuItem = {
    id: number ,
    name:string,
    price: number
}
export type OrdenItem = MenuItem & {
    quantity:number
}