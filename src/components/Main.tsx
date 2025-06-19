import { useState } from "react";

import NotFound from "../assets/404.svg";
import ExternalLink from "../assets/external-link.png";
import HeaderInfo from "../assets/HEADER INFO.svg";

function Main() {
  const [header, setHeader] = useState<string>("");
  const [name, setName] = useState<string>("");

  const [status, setStatus] = useState<
    "idle" | "searching" | "success" | "error" | "noInput"
  >("idle");

  const handleSearch = async (e: React.FormEvent<EventTarget>) => {
    setStatus("searching");
    e.preventDefault();

    if (!header.trim()) {
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
        <img src={HeaderInfo} loading="lazy" alt="headerinfo" className="info-image" />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            placeholder="NSESMS"
          />
          <input type="submit" disabled={status === "searching"} />
        </form>
        {status === "searching" && (
          <div className="loader">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="200px"
              height="200px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <circle cx="73.801" cy="68.263" fill="#e15b64" r="3">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="spline"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    dur="1.4925373134328357s"
                    begin="0s"
                  ></animateTransform>
                </circle>
                <circle cx="68.263" cy="73.801" fill="#f47e60" r="3">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="spline"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    dur="1.4925373134328357s"
                    begin="-0.062s"
                  ></animateTransform>
                </circle>
                <circle cx="61.481" cy="77.716" fill="#f8b26a" r="3">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="spline"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    dur="1.4925373134328357s"
                    begin="-0.125s"
                  ></animateTransform>
                </circle>
                <circle cx="53.916" cy="79.743" fill="#abbd81" r="3">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="spline"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    dur="1.4925373134328357s"
                    begin="-0.187s"
                  ></animateTransform>
                </circle>
                <circle cx="46.084" cy="79.743" fill="#849b87" r="3">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="spline"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    dur="1.4925373134328357s"
                    begin="-0.25s"
                  ></animateTransform>
                </circle>
                <circle cx="38.519" cy="77.716" fill="#6492ac" r="3">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="spline"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    dur="1.4925373134328357s"
                    begin="-0.312s"
                  ></animateTransform>
                </circle>
                <circle cx="31.737" cy="73.801" fill="#637cb5" r="3">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="spline"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    dur="1.4925373134328357s"
                    begin="-0.375s"
                  ></animateTransform>
                </circle>
                <circle cx="26.199" cy="68.263" fill="#6a63b6" r="3">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="spline"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    dur="1.4925373134328357s"
                    begin="-0.437s"
                  ></animateTransform>
                </circle>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  calcMode="spline"
                  values="0 50 50;0 50 50"
                  keyTimes="0;1"
                  keySplines="0.5 0 0.5 1"
                  repeatCount="indefinite"
                  dur="1.4925373134328357s"
                ></animateTransform>
              </g>
            </svg>
          </div>
        )}
        {status === "success" && (
          <>
            <h2 className="success-message">
              The Registered Principal Entity is <br />
              <a
                href={`https://www.google.com/search?q=${name}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                {name} <img src={ExternalLink} alt="" />
              </a>
            </h2>
          </>
        )}
        {status === "error" && (
          <div className="error-container">
            <h2>
              Entity Not Registered or Data Not Updated
            </h2>
            <img src={NotFound} alt="Not Found" className="not-found-image" />
          </div>
        )}
        {status === "noInput" && (
          <h2 className="error-container">
            Please Provide an Input
          </h2>
        )}
      </div>
    </main>
  );
}

export default Main;
