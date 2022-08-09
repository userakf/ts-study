type Ob<T> = { readonly [k in keyof T]:T[k] }
type Person = {
    name:string,age:number
}
type TT = Ob<Person>