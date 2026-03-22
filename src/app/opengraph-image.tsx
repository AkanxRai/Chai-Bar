import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1B5532",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#E5EACB",
            letterSpacing: "-2px",
          }}
        >
          Chai Bar
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#7CAE68",
            letterSpacing: "5px",
            textTransform: "uppercase" as const,
          }}
        >
          The Only Bar That Brews Chai
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(229,234,203,0.55)",
            marginTop: "4px",
          }}
        >
          Indiranagar, Bangalore
        </div>
      </div>
    ),
    { ...size }
  );
}
