import express,{Application} from "express"

const server: Application = express()

server.get("/book",(req,res)=>{
  res.send([{'id':1,'naem':'ภาษไทย ป.2'}])
})

export default server