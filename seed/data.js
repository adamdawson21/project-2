import db from "../db/connection.js";
import Team from "../models/Team.js";
import teams from "./teams.json" assert {type: "json"};

const insertData = async () => {
  await db.dropDatabase();
  await Team.create(teams);
  console.log("Teams created!")
  await db.close();
};

insertData();