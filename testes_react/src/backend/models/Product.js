const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            price: DataTypes.DECIMAL(10, 2),
            amount: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'owner_id', as: 'owner' })
    }
}

module.exports = Product