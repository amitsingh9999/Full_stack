const fr = require('fs');

fs.rmdir("mydir",(err)=>{
    if(err) 
        console.log(err);
    console.log("Directory deleted successfully");
});