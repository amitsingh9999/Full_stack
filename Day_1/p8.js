const fs=require("fs");

fs.unlink("./mkdir/data.txt",(err) => {
      if(err) 
        console.log("err",err);
    console.log("File unlinked successfully");
})