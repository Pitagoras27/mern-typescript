import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      authSource: "admin", // local comment with remote database
      // FIXME: Don't work for conexion local from app
      // user: config.MONGO_USER, // local comment with remote database
      // pass: config.MONGO_PASSWORD, // local comment with remote database
    };

    // Local conexion
    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
      mongooseOptions
    );

    /* const db = await mongoose.connect(
      `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
      mongooseOptions
    ); */

    /*
    const db = await mongoose.connect(
      `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.7webo.mongodb.net/${config.MONGO_DATABASE}?retryWrites=true&w=majority`,
      mongooseOptions
    );
    */
    console.log("Database is connected to -> ", db.connection.name);
  } catch (error) {
    console.error("error-->", error);
  }
})();
