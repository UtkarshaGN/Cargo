import multer from "multer"


//store img in database
const storage = multer.memoryStorage()
const upload = multer({storage})

export default upload