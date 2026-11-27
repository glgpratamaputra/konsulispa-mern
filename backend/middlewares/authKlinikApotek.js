import jwt from 'jsonwebtoken'

// klinik apotek authentication middleware
const authKlinikApotek = async (req,res,next) => {
    try{

        const {ktoken} = req.headers
        if (!ktoken){
            return res.json({success:false,message:'Not Authorized Login Again'})
        }
        const token_decode = jwt.verify(ktoken,process.env.JWT_SECRET)
        req.placeId = token_decode.id
        next()

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export default authKlinikApotek