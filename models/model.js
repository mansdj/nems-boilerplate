/**
 * Sample model for demonstrating custom models
 */
module.exports = (sequalize, DataTypes) => {
    const Model = sequalize.define('model', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: {
            type: DataTypes.STRING,
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        }
    })

    Model.associate = (models) => {
        models.belongsTo(models.datafeed)
    }

    return Model
}