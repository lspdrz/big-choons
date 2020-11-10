import fetch from 'isomorphic-unfetch';

import App from "../components/App";
import { User } from "../interfaces";

type Props = {
  users: User[];
};

const IndexPage = ({users}: Props) => {
  console.log('List of users:')
  console.log(users)
  return <App />;
};

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}users/`, {
    headers: {
      'Authorization': `Token ${process.env.API_TOKEN}`
    }
  })
  const users = await res.json()
  return { props: { users } };
};

export default IndexPage;
