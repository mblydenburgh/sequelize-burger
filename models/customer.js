module.exports = function(sequelize,DataTypes){
    const Customer = sequelize.define('customer',{
        name:{
            type: DataTypes.STRING
        },
    });
    
    Customer.associate = function(models){
        Customer.belongsTo(models.burgers,{
            foreignKey:{
                allowNull:false
            },
            onDelete:'cascade'
        },
        );
    };
    
    return Customer;
};