import React, { useEffect, useState } from "react";
import IndexOverview from "./IndexOverview";

const storage = window.sessionStorage;

function App() {
  const [token, setToken] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const savedToken = storage.getItem("saved_token");
    if (savedToken) setToken(savedToken);
  }, []);

  return (
    <div style={{ maxWidth: "500px" }}>
      <label style={{ margin: "0 .25rem" }}>
        Access Token:
        <input
          type="text"
          style={{ margin: "0 .25rem" }}
          onChange={(e) => {
            storage.setItem("saved_token", e.target.value);
            setToken(e.target.value);
          }}
          value={token}
        />
      </label>
      <button
        onClick={() => {
          setIsError(false);
          setIsFetching(true);
        }}
      >
        Fetch
      </button>

      <IndexOverview
        isFetching={isFetching}
        setIsFetching={setIsFetching}
        setIsError={setIsError}
        token={token}
      />
      {isError && (
        <div
          style={{
            backgroundColor: "lightpink",
            color: "firebrick",
            margin: ".25rem",
            padding: ".5rem",
          }}
        >
          Error: Failed to fetch data! Try again with a valid token or check
          console for more details.
        </div>
      )}
    </div>
  );
}

export default App;
