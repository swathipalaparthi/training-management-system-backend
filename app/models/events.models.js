export const events = (sequelize, Sequelize) => {
  const Events = sequelize.define(
    "events",
    {
      eventsId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      eventsName: {
        type: Sequelize.STRING,
      },
      eventsLink: {
        type: Sequelize.STRING,
      },
      eventsTime: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );

  return Events;
};
