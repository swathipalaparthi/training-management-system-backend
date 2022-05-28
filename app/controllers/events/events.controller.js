import db from "../../models/index.js";

const events = db.events;

export const getEvents = (req, res) => {
  try {
    return events
      .findAll({
        attributes: ["eventsName", "eventsLink", "eventsTime"],
      })
      .then((response) => {
        if (!response) {
          return res.status(400).send({
            status: false,
            data: "No Events",
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
  } catch (err) {
    res.status(400).send({ status: false, data: err });
  }
};
