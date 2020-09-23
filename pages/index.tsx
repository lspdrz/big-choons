import Link from "next/link";
import Layout from "../components/Layout";
import { PrismaClient } from "@prisma/client";

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
  </Layout>
);

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return { props: { users } };
};

export default IndexPage;
