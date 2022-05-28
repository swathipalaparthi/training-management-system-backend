import DataTypes from "sequelize";

export const topic = (sequelize, Sequelize, course) => {
  const Topic = sequelize.define(
    "topic",
    {
      topicId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      topicName: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      topicLink: {
        type: Sequelize.STRING,
      },
      topicStatus: {
        type: DataTypes.ARRAY(Sequelize.STRING),
      },
      courseId: {
        type: Sequelize.INTEGER,
      },
    },
    { timestamps: false }
  );
  Topic.belongsTo(course, {
    foreignKey: "courseId",
  });

  return Topic;
};
