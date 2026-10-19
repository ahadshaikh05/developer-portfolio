import { ImageResponse } from "next/og";

export const alt = "Ahad Shaikh — Senior Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #08090c 0%, #141a33 100%)",
          color: "#edeff5",
        }}
      >
        <div style={{ fontSize: 28, color: "#8ea2ff", letterSpacing: 6 }}>PORTFOLIO</div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24 }}>Ahad Shaikh</div>
        <div style={{ fontSize: 38, marginTop: 16, color: "#969dad" }}>
          Senior Software Developer · Mobile Application Development
        </div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#5eead4" }}>
          React Native · React · Flutter · TypeScript
        </div>
      </div>
    ),
    size,
  );
}
