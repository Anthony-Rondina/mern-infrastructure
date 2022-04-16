const User = require('../../models/User')

const create = async (req, res, next) => {
    try {
        const createdUser = await User.create(req.body)
        //res.ok relies on this 200 code
        res.status(200).json({
            user: {
                name: createdUser.name,
                email: createdUser.email
            }
        })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    create
};