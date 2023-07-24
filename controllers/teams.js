import Team from "../models/Team.js";

export const getTeams = async (req, res) => {
  try {
    let teams = await Team.find();
    res.json(teams);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

export const getTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id);

    if (team) {
      return res.json(team);
    }

    res.status(404).json({ message: "Team not found!" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

export const createTeam = async (req, res) => {
  const team = new Team(req.body);
  await team.save();
  res.status(201).json(team)
};

export const updateTeam = async (req, res) => {
  const { id } = req.params;
  const team = await Team.findByIdAndUpdate(id, req.body);
  res.status(201).json(team);
};

export const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Team.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Team deleted!");
    }

    throw new Error("Team not found!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getEastConference = async (req, res) => {
  let conference = await Team.find({ conference: "East" });
  res.json(conference);
};

export const getWestConference = async (req, res) => {
  let conference = await Team.find({ conference: "West" });
  res.json(conference);
};
