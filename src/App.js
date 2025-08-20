import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);

  const handleShorten = () => {
    if (!url) return;
    const code = Math.random().toString(36).substring(2, 8);
    const fakeShortUrl = `http://short.ly/${code}`;
    setShortUrls([...shortUrls, { original: url, short: fakeShortUrl }]);
    setUrl("");
  };

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link);
    alert("Copied to clipboard!");
  };

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      height: "100vh", background: "#f9f9f9"
    }}>
      <div style={{
        background: "#fff", padding: 20, borderRadius: 12,
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)", width: 400, textAlign: "center"
      }}>
        <h1 style={{ marginBottom: 20 }}>URL Shortener</h1>

        <input
          type="url"
          placeholder="Enter your long URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{
            width: "100%", padding: 10, border: "1px solid #ccc",
            borderRadius: 8, marginBottom: 10
          }}
        />

        <button
          onClick={handleShorten}
          style={{
            width: "100%", padding: 10, background: "#2563eb",
            color: "#fff", border: "none", borderRadius: 8, cursor: "pointer"
          }}
        >
          Shorten URL
        </button>

        {shortUrls.length > 0 && (
          <div style={{
            marginTop: 20, padding: 10, background: "#e6ffed",
            borderRadius: 8, textAlign: "left"
          }}>
            <p style={{ marginBottom: 10, fontSize: 14, color: "#333" }}>
              Your Shortened Links:
            </p>
            {shortUrls.map((link, idx) => (
              <div key={idx} style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", marginBottom: 8
              }}>
                <a
                  href={link.original}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2563eb", fontWeight: "bold", fontSize: 14 }}
                >
                  {link.short}
                </a>
                <button
                  onClick={() => copyToClipboard(link.short)}
                  style={{
                    padding: "4px 8px", background: "#10b981",
                    color: "#fff", border: "none", borderRadius: 6, cursor: "pointer"
                  }}
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
