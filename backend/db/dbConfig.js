import { Sequelize } from "sequelize";

const sequelize = new Sequelize("TestingAyurveda", "root", "root", {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+05:30'
});

sequelize.authenticate()
    .then(() => {
        console.log("Datbase connected....");
    }).catch(err => {
        console.log("Database Connection Failed..");
        console.log(err);
    });

export default sequelize;
