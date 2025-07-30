
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// 🔥 TODAS LAS RUTAS COMPLETAS
const rutas = [
  {
    "origen": "Paraná",
    "destinos": [
      {
        "destino": "San Benito",
        "precio": 1700,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:00hs",
            "12:00hs",
            "19:00hs"
          ],
          "sabados_domingos_ida": [
            "10:30hs",
            "18:30hs"
          ],
          "lunes_a_viernes_vuelta": [
            "07:10hs",
            "18:40hs"
          ],
          "sabados_domingos_vuelta": [
            "20:55hs"
          ],
          "diario": [
            "14:25hs"
          ]
        }
      },
      {
        "destino": "Colonia Avellaneda",
        "precio": 1800,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:00hs",
            "12:00hs",
            "19:00hs"
          ],
          "sabados_domingos_ida": [
            "10:30hs",
            "18:30hs"
          ],
          "lunes_a_viernes_vuelta": [
            "07:05hs",
            "18:35hs"
          ],
          "sabados_domingos_vuelta": [
            "20:50hs"
          ],
          "diario": [
            "14:20hs"
          ]
        }
      },
      {
        "destino": "Empalme Ruta 12 Y 18",
        "precio": 1900,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:00hs",
            "12:00hs",
            "19:00hs"
          ],
          "sabados_domingos_ida": [
            "10:30hs",
            "18:30hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:45hs",
            "18:15hs"
          ],
          "sabados_domingos_vuelta": [
            "20:30hs"
          ],
          "diario": [
            "14:00hs"
          ]
        }
      },
      {
        "destino": "Sauce Montrul",
        "precio": 2000,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:00hs",
            "12:00hs",
            "19:00hs"
          ],
          "sabados_domingos_ida": [
            "10:30hs",
            "18:30hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:40hs",
            "18:10hs"
          ],
          "sabados_domingos_vuelta": [
            "20:25hs"
          ],
          "diario": [
            "13:55hs"
          ]
        }
      },
      {
        "destino": "Acceso Escuela Almafuerte",
        "precio": 2500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:00hs",
            "12:00hs",
            "19:00hs"
          ],
          "sabados_domingos_ida": [
            "10:30hs",
            "18:30hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Escuela Almafuerte",
        "precio": 2500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:00hs",
            "12:00hs",
            "19:00hs"
          ],
          "sabados_domingos_ida": [
            "10:30hs",
            "18:30hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "La Picada",
        "precio": 2700,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:00hs",
            "12:00hs",
            "19:00hs"
          ],
          "sabados_domingos_ida": [
            "10:30hs",
            "18:30hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Colonia Nueva",
        "precio": 3000,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:00hs",
            "12:00hs",
            "19:00hs"
          ],
          "sabados_domingos_ida": [
            "10:30hs",
            "18:30hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "La Balsa",
        "precio": 3900,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:00hs",
            "12:00hs",
            "19:00hs"
          ],
          "sabados_domingos_ida": [
            "10:30hs",
            "18:30hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Escuela Agrotecnica",
        "precio": 4600,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:00hs",
            "12:00hs",
            "19:00hs"
          ],
          "sabados_domingos_ida": [
            "10:30hs",
            "18:30hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Villa Urquiza",
        "precio": 4700,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:00hs",
            "12:00hs",
            "19:00hs"
          ],
          "sabados_domingos_ida": [
            "10:30hs",
            "18:30hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }
    ]
  },
  {
    "origen": "San Benito",
    "destinos": [
      {
        "destino": "Colonia Avellaneda",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:05hs",
            "12:05hs",
            "19:05hs"
          ],
          "sabados_domingos_ida": [
            "10:35hs",
            "18:35hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Empalme Ruta 12 Y 18",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:05hs",
            "12:05hs",
            "19:05hs"
          ],
          "sabados_domingos_ida": [
            "10:35hs",
            "18:35hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Sauce Montrul",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:05hs",
            "12:05hs",
            "19:05hs"
          ],
          "sabados_domingos_ida": [
            "10:35hs",
            "18:35hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Acceso Escuela Almafuerte",
        "precio": 1700,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:05hs",
            "12:05hs",
            "19:05hs"
          ],
          "sabados_domingos_ida": [
            "10:35hs",
            "18:35hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Escuela Almafuerte",
        "precio": 1700,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:05hs",
            "12:05hs",
            "19:05hs"
          ],
          "sabados_domingos_ida": [
            "10:35hs",
            "18:35hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "La Picada",
        "precio": 1900,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:05hs",
            "12:05hs",
            "19:05hs"
          ],
          "sabados_domingos_ida": [
            "10:35hs",
            "18:35hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Colonia Nueva",
        "precio": 2500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:05hs",
            "12:05hs",
            "19:05hs"
          ],
          "sabados_domingos_ida": [
            "10:35hs",
            "18:35hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "La Balsa",
        "precio": 2900,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:05hs",
            "12:05hs",
            "19:05hs"
          ],
          "sabados_domingos_ida": [
            "10:35hs",
            "18:35hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Escuela Agrotecnica",
        "precio": 3600,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:05hs",
            "12:05hs",
            "19:05hs"
          ],
          "sabados_domingos_ida": [
            "10:35hs",
            "18:35hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Villa Urquiza",
        "precio": 3700,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:05hs",
            "12:05hs",
            "19:05hs"
          ],
          "sabados_domingos_ida": [
            "10:35hs",
            "18:35hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }
    ]
  },
  {
    "origen": "Colonia Avellaneda",
    "destinos": [
      {
        "destino": "Empalme Ruta 12 Y 18",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:10hs",
            "12:10hs",
            "19:10hs"
          ],
          "sabados_domingos_ida": [
            "10:40hs",
            "18:40hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Sauce Montrul",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:10hs",
            "12:10hs",
            "19:10hs"
          ],
          "sabados_domingos_ida": [
            "10:40hs",
            "18:40hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Acceso Escuela Almafuerte",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:10hs",
            "12:10hs",
            "19:10hs"
          ],
          "sabados_domingos_ida": [
            "10:40hs",
            "18:40hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Escuela Almafuerte",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:10hs",
            "12:10hs",
            "19:10hs"
          ],
          "sabados_domingos_ida": [
            "10:40hs",
            "18:40hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "La Picada",
        "precio": 1700,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:10hs",
            "12:10hs",
            "19:10hs"
          ],
          "sabados_domingos_ida": [
            "10:40hs",
            "18:40hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Colonia Nueva",
        "precio": 1900,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:10hs",
            "12:10hs",
            "19:10hs"
          ],
          "sabados_domingos_ida": [
            "10:40hs",
            "18:40hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "La Balsa",
        "precio": 2800,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:10hs",
            "12:10hs",
            "19:10hs"
          ],
          "sabados_domingos_ida": [
            "10:40hs",
            "18:40hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Escuela Agrotecnica",
        "precio": 3500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:10hs",
            "12:10hs",
            "19:10hs"
          ],
          "sabados_domingos_ida": [
            "10:40hs",
            "18:40hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      },
      {
        "destino": "Villa Urquiza",
        "precio": 3600,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:10hs",
            "12:10hs",
            "19:10hs"
          ],
          "sabados_domingos_ida": [
            "10:40hs",
            "18:40hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }
    ]
  }
];
// 🔤 Normalizar texto
function limpiarTexto(texto) {
  return texto.toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[-_,()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// 🏠 GET raíz
app.get('/', (req, res) => {
  res.send('🚌 API de colectivos funcionando con horarios completos');
});

// 🔍 GET /rutas?origen=X&destino=Y
app.get('/rutas', (req, res) => {
  const origenParam = limpiarTexto(req.query.origen || "");
  const destinoParam = limpiarTexto(req.query.destino || "");

  if (!origenParam || !destinoParam) {
    return res.json(rutas);
  }

  const ruta = rutas.find(r => limpiarTexto(r.origen) === origenParam);
  if (!ruta) return res.status(404).json({ mensaje: "Origen no encontrado" });

  const destino = ruta.destinos.find(d => limpiarTexto(d.destino).includes(destinoParam));
  if (!destino) return res.status(404).json({ mensaje: "Destino no encontrado para ese origen" });

  return res.json([{ origen: ruta.origen, destinos: [destino] }]);
});

// 🔁 GET /rutas/:origen (todos los destinos desde una ciudad)
app.get('/rutas/:origen', (req, res) => {
  const origenParam = limpiarTexto(req.params.origen);
  const ruta = rutas.find(r => limpiarTexto(r.origen) === origenParam);

  if (!ruta) return res.status(404).json({ mensaje: "Origen no encontrado" });

  res.json(ruta.destinos);
});

// 🚀 Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
