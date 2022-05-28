/**
 * Initializing Sequelize here
 * We have to call sync() method in server.js
 */

import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";
import { employee } from "./employee.models.js";
import { course } from "./courses.models.js";
import { user_courses } from "./user_courses.models.js";
import { events } from "./events.models.js";
import { topic } from "./topic.models.js";

export const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = employee(sequelize, Sequelize);
db.course = course(sequelize, Sequelize);
db.events = events(sequelize, Sequelize);
db.userCourse = user_courses(sequelize, Sequelize, db.employee, db.course);
db.topic = topic(sequelize, Sequelize, db.course);

export default db;
