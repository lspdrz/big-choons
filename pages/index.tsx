import { withApollo } from "../apollo/client";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Layout from "../components/Layout";
import SharedTrack from "../components/SharedTrack";
import ProfileHead from "../components/ProfileHead";
import { sampleUserData } from "../utils/sample-data";
// import { PrismaClient } from "@prisma/client";
import { User } from "../interfaces";

const UsersQuery = gql`
  query UsersQuery {
    user {
      id
      name
    }
  }
`;

const IndexPage = () => {
  const { loading, error, data } = useQuery(UsersQuery);

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("heyyy users data");
  console.log(data);

  return (
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
};

// export const getServerSideProps = async () => {
//   // const prisma = new PrismaClient();
//   // const users = await prisma.user.findMany({
//   //   select: {
//   //     id: true,
//   //     name: true,
//   //   },
//   // });
//   const users: User[] = sampleUserData;
//   return { props: { users } };
// };

export default withApollo(IndexPage);
