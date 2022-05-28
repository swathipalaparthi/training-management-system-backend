// import db from "../../models/index.js";
// import { userList, userUpdate } from "./validations.js";
// import {
//     validateJoiSchema,
// } from "../utils/utils.js";
// const Op = db.Sequelize.Op;

// export const getUserList = async (req, res) => {
//     try {
//         const { offset, limit, search, filterData, sorting } = validateJoiSchema(userList, req.body)
//         const { column, order } = sorting
//         const sortingColumns = {
//             userId: [["userId", order]],
//             displayName: [["displayName", order]],
//             email: [["email", order]],
//             roleName: [[db.role, "roleName", order]],
//             createdAt: [["createdAt", order]],
//         }
//         const whereCondition = {}

//         if (search.length) {
//             whereCondition.displayName = { [Op.iLike]: `%${search}%` }
//         }
//         // if (filterData.hasOwnProperty("roles")) {
//         //     whereCondition.userRoleId = filterData.roles
//         // }

//         const [{ rows, count }, roles] = await Promise.all([db.user.findAndCountAll({
//             attributes: [
//                 'userId',
//                 'userName',
//                 'displayName',
//                 'email',
//                 'userRoleId',
//                 'mobile',
//                 'createdAt'
//             ],
//             include: [
//                 {
//                     model: db.role,
//                 },
//                 {
//                     model: db.userRoles,
//                     where: (filterData.roles.length ? { roleId: filterData.roles } : true)
//                     ,
//                     include: [{
//                         model: db.mstrGroups
//                     },
//                     {
//                         model: db.role
//                     }]
//                 },
//             ],
//             distinct: true,
//             offset: offset,
//             limit: limit,
//             order: sortingColumns[column],
//             where: whereCondition,
//         }),
//         getAllRolesList()
//         ])

//         return res.status(200).send({
//             success: true,
//             data: {
//                 list: rows,
//                 totalItems: count,
//                 filterInfo: { roles }
//             }
//         });
//     } catch (err) {
//         console.log("err", err);
//         res.status(400).send({ status: false, data: err });
//     }
// };

// export const massageGroupObjList = (grpObjList) => {
//     return grpObjList.map(obj => {
//         return obj.mstrGroup.dataValues
//     })
// }

// export const updateUserRole = async (req, res) => {
//     try {
//         const { userId, roles } = validateJoiSchema(userUpdate, req.body)
//         console.log(roles)
//         const [rolesList, groupsList] = await Promise.all([
//             getAllRolesList(),
//             getAllGroupsList()
//         ])
//         // const groupIdsList = groupsList.rows.map(obj => obj.groupId)
//         // console.log(groupIdsList)
//         // if (!rolesList.some(role => role.roleId === roleId)) {
//         //     console.log("Invalid RoleId");
//         //     return res.status(400).send({ status: false, data: "Invalid RoleId" });
//         // }
//         // if (!userGroups.every(grpId => groupIdsList.includes(grpId))) {
//         //     console.log("Invalid groupId");
//         //     return res.status(400).send({ status: false, data: "Invalid groupId" });
//         // }

//         // const result = await db.user.update({ userRoleId: roleId },
//         //     {
//         //         where: {
//         //             userId: userId,
//         //         }
//         //     })
//         // await db.userGroups.destroy({ // delete the user groups
//         //     where: {
//         //         userId: userId,
//         //     }
//         // })
//         await db.userRoles.destroy({ // delete the user groups
//             where: {
//                 userId: userId,
//             }
//         })
//         let userData = []

//         await db.userRoles.bulkCreate(userRoles(userId, roles))
//         return res.status(200).send({
//             success: true,
//             message: "User updated successfully",
//         });
//     } catch (err) {
//         console.log("err", err);
//         res.status(400).send({ status: false, data: err });
//     }
// }
// function userRoles(userId, roles) {
//     let userData = []
//     roles.map(obj => { // add new groups of user
//         return (obj.groupIds.forEach((grp) => {
//             userData.push({
//                 roleId: obj.roleId, groupId: grp, userId: userId
//             })
//         })
//         )
//     })
//     return userData
// }
// export const getGroupsListAPI = async (req, res) => {
//     try {
//         const { rows, count } = await db.masterBusinessUnit.findAndCountAll({
//             attributes: ["businessUnitId", "businessUnitName", "businessUnitCode"],
//             distinct: true,
//             include: {
//                 model: db.mstrGroups,
//                 attributes: ["groupId", "groupName", "groupKey"],
//             }
//         })

//         return res.status(200).send({
//             success: true,
//             data: {
//                 list: rows,
//                 totalItems: count
//             }
//         });
//     } catch (err) {
//         console.log("err", err);
//         res.status(400).send({ status: false, data: err });
//     }
// };

// export const getAllRolesList = async () => {
//     const rolesList = await db.role.findAll()
//     return rolesList
// }

// export const getAllGroupsList = async () => {
//     const { rows, count } = await db.mstrGroups.findAndCountAll({
//         order: [["groupName", "ASC"]]
//     })
//     return { rows, count }
// }
