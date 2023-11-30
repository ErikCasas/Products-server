import app from "./app.js";
import db from "./config.js";

const { PORT, URI } = process.env 

db(URI);
app.listen(1000, () => console.log(`SERVER ON PORT ${PORT}`));
