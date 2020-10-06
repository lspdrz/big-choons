import App from "../components/App";
import { sampleUserData } from "../utils/sample-data";
// import { PrismaClient } from "@prisma/client";
import { User } from "../interfaces";

const IndexPage = () => <App />;

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
