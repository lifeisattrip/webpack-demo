import {ttv} from './index'
import Vue from 'vue'
import Component from 'vue-class-component'

function hello(value:any){
    console.log("hello, this is Cynthia !");
    console.log(JSON.stringify(value));
}

hello(ttv)

@Component
export default class MyComp extends Vue {
    msg: any = 1
    message:number = 1011
    mounted() {
        setInterval((): void =>{
            this.msg = this.msg+10
        },1000)
    }
}

 new MyComp({
     el: "#app",
})


