const express = require('express');

const app = express();
const PORT = process.env.PORT || 3042;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/api-routes')(app);

const db = require('./models/index.js');

async function startServer(){
    await db.sequelize.sync({force:true});
    await db.burgers.create({
        name:'Bacon Double Cheeseburger',
        eaten:false
    })
    return app.listen(PORT,()=>console.log(`Serving fools on port ${PORT}`));
    
}

startServer();