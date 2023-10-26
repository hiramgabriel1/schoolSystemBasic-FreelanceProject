import { Router } from "express";
import StudentsController from "../controllers/students.controller.js";

const instanceStudentController = new StudentsController()
const requests = Router()
const path="/api"

// TODO: get a student endpoint
requests.get(`${path}/students`, (req, res)=> {
    instanceStudentController.getStudent(req, res)
})

// TODO: create a new student endpoint
requests.post(`${path}/students/new`, (req, res)=> {
    instanceStudentController.createStudent(req, res)
})

export default requests