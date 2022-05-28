import DataTypes from "sequelize";

export const user_courses = (sequelize, Sequelize, employee, course) => {
  const UserCourses = sequelize.define(
    "user_courses",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      status: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      empId: {
        // primaryKey: true,
        type: Sequelize.INTEGER,
      },
      courseId: {
        // primaryKey: true,
        type: Sequelize.INTEGER,
      },
    },
    { timestamps: false }
  );

  UserCourses.belongsTo(employee, {
    foreignKey: "empId",
  });
  UserCourses.belongsTo(course, {
    foreignKey: "courseId",
  });

  return UserCourses;
};
