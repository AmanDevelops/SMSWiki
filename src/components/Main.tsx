import { useState } from "react";

function Main() {
  const [header, setHeader] = useState<string>("");
  const [name, setName] = useState<string>("");

  const [status, setStatus] = useState<
    "idle" | "searching" | "success" | "error" | "noInput"
  >("idle");

  const handleSearch = async (e: React.FormEvent<EventTarget>) => {
    setStatus("searching");
    e.preventDefault();

    if (!header.trim()){
      setStatus("noInput");
      return;
    }
    try {
      const apiUrl = `https://smswiki-2024-default-rtdb.asia-southeast1.firebasedatabase.app/${header.toUpperCase()}.json`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data && data.name) {
        setName(data.name);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main>
      <div className="container">
        <h1>SMS Directory</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
          <input type="submit" disabled={status === "searching"} />
        </form>
        {status === "searching" && <h3 className="searching">Searching...</h3>}
        {status === "success" && (
          <h2 style={{ textAlign: "center" }}>
            The Company Name is <br />
            {name}
          </h2>
        )}
        {status === "error" && <h3>No Results Found</h3>}
        {status === "noInput" && <h3>Please Provide an Input</h3>}
      </div>
    </main>
  );
}

export default Main;
