
import express from 'express'                               
import cors from 'cors'                                     
import movies from './api/movie.route.js'

const app = express()                                   

app.use(cors())                                             
app.use(express.json())                                     
console.log('001 is')
app.use("/api/v1/movies", movies)                         
app.use('*', (req,res)=>{                                   
     res.status(404).json(
          {error: "requested path not found"})            
})
console.log('002 is')
export default app     
