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
    const findedtodo =await todo.deleteOne({_id:id}) 
    console.log("findedtodo",findedtodo);
    res.send("deleted")
   } catch (error) {
    console.log("delet error",error);
    
   }
}
const changestste = async(req,res)=>{
    const id = req.body 
    console.log(id)
  
    const finde =await todo.findOne(id)
    finde.status=false
    finde.save()    
    
    res.send('sucsses')
}
   
module.exports={
    todoinput,
    viwetodo,
    deletetodo,
    changestste,
}