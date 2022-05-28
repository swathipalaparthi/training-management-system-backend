import DataTypes from "sequelize";

export const employee = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    empId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    empName: {
      type: Sequelize.STRING,
    },
    designation: {
      type: Sequelize.STRING,
    },
    joiningDate: {
      type: DataTypes.DATE,
    },
    email: {
      type: Sequelize.INTEGER,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return Employee;
};
