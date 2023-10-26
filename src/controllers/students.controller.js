import UserModel from "../models/Users.model.js"

class StudentsController{

    async createStudent(req, res, next){
        try {
            const { firstName, lastName, Course, NumberMat, NumberPhone, NumberDoc } = req.body
            console.log(req.body)

            const dataUser = {
                firstName: firstName,
                lastName: lastName,
                Course: Course,
                NumberMat: NumberMat,
                NumberPhone: NumberPhone,
                NumberDoc: NumberDoc
            }

            // ? save in database
            const isSaved = await UserModel.create(dataUser)
            console.log(isSaved)

            isSaved != null 
            ? res.status(200).json({ state: true, message: "success!" }) 
            : res.status(500).json({ state: false, message: "internal error" })
        
        } catch (error) {
            next()
            throw new Error(error)
        }
    }

    async getStudent(req, res, next){
        try {
            const responseServer = await UserModel.find()

            responseServer != null 
                ? res.status(200).json({ status: true, data: responseServer })
                : res.status(404).json({ status: false, message: "not found"})

        } catch (error) {
            next()
            throw new Error(error)
        }
    }   
}

export default StudentsController