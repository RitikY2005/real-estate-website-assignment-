
function cleanObject(obj){
    // if array recursilvely call the same function the return the cleaned array with no nulls and undefineded stuff 
    if(Array.isArray(obj)){
        return obj.map((ele)=> cleanObject(ele)).filter((item)=> item!==null && item!=undefined); 
    }

    // most important 
    // if it is object then we need to make sure that it's values are not empty 
    if(typeof obj==="object" && obj!==null){ // null is also a object be careful

        const newObj={};
        
        for(const key in obj){
            const value=cleanObject(obj[key]); // will return the cleaned version of the values since values can be array and they might contain empty or null values 

            // value can now be either a valid value or empty or null or undefined 
            if(value!=="" && value!==null && value!==undefined){
                newObj[key]=value;
            }
        }

        return newObj;

    }

    return obj;
};

export default cleanObject;