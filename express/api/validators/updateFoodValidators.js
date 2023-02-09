import Joi from 'joi'

const updateFoodValidator = Joi.object({
    "_id": Joi.string().required(),
    "name": Joi.string().min(1),
    "price": Joi.number().min(1),
    "description": Joi.string(),
    "file": Joi.required(),
    __v: Joi.number()
})
export default updateFoodValidator;