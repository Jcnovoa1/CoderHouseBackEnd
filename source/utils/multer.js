const multer = require('multer')
const {dirname} = require('path')



const storage = multer.diskStorage({
    destination: function(request, file, cb){
        cb(null, `${dirname(__dirname)}/public/uploads`)
    },
    filename: function(request, file, cb){
        console.log('file: ', file)
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})


const uploader = multer({
    storage, 
    onError: function(err, next){
        console.log(err)
        next()
    }
})





module.exports = {uploader}
