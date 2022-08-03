type Flatten<T extends unknown[]> = T extends [infer F,...infer R]
    ?   F extends unknown[]
        ?   [...Flatten<F>,...Flatten<R>]
        :   [F,...Flatten<R>]
    :   T

// type TT = Flatten<[1, 2, [3, 4], [[[5]]]]>

type Chainable< T extends object = {}> = {
    option<S extends string | number,U>(key:S,value:U):Chainable<T & { [k in S]:U }>
    get():T
}

declare const a: Chainable

const result2 = a
  .option('name', 'another name')
  .option('name', 'last name')
  .get()

interface Tobj {
    'h':string,
    'e':string,
    'l':string,
}
type TT = keyof ["h", "e", "l", "l", "o"]

const tt:TT = 'length'

