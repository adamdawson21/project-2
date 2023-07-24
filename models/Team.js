import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Team = new Schema({
  "abbreviation": String,
  "city": String,
  "conference": String,
  "division": String,
  "full_name": String,
  "name": String
});

export default mongoose.model("teams", Team);