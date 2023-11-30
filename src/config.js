import { connect } from "mongoose";

const db = async (URI) => {
  await connect(URI);
  console.log("CONNECT!!");
};

export default db;
