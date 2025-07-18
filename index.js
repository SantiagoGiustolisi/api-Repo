const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Líneas individuales únicamente
const lineas = [
  {
    id: 5,
    nombre: "Paraná",
    horarios: {
      "Lunes a Viernes": {
        salidas_parana: ["6:15", "8:35", "9:20", "11:00", "12:00", "14:00", "15:00", "16:30", "17:50", "20:15", "21:00", "23:00"]
      },
      "Sábados": {
        salidas_parana: ["16:30", "20:15", "23:00"]
      },
      "Domingos y Feriados": {
        salidas_parana: ["7:15", "10:45", "13:30", "16:30", "20:15", "23:00"]
      },
      "Todos los días (menos sábados)": {
        salidas_parana: ["8:15"]
      }
    }
  },
  {
    id: 6,
    nombre: "Federación",
    horarios: {
      "Todos los días, menos sábados": {
        salidas_federacion: ["15:40"]
      }
    }
  },
  {
    id: 7,
    nombre: "Villa Urquiza",
    horarios: {
      "Todos los días, menos sábados": {
        salidas_villaurquiza: ["15:40"]
      }
    }
  },
  {
    id: 8,
    nombre: "Diamante",
    horarios: {
      "Lunes a Viernes": {
        salidas_diamante: ["5:00", "5:45", "7:30", "8:30", "10:30", "12:30", "13:40", "15:00", "16:30", "18:15", "19:30", "21:30"]
      },
      "Sábados": {
        salidas_diamante: ["15:00", "18:00", "21:30"]
      },
      "Domingos y Feriados": {
        salidas_diamante: ["6:00", "9:00", "12:15", "15:00", "18:00", "21:30"]
      }
    }
  },
  {
    id: 9,
    nombre: "Valle María",
    horarios: {
      "Lunes a Viernes": {
        salidas_vallemaria: ["7:40"]
      }
    }
  }
];

// Función para limpiar texto
function limpiarTexto(texto) {
  return texto.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[-_,()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡API de colectivos funcionando!');
});

// Ruta que devuelve todas las líneas individuales
app.get('/lineas', (req, res) => {
  res.json(lineas);
});

// Ruta para ver todos los días de una línea
app.get('/lineas/:linea', (req, res) => {
  const lineaParam = limpiarTexto(req.params.linea);
  const linea = lineas.find(l => limpiarTexto(l.nombre) === lineaParam);

  if (!linea) {
    return res.status(404).json({ mensaje: "Línea no encontrada" });
  }

  res.json(linea.horarios);
});

// Ruta para ver horarios por día y destino
app.get('/lineas/:linea/:dia', (req, res) => {
  const lineaParam = limpiarTexto(req.params.linea);
  const diaParam = limpiarTexto(req.params.dia);
  const destinoParam = req.query.destino ? limpiarTexto(req.query.destino) : null;

  const linea = lineas.find(l => limpiarTexto(l.nombre) === lineaParam);
  if (!linea) {
    return res.status(404).json({ mensaje: "Línea no encontrada" });
  }

  const diasDisponibles = Object.keys(linea.horarios);
  const diaEncontrado = diasDisponibles.find(d => limpiarTexto(d) === diaParam);
  if (!diaEncontrado) {
    return res.status(404).json({ mensaje: `No hay horarios para el día "${req.params.dia}" en la línea "${req.params.linea}"` });
  }

  const horariosDia = linea.horarios[diaEncontrado];

  if (!destinoParam) {
    return res.json(horariosDia);
  }

  const horariosFiltrados = {};
  for (const key in horariosDia) {
    const keyLimpia = limpiarTexto(key);
    if (keyLimpia.startsWith('salidas_')) {
      const destinoClave = keyLimpia.split('salidas_')[1];
      if (destinoClave === destinoParam) {
        horariosFiltrados[key] = horariosDia[key];
      }
    }
  }

  if (Object.keys(horariosFiltrados).length === 0) {
    return res.status(404).json({ mensaje: `No hay horarios para el destino "${req.query.destino}"` });
  }

  return res.json(horariosFiltrados);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
