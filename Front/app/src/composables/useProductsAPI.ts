import { ref } from 'vue';
export function useProducts() {
    const loading =ref<boolean  >(false)
    interface Category{
        id:number,
        name:{RU:string,UZ:string,EN:string},
        parentId?:null | number,
        path?:string,
        image:string
    }

    const data = ref<null | Category[]>(null)

    
    const getProducts = async ()=>{
        loading.value = true
        try {
            
            const res= await fetch('https://api.muncha.uz/api/products/v1/categories/tree')
            const arr:Category[] = await res.json()
            
            data.value = arr
            loading.value = false
        } catch (error) {
            console.log(error)
        }
    }
    

    return{
        loading,
        getProducts,
        data
    }

}
