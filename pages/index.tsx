import Link from "next/link";
import Layout from "../components/Layout";
import SharedTrack from "../components/SharedTrack";
import { sampleUserData } from "../utils/sample-data";
// import { PrismaClient } from "@prisma/client";
import { User } from "../interfaces";

type Props = {
  users: User[];
};

const IndexPage = ({ users }: Props) => (
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
