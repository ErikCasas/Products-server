import { connect } from "mongoose";

const db = async (URI) => {
  try {
    await connect(URI);
    console.log("CONNECT!!");
  } catch (error) {
    console.log(error);
  }
};

export default db;
