function isStartLessThanEnd(start,end){
    return start<=end;
}

function isInputInRange(start,end){
    return start>=1&&start<=1000&&end>=1&&end<=1000;
}

function createMulticationTable(start,end,isStartLessThanEnd,isOutOfRange){
    if(!isStartLessThanEnd(start,end)){
        return null;
    }
    if(!isOutOfRange(start,end)){
        return "out of range";
    }
    var table="";
    
    for(let rows=1,i=start;rows<=end-start+1;rows++,i++){
        for(let j=start;j<=i;j++){
            table+=j+"×"+i+"="+i*j;
            table+="\t";
        }
            table+="\n";
    }
    return table;
}

module.exports={
    isStartLessThanEnd,
    isInputInRange,
    createMulticationTable
};