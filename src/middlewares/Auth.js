const User = require('../models/User');

module.exports = {
    private: async (req, res, next) => {
        // Se não tem token
        if(!req.query.token && !req.body.token) {
            res.json({notallowed: true});
            return;
        }
        // Se recebeu do token
        let token = '';
        if(req.query.token) {
            token = req.query.token;
        }
        // Se recebeu do body
        if(req.body.token) {
            token = req.body.token;
        }
        // Se token é igual vazio
        if(token == '') {
            res.json({notallowed : true});
            return;
        }
        // Acha usuario baseado no token
        const user = await User.findOne({token});
        // Se não achou usuário
        if(!user) {
            res.json({notallowed : true});
            return;
        }
        
        next();
    }
};