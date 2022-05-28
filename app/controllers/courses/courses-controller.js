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

    return userCourse
      .findAll({
        attributes: ["courseId", "status", "id"],
        where: { empId: Number(empId) },
      })
      .then((value) => {
        let data = [];
        value.map((each) => {
          data.push(each.courseId);
        });
        return courses
          .findAll({
            attributes: ["courseId", "courseName", "description", "courseImg"],
            where: { courseId: data },
          })
          .then((response) => {
            let arr = [];
            value.map((each) => {
              response.forEach((element) => {
                if (each.courseId === element.courseId) {
                  arr.push({ ...element.dataValues, status: each.status });
                }
              });
            });
            return res.status(200).send({ success: true, data: arr });
          })
          .catch((error) => {
            return res.status(400).send({ success: false, data: error });
          });
      })
      .catch((error) => res.status(400).send({ success: false, data: error }));
  } catch (err) {
    res.status(400).send({ status: false, data: err });
  }
};
