const todo = require('../model/todoschema')

const todoinput =async (req,res)=>{
    
    const {input }= req.body

    const addtodo = await new todo({
        input,
    })
    const savetodo = await addtodo.save()



    console.log("req",input);
    
    res.send("sucsses")

}
const viwetodo = async (req,res)=>{
    const alltodo = await todo.find()
    console.log("todo view ",alltodo);
    
    res.json({message:'complit',data:alltodo})
} 
const deletetodo = async(req,res)=>{
   try {
    console.log("parems ",req.body)
    const {id} = req.body
    console.log("id",id)
    const findedtodo =await todo.find() 
    const finddeliting =findedtodo.filter((item)=>item._id.toString()!==id)         
    console.log("finddeliting",finddeliting)
    res.send('sucsses')
   } catch (error) {
    console.log("delet error",error);
    
   }
//    res.end("out")
}
const changestste = async(req,res)=>{
    const id = req.body 
    console.log(id)
  
    const finde =await todo.findOne(id)
    finde.status=false
    finde.save()
  
    // console.log("finde", finde);

    // const changing =finde.status = false 
    // todo.push(changing)
    // console.log("changing",changing);
    
    
    res.send('sucsses')
}
   
module.exports={
    todoinput,
    viwetodo,
    deletetodo,
    changestste,
}