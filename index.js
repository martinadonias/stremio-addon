const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const manifest = {
  id: "com.martin.stremioaddon",
  version: "1.0.0",
  name: "Martin Addon",
  description: "Addon de Stremio con fuentes autorizadas",
  resources: ["catalog", "meta", "stream"],
  types: ["movie"],
  idPrefixes: ["tt"],
  catalogs: [
    {
      type: "movie",
      id: "martin-catalog",
      name: "Martin Addon"
    }
  ]
};

const builder = new addonBuilder(manifest);

builder.defineCatalogHandler(() => {
  return Promise.resolve({
    metas: [
      {
        id: "tt0133093",
        type: "movie",
        name: "The Matrix",
        poster: "https://images.metahub.space/poster/medium/tt0133093/img"
      }
    ]
  });
});

builder.defineMetaHandler(() => {
  return Promise.resolve({
    meta: {
      id: "tt0133093",
      type: "movie",
      name: "The Matrix",
      poster: "https://images.metahub.space/poster/medium/tt0133093/img",
      description: "Película de prueba del addon."
    }
  });
});

builder.defineStreamHandler(() => {
  return Promise.resolve({
    streams: []
  });
});

serveHTTP(builder.getInterface(), { port: 7000 });

console.log("Martin Addon ejecutándose en http://localhost:7000/manifest.json");
