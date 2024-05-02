import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { body } from 'express-validator';
import { AddDoctorDetail, SignUp, UpdateDoctorDetail, appointmentList, doctorAppointment, doctorConsult, doctorProfile, list, remove, signIn, update, } from '../controller/doctor.controller.js';

const router = express.Router();

router.post("/signUp",
    body("email", "invalid email").isEmail().notEmpty(),
    body("password", "invalid password").notEmpty(),
    body("doctorName", "invalid doctorName").notEmpty(),
    body("contactNumber", "invalid contactNumber").notEmpty(),
    body("registrationNumber", "invalid registrationNumber").notEmpty(),
    SignUp);

router.post("/signIn",
    body("email", "invalid email").isEmail().notEmpty(),
    body("password", "invalid password").notEmpty(),
    signIn);

router.put("/updateProfile",
    body("email", "invalid email").isEmail().notEmpty(),
    body("password", "invalid password").notEmpty(),
    body("doctorName", "invalid name").notEmpty(),
    body("contactNumber", "invalid contactNumber").notEmpty(),
    update);

router.get("/DoctorList", list);

router.delete("/remove", body("email", "invalid email").isEmail().notEmpty(), remove);


router.post("/addDoctordetail",
    body("qualification", "invalid qualification").notEmpty(),
    body("experience", "invalid experience").notEmpty(),
    body("gender", "invalid gender").notEmpty(),
    body("language", "invalid language").notEmpty(),
    body("clinicAddress", "invalid clinicAddress").notEmpty(),
    body("doctorimage", "invalid doctorimage").notEmpty(),
    body("specialization", "invalid specialization").notEmpty(),
    body("doctorId", "invalid doctorId").notEmpty(),
    AddDoctorDetail);

router.get("/doctorProfile", body("id", "invalid id").notEmpty(), doctorProfile);

router.put("/updateDoctordetail",
    body("id", "invalid id").notEmpty(),
    body("qualification", "invalid qualification").notEmpty(),
    body("experience", "invalid experience").notEmpty(),
    body("gender", "invalid gender").notEmpty(),
    body("language", "invalid language").notEmpty(),
    body("clinicAddress", "invalid clinicAddress").notEmpty(),
    body("doctorimage", "invalid doctorimage").notEmpty(),
    body("specialization", "invalid specialization").notEmpty(),
    body("doctorId", "invalid doctorId").notEmpty(),
    UpdateDoctorDetail);

router.post("/doctorAppointment", doctorAppointment);

router.get("/appointmentList", appointmentList);






router.get("/doctorconsult",
    // body("qualification", "invalid qualification").notEmpty(),
    // body("experience", "invalid experience").notEmpty(),
    // body("gender", "invalid gender").notEmpty(),
    // body("language", "invalid language").notEmpty(),
    // body("clinicAddress", "invalid clinicAddress").notEmpty(),
    // body("doctorimage", "invalid doctorimage").notEmpty(),
    // body("specialization", "invalid specialization").notEmpty(),
    // body("doctorId", "invalid doctorId").notEmpty(),
    doctorConsult);
    

export default router;