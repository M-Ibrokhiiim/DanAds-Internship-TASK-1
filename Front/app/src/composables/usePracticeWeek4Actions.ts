import { ref } from "vue";

export default function useActions(){
   const count = ref<number>(0)
   
   const increaseCount = ()=> {
    count.value ++
   }
    
   const decreaseCount = ()=> {
    if(count.value !== 0){
        count.value --
    }

   }
   
   

   return{
        count,
        increaseCount,
        decreaseCount
   }

}