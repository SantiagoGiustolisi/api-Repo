const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Datos de rutas
const rutas = [
  {
    origen: "Parana",
    destinos: [
      { destino: "San Benito", hora_salida: "08:15", hora_llegada: "08:40", precio: 1500 },
      { destino: "C Avellaneda", hora_salida: "08:15", hora_llegada: "09:00", precio: 2900 },
      { destino: "Sauce Montrul", hora_salida: "08:15", hora_llegada: "09:15", precio: 4200 },
      { destino: "Picadita", hora_salida: "08:15", hora_llegada: "09:30", precio: 5500 },
      { destino: "La Balsa", hora_salida: "08:15", hora_llegada: "09:40", precio: 6500 },
      { destino: "Urquiza", hora_salida: "08:15", hora_llegada: "10:00", precio: 8500 }
    ]
  },
  {
    origen: "San Benito",
    destinos: [
      { destino: "C Avellaneda", hora_salida: "08:40", hora_llegada: "09:00", precio: 1400 },
      { destino: "Sauce Montrul", hora_salida: "08:40", hora_llegada: "09:15", precio: 2700 },
      { destino: "Picadita", hora_salida: "08:40", hora_llegada: "09:30", precio: 4000 },
      { destino: "La Balsa", hora_salida: "08:40", hora_llegada: "09:40", precio: 5000 },
      { destino: "Urquiza", hora_salida: "08:40", hora_llegada: "10:00", precio: 7000 }
    ]
  },
  {
    origen: "C Avellaneda",
    destinos: [
      { destino: "Sauce Montrul", hora_salida: "09:00", hora_llegada: "09:15", precio: 1300 },
      { destino: "Picadita", hora_salida: "09:00", hora_llegada: "09:30", precio: 2600 },
      { destino: "La Balsa", hora_salida: "09:00", hora_llegada: "09:40", precio: 3600 },
      { destino: "Urquiza", hora_salida: "09:00", hora_llegada: "10:00", precio: 5600 }
    ]
  },
  {
    origen: "Sauce Montrul",
    destinos: [
      { destino: "Picadita", hora_salida: "09:15", hora_llegada: "09:30", precio: 1300 },
      { destino: "La Balsa", hora_salida: "09:15", hora_llegada: "09:40", precio: 2300 },
      { destino: "Urquiza", hora_salida: "09:15", hora_llegada: "10:00", precio: 4300 }
    ]
  },
  {
    origen: "Picadita",
    destinos: [
      { destino: "La Balsa", hora_salida: "09:30", hora_llegada: "09:40", precio: 1000 },
      { destino: "Urquiza", hora_salida: "09:30", hora_llegada: "10:00", precio: 2300 }
    ]
  },
  {
    origen: "La Balsa",
    destinos: [
      { destino: "Urquiza", hora_salida: "09:40", hora_llegada: "10:00", precio: 2000 }
    ]
  }
];

// Función para normalizar texto
function limpiarTexto(texto) {
  return texto.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[-_,()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Endpoint raíz
app.get('/', (req, res) => {
  res.send('¡API de colectivos funcionando con nuevo formato!');
});

// Obtener todas las rutas
app.get('/rutas', (req, res) => {
  res.json(rutas);
});

// Buscar destinos desde un origen
app.get('/rutas/:origen', (req, res) => {
  const origenParam = limpiarTexto(req.params.origen);
  const ruta = rutas.find(r => limpiarTexto(r.origen) === origenParam);

  if (!ruta) {
    return res.status(404).json({ mensaje: "Origen no encontrado" });
  }

  res.json(ruta.destinos);
});

// Buscar ruta específica de origen a destino
app.get('/rutas/:origen/:destino', (req, res) => {
  const origenParam = limpiarTexto(req.params.origen);
  const destinoParam = limpiarTexto(req.params.destino);

  const ruta = rutas.find(r => limpiarTexto(r.origen) === origenParam);
  if (!ruta) {
    return res.status(404).json({ mensaje: "Origen no encontrado" });
  }

  const destino = ruta.destinos.find(d => limpiarTexto(d.destino) === destinoParam);
  if (!destino) {
    return res.status(404).json({ mensaje: "Destino no encontrado para ese origen" });
  }

  res.json(destino);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
