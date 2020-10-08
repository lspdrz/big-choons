import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { concatPagination } from "@apollo/client/utilities";

const isProd = String(process.env.NODE_ENV) === "production";
const isDev = String(process.env.NODE_ENV) === "development";

const getProdPath = () => {
  const currentBranch = process.env.VERCEL_GITHUB_COMMIT_REF.toLowerCase()
    .replace("/", "-")
    .replace("_", "-");

  if (currentBranch === "master") {
    return process.env.APP_URL;
  }
  return `https://big-choons-git-${currentBranch}.big-choons.vercel.app/api`;
};

const apiUrl = isProd ? getProdPath() : process.env.LOCAL_HOST;

let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: apiUrl, // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
