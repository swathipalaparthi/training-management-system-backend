import db from "../../models/index.js";

const courses = db.course;
const userCourse = db.userCourse;

export const getAllCourses = (req, res) => {
  try {
    courses
      .findAll({
        attributes: ["courseId", "courseName", "description", "courseImg"],
      })
      .then((response) => {
        res.status(200).send({ success: true, data: response });
      })
      .catch((error) => res.status(400).send({ success: false, data: error }));
  } catch (err) {
    res.status(400).send({ status: false, data: err });
  }
};

export const getAssignedCourses = (req, res) => {
  try {
    const { empId } = req.params;
    console.log(empId);

    let value = [];
    userCourse
      .findAll({
        attributes: ["courseId", "courseStatus"],
        where: { empId: 1 },
      })
      .then((response) => {
        value = response;
      })
      .catch((error) => res.status(400).send({ success: false, data: error }));

    course
      .findAll({
        attributes: ["courseId", "courseName", "description", "courseImg"],
        where: { courseId: value },
      })
      .then((response) => {
        console.log(response);
        // res.status(200).send({ success: true, data: response });
      })
      .catch((error) => res.status(400).send({ success: false, data: error }));
  } catch (err) {
    res.status(400).send({ status: false, data: err });
  }
};
