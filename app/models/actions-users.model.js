import DataTypes from "sequelize";

export const actionsUsers = (sequelize, Sequelize, action, user) => {
    const ActionUsers = sequelize.define("action-users", {
        actionId: {
            type: Sequelize.INTEGER,
        },
        assignedTo: {
            type: Sequelize.STRING,
        },
        assignedBy: {
            type: Sequelize.STRING,
        },
        assignedTime: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('now()'),
        }
    },
        { timestamps: false }
    );

    ActionUsers.belongsTo(action, { foreignKey: 'actionId', onDelete: 'cascade' });
    ActionUsers.belongsTo(user, { foreignKey: 'assignedTo', as: 'assignedUser' });
    ActionUsers.belongsTo(user, { foreignKey: 'assignedBy' });

    return ActionUsers
};
