import { ref } from 'vue'

// TS
interface Items{
    id:number,
    name:string|undefined,
    createdAt?:Date
}

type Input = string |undefined

const input = ref<Input>()
const listTasks = ref<Items[]>([])

export default function useTODO(){
    const removeTask = (id:number):void =>{listTasks.value = listTasks.value.filter((item:Items)=>item.id !==id)}

    const addTask = (task:string|undefined) =>{
        const isExist = listTasks.value.some((item:Items) =>{
            return item.name?.trim() === task?.trim()
        })

        if(isExist){
            return input.value =''
        }   

        if(task === undefined) return

        const newTask =  ref<Items>({id:listTasks.value.length+1, name:task})

        listTasks.value.push(newTask.value)
        listTasks.value.reverse()
        input.value = undefined
    }

    return{
        input,
        listTasks,
        removeTask,
        addTask
    }
}