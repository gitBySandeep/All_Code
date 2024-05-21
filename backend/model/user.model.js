import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcyrpt from "bcryptjs";
import Order from "./order.model.js";
// Import the User model assuming it's defined in "user.model.js"

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: String,
        trim: true,
        set: function(password){
            let saltKey = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(password,saltKey);
        }
    },
    contactNumber: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },
    gender: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    pincode: {
        type: DataTypes.STRING,
    }
});

User.checkPassword = (originalPassword, encryptedPassword) => {
    console.log("check Password called....");
    return bcyrpt.compareSync(originalPassword, encryptedPassword);
}

User.hasMany(Order, { foreignKey: 'userId', targetKey: 'id' }); // A user can have many orders
Order.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' }); // An order belongs to a user

sequelize.sync()
    .then(() => {
        console.log("user table created....")
    })
    .catch((err) => {
        console.log("user something wrong....")
        console.log(err);
    });


export default User;
