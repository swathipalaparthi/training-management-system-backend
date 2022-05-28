export default {
  HOST: "demo.divami.com",
  USER: "swathi",
  PASSWORD: "swathihackathon",
  DB: "fineMentor",
  dialect: "mysql",
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
