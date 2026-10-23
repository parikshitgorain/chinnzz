import express from "express";

const app = express();
const PORT = process.env.ADMIN_PORT || 3000;

app.get("/healthz", (req, res) => res.json({ ok: true, service: "chinnzz-admin" }));

app.get("/", (req, res) => {
  res.status(200).send(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>chinnzz admin</title>
<style>body{background:#0A0806;color:#F6F0E4;font-family:system-ui,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0}
main{max-width:34rem;padding:2rem;text-align:center}
h1{color:#D4AF37;font-size:1.5rem}a{color:#E8C85A}</style></head>
<body><main>
<h1>chinnzz admin</h1>
<p>The full content panel ships in milestone M9: Express, EJS, SQLite, auth, media handling and the publish flow described in <code>docs/03-technical/content-model-and-admin.md</code>.</p>
<p>The public site does not depend on this service. It builds from <code>content/</code> and deploys to Cloudflare Pages.</p>
</main></body></html>`);
});

app.listen(PORT, () => {
  console.log(`chinnzz-admin listening on http://localhost:${PORT}`);
});
