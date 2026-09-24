/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";

export const runtime = "nodejs";
export const alt = "Yuristim — O‘zbekiston uchun LegalTech";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(new URL("../../../public/assets/yuristim-logo.jpeg", import.meta.url));
  const src = `data:image/jpeg;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 84px",
          background: "#ffffff",
          color: "#111827",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 999,
            right: -120,
            bottom: -230,
            background: "radial-gradient(circle, #dff7ec 0%, rgba(223,247,236,0) 70%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, fontWeight: 700 }}>
            <img src={src} width="58" height="58" alt="" style={{ borderRadius: 14 }} />
            Yuristim
          </div>
          <div style={{ fontSize: 72, lineHeight: 0.98, fontWeight: 780, letterSpacing: "-4px" }}>
            O‘zbekiston uchun LegalTech
          </div>
          <div style={{ fontSize: 26, color: "#52605a" }}>AI · Hujjatlar · Professional yuristlar</div>
        </div>
        <div
          style={{
            display: "flex",
            width: 220,
            height: 220,
            border: "1px solid #bfe8d6",
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(243,255,249,.85)",
          }}
        >
          <img src={src} width="150" height="150" alt="" style={{ borderRadius: 999 }} />
        </div>
      </div>
    ),
    size,
  );
}
