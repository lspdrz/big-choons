import Link from "next/link";
import gql from "graphql-tag";
import { useQuery } from "urql";
import { withUrqlClient } from "next-urql";
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";
import SharedTrack from "../components/SharedTrack";
import { sampleUserData } from "../utils/sample-data";
// import { PrismaClient } from "@prisma/client";
import { User } from "../interfaces";

const AllUsersQuery = gql`
  query {
    allUsers {
      id
      name
    }
  }
`;
type AllUsersData = {
  allUsers: {
    id: number;
    name: string;
  };
};

type Props = {
  users: User[];
};

const IndexPage = ({ users }: Props) => {
  console.log("hey whats up");
  console.log(users);
  const [result] = useQuery<AllUsersData>({
    query: AllUsersQuery,
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  console.log("heeyyyyy users graphql data");
  console.log(data);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {/* Includeded a bunch of SharedTrack components to test scrolling */}
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <ul>
        {users.map((user: User) => (
          <li>Name: {user.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  // const prisma = new PrismaClient();
  // const users = await prisma.user.findMany({
  //   select: {
  //     id: true,
  //     name: true,
  //   },
  // });
  // const [result] = useQuery<AllUsersData>({
  //   query: AllUsersQuery,
  // });
  // const { data } = result;
  // console.log("heeyyyyy");
  // console.log(data);
  // console.log("hi hi hi server side");
  // console.log("server side");
  const users: User[] = sampleUserData;
  console.log(users);
  return { props: { users } };
};

export default withUrqlClient((_ssrExchange, ctx) => ({
  // ...add your Client options here
  url: "http://localhost:3000/api/graphql",
  fetch,
}))(IndexPage);
