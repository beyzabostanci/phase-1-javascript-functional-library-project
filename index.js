const myEach = (collection, callback)=> {
    const objAr = Object.values(collection);
    for(let i=0; i<objAr.length; i++){
        callback(objAr[i], i, collection)
    }
    return collection
}

const myMap = (collection, callback) => {
    const objAr = Object.values(collection);
    const newAr = [];
    for(const elem of objAr){
        newAr.push(callback(elem))
    }
    return newAr
}

const myReduce = (collection, callback, acc) => {
    let init = acc;
    myEach(collection, (elem, i, coll)=>{
        if(init===undefined){
            init = elem;
        }
        else{
            init= callback (init, elem, i, coll)
        }
    });
    return init;
}

const myFind = (collection, predicate) => {
   return Object.values(collection).find(elem => predicate(elem))
}

const myFilter = (collection, predicate)=>{
    return Object.values(collection).filter(elem => predicate(elem))
}

const mySize = (collection)=>{
    return Object.values(collection).length
}

const myFirst = (array, n) => {
   if(n){
    return array.slice(0,n)
   }else{
    return array[0]
   }
}

const myLast = (array, n) => {
    if(n){
        return array.slice(-n)
    }else{
        return array[array.length-1]
    }
}

const myKeys = (obj)=>{
    return Object.keys(obj)
}

const myValues = (obj)=>{
    return Object.values(obj)
}