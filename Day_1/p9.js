const fs = require('fs');

fs.mkdir('mkdir',(err)=>{

    if(err) throw err;
    else
    console.log("Directory created")

})