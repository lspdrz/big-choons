import Layout from "../components/Layout";
import SharedTrack from "../components/SharedTrack";
import ProfileHead from "../components/ProfileHead";
import { sampleUserData } from "../utils/sample-data";
// import { PrismaClient } from "@prisma/client";
import { User } from "../interfaces";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    {/* Put the profile header component here to test it out */}
    <ProfileHead />
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
