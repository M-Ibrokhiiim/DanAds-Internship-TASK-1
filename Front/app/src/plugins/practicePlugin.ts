import GlobalCompToApp from "./GlobalCompToApp.vue"
import { changeBG, changeContent } from "../custom-directives/custom-directives"


export default{
   install(app:any){
    app.provide('message','This Week4 part of Website used to implement a custom Plugin')
    app.component('GlobalComp', GlobalCompToApp)
    app.directive('bgchange',changeBG)
    app.directive('changecontent',changeContent)
}
}