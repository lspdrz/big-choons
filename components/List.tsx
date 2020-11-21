import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'

type Props = {
  items: User[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      // Temporary fix, change the key back to item.id when User model is complete
      <li key={item.username}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
