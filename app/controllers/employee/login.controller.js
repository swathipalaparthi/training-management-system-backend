import db from "../../models/index.js";
import GlobalMessages from "../utils/global-message.js";

const employee = db.employee;
export const login = (req, res) => {
  try {
    const body = req.body;
    console.log("body", body);

    return employee
      .findOne({
        attributes: ["empId", "empName", "designation", "joiningDate"],
        where: { email: body.email, password: body.password },
      })
      .then((response) => {
        console.log("response", response);
        if (!response) {
          return res.status(400).send({
            status: false,
            data: GlobalMessages.USER_PASSWORD_INCORRECT,
          });
        }
        return res.status(200).send({ status: true, data: response });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send({
          status: false,
          data: error,
        });
      });
  } catch (err) {
    res.status(400).send({ status: false, data: err });
  }
};

export const getAllUsers = (req, res) => {
  return employee
    .findAll({
      attributes: ["empId", "empName", "designation", "joiningDate"],
    })
    .then((response) => {
      res.status(200).send({ success: true, data: response });
    })
    .catch((error) => res.status(400).send({ success: false, data: error }));
};

export default { login, getAllUsers };
