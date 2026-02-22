import { ref } from "vue"

export const isHomeClicked = ref<boolean>(true)   
export const isFavouritedClicked = ref<boolean>(false)
export const isLocationClicked = ref<boolean>(false)
export const isSettingClicked = ref<boolean>(false)

export function useClickedNavigator(){
   

    function Navigator(id:number){

        if(id ===1){
            isHomeClicked.value = true
            isFavouritedClicked.value = false
            isLocationClicked.value = false
            isSettingClicked.value = false
        }else if(id === 2) {
            isHomeClicked.value = false
            isFavouritedClicked.value = true
            isLocationClicked.value = false
            isSettingClicked.value = false
        }else if (id === 3){
            isHomeClicked.value = false
            isFavouritedClicked.value = false
            isLocationClicked.value = true
            isSettingClicked.value = false
        }else if (id === 4) {
            isHomeClicked.value = false
            isFavouritedClicked.value = false
            isLocationClicked.value = false
            isSettingClicked.value = true
        }
    }

    return{
        Navigator,
        isHomeClicked,
        isFavouritedClicked,
        isLocationClicked,
        isSettingClicked

    }
}