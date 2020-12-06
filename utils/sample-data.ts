import { User, Track } from "../interfaces";

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, username: 'roby123', name: "Roby", email: "roby.saavedra@gmail.com"},
  { id: 102, username: 'luis123', name: "Luis", email: "luis@lspdrz.com" },
];

export const sampleTrackData: Track[] = [
  {
    id: 14321,
    title: "Rare Pleasure - Let Me Down Easy",
    source: "https://www.youtube.com/watch?v=u_U3LL7HaT0",
    notes: "Bla bla bla",
  },
  {
    id: 3211,
    title: "Earth, Wind, & Fire - September",
    source: "https://www.youtube.com/watch?v=Gs069dndIYk",
    notes: "lkfjalkjflakjalkja",
  },
];
