const fs=require("fs");
data ="i am a singer"
fs.appendFile("./data.txt",data,(err)=>{
    if(err) 
        console.log(err);
    console.log("data appended");
});

//console.log("data appended")