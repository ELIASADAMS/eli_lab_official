document.addEventListener("DOMContentLoaded", () => {
  const host = document.getElementById("main-nav");
  if (!host) return;

  // Works both at a custom domain and at /<repository>/ on GitHub Pages.
  const path = location.pathname;
  const marker = "/html/";
  const root = path.includes(marker) ? path.split(marker)[0] + "/" : path.replace(/index\.html$/, "");
  const url = (p) => root + p.replace(/^\//, "");

  host.className = "eli-site-header";
  host.innerHTML = `
    <div class="eli-nav">
      <a class="eli-brand" href="${url("index.html")}">eli_lab</a>
      <button class="eli-nav-toggle" type="button" aria-expanded="false" aria-controls="eli-nav-links">Menu</button>
      <div class="eli-nav-links" id="eli-nav-links">
        <a href="${url("html/projects/all.html")}">Works</a>
        <a href="${url("html/archive/index.html")}">Archive</a>
        <div class="eli-nav-group">
          <button type="button" aria-expanded="false">Practice +</button>
          <div class="eli-nav-menu">
            <a href="${url("html/nav/about.html")}">About</a>
            <a href="${url("html/extra/art_practice.html")}">Art Practice</a>
            <a href="${url("html/extra/brief_history.html")}">Biography / History</a>
            <a href="${url("html/extra/videoart.html")}">Video Art</a>
          </div>
        </div>
        <div class="eli-nav-group">
          <button type="button" aria-expanded="false">Documentation +</button>
          <div class="eli-nav-menu">
            <a href="${url("html/extra/exhibitions.html")}">Exhibitions</a>
            <a href="${url("html/extra/performances.html")}">Performances</a>
            <a href="${url("html/extra/live_events.html")}">Live Events</a>
            <a href="${url("html/projects/collaborations.html")}">Collaborations</a>
          </div>
        </div>
        <a href="${url("html/workinprogress.html")}">NXT / WIP</a>
        <a href="${url("html/nav/contact.html")}">Contact</a>
      </div>
    </div>
  `;

  const toggle = host.querySelector(".eli-nav-toggle");
  const links = host.querySelector(".eli-nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  host.querySelectorAll(".eli-nav-group > button").forEach(button => {
    button.addEventListener("click", () => {
      const group = button.parentElement;
      const open = group.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
    });
  });

  const current = location.pathname.replace(/\\/+$/, "").toLowerCase();
  host.querySelectorAll("a[href]").forEach(link => {
    const target = new URL(link.href, location.href).pathname.replace(/\\/+$/, "").toLowerCase();
    if (target === current) link.classList.add("active");
  });
});
