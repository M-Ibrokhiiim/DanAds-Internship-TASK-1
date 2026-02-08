<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

// Variables 
const greating = ref<string | boolean>(true)
const nickName = ref<string>('M_Ibrokhiiim')

//Arrays
type arrayType = (number | string)[]
type mixedArray = (boolean | null | string |number)[]

const elements = ref<number[]>([123,12312,1231231231])
const fixedArray = ref<[number,string]>([123,'asd'])
const array = ref<[number][]>([[1213],[123123]])
const array2 = ref<arrayType>([123,222])
const mixArray = ref<mixedArray>([123,'1231','13', true, false])


//Objects
type forObj2 ={
  id:number | string,
  name:string,
  surname:string
}

interface forObj3 { 
  id:number,
  name:string,
  surname:string,
  isStudent?: boolean| string
}

type forObj4 = Pick<forObj3, "id" | "name">
type forObj5 = Omit<forObj3, "surname" | "isStudent">

 
const person = ref<{id:number, name:string, surname:string}>({id:1,name:"Anvar", surname:"Jabborov"})
const obj2 = ref<forObj2>({id:'2', name:'Diyor', surname:'Usmanov'})
const obj3 = ref<forObj3>({id:3, name:'Umid', surname:'Ibragimov', isStudent:true})

const obj4 = ref<forObj4 | forObj5>({id:5,name:"Ibrokhiiim"})

//Functions
function sayHi(id:number,name:string):string{
 let user = `Use is ${name} with ${id} ID`
 return user
}

function sayBye<T>(age:T):void{
  console.log(age)
}

function saySeeYou(name:string):string{
  return `See you  dear ${name}`
}


class hUMAN<T>{
  name:T
  surname:T
  constructor(name:T, surname:T){
    this.name = name
    this.surname = surname
  }
}


class Car<T,U,B>{
  name:T
  model:T
  year:U
  isSelled?:B

  constructor(name:T, model:T, year:U, isSelled?:B){
    this.name = name
    this.model = model
    this.year = year
    this.isSelled = isSelled
  }

  welcome(){
    return `Welcome to ${this.name}!`
  }
}


const MERS  = new Car("Mercedes-Benz-Banana","Xr26", 2026, false)

console.log(MERS.welcome())


const Ibrokhiiim = new hUMAN('Ibrokhiiim', 'Muysinov')


obj4
Ibrokhiiim
saySeeYou('Elbek')
sayBye(22)
sayHi(1,'Kamronbeek')
obj3
obj2
person
mixArray
array2
array
fixedArray
elements
nickName
greating



// Pick/Omit

const data = {
  id:1,
  name:"Ibrokhiim",
  surname:"Muysinov"

}

// const {id, name} = data
const {id,name, ...existBody} = data
console.log(id)
console.log(existBody)


interface objectType{
  id:number | string,
  name:string,
  surname:string,
  isTeacher:boolean
}

type checkUser = Pick<objectType, "id" | "name" >

const user:checkUser = {id:12,name:'Ibrokhiiim'}
type checkStudent = Omit<objectType,"isTeacher">
const student:checkStudent = {id:1, name:"Ibrokhiim", surname:"Muysinov"}

console.log(student, user)

</script>

<template>
   <HelloWorld/>
   <h1>This is Vue + Vite + TS project</h1>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
