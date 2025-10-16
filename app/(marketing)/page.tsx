export const metadata = { title: "Marketing · Home" };

export default function Page() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Marketing Landing</h1>
      <p>Táto stránka žije v route-groupe <code>(marketing)</code>, ale URL je <code>/</code>.</p>
    </main>
  );
}
