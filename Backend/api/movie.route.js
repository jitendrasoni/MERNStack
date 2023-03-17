
// this code file will contains routes that different people can go to.

import express from 'express'                                       // needed middleware installed in package.json

 
const router = express.Router()                                     // get access to express router
 
// initial route for testing, in following line, that will send 'hello world'
//router.route('/').get((req,res) => res.send('hello world'))       // test route to confirm everything is working

router.route('/').get((req,res) => res.send('hello world'))                // first route available in project from 
                                                                    // MoviesController class and apiGetMovies method
                                                                    // will be called when there is a request for the URL
                                                                    // localhost:5050/api/v1/movies

                                                                    // next route available in project which will handle
                                                                    // post, put and delete http requests
                                                                    // post = add new review so call apiPostReview
                                                                    // put = edit existing review so call apiUpdateReview

 
export default router