import Joi from 'joi'

const updateDrinkValidator = Joi.object({
    "_id": Joi.string().required(),
    "name": Joi.string().min(1),
    "price": Joi.number().min(1),
    "description": Joi.string(),
    "file": Joi.required(),
    __v: Joi.number()
})
export default updateDrinkValidator;