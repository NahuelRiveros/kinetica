import { brandConfig } from "./brand_config.js";

function setVar(root, name, value) {
  if (value) root.style.setProperty(name, value);
}

/**
 * Marca el cliente activo en <html> (habilita overrides de paleta por
 * cliente en index.css vía `[data-client-brand="X"] { --kt-*: ...; }`)
 * y aplica las fuentes elegidas. Los colores en sí son 100% CSS.
 */
export function applyBrandTheme(config = brandConfig) {
  if (typeof document === "undefined" || !config) return;

  const root = document.documentElement;
  root.dataset.clientBrand = config.nombre;

  setVar(root, "--kt-font-display", config.fuentes?.display);
  setVar(root, "--kt-font-body", config.fuentes?.body);
}

applyBrandTheme();
