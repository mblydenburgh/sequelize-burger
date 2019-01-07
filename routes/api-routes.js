const db = require('../models');

module.exports = function(app){
    
    app.get('/', async (req,res)=>{
        const data = await db.burgers.findAll({});
        // console.log(data);
        res.render("index",{burgers:data});
    });
    
};