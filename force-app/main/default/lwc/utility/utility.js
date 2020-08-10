/*
    ECMA6,7,8
    simple interest=pri ,t,r

*/ 
const si=(p,t,r)=>{
    if(p && t && r){
        const simpleint=(p*r*t)/100;
        return simpleint;
    }
    return 0;
}

const add=(n1,n2)=>{
    return n1+n2;
}

export{si,add}
