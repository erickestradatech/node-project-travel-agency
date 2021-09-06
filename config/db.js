import Sequelize from 'sequelize';

const db = new Sequelize('bcbjuhfye6gwqsvqdfr3', 'u7qzo3pex0mhb0o0', 'lNOJJBfJYXbPuJahWRQ3', {
   host: 'bcbjuhfye6gwqsvqdfr3-mysql.services.clever-cloud.com',
   port: 3306,
   dialect: 'mysql',
   define: {
      timestamps: false,
   },
   pool: {
      max: 5,
      min: 0,
      acquire: 3000,
      idle: 10000,
   },
   operatorAliases: false,
});

export default db;
