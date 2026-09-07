/**
 * Identidad de la instalacion: nombre, textos, logo y fuentes.
 *
 * Los COLORES no viven acá — son 100% CSS, definidos en `src/index.css`
 * (`--kt-*` bajo `:root`). Para un cliente nuevo con otra paleta, agregar
 * un bloque `[data-client-brand="NombreCliente"] { --kt-turquoise: ...; }`
 * en index.css (ver comentario ahí) — no hace falta tocar JS.
 *
 * Para replicar el resto (nombre, tagline, logo, fuentes) en otro cliente,
 * duplicar el objeto dentro de `clientes` y setear `clienteActivo`.
 */
export const clientes = {
  cek: {
    nombre: "CEK",
    rubro: "Centro de Entrenamiento y Kinesiología",
    tagline: "Move mejor. Vivi mejor.",
    clienteActivo: true,

    logo: {
      ariaLabel: "CEK",
    },

    fuentes: {
      display: "'Bricolage Grotesque', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif",
    },
  },
};

export const clienteActivo = "cek";
export const brandConfig = clientes[clienteActivo];
