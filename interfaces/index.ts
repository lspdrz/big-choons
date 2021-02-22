// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export interface User {
  id: number
  username: string
  name: string
  email: string
}

export interface Track {
  id: number
  title: string
  source: string
  notes?: string
}
