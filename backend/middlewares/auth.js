import jwt from 'jsonwebtoken'
export const verifyToken = async (req, res, next) => {
    try {
        let token = req.header('authorization')
        if (!token) {
            res.status(500).json({
                status: 'failed',
                message: 'you are not authorized'


            })
        }
        if (token.startsWith('Bearer')) {
            token = token.slice(7, token.length).trimLeft()
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        next()



    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: error.message

        })
    }
}