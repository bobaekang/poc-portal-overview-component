import React, { useState } from "react";
import IndexOverview from "./IndexOverview";

function App() {
  const [token, setToken] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  return (
    <div style={{ maxWidth: "500px" }}>
      <label style={{ margin: "0 .25rem" }}>
        Access Token:
        <input
          type="text"
          style={{ margin: "0 .25rem" }}
          onChange={(e) => setToken(e.target.value)}
          value={token}
        />
      </label>
      <button onClick={() => setIsFetching(true)}>Fetch</button>
      <IndexOverview
        isFetching={isFetching}
        setIsFetching={setIsFetching}
        token={token}
      />
    </div>
  );
}

export default App;
