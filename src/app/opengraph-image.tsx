import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";

export const runtime = "nodejs";
export const alt = "Yuristim — O‘zbekiston uchun LegalTech";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(new URL("../../public/assets/yuristim-logo-og.jpg", import.meta.url));
  const logoSrc = `data:image/jpeg;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          color: "#111827",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 790,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 42,
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            <img
              src={logoSrc}
              width="64"
              height="64"
              alt=""
              style={{ borderRadius: 16 }}
            />
            Yuristim
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 74,
              lineHeight: 0.98,
              fontWeight: 800,
              letterSpacing: "-4px",
            }}
          >
            O‘zbekiston uchun LegalTech
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 26,
              color: "#52605a",
            }}
          >
            AI · Hujjatlar · Professional yuristlar
          </div>
        </div>

        <div
          style={{
            width: 250,
            height: 420,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 44,
            background: "#f3fff9",
            border: "1px solid #dff7ec",
          }}
        >
          <div
            style={{
              width: 180,
              height: 180,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 90,
              background: "#ffffff",
              border: "1px solid #bfe8d6",
            }}
          >
            <span
              style={{
                display: "flex",
                color: "#00875a",
                fontSize: 72,
                fontWeight: 800,
              }}
            >
              Y
            </span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
