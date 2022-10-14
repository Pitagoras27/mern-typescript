import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    mongoose.connect(config.CONECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    mongoose.connection.once("open", () => {
      console.log("DB is connected succesful");
    });
  } catch (error) {
    console.error("--->>>>>>>>>>>", error);
  }
})();
