import { ImageResponse } from "next/og";
import { site } from "@/data";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          padding: "80px",
        }}
      >
        {/* Decorative Window Chrome */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "64px" }}>
          <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#FF5F57" }} />
          <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
          <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#28C840" }} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "120px",
              fontWeight: 900,
              color: "#FAFAFA",
              letterSpacing: "-0.05em",
              margin: 0,
              lineHeight: 1,
            }}
          >
            {site.name}
          </h1>
          <p
            style={{
              fontSize: "48px",
              color: "#A1A1AA",
              margin: 0,
            }}
          >
            {site.positioning}
          </p>

          <div style={{ display: "flex", gap: "24px", marginTop: "48px", flexWrap: "wrap" }}>
            {site.skills.slice(0, 4).map((skill) => (
              <div
                key={skill}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px 32px",
                  borderRadius: "16px",
                  backgroundColor: "rgba(255, 77, 0, 0.15)",
                  color: "#FF4D00",
                  fontSize: "36px",
                  fontWeight: 700,
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
