import DataTypes from "sequelize";

export const course = (sequelize, Sequelize) => {
  const Course = sequelize.define("course", {
    courseId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    courseName: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    courseLevel: {
      type: Sequelize.INTEGER,
    },
    courseImg: {
      type: DataTypes.BLOB,
    },
  });

  return Course;
};
