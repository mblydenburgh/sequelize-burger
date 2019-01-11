module.exports = function(sequelize,DataTypes){
    const Burger = sequelize.define('burgers',{
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1,255],
            }
        },
        eaten:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        eatenBy:{
            type: DataTypes.STRING,
        }
    });
    
    return Burger;
};