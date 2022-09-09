import { graphql, useLazyLoadQuery } from "react-relay";
import type { UsersQuery } from "./__generated__/UsersQuery.graphql";

const query = graphql`
  query UsersQuery {
    users {
      data {
        id
        name
        ...UserItem_user
      }
    }
  }
`;

export function Users() {
  const data = useLazyLoadQuery<UsersQuery>(
    query,
    {},
    {
      fetchPolicy: "store-and-network",
    }
  );

  const rows = (data?.users?.data ?? []).map((u) => {
    if (!u) {
      return null;
    }
    return <div key={u?.id}>{u.name}</div>;
  });

  return <div>{rows}</div>;
}
