import { User, Track } from "../interfaces";

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: "Roby", email: "roby.saavedra@gmail.com", trackId: 14321 },
  { id: 102, name: "Luis", email: "luis@lspdrz.com", trackId: 3211 },
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
