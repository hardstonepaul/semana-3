import _ from "lodash";

const entries = [
    {
      titulo: "Introducción a HTML5",
      descripcion:
        "En este artículo se explica qué es HTML5 y cómo funciona. También se detallan las principales novedades y mejoras respecto a HTML4.",
      fecha: "2022-01-15",
      autor: "Juan Pérez",
      tags: ["HTML5", "Web", "Desarrollo"],
    },
    {
      titulo: "Cómo diseñar una web responsive",
      descripcion:
        "En este artículo se explican las claves para diseñar una web responsive, es decir, que se adapte a diferentes tamaños de pantalla. Se detallan las herramientas y técnicas más útiles.",
      fecha: "2022-02-02",
      autor: "María García",
      tags: ["Responsive Design", "Web", "Diseño"],
    },
    {
      titulo: "Introducción a CSS3",
      descripcion:
        "En este artículo se explica qué es CSS3 y cómo funciona. También se detallan las principales novedades y mejoras respecto a CSS2.",
      fecha: "2022-02-15",
      autor: "Pedro González",
      tags: ["CSS3", "Web", "Desarrollo"],
    },
    {
      titulo: "Cómo optimizar el rendimiento de una web",
      descripcion:
        "En este artículo se explican las claves para optimizar el rendimiento de una web, es decir, para que cargue más rápido y sea más eficiente. Se detallan las herramientas y técnicas más útiles.",
      fecha: "2022-03-02",
      autor: "Ana Rodríguez",
      tags: ["Optimización", "Web", "Desarrollo"],
    },
    {
      titulo: "Cómo crear una página web desde cero",
      descripcion:
        "En este artículo se explican los pasos para crear una página web desde cero, desde la elección del nombre de dominio hasta la publicación en Internet. Se detallan las herramientas y técnicas más útiles.",
      fecha: "2022-03-15",
      autor: "Juan Pérez",
      tags: ["Web", "Desarrollo"],
    },
    {
      titulo: "Cómo usar jQuery en una web",
      descripcion:
        "En este artículo se explica qué es jQuery y cómo se puede utilizar en una web para añadir interactividad y dinamismo. Se detallan los principales métodos y funciones.",
      fecha: "2022-04-02",
      autor: "María García",
      tags: ["jQuery", "Web", "Desarrollo"],
    },
    {
      titulo: "Cómo crear un diseño atractivo para una web",
      descripcion:
        "En este artículo se explican las claves para crear un diseño atractivo y efectivo para una web, desde la elección de colores hasta la disposición de los elementos. Se detallan las herramientas y técnicas más útiles.",
      fecha: "2022-04-15",
      autor: "Pedro González",
      tags: ["Diseño", "Web", "Desarrollo"],
    },
  ];

function filterByTag(entry) {
    return _.includes(entry.tags, "Desarrollo")
}
function mapFirtTittle(entries) {
    return _.map(entries, "titulo")
}
const ejerFilterByTag = _.filter(entries, filterByTag);
const ejerMapedByTittle = _.mapValues(_.groupBy(entries, "autor"), mapFirtTittle);
document.getElementById("code1").innerHTML = (JSON.stringify(ejerMapedByTittle));
console.log(ejerMapedByTittle);