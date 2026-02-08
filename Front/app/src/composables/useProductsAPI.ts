import { ref } from 'vue';
export function useProducts() {
    interface Category{
        id:number,
        name:{RU:string,UZ:string,EN:string},
        parentId?:null | number,
        path?:string,
        image:string
    }

    const data = ref<null | Category[]>(null)

    
    const getProducts = async ()=>{
        try {
            const res= await fetch('https://api.muncha.uz/api/products/v1/categories/tree')
            const arr:Category[] = await res.json()
            
            data.value = arr
        } catch (error) {
            console.log(error)
        }
    }
    
    return{
        getProducts,
        data
    }

}
