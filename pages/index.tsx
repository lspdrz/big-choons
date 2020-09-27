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
