import Link from "next/link";
import Layout from "../components/Layout";
import SharedTrack from "../components/SharedTrack";
import { sampleUserData } from "../utils/sample-data";
// import { PrismaClient } from "@prisma/client";
import { User } from "../interfaces";

const IndexPage = ({ users }) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <ul>
      {users.map((user) => (
        <li>Name: {user.name}</li>
      ))}
    </ul>
    <SharedTrack />
  </Layout>
);

export const getServerSideProps = async () => {
  // const prisma = new PrismaClient();
  // const users = await prisma.user.findMany({
  //   select: {
  //     id: true,
  //     name: true,
  //   },
  // });
  const users: User[] = sampleUserData;
  return { props: { users } };
};

export default IndexPage;
