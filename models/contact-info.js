module.exports = (sequelize, DataTypes) => {
    const ContactInfo = sequelize.define("ContactInfo", {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true
        },
        message: {
            type: DataTypes.TEXT
        }
    });

    return ContactInfo;
};