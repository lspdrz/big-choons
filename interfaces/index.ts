// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
  email: string;
  trackId: number;
};

export type Track = {
  id: number;
  title: string;
  source: string;
  notes?: string;
};
