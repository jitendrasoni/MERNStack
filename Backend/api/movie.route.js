
// this code file will contains routes that different people can go to.

import express from 'express'                                    

 
const router = express.Router()                                 

router.route('/').get((req,res) => res.send('hello world'))     

 
export default router