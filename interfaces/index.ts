// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type AppState = {
  modalId: string
  user: User | null
  jwt: string | null
  checkingAuth: boolean
}

export type User = {
  id: number
  username: string
  name: string
  email: string
}

export type Track = {
  id: number
  title: string
  source: string
  notes?: string
}
