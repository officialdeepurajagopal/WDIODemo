module.exports = {
    returnTag:function(){
        let value;
        let newArray = process.argv;
            for(let i=0; i<newArray.length; i++){
                if(newArray[i].startsWith('TAG')){
                    value = newArray[i].toString();
                }
            }
            if(value != undefined){
                return value.toString().substring(4, value.length)
            }
            else{
                return ''
            }   
    }
}