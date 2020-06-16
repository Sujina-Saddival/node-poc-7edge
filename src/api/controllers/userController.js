const { User } = require('../../../models')

const index = (req, res) => {
    try {
        User.find().then((users) => {
            return res.status(200).json({message: 'User listed successfully!', success: true, users}) 
        })
        .catch((error) => {
            return res.status(402).json({ success: false, error }) 
        })
    } catch(error) {
        return res.status(442).json({ success: false, error }) 
    }
} 

const create = (req, res) => {
    const { firstName, email } = req.body;
    try {
        User.create({firstName, email}).then((user) => {
            return res.status(200).json({ message: 'User created successfully!', success: true, user }) 
        })
        .catch((error) => {
            return res.status(402).json({ success: false, error }) 
        })
    } catch(error) {
        return res.status(442).json({ success: false, error }) 
    }
}

module.exports = {
    index,
    create
}