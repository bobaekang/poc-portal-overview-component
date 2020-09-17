import React, { useEffect, useState } from "react";

function fetchData({ token, query }) {
  return fetch("https://portal.pedscommons.org/api/v0/submission/graphql/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "*/*",
      "Content-Type": "application/json",
      Connection: "keep-alive",
    },
    body: JSON.stringify({ query }),
  }).then((response) => response.json());
}

function IndexOverview({ isFetching, setIsFetching, setIsError, token }) {
  const [subject, setSubject] = useState(0);

  useEffect(() => {
    if (isFetching)
      fetchData({ token, query: `{ _inrg_count }` })
        .then(({ data }) => setSubject(data._inrg_count))
        .catch((e) => {
          setIsError(true);
          console.error(e);
        })
        .finally(() => setIsFetching(false));
  }, [isFetching]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "1rem .25rem",
        padding: "1rem",
      }}
    >
      <h1>Overview</h1>
      <h2>Subjects: {subject}</h2>
    </div>
  );
}

export default IndexOverview;
