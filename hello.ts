interface testDto{
    test:number;
    name:string;
}
export const ttv:testDto={
    test:123,
    name:"string"
}

export function tt(){
    console.log(JSON.stringify(ttv))
}
