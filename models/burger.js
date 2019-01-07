module.exports = function(sequelize,DataTypes){
    const Burger = sequelize.define('burger',{
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1,50],
                isAlphanumeric: true
            }
        },
        eaten:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    
    return Burger;
}