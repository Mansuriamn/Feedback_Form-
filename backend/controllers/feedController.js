const feedbackShema=require("../model/feedback");

const InsertData=async (req,res)=>{
         const {name,email,message}=req.body;
         try{
             const data=await feedbackShema.create({name,email,message});
             res.status(201).json(data);
         }
         catch(err){
                  console.error(err);
                  res.status(500).json({error:"Internal server error"});
         }
}
module.exports=InsertData;