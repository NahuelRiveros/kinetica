import { brandConfig } from "../../config/brand_config.js";
import logoCek from "../../assets/logo_CEK.png";

const SIZE = {
  sm: "h-8",
  md: "h-10 sm:h-11",
  hero: "h-24 sm:h-32 md:h-40",
};

/**
 * Isotipo/wordmark CEK — logo único entregado por el cliente (no hay una
 * versión "solo ícono" recortada, así que se reusa la misma imagen a menor
 * tamaño para espacios chicos como el header del drawer mobile).
 */
export function LogoCekIcon({ className = "" }) {
  return (
    <img
      src={logoCek}
      alt={brandConfig.logo?.ariaLabel || brandConfig.nombre}
      className={`h-8 w-auto object-contain ${className}`}
    />
  );
}

/**
 * `variant="light"` es para fondos oscuros (footer): el logo trae texto
 * gris oscuro que se pierde ahí, así que se envuelve en una placa blanca
 * para mantenerlo legible sin perder los colores de marca del isotipo.
 */
export default function LogoCek({ size = "md", variant = "dark", className = "" }) {
  const sizing = SIZE[size] ?? SIZE.md;
  const isLight = variant === "light";

  return (
    <img
      src={logoCek}
      alt={brandConfig.logo?.ariaLabel || brandConfig.nombre}
      className={[
        sizing,
        "w-auto object-contain",
        isLight ? "rounded-lg bg-white p-1.5" : "",
        className,
      ].filter(Boolean).join(" ")}
    />
  );
}
