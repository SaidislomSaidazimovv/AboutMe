// Regenerate raster assets (og-image.png, favicon.png) from the SVG sources in public/.
// One-off tool — not part of the build. To run:
//   npm i -D @resvg/resvg-js && node scripts/gen-assets.mjs && npm uninstall @resvg/resvg-js
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync } from "node:fs";

function render(svgPath, outPath, width) {
  const svg = readFileSync(svgPath, "utf8");
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    font: { loadSystemFonts: true },
  });
  const png = resvg.render().asPng();
  writeFileSync(outPath, png);
  console.log("wrote", outPath, "(" + png.length + " bytes)");
}

render("public/og-image.svg", "public/og-image.png", 1200);
render("public/favicon.svg", "public/favicon.png", 512);
