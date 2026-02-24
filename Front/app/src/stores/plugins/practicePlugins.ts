import type  {PiniaPluginContext} from 'pinia'

export const Plugin1 = (context: PiniaPluginContext) => {
    const { store } = context
    store.clearButton = () =>{
        alert('Clear button function is working across all stores!')
    }
}

export const Plugin2 = (context:PiniaPluginContext) => {
        const { store } = context
        store.sayHello = () =>{
            alert('Hello from Ibrokhiiim to all stores')
        }
}