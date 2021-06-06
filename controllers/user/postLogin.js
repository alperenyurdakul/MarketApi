const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/userSchema');


module.exports = async(req,res) => {
    const user = await User.findOne({email:req.body.email})
    const secret = process.env.secret;
    if(!user) {
        return res.status(400).send('Kullanıcı bulunamadı');
    }

    if(user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user._id,
                isAdmin: user.isAdmin
            },
            secret,
        )
       
        res.status(200).send({user: user.email , token: token}) 
    } else {
       res.status(400).send('Şifre Başarılı!');
    }

}