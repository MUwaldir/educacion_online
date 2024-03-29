import { Router } from "express";
import  createCourse  from "../controllers/createCurso.controller.js";
import { getCourses } from "../controllers/getCourses.controller.js";
import { createLesson } from "../controllers/createLesson.controller.js";
import getCursoDetail from "../controllers/curso/getCursoDetail.controller.js";
import deleteCurso from "../controllers/curso/deleteCurso.controller.js";
import updateCurso from "../controllers/curso/updateCurso.controller.js";
const router = Router();
router.post("/createcurso", createCourse);
router.get("/getcursos", getCourses);
router.get("/getcurso/:id", getCursoDetail);
router.delete("/deletecurso/:id", deleteCurso);
router.put("/updatecurso", updateCurso);



// lesson
router.get("/createlesson", createLesson);

export default router;
