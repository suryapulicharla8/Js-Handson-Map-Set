
// Q 1
let s="abcdefabcef";
        let set=new Set();
        for(let i=0;i < s.length;i++){
            set.add(s[i])
        }
        let res=" ";
        for(let ch of set){
            res=res+ch;
        }
        console.log(res);
    
// Q 2
let sum="abcdefabcefabcdef";
let map=new Map();
for(let i=0;i<sum.length;i++){
    if(map.has(sum[i])){
        let value=map.get(sum[i])
        map.set(sum[i],value+1)
    }else{
        map.set(sum[i],1)
    }
}for(let [k,v] of map){
    console.log(k+" = "+v)
};