import Component from "vue-class-component";
import Vue from "vue";
import {Ret} from "../shared/common.model";

interface testDto {
    test: number;
    name: string;
}

export const ttv: testDto = {
    test: 123,
    name: "string"
}

export function tt() {
    console.log(JSON.stringify(ttv))
}

// vue示例
@Component
export default class MyComp extends Vue {
    msg: any = 1
    message: number = 1011

    mounted() {
        setInterval((): void => {
            this.msg = this.msg + 10
        }, 1000)
    }
}

new MyComp({
    el: "#app",
})

//jquery 示例
$("#id1").text('change to other text');

$.getJSON("data/data.json", function (result) {
    const value:Ret<any> = result;
    $("#id1").text(JSON.stringify(value.data));
})