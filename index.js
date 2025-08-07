
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
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:36hs",
            "18:06hs"
          ],
          "sabados_domingos_vuelta": [
            "20:21hs"
          ],
          "diario": [
            "13:51hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:35hs",
            "18:05hs"
          ],
          "sabados_domingos_vuelta": [
            "20:20hs"
          ],
          "diario": [
            "13:51hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:30hs",
            "18:00hs"
          ],
          "sabados_domingos_vuelta": [
            "20:15hs"
          ],
          "diario": [
            "13:45hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:25hs",
            "17:55hs"
          ],
          "sabados_domingos_vuelta": [
            "20:10hs"
          ],
          "diario": [
            "13:40hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:15hs",
            "17:45hs"
          ],
          "sabados_domingos_vuelta": [
            "20:00hs"
          ],
          "diario": [
            "13:30hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:02hs",
            "17:32hs"
          ],
          "sabados_domingos_vuelta": [
            "19:47hs"
          ],
          "diario": [
            "13:17hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:00hs",
            "17:30hs"
          ],
          "sabados_domingos_vuelta": [
            "19:45hs"
          ],
          "diario": [
            "13:15hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "07:05hs",
            "18:35hs"
          ],
          "sabados_domingos_vuelta": [
            "20:50hs"
          ],
          "diario": [
            "14:20hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:45hs",
            "18:15hs"
          ],
          "sabados_domingos_vuelta": [
            "20:30hs"
          ],
          "diario": [
            "14:00hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:40hs",
            "18:10hs"
          ],
          "sabados_domingos_vuelta": [
            "20:25hs"
          ],
          "diario": [
            "13:55hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:36hs",
            "18:06hs"
          ],
          "sabados_domingos_vuelta": [
            "20:21hs"
          ],
          "diario": [
            "13:51hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:35hs",
            "18:05hs"
          ],
          "sabados_domingos_vuelta": [
            "20:20hs"
          ],
          "diario": [
            "13:50hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:30hs",
            "18:00hs"
          ],
          "sabados_domingos_vuelta": [
            "20:15hs"
          ],
          "diario": [
            "13:45hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:25hs",
            "17:55hs"
          ],
          "sabados_domingos_vuelta": [
            "20:10hs"
          ],
          "diario": [
            "13:40hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:15hs",
            "17:45hs"
          ],
          "sabados_domingos_vuelta": [
            "20:00hs"
          ],
          "diario": [
            "13:30hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:02hs",
            "17:32hs"
          ],
          "sabados_domingos_vuelta": [
            "19:47hs"
          ],
          "diario": [
            "13:17hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:00hs",
            "17:30hs"
          ],
          "sabados_domingos_vuelta": [
            "19:45hs"
          ],
          "diario": [
            "13:15hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:45hs",
            "18:15hs"
          ],
          "sabados_domingos_vuelta": [
            "20:30hs"
          ],
          "diario": [
            "14:00hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:40hs",
            "18:10hs"
          ],
          "sabados_domingos_vuelta": [
            "20:25hs"
          ],
          "diario": [
            "13:55hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:36hs",
            "18:06hs"
          ],
          "sabados_domingos_vuelta": [
            "20:21hs"
          ],
          "diario": [
            "13:51hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:35hs",
            "18:05hs"
          ],
          "sabados_domingos_vuelta": [
            "20:20hs"
          ],
          "diario": [
            "13:50hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:30hs",
            "18:00hs"
          ],
          "sabados_domingos_vuelta": [
            "20:15hs"
          ],
          "diario": [
            "13:45hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:25hs",
            "17:55hs"
          ],
          "sabados_domingos_vuelta": [
            "20:10hs"
          ],
          "diario": [
            "13:40hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:15hs",
            "17:45hs"
          ],
          "sabados_domingos_vuelta": [
            "20:00hs"
          ],
          "diario": [
            "13:30hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:02hs",
            "17:32hs"
          ],
          "sabados_domingos_vuelta": [
            "19:47hs"
          ],
          "diario": [
            "13:17hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
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
          "lunes_a_viernes_vuelta": [
            "06:00hs",
            "17:30hs"
          ],
          "sabados_domingos_vuelta": [
            "19:45hs"
          ],
          "diario": [
            "13:15hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      }
    ]
  },
  {
    "origen": "Empalme Ruta 12 Y 18",
    "destinos": [
      {
        "destino": "Sauce Montrul",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:30hs",
            "12:30hs",
            "19:30hs"
          ],
          "sabados_domingos_ida": [
            "11:00hs",
            "19:00hs"
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
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Acceso Escuela Almafuerte",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:30hs",
            "12:30hs",
            "19:30hs"
          ],
          "sabados_domingos_ida": [
            "11:00hs",
            "19:00hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:36hs",
            "18:06hs"
          ],
          "sabados_domingos_vuelta": [
            "20:21hs"
          ],
          "diario": [
            "13:51hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Escuela Almafuerte",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:30hs",
            "12:30hs",
            "19:30hs"
          ],
          "sabados_domingos_ida": [
            "11:00hs",
            "19:00hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:35hs",
            "18:05hs"
          ],
          "sabados_domingos_vuelta": [
            "20:20hs"
          ],
          "diario": [
            "13:50hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "La Picada",
        "precio": 1700,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:30hs",
            "12:30hs",
            "19:30hs"
          ],
          "sabados_domingos_ida": [
            "11:00hs",
            "19:00hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:30hs",
            "18:00hs"
          ],
          "sabados_domingos_vuelta": [
            "20:15hs"
          ],
          "diario": [
            "13:45hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Colonia Nueva",
        "precio": 1900,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:30hs",
            "12:30hs",
            "19:30hs"
          ],
          "sabados_domingos_ida": [
            "11:00hs",
            "19:00hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:25hs",
            "17:55hs"
          ],
          "sabados_domingos_vuelta": [
            "20:10hs"
          ],
          "diario": [
            "13:40hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "La Balsa",
        "precio": 2600,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:30hs",
            "12:30hs",
            "19:30hs"
          ],
          "sabados_domingos_ida": [
            "11:00hs",
            "19:00hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:15hs",
            "17:45hs"
          ],
          "sabados_domingos_vuelta": [
            "20:00hs"
          ],
          "diario": [
            "13:30hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Escuela Agrotecnica",
        "precio": 3200,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:30hs",
            "12:30hs",
            "19:30hs"
          ],
          "sabados_domingos_ida": [
            "11:00hs",
            "19:00hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:02hs",
            "17:32hs"
          ],
          "sabados_domingos_vuelta": [
            "19:47hs"
          ],
          "diario": [
            "13:17hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Villa Urquiza",
        "precio": 3300,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:30hs",
            "12:30hs",
            "19:30hs"
          ],
          "sabados_domingos_ida": [
            "11:00hs",
            "19:00hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:00hs",
            "17:30hs"
          ],
          "sabados_domingos_vuelta": [
            "19:45hs"
          ],
          "diario": [
            "13:15hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      }
    ]
  },
  {
    "origen": "Sauce Montrul",
    "destinos": [
      {
        "destino": "Acceso Escuela Almafuerte",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:35hs",
            "12:35hs",
            "19:35hs"
          ],
          "sabados_domingos_ida": [
            "11:05hs",
            "19:05hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:36hs",
            "18:06hs"
          ],
          "sabados_domingos_vuelta": [
            "20:21hs"
          ],
          "diario": [
            "13:51hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Escuela Almafuerte",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:35hs",
            "12:35hs",
            "19:35hs"
          ],
          "sabados_domingos_ida": [
            "11:05hs",
            "19:05hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:35hs",
            "18:05hs"
          ],
          "sabados_domingos_vuelta": [
            "20:20hs"
          ],
          "diario": [
            "13:50hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "La Picada",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:35hs",
            "12:35hs",
            "19:35hs"
          ],
          "sabados_domingos_ida": [
            "11:05hs",
            "19:05hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:30hs",
            "18:00hs"
          ],
          "sabados_domingos_vuelta": [
            "20:15hs"
          ],
          "diario": [
            "13:45hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Colonia Nueva",
        "precio": 1900,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:35hs",
            "12:35hs",
            "19:35hs"
          ],
          "sabados_domingos_ida": [
            "11:05hs",
            "19:05hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:25hs",
            "17:55hs"
          ],
          "sabados_domingos_vuelta": [
            "20:10hs"
          ],
          "diario": [
            "13:40hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "La Balsa",
        "precio": 2500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:35hs",
            "12:35hs",
            "19:35hs"
          ],
          "sabados_domingos_ida": [
            "11:05hs",
            "19:05hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:15hs",
            "17:45hs"
          ],
          "sabados_domingos_vuelta": [
            "20:00hs"
          ],
          "diario": [
            "13:30hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Escuela Agrotecnica",
        "precio": 3100,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:35hs",
            "12:35hs",
            "19:35hs"
          ],
          "sabados_domingos_ida": [
            "11:05hs",
            "19:05hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:02hs",
            "17:32hs"
          ],
          "sabados_domingos_vuelta": [
            "19:47hs"
          ],
          "diario": [
            "13:17hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Villa Urquiza",
        "precio": 3200,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:35hs",
            "12:35hs",
            "19:35hs"
          ],
          "sabados_domingos_ida": [
            "11:05hs",
            "19:05hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:00hs",
            "17:30hs"
          ],
          "sabados_domingos_vuelta": [
            "19:45hs"
          ],
          "diario": [
            "13:15hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      }
    ]
  },
  {
    "origen": "Acceso Escuela Almafuerte",
    "destinos": [
      {
        "destino": "Escuela Almafuerte",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:39hs",
            "12:39hs",
            "19:39hs"
          ],
          "sabados_domingos_ida": [
            "11:09hs",
            "19:09hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:35hs",
            "18:05hs"
          ],
          "sabados_domingos_vuelta": [
            "20:20hs"
          ],
          "diario": [
            "13:50hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "La Picada",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:39hs",
            "12:39hs",
            "19:39hs"
          ],
          "sabados_domingos_ida": [
            "11:09hs",
            "19:09hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:30hs",
            "18:00hs"
          ],
          "sabados_domingos_vuelta": [
            "20:15hs"
          ],
          "diario": [
            "13:45hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Colonia Nueva",
        "precio": 1700,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:39hs",
            "12:39hs",
            "19:39hs"
          ],
          "sabados_domingos_ida": [
            "11:09hs",
            "19:09hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:25hs",
            "17:55hs"
          ],
          "sabados_domingos_vuelta": [
            "20:10hs"
          ],
          "diario": [
            "13:40hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "La Balsa",
        "precio": 2500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:39hs",
            "12:39hs",
            "19:39hs"
          ],
          "sabados_domingos_ida": [
            "11:09hs",
            "19:09hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:15hs",
            "17:45hs"
          ],
          "sabados_domingos_vuelta": [
            "20:00hs"
          ],
          "diario": [
            "13:30hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Escuela Agrotecnica",
        "precio": 2400,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:39hs",
            "12:39hs",
            "19:39hs"
          ],
          "sabados_domingos_ida": [
            "11:09hs",
            "19:09hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:02hs",
            "17:32hs"
          ],
          "sabados_domingos_vuelta": [
            "19:47hs"
          ],
          "diario": [
            "13:17hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Villa Urquiza",
        "precio": 2500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:39hs",
            "12:39hs",
            "19:39hs"
          ],
          "sabados_domingos_ida": [
            "11:09hs",
            "19:09hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:00hs",
            "17:30hs"
          ],
          "sabados_domingos_vuelta": [
            "19:45hs"
          ],
          "diario": [
            "13:15hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      }
    ]
  },
  {
    "origen": "Escuela Almafuerte",
    "destinos": [
      {
        "destino": "La Picada",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:40hs",
            "12:40hs",
            "19:40hs"
          ],
          "sabados_domingos_ida": [
            "11:10hs",
            "19:10hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:30hs",
            "18:00hs"
          ],
          "sabados_domingos_vuelta": [
            "20:15hs"
          ],
          "diario": [
            "13:45hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Colonia Nueva",
        "precio": 1700,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:40hs",
            "12:40hs",
            "19:40hs"
          ],
          "sabados_domingos_ida": [
            "11:10hs",
            "19:10hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:25hs",
            "17:55hs"
          ],
          "sabados_domingos_vuelta": [
            "20:10hs"
          ],
          "diario": [
            "13:40hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "La Balsa",
        "precio": 1900,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:40hs",
            "12:40hs",
            "19:40hs"
          ],
          "sabados_domingos_ida": [
            "11:10hs",
            "19:10hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:15hs",
            "17:45hs"
          ],
          "sabados_domingos_vuelta": [
            "20:00hs"
          ],
          "diario": [
            "13:30hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Escuela Agrotecnica",
        "precio": 2400,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:40hs",
            "12:40hs",
            "19:40hs"
          ],
          "sabados_domingos_ida": [
            "11:10hs",
            "19:10hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:02hs",
            "17:32hs"
          ],
          "sabados_domingos_vuelta": [
            "19:47hs"
          ],
          "diario": [
            "13:17hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Villa Urquiza",
        "precio": 2500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:40hs",
            "12:40hs",
            "19:40hs"
          ],
          "sabados_domingos_ida": [
            "11:10hs",
            "19:10hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:00hs",
            "17:30hs"
          ],
          "sabados_domingos_vuelta": [
            "19:45hs"
          ],
          "diario": [
            "13:15hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      }
    ]
  },
  {
    "origen": "La Picada",
    "destinos": [
      {
        "destino": "Colonia Nueva",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:45hs",
            "12:45hs",
            "19:45hs"
          ],
          "sabados_domingos_ida": [
            "11:15hs",
            "19:15hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:25hs",
            "17:55hs"
          ],
          "sabados_domingos_vuelta": [
            "20:10hs"
          ],
          "diario": [
            "13:40hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "La Balsa",
        "precio": 1900,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:45hs",
            "12:45hs",
            "19:45hs"
          ],
          "sabados_domingos_ida": [
            "11:15hs",
            "19:15hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:15hs",
            "17:45hs"
          ],
          "sabados_domingos_vuelta": [
            "20:00hs"
          ],
          "diario": [
            "13:30hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Escuela Agrotecnica",
        "precio": 2400,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:45hs",
            "12:45hs",
            "19:45hs"
          ],
          "sabados_domingos_ida": [
            "11:15hs",
            "19:15hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:02hs",
            "17:32hs"
          ],
          "sabados_domingos_vuelta": [
            "19:47hs"
          ],
          "diario": [
            "13:17hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Villa Urquiza",
        "precio": 2500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:45hs",
            "12:45hs",
            "19:45hs"
          ],
          "sabados_domingos_ida": [
            "11:15hs",
            "19:15hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:00hs",
            "17:30hs"
          ],
          "sabados_domingos_vuelta": [
            "19:45hs"
          ],
          "diario": [
            "13:15hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      }
    ]
  },
  {
    "origen": "Colonia Nueva",
    "destinos": [
      {
        "destino": "La Balsa",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:50hs",
            "12:50hs",
            "19:50hs"
          ],
          "sabados_domingos_ida": [
            "11:20hs",
            "19:20hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:15hs",
            "17:45hs"
          ],
          "sabados_domingos_vuelta": [
            "20:00hs"
          ],
          "diario": [
            "13:30hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Escuela Agrotecnica",
        "precio": 1700,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:50hs",
            "12:50hs",
            "19:50hs"
          ],
          "sabados_domingos_ida": [
            "11:20hs",
            "19:20hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:02hs",
            "17:32hs"
          ],
          "sabados_domingos_vuelta": [
            "19:47hs"
          ],
          "diario": [
            "13:17hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Villa Urquiza",
        "precio": 1800,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:50hs",
            "12:50hs",
            "19:50hs"
          ],
          "sabados_domingos_ida": [
            "11:20hs",
            "19:20hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:00hs",
            "17:30hs"
          ],
          "sabados_domingos_vuelta": [
            "19:45hs"
          ],
          "diario": [
            "13:15hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      }
    ]
  },
  {
    "origen": "La Balsa",
    "destinos": [
      {
        "destino": "Escuela Agrotecnica",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "7:00hs",
            "13:00hs",
            "20:00hs"
          ],
          "sabados_domingos_ida": [
            "11:30hs",
            "19:30hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:02hs",
            "17:32hs"
          ],
          "sabados_domingos_vuelta": [
            "19:47hs"
          ],
          "diario": [
            "13:17hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Villa Urquiza",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "7:00hs",
            "13:00hs",
            "20:00hs"
          ],
          "sabados_domingos_ida": [
            "11:30hs",
            "19:30hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:00hs",
            "17:30hs"
          ],
          "sabados_domingos_vuelta": [
            "19:45hs"
          ],
          "diario": [
            "13:15hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      }
    ]
  },
  {
    "origen": "Escuela Agrotecnica",
    "destinos": [
      {
        "destino": "Villa Urquiza",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "7:13hs",
            "13:13hs",
            "20:13hs"
          ],
          "sabados_domingos_ida": [
            "11:43hs",
            "19:43hs"
          ],
          "lunes_a_viernes_vuelta": [
            "06:00hs",
            "17:30hs"
          ],
          "sabados_domingos_vuelta": [
            "19:45hs"
          ],
          "diario": [
            "13:15hs"
          ],
          "domingos_ida": [],
          "domingos_vuelta": [],
          "diario_ida": [],
          "diario_vuelta": []
        }
      }
    ]
  },
  {
    "origen": "Paraná",
    "destinos": [
      {
        "destino": "Oro Verde",
        "precio": 1500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:15hs",
            "8:35hs",
            "9:20hs",
            "11:00hs",
            "12:00hs",
            "14:00hs",
            "15:00hs",
            "17:50hs",
            "21:00hs"
          ],
          "domingos_ida": [
            "7:15hs",
            "10:45hs",
            "13:30hs"
          ],
          "diario_ida": [
            "16:30hs",
            "20:15hs",
            "23:00hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": [],
          "diario": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Colonia Ensayo",
        "precio": 2000,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:15hs",
            "8:35hs",
            "9:20hs",
            "11:00hs",
            "12:00hs",
            "14:00hs",
            "15:00hs",
            "17:50hs",
            "21:00hs"
          ],
          "domingos_ida": [
            "7:15hs",
            "10:45hs",
            "13:30hs"
          ],
          "diario_ida": [
            "16:30hs",
            "20:15hs",
            "23:00hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": [],
          "diario": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Aldea Brasilera",
        "precio": 2500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:15hs",
            "8:35hs",
            "9:20hs",
            "11:00hs",
            "12:00hs",
            "14:00hs",
            "15:00hs",
            "17:50hs",
            "21:00hs"
          ],
          "domingos_ida": [
            "7:15hs",
            "10:45hs",
            "13:30hs"
          ],
          "diario_ida": [
            "16:30hs",
            "20:15hs",
            "23:00hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": [],
          "diario": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Spattzenkuter",
        "precio": 3400,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:15hs",
            "8:35hs",
            "9:20hs",
            "11:00hs",
            "12:00hs",
            "14:00hs",
            "15:00hs",
            "17:50hs",
            "21:00hs"
          ],
          "domingos_ida": [
            "7:15hs",
            "10:45hs",
            "13:30hs"
          ],
          "diario_ida": [
            "16:30hs",
            "20:15hs",
            "23:00hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": [],
          "diario": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Valle María",
        "precio": 3900,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:15hs",
            "8:35hs",
            "9:20hs",
            "11:00hs",
            "12:00hs",
            "14:00hs",
            "15:00hs",
            "17:50hs",
            "21:00hs"
          ],
          "domingos_ida": [
            "7:15hs",
            "10:45hs",
            "13:30hs"
          ],
          "diario_ida": [
            "16:30hs",
            "20:15hs",
            "23:00hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": [],
          "diario": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "La Tablilla",
        "precio": 4500,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:15hs",
            "8:35hs",
            "9:20hs",
            "11:00hs",
            "12:00hs",
            "14:00hs",
            "15:00hs",
            "17:50hs",
            "21:00hs"
          ],
          "domingos_ida": [
            "7:15hs",
            "10:45hs",
            "13:30hs"
          ],
          "diario_ida": [
            "16:30hs",
            "20:15hs",
            "23:00hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": [],
          "diario": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "La Virgen",
        "precio": 4700,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:15hs",
            "8:35hs",
            "9:20hs",
            "11:00hs",
            "12:00hs",
            "14:00hs",
            "15:00hs",
            "17:50hs",
            "21:00hs"
          ],
          "domingos_ida": [
            "7:15hs",
            "10:45hs",
            "13:30hs"
          ],
          "diario_ida": [
            "16:30hs",
            "20:15hs",
            "23:00hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": [],
          "diario": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Strobel",
        "precio": 5000,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:15hs",
            "8:35hs",
            "9:20hs",
            "11:00hs",
            "12:00hs",
            "14:00hs",
            "15:00hs",
            "17:50hs",
            "21:00hs"
          ],
          "domingos_ida": [
            "7:15hs",
            "10:45hs",
            "13:30hs"
          ],
          "diario_ida": [
            "16:30hs",
            "20:15hs",
            "23:00hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": [],
          "diario": [],
          "diario_vuelta": []
        }
      },
      {
        "destino": "Diamante",
        "precio": 5600,
        "horarios": {
          "lunes_a_viernes_ida": [
            "6:15hs",
            "8:35hs",
            "9:20hs",
            "11:00hs",
            "12:00hs",
            "14:00hs",
            "15:00hs",
            "17:50hs",
            "21:00hs"
          ],
          "domingos_ida": [
            "7:15hs",
            "10:45hs",
            "13:30hs"
          ],
          "diario_ida": [
            "16:30hs",
            "20:15hs",
            "23:00hs"
          ],
          "lunes_a_viernes_vuelta": [],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": [],
          "diario": [],
          "diario_vuelta": []
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
