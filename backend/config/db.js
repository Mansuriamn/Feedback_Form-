const mongoose = require("mongoose");

const ConnectDB=async ()=>{
         console.log(`${process.env.MONGO_URL}/${process.env.DB_NAME}`)
   try{
      await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`);
      console.log("Database connected");
   }
   catch(error){
      console.log(error);
      process.exit(1);
   }
}
module.exports=ConnectDB