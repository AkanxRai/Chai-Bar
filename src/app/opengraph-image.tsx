import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#5C3317",
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
            color: "#F5ECD7",
            letterSpacing: "-2px",
          }}
        >
          Chai Bar
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#C9A84C",
            letterSpacing: "5px",
            textTransform: "uppercase" as const,
          }}
        >
          The Only Bar That Brews Chai
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(245,236,215,0.55)",
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
