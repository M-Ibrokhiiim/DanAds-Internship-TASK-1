export interface User {
    id?: number,
    name: string,
    surname: string,
    img: string,
    age: number
}

export interface UserOption {
    born: number,
    name: string,
    surname: string,
    nickName1: string,
    nickName2: string,
    isProgrammer: boolean,
    newCar?: string
}