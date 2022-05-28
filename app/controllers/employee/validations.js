import joi from "joi"
const Joi = joi

export const userList = Joi.object({
    offset: Joi.number().optional().default(0),
    limit: Joi.number().optional().default(10),
    search: Joi.string().allow("").optional().default(''),
    filterData: Joi.object({
        roles: Joi.array().items(Joi.number()).optional().default([]),
    }).default({}),
    sorting: Joi.object({
        column: Joi.string().optional().default('createdAt'),
        order: Joi.string().valid("ASC", "DESC").optional().default('DESC'),
    }).default({
        column: "createdAt", order: "DESC"
    }),
})

export const userUpdate = Joi.object({
    userId: Joi.string().required(),
    roles: Joi.array().items(Joi.object({
        roleId: Joi.number().required(),
        groupIds: Joi.array().items(Joi.string().required()).min(1).required(),
    }).required()).min(1).required(),
})