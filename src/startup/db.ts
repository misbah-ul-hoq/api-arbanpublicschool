import mongoose from "mongoose";

const db = process.env.NODE_ENV === "test" ? "arban-test" : "arban";
export function dbConnect() {
  mongoose
    .connect(
      `mongodb+srv://${process.env.dbUserName}:${process.env.dbPass}@cluster0.5dbzkti.mongodb.net/${db}?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => {
      console.log(`connected to ${db} database..`);
    });
}
