import GlobalCompToApp from "./GlobalCompToApp.vue"


export default{
   install(app:any){
    app.provide('message','This Week4 part of Website used to implement a custom Plugin')
    app.component('GlobalComp', GlobalCompToApp)
}
}