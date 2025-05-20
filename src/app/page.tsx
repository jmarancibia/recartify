// src/app/page.tsx
export default function Home() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", maxWidth: 720, margin: "40px auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 16 }}>Stop Losing 88 % of Your Carts.</h1>
      <h2 style={{ fontSize: "1.4rem", fontWeight: 500, marginBottom: 32 }}>
        Recover sales in&nbsp;<strong>&lt; 5 min</strong> with AI-powered real-time incentives.
      </h2>

      <ul style={{ lineHeight: 1.6, fontSize: "1.05rem", marginLeft: 24 }}>
        <li>🎯 <b>Personalization 1-to-1</b> – each shopper sees the offer that converts.</li>
        <li>⚡ <b>Plug-and-play for Shopify &amp; WooCommerce</b>.</li>
        <li>🧠 <b>Self-learning AI</b> that protects your margins.</li>
        <li>📈 <b>Clear ROI</b> – live dashboard of recovered revenue.</li>
        <li>💬 <b>24 × 7 support</b> during the beta.</li>
      </ul>

      <a
        href="https://mpago.la/2N2LD19"              /* ← tu link de Mercado Pago */
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: 32,
          padding: "14px 28px",
          background: "#1A73E8",
          color: "#fff",
          fontSize: "1.1rem",
          borderRadius: 8,
          textDecoration: "none",
        }}
      >
        Recartify Early Acces – $56 000 CLP (≈ USD 59)
      </a>

      <p style={{ fontSize: "0.9rem", color: "#666", marginTop: 8 }}>
        <em>100 % reembolsable · Cupos limitados a 50 tiendas</em>
      </p>
    </main>
  );
}
