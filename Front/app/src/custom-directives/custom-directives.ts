import type { Directive } from "vue";

export const  changeBG: Directive = {
    mounted(el) {
        el.style.background = "aqua"
        el.style.borderRadius = "100px"
        el.style.padding = "20px"
    }
}

export const changeContent: Directive = {
    mounted(el,binding) {
        const { value } = binding
        if (value) {
            el.innerHTML = `<p>Content of this section changed due to V-CHANGECONTENT directive got TRUE value!</p>`
        }
    }
}

export const buttonDesign:Directive = {
    mounted(el) {
        el.style.border = '2px solid black'
    }
}