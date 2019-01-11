const db = require('../models');

module.exports = function(app){
    
    // GET Request to load burger data from database
    app.get('/', async (req,res)=>{
        const data = await db.burgers.findAll({});
        // console.log(data);
        res.render("index",{burgers:data});
    });
    
    // POST Request to add new burger
    app.post('/', async (req,res)=>{
        const newName = req.body.name;
        const eaten = false;
        // console.log(newName,eaten);
        const data = await db.burgers.create({
          name: newName,
          eaten: eaten
        });
        
        res.redirect('/');
    });
    
    
    // PUT Request to update burger state
    app.put('/api/:id', async (req,res)=>{
        const updateId = req.params.id;
        // console.log(req.body.name);
        const newEatenState = req.body.eaten;
        const eatenBy = req.body.name;

        console.log(`updating eaten state at id ${updateId}`);
        
        await db.burgers.update(
            {
                eaten:newEatenState,
                eatenBy: eatenBy
            },
            {
                where:{
                    id:updateId
                }
            });
            
        res.redirect('/');
    });
    
    
    // DELETE Request to delte burger from database
    app.delete('/api/:id', async (req,res)=>{
        const deleteId = req.params.id;
        console.log(`deleting at id ${deleteId}`);
        const data = await db.burgers.destroy({
            where:{
                id:deleteId
            }
        });
        res.redirect('/');
    })
    
    
};