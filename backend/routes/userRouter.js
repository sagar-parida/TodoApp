const router = require('express').Router()
const User = require('../model/User')

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        let user = await User.find({ email })
        user = user.length ? user[0] : null
        if (!user) {
            throw new Error("No account found with this email")
        } else {
            if (user.password === password) {
                res.json({
                    type: 'success',
                    message: 'Logged in successfully',
                    userId: user._id
                })
            } else {
                throw new Error("Wrong password. Check again")
            }
        }
    } catch (error) {
        res.status(400).json({
            type: 'error',
            message: error.message
        })
    }
})

router.post('/signup', async (req, res) => {
    try {
        const user = new User(req.body)
        const isEmailvalid = /@/.test(user.email)
        if (!isEmailvalid) {
            throw new Error("Please enter a valid email address")
        }
        const findUserByEmail = await User.find({ email: user.email })
        if (findUserByEmail.length) {
            throw new Error("This email is already linked with another user.")
        }
        await user.save()
        res.json({ type: "success", message: "Account Created Successfully" })
    } catch (error) {
        res.status(400).json({
            type: "error", message: error.message
        })
    }
})

module.exports = router