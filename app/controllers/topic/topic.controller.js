import db from "../../models/index.js";

const topic = db.topic;

export const getTopics = (req, res) => {
  try {
    const { courseId } = req.params;

    topic
      .findAll({
        attributes: ["topicName", "topicLink", "description", "topicStatus"],
        where: { courseId: courseId },
      })
      .then((response) => {
        if (!response) {
          return res.status(400).send({
            status: false,
            data: "No Topic for the course",
          });
        }
        return res.status(200).send({ status: true, data: response });
      })
      .catch((error) => {
        res.status(400).send({
          status: false,
          data: error,
        });
      });
  } catch (error) {
    return res.send(400).send({ status: false, error: error });
  }
};
