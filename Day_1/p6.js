const fs=require("fs");

const write=()=>{
    //const data="i am a writer"
fs.writeFile("./mkdir/data.text","utf8",data,(err)=>{
    if(err)
        console.log("error writing",err);
    else
        console.log("File written successfully");
})

}
// console.log("Before reading")
write("Amit");
// console.log("After reading")