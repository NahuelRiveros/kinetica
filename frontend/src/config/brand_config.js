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
  moovs: {
    nombre: "Moovs",
    rubro: "Gimnasio & Kinesiología",
    tagline: "Move mejor. Vivi mejor.",
    clienteActivo: true,

    logo: {
      tipo: "moovs-spine",
      texto: "MOOV",
      ariaLabel: "Moovs",
    },

    fuentes: {
      display: "'Bricolage Grotesque', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif",
    },
  },
};

export const clienteActivo = "moovs";
export const brandConfig = clientes[clienteActivo];
