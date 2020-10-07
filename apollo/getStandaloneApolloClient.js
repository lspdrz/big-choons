export async function getStandaloneApolloClient() {
  const { ApolloClient, InMemoryCache, HttpLink } = await import(
    "@apollo/client"
  );
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:3000/api",
      credentials: "same-origin",
    }),
    cache: new InMemoryCache(),
  });
}
