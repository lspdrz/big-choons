import App from "../components/App";
import { sampleUserData } from "../utils/sample-data";
import { withApollo } from "../apollo/client";
import { getStandaloneApolloClient } from "../apollo/getStandaloneApolloClient";
import { User } from "../interfaces";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const UsersQuery = gql`
  query UsersQuery {
    users {
      id
      name
    }
  }
`;
const IndexPage = () => <App />;

export const getServerSideProps = async () => {
  // const { loading, error, data } = useQuery(UsersQuery);
  // console.log("hey from server side props");
  // console.log(data);
  // const users: User[] = sampleUserData;
  const client = await getStandaloneApolloClient();
  await client.query({
    query: UsersQuery,
    // variables: { input: { slug: params?.slug } }
  });
  console.log("here in SSG");
  console.log(client.cache.extract());
  // return {
  //   props: {
  //     apolloStaticCache: client.cache.extract()
  //   }
  // };
  const users: User[] = sampleUserData;
  return { props: { apolloClient: client.cache.extract(), users } };
};

export default withApollo(IndexPage);
