import App from "../components/App";
import { initializeApollo } from "../apollo/client";
import gql from "graphql-tag";

const UsersQuery = gql`
  query UsersQuery {
    users {
      id
      name
    }
  }
`;
const IndexPage = (initialApolloState: any) => {
  let users = initialApolloState.initialApolloState;
  delete users.ROOT_QUERY;
  return <App users={users} />;
};

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: UsersQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    // revalidate: 1,
  };
};

export default IndexPage;
