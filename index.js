
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
      "servicios": [
        {
          "tipo": "Coche Común",
          "precio": 1700,
          "horarios": {
            "lunes_a_viernes_ida": ["6:00hs", "12:00hs", "19:00hs"],
            "sabados_domingos_ida": ["10:30hs", "18:30hs"],
            "lunes_a_viernes_vuelta": ["07:10hs", "18:40hs"],
            "sabados_domingos_vuelta": ["20:55hs"],
            "diario": ["14:25hs"],
            "domingos_ida": [],
            "domingos_vuelta": [],
            "diario_ida": [],
            "diario_vuelta": []
          }
        }
      ]
      },
      
      {
        "destino": "Colonia Avellaneda",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Empalme Ruta 12 Y 18",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Sauce Montrul",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Acceso Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "La Picada",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Colonia Nueva",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "La Balsa",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Escuela Agrotecnica",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Villa Urquiza",
        "servicios": [
          {
            "tipo": "Coche Común",
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
        "destino": "Oro Verde",
        "servicios": [
          {
            "tipo": "Coche Común",
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
              "lunes_a_viernes_vuelta": [
                "5:42hs",
                "6:27hs",
                "8:12hs",
                "9:12hs",
                "11:12hs",
                "13:12hs",
                "14:22hs",
                "17:12hs",
                "18:57hs",
                "20:12hs"
              ],
              "sabados_domingos_ida": [],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:42hs",
                "9:42hs",
                "12:57hs"
              ],
              "diario": [],
              "diario_vuelta": [
                "15:42hs",
                "22:12hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Colonia Ensayo",
        "servicios": [
          {
            "tipo": "Coche Común",
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
              "lunes_a_viernes_vuelta": [
                "5:36hs",
                "6:21hs",
                "8:06hs",
                "9:06hs",
                "11:06hs",
                "13:06hs",
                "14:16hs",
                "17:06hs",
                "18:51hs",
                "20:06hs"
              ],
              "sabados_domingos_ida": [],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:36hs",
                "9:36hs",
                "12:51hs"
              ],
              "diario": [],
              "diario_vuelta": [
                "15:36hs",
                "22:06hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Brasilera",
        "servicios": [
          {
            "tipo": "Coche Común",
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
              "lunes_a_viernes_vuelta": [
                "5:33hs",
                "6:18hs",
                "8:03hs",
                "9:03hs",
                "11:03hs",
                "13:03hs",
                "14:13hs",
                "17:03hs",
                "18:48hs",
                "20:03hs"
              ],
              "sabados_domingos_ida": [],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:33hs",
                "9:33hs",
                "12:48hs"
              ],
              "diario": [],
              "diario_vuelta": [
                "15:33hs",
                "22:03hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Spattzenkuter",
        "servicios": [
          {
            "tipo": "Coche Común",
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
              "lunes_a_viernes_vuelta": [
                "5:29hs",
                "6:14hs",
                "7:59hs",
                "8:59hs",
                "10:59hs",
                "12:59hs",
                "14:09hs",
                "16:59hs",
                "18:44hs",
                "19:59hs"
              ],
              "sabados_domingos_ida": [],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:29hs",
                "9:29hs",
                "12:44hs"
              ],
              "diario": [],
              "diario_vuelta": [
                "15:29hs",
                "21:59hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Valle María",
        "servicios": [
          {
            "tipo": "Coche Común",
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
              "lunes_a_viernes_vuelta": [
                "5:23hs",
                "6:08hs",
                "7:53hs",
                "8:53hs",
                "10:53hs",
                "12:53hs",
                "14:03hs",
                "16:53hs",
                "18:38hs",
                "19:53hs"
              ],
              "sabados_domingos_ida": [],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:23hs",
                "9:23hs",
                "12:38hs"
              ],
              "diario": [],
              "diario_vuelta": [
                "15:23hs",
                "21:53hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Tablilla",
        "servicios": [
          {
            "tipo": "Coche Común",
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
              "lunes_a_viernes_vuelta": [
                "5:17hs",
                "6:02hs",
                "7:47hs",
                "8:47hs",
                "10:47hs",
                "12:47hs",
                "13:57hs",
                "16:47hs",
                "18:32hs",
                "19:47hs"
              ],
              "sabados_domingos_ida": [],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:17hs",
                "9:17hs",
                "12:32hs"
              ],
              "diario": [],
              "diario_vuelta": [
                "15:17hs",
                "21:47hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Virgen",
        "servicios": [
          {
            "tipo": "Coche Común",
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
              "lunes_a_viernes_vuelta": [
                "5:14hs",
                "5:59hs",
                "7:44hs",
                "8:44hs",
                "10:44hs",
                "12:44hs",
                "13:54hs",
                "16:44hs",
                "18:29hs",
                "19:44hs"
              ],
              "sabados_domingos_ida": [],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:14hs",
                "9:14hs",
                "12:29hs"
              ],
              "diario": [],
              "diario_vuelta": [
                "15:14hs",
                "21:44hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Strobel",
        "servicios": [
          {
            "tipo": "Coche Común",
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
              "lunes_a_viernes_vuelta": [
                "5:10hs",
                "5:55hs",
                "7:40hs",
                "8:40hs",
                "10:40hs",
                "12:40hs",
                "13:50hs",
                "16:40hs",
                "18:25hs",
                "19:40hs"
              ],
              "sabados_domingos_ida": [],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:10hs",
                "9:10hs",
                "12:25hs"
              ],
              "diario": [],
              "diario_vuelta": [
                "15:10hs",
                "21:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Diamante",
        "servicios": [
          {
            "tipo": "Coche Común",
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
              "lunes_a_viernes_vuelta": [
                "5:00hs",
                "5:45hs",
                "7:30hs",
                "8:30hs",
                "10:30hs",
                "12:30hs",
                "13:40hs",
                "16:30hs",
                "18:15hs",
                "19:30hs"
              ],
              "sabados_domingos_ida": [],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:00hs",
                "9:00hs",
                "12:15hs"
              ],
              "diario": [],
              "diario_vuelta": [
                "15:00hs",
                "21:30hs"
              ]
            }
          }
        ]
      },
      {
    "destino": "GNL Genolot",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 2700, "Cama": 3100 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:30hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["08:30hs"],
          "diario_ida": ["08:30hs"],
          "lunes_a_viernes_vuelta": ["21:05hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["21:05hs"],
          "diario_vuelta": ["21:05hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Tres Bocas",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 3100, "Cama": 3500 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:40hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["08:40hs"],
          "diario_ida": ["08:40hs"],
          "lunes_a_viernes_vuelta": ["20:55hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["20:55hs"],
          "diario_vuelta": ["20:55hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Quebacho",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 3500, "Cama": 3900 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Rambon",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 4400, "Cama": 4900 },
        "horarios": {
          "lunes_a_viernes_ida": ["09:00hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["09:00hs"],
          "diario_ida": ["09:00hs"],
          "lunes_a_viernes_vuelta": ["20:40hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["20:40hs"],
          "diario_vuelta": ["20:40hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Viale Acceso",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 6400, "Cama": 7200 },
        "horarios": {
          "lunes_a_viernes_ida": ["09:15hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["09:15hs"],
          "diario_ida": ["09:15hs"],
          "lunes_a_viernes_vuelta": ["20:20hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["20:20hs"],
          "diario_vuelta": ["20:20hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Rossier",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 6400, "Cama": 7200 },
        "horarios": {
          "lunes_a_viernes_ida": ["09:25hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["09:25hs"],
          "diario_ida": ["09:25hs"],
          "lunes_a_viernes_vuelta": ["20:10hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["20:10hs"],
          "diario_vuelta": ["20:10hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Tres Sauces",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 7400, "Cama": 8200 },
        "horarios": {
          "lunes_a_viernes_ida": ["09:37hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["09:37hs"],
          "diario_ida": ["09:37hs"],
          "lunes_a_viernes_vuelta": ["20:00hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["20:00hs"],
          "diario_vuelta": ["20:00hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Barbagelatta",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 8500, "Cama": 9500 },
        "horarios": {
          "lunes_a_viernes_ida": ["09:45hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["09:45hs"],
          "diario_ida": ["09:45hs"],
          "lunes_a_viernes_vuelta": ["19:50hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["19:50hs"],
          "diario_vuelta": ["19:50hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Pineiro",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 10000, "Cama": 11200 },
        "horarios": {
          "lunes_a_viernes_ida": ["09:55hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["09:55hs"],
          "diario_ida": ["09:55hs"],
          "lunes_a_viernes_vuelta": ["19:40hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["19:40hs"],
          "diario_vuelta": ["19:40hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Fca de Palmas",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 11500, "Cama": 12900 },
        "horarios": {
          "lunes_a_viernes_ida": ["10:06hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["10:06hs"],
          "diario_ida": ["10:06hs"],
          "lunes_a_viernes_vuelta": ["19:30hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["19:30hs"],
          "diario_vuelta": ["19:30hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Baño Oficial",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 13200, "Cama": 14800 },
        "horarios": {
          "lunes_a_viernes_ida": ["10:15hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["10:15hs"],
          "diario_ida": ["10:15hs"],
          "lunes_a_viernes_vuelta": ["19:20hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["19:20hs"],
          "diario_vuelta": ["19:20hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Villaguay",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 15600, "Cama": 17400 },
        "horarios": {
          "lunes_a_viernes_ida": ["10:30hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["10:30hs"],
          "diario_ida": ["10:30hs"],
          "lunes_a_viernes_vuelta": ["19:10hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["19:10hs"],
          "diario_vuelta": ["19:10hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Travichet",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 16600, "Cama": 18500 },
        "horarios": {
          "lunes_a_viernes_ida": ["10:20hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["10:20hs"],
          "diario_ida": ["10:20hs"],
          "lunes_a_viernes_vuelta": ["18:50hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["18:50hs"],
          "diario_vuelta": ["18:50hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Camino de Ripio",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 17500, "Cama": 19600 },
        "horarios": {
          "lunes_a_viernes_ida": ["10:25hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["10:25hs"],
          "diario_ida": ["10:25hs"],
          "lunes_a_viernes_vuelta": ["19:00hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["19:00hs"],
          "diario_vuelta": ["19:00hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Villa Clara",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 18000, "Cama": 20800 },
        "horarios": {
          "lunes_a_viernes_ida": ["10:50hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["10:50hs"],
          "diario_ida": ["10:50hs"],
          "lunes_a_viernes_vuelta": ["18:40hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["18:40hs"],
          "diario_vuelta": ["18:40hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Jubileo Acceso",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 20800, "Cama": 23300 },
        "horarios": {
          "lunes_a_viernes_ida": ["11:05hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["11:05hs"],
          "diario_ida": ["11:05hs"],
          "lunes_a_viernes_vuelta": ["18:25hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["18:25hs"],
          "diario_vuelta": ["18:25hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "San Salvador",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 22600, "Cama": 25300 },
        "horarios": {
          "lunes_a_viernes_ida": ["11:30hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["11:30hs"],
          "diario_ida": ["11:30hs"],
          "lunes_a_viernes_vuelta": ["18:10hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["18:10hs"],
          "diario_vuelta": ["18:10hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "General Campos",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 24300, "Cama": 27300 },
        "horarios": {
          "lunes_a_viernes_ida": ["11:50hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["11:50hs"],
          "diario_ida": ["11:50hs"],
          "lunes_a_viernes_vuelta": ["17:45hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["17:45hs"],
          "diario_vuelta": ["17:45hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Concordia",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 26100, "Cama": 29200 },
        "horarios": {
          "lunes_a_viernes_ida": ["12:45hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["12:45hs"],
          "diario_ida": ["12:45hs"],
          "lunes_a_viernes_vuelta": ["16:55hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["16:55hs"],
          "diario_vuelta": ["16:55hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Acceso Federacion",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 35500, "Cama": 39800 },
        "horarios": {
          "lunes_a_viernes_ida": ["13:35hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["13:35hs"],
          "diario_ida": ["13:35hs"],
          "lunes_a_viernes_vuelta": ["15:50hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["15:50hs"],
          "diario_vuelta": ["15:50hs"],
          "diario": []
        }
      }
    ]
  },
  {
    "destino": "Federacion",
    "servicios": [
      {
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 35500, "Cama": 39800 },
        "horarios": {
          "lunes_a_viernes_ida": ["13:45hs"],
          "sabados_domingos_ida": [],
          "domingos_ida": ["13:45hs"],
          "diario_ida": ["13:45hs"],
          "lunes_a_viernes_vuelta": ["15:40hs"],
          "sabados_domingos_vuelta": [],
          "domingos_vuelta": ["15:40hs"],
          "diario_vuelta": ["15:40hs"],
          "diario": []
        }
      }
    ]
  }
]
},

  {
    "origen": "San Benito",
    "destinos": [
      {
        "destino": "Colonia Avellaneda",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
      "destino": "Paraná",
      "servicios": [
        {
          "tipo": "Coche Común",
          "precio": 1700,
          "horarios": {
            "lunes_a_viernes_ida": ["07:10hs", "18:40hs"],
            "sabados_domingos_ida": ["20:55hs"],
            "lunes_a_viernes_vuelta": ["6:00hs", "12:00hs", "19:00hs"],
            "sabados_domingos_vuelta": ["10:30hs", "18:30hs"],
            "diario": ["14:25hs"],
            "domingos_ida": [],
            "domingos_vuelta": [],
            "diario_ida": [],
            "diario_vuelta": []
          }
        }
      ]
      },
      {
        "destino": "Empalme Ruta 12 Y 18",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Sauce Montrul",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Acceso Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "La Picada",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Colonia Nueva",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "La Balsa",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Escuela Agrotecnica",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Villa Urquiza",
        "servicios": [
          {
            "tipo": "Coche Común",
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
      "destino": "Paraná",
      "servicios": [
        {
          "tipo": "Coche Común",
          "precio": 1700,
          "horarios": {
            "lunes_a_viernes_ida": ["07:10hs", "18:40hs"],
            "sabados_domingos_ida": ["20:55hs"],
            "lunes_a_viernes_vuelta": ["6:00hs", "12:00hs", "19:00hs"],
            "sabados_domingos_vuelta": ["10:30hs", "18:30hs"],
            "diario": ["14:25hs"],
            "domingos_ida": [],
            "domingos_vuelta": [],
            "diario_ida": [],
            "diario_vuelta": []
          }
        }
      ]
    },
    ]
  },
  {
    "origen": "Colonia Avellaneda",
    "destinos": [
      {
        "destino": "Empalme Ruta 12 Y 18",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "San Benito",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "07:05hs",
                "18:35hs"
              ],
              "sabados_domingos_ida": [
                "20:50hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:05hs",
                "12:05hs",
                "19:05hs"
                
              ],
              "sabados_domingos_vuelta": [
                "10:35hs",
                "18:35hs"
                
              ],
              "diario": [
                "14:20hs"
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
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1800,
            "horarios": {
              "lunes_a_viernes_ida": [
               "07:05hs",
                "18:35hs"
              ],
              "sabados_domingos_ida": [
                "20:50hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                 "6:00hs",
                "12:00hs",
                "19:00hs"
              ],
              "sabados_domingos_vuelta": [
                
                "10:30hs",
                "18:30hs"
              ],
              "diario": [
                "14:20hs"
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
        "destino": "Sauce Montrul",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Acceso Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "La Picada",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Colonia Nueva",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "La Balsa",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Escuela Agrotecnica",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Villa Urquiza",
        "servicios": [
          {
            "tipo": "Coche Común",
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
      }
    ]
  },
  {
    "origen": "Empalme Ruta 12 Y 18",
    "destinos": [
      {
        "destino": "Sauce Montrul",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Colonia Avellaneda",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:45hs",
                "18:15hs"
              ],
              "sabados_domingos_ida": [
                "20:30hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:10hs",
                "12:10hs",
                "19:10hs"
                
              ],
              "sabados_domingos_vuelta": [
               
                 "10:40hs",
                "18:40hs"
              ],
              "diario": [
                "14:00hs"
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
        "destino": "San Benito",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:45hs",
                "18:15hs"
              ],
              "sabados_domingos_ida": [
                "20:30hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                "6:05hs",
                "12:05hs",
                "19:05hs"
              ],
              "sabados_domingos_vuelta": [
                "10:35hs",
                "18:35hs"
                
              ],
              "diario": [
                "14:00hs"
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
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1900,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:45hs",
                "18:15hs"
              ],
              "sabados_domingos_ida": [
                "20:30hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:00hs",
                "12:00hs",
                "19:00hs"
               
              ],
              "sabados_domingos_vuelta": [
                "10:30hs",
                "18:30hs"
                
              ],
              "diario": [
                "14:00hs"
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
        "destino": "Acceso Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "La Picada",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Colonia Nueva",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "La Balsa",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Escuela Agrotecnica",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Villa Urquiza",
        "servicios": [
          {
            "tipo": "Coche Común",
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
      }
    ]
  },
  {
    "origen": "Sauce Montrul",
    "destinos": [
      {
        "destino": "Acceso Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
       {
        "destino": "Empalme Ruta 12 Y 18",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                    "06:40hs",
                "18:10hs"
              ],
              "sabados_domingos_ida": [
               "20:25hs"
              ],
              "lunes_a_viernes_vuelta": [
            
                "6:30hs",
                "12:30hs",
                "19:30hs"
              ],
              "sabados_domingos_vuelta": [
                "11:00hs",
                "19:00hs"
              ],
              "diario": [
                "13:55hs"
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
        "destino": "Colonia Avellaneda",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:40hs",
                "18:10hs"
              ],
              "sabados_domingos_ida": [
                 "20:25hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:10hs",
                "12:10hs",
                "19:10hs"
              ],
              "sabados_domingos_vuelta": [
               
                "10:40hs",
                "18:40hs"
              ],
              "diario": [
                "13:55hs"
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
        "destino": "San Benito",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:40hs",
                "18:10hs"
              ],
              "sabados_domingos_ida": [
                "20:25hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                "6:05hs",
                "12:05hs",
                "19:05hs"
              ],
              "sabados_domingos_vuelta": [
                "10:35hs",
                "18:35hs"
              ],
              "diario": [
                "13:55hs"
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
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2000,
            "horarios": {
              "lunes_a_viernes_ida": [
                
                "06:40hs",
                "18:10hs"
              ],
              "sabados_domingos_ida": [
                 "20:25hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:00hs",
                "12:00hs",
                "19:00hs"
              ],
              "sabados_domingos_vuelta": [
               
                "10:30hs",
                "18:30hs"
              ],
              "diario": [
                "13:55hs"
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
        "destino": "Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "La Picada",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Colonia Nueva",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "La Balsa",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Escuela Agrotecnica",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Villa Urquiza",
        "servicios": [
          {
            "tipo": "Coche Común",
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
      }
    ]
  },
  {
    "origen": "Acceso Escuela Almafuerte",
    "destinos": [
      {
        "destino": "Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
       {
        "destino": "Sauce Montrul",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                  "06:36hs",
                "18:06hs"
              ],
              "sabados_domingos_ida": [
                "20:21hs"
              ],
              "lunes_a_viernes_vuelta": [
              
                "6:35hs",
                "12:35hs",
                "19:35hs"
              ],
              "sabados_domingos_vuelta": [
               
                 "11:05hs",
                "19:05hs"
              ],
              "diario": [
                "13:51hs"
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
        "destino": "Empalme Ruta 12 Y 18",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
            
                "06:36hs",
                "18:06hs"
              ],
              "sabados_domingos_ida": [
                "20:21hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:30hs",
                "12:30hs",
                "19:30hs"
              ],
              "sabados_domingos_vuelta": [
                
                "11:00hs",
                "19:00hs"
              ],
              "diario": [
                "13:51hs"
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
        "destino": "Colonia Avellaneda",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
               
                 "06:36hs",
                "18:06hs"
              ],
              "sabados_domingos_ida": [
                 "20:21hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:10hs",
                "12:10hs",
                "19:10hs"
              ],
              "sabados_domingos_vuelta": [
               
                "10:40hs",
                "18:40hs"
              ],
              "diario": [
                "13:51hs"
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
        "destino": "San Benito",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1700,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:36hs",
                "18:06hs"
              ],
              "sabados_domingos_ida": [
                "20:21hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:05hs",
                "12:05hs",
                "19:05hs"
              ],
              "sabados_domingos_vuelta": [
                
                "10:35hs",
                "18:35hs"
              ],
              "diario": [
                "13:51hs"
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
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2500,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:36hs",
                "18:06hs"
              ],
              "sabados_domingos_ida": [
                "20:21hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:00hs",
                "12:00hs",
                "19:00hs"
              ],
              "sabados_domingos_vuelta": [
                
                "10:30hs",
                "18:30hs"
              ],
              "diario": [
                "13:51hs"
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
        "destino": "La Picada",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Colonia Nueva",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "La Balsa",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Escuela Agrotecnica",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Villa Urquiza",
        "servicios": [
          {
            "tipo": "Coche Común",
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
      }
    ]
  },
  {
    "origen": "Escuela Almafuerte",
    "destinos": [
      {
        "destino": "La Picada",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Acceso Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:35hs",
                "18:05hs"
              ],
              "sabados_domingos_ida": [
                 "20:20hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                 "6:39hs",
                "12:39hs",
                "19:39hs"
              ],
              "sabados_domingos_vuelta": [
               
                "11:09hs",
                "19:09hs"
              ],
              "diario": [
                "13:50hs"
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
        "destino": "Sauce Montrul",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:35hs",
                "18:05hs"
              ],
              "sabados_domingos_ida": [
                 "20:20hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                "6:35hs",
                "12:35hs",
                "19:35hs"
              ],
              "sabados_domingos_vuelta": [
               
                "11:05hs",
                "19:05hs"
              ],
              "diario": [
                "13:50hs"
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
        "destino": "Empalme Ruta 12 Y 18",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                  "06:35hs",
                "18:05hs"
              ],
              "sabados_domingos_ida": [
                "20:20hs"
              ],
              "lunes_a_viernes_vuelta": [
              
                "6:30hs",
                "12:30hs",
                "19:30hs"
              ],
              "sabados_domingos_vuelta": [
               
                 "11:00hs",
                "19:00hs"
              ],
              "diario": [
                "13:50hs"
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
        "destino": "Colonia Avellaneda",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                  "06:35hs",
                "18:05hs"
              ],
              "sabados_domingos_ida": [
                "20:20hs"
              ],
              "lunes_a_viernes_vuelta": [
              
                "6:10hs",
                "12:10hs",
                "19:10hs"
              ],
              "sabados_domingos_vuelta": [
                
                "10:40hs",
                "18:40hs"
              ],
              "diario": [
                "13:50hs"
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
        "destino": "San Benito",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1700,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:35hs",
                "18:05hs"
              ],
              "sabados_domingos_ida": [
               "20:20hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:05hs",
                "12:05hs",
                "19:05hs"
              ],
              "sabados_domingos_vuelta": [
               
                  "10:35hs",
                "18:35hs"
              ],
              "diario": [
                "13:50hs"
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
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2500,
            "horarios": {
              "lunes_a_viernes_ida": [
                  "06:35hs",
                "18:05hs"
              ],
              "sabados_domingos_ida": [
               "20:20hs"
              ],
              "lunes_a_viernes_vuelta": [
              
                "6:00hs",
                "12:00hs",
                "19:00hs"
              ],
              "sabados_domingos_vuelta": [
                
                 "10:30hs",
                "18:30hs"
              ],
              "diario": [
                "13:51hs"
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
        "destino": "Colonia Nueva",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "La Balsa",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Escuela Agrotecnica",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Villa Urquiza",
        "servicios": [
          {
            "tipo": "Coche Común",
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
      }
    ]
  },
  {
    "origen": "La Picada",
    "destinos": [
      {
        "destino": "Colonia Nueva",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:30hs",
                "18:00hs"
              ],
              "sabados_domingos_ida": [
                  "20:15hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                "6:40hs",
                "12:40hs",
                "19:40hs"
              ],
              "sabados_domingos_vuelta": [
              
                "11:10hs",
                "19:10hs"
              ],
              "diario": [
                "13:45hs"
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
        "destino": "Acceso Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:30hs",
                "18:00hs"
              ],
              "sabados_domingos_ida": [
                "20:15hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                "6:39hs",
                "12:39hs",
                "19:39hs"
              ],
              "sabados_domingos_vuelta": [
                
                "11:09hs",
                "19:09hs"
              ],
              "diario": [
                "13:45hs"
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
        "destino": " Sauce Montrul",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                  "06:30hs",
                "18:00hs"
              ],
              "sabados_domingos_ida": [
               "20:15hs"
              ],
              "lunes_a_viernes_vuelta": [
              
                "6:35hs",
                "12:35hs",
                "19:35hs"
              ],
              "sabados_domingos_vuelta": [
                
                 "11:05hs",
                "19:05hs"
              ],
              "diario": [
                "13:45hs"
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
        "destino": "Empalme Ruta 12 Y 18",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1700,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:30hs",
                "18:00hs"
              ],
              "sabados_domingos_ida": [
                "20:15hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                "6:30hs",
                "12:30hs",
                "19:30hs"
              ],
              "sabados_domingos_vuelta": [
                
                "11:00hs",
                "19:00hs"
              ],
              "diario": [
                "13:45hs"
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
        "destino": "Colonia Avellaneda",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1700,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:30hs",
                "18:00hs"
              ],
              "sabados_domingos_ida": [
                "20:15hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                "6:10hs",
                "12:10hs",
                "19:10hs"
              ],
              "sabados_domingos_vuelta": [
                
                "10:40hs",
                "18:40hs"
              ],
              "diario": [
                "13:45hs"
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
        "destino": "San Benito",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1900,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:30hs",
                "18:00hs"
              ],
              "sabados_domingos_ida": [
                 "20:15hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:05hs",
                "12:05hs",
                "19:05hs"
              ],
              "sabados_domingos_vuelta": [
              
                 "10:35hs",
                "18:35hs"
              ],
              "diario": [
                "13:45hs"
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
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2700,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:30hs",
                "18:00hs"
              ],
              "sabados_domingos_ida": [
                "20:15hs"
              ],
              "lunes_a_viernes_vuelta": [
              
                 "6:00hs",
                "12:00hs",
                "19:00hs"
              ],
              "sabados_domingos_vuelta": [
                
                "10:30hs",
                "18:30hs"
              ],
              "diario": [
                "13:45hs"
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
        "destino": "La Balsa",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Escuela Agrotecnica",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Villa Urquiza",
        "servicios": [
          {
            "tipo": "Coche Común",
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
      }
    ]
  },
  {
    "origen": "Colonia Nueva",
    "destinos": [
      {
        "destino": "La Balsa",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "La Picada",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                   "06:25hs",
                "17:55hs"
              ],
              "sabados_domingos_ida": [
                  "20:10hs"
              ],
              "lunes_a_viernes_vuelta": [
             
                "6:45hs",
                "12:45hs",
                "19:45hs"
              ],
              "sabados_domingos_vuelta": [
              
                "11:15hs",
                "19:15hs"
              ],
              "diario": [
                "13:40hs"
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
        "destino": "Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1700,
            "horarios": {
              "lunes_a_viernes_ida": [
                   "06:25hs",
                "17:55hs"
              ],
              "sabados_domingos_ida": [
                "20:10hs"
              ],
              "lunes_a_viernes_vuelta": [
             
                "6:40hs",
                "12:40hs",
                "19:40hs"
              ],
              "sabados_domingos_vuelta": [
                
                "11:10hs",
                "19:10hs"
              ],
              "diario": [
                "13:40hs"
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
        "destino": "Acceso Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1700,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:25hs",
                "17:55hs"
              ],
              "sabados_domingos_ida": [
                 "20:10hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:39hs",
                "12:39hs",
                "19:39hs"
              ],
              "sabados_domingos_vuelta": [
               
                "11:09hs",
                "19:09hs"
              ],
              "diario": [
                "13:40hs"
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
        "destino": "Sauce Montrul",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1900,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:25hs",
                "17:55hs"
              ],
              "sabados_domingos_ida": [
               "20:10hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                "6:35hs",
                "12:35hs",
                "19:35hs"
              ],
              "sabados_domingos_vuelta": [
                
                 "11:05hs",
                "19:05hs"
              ],
              "diario": [
                "13:40hs"
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
        "destino": "Empalme Ruta 12 Y 18",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1900,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:25hs",
                "17:55hs"
              ],
              "sabados_domingos_ida": [
                  "20:10hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:30hs",
                "12:30hs",
                "19:30hs"
              ],
              "sabados_domingos_vuelta": [
              
                "11:00hs",
                "19:00hs"
              ],
              "diario": [
                "13:40hs"
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
        "destino": "Colonia Avellaneda",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1900,
            "horarios": {
              "lunes_a_viernes_ida": [
               "06:25hs",
                "17:55hs"
              ],
              "sabados_domingos_ida": [
                "20:10hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                 "6:10hs",
                "12:10hs",
                "19:10hs"
              ],
              "sabados_domingos_vuelta": [
                
                "10:40hs",
                "18:40hs"
              ],
              "diario": [
                "13:40hs"
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
        "destino": "San Benito",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2500,
            "horarios": {
              "lunes_a_viernes_ida": [
               "06:25hs",
                "17:55hs"
              ],
              "sabados_domingos_ida": [
                  "20:10hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                 "6:05hs",
                "12:05hs",
                "19:05hs"
              ],
              "sabados_domingos_vuelta": [
             
                 "10:35hs",
                "18:35hs"
              ],
              "diario": [
                "13:40hs"
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
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3000,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:25hs",
                "17:55hs"
              ],
              "sabados_domingos_ida": [
                "20:10hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                 "6:00hs",
                "12:00hs",
                "19:00hs"
              ],
              "sabados_domingos_vuelta": [
               
                 "10:30hs",
                "18:30hs"
              ],
              "diario": [
                "13:40hs"
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
        "destino": "Escuela Agrotecnica",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Villa Urquiza",
        "servicios": [
          {
            "tipo": "Coche Común",
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
      }
    ]
  },
  {
    "origen": "La Balsa",
    "destinos": [
      {
        "destino": "Escuela Agrotecnica",
        "servicios": [
          {
            "tipo": "Coche Común",
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
          }
        ]
      },
      {
        "destino": "Colonia Nueva",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:15hs",
                "17:45hs"
              ],
              "sabados_domingos_ida": [
                     "20:00hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:50hs",
                "12:50hs",
                "19:50hs"
              ],
              "sabados_domingos_vuelta": [
          
                 "11:20hs",
                "19:20hs"
              ],
              "diario": [
                "13:30hs"
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
        "destino": "La Picada",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1900,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:15hs",
                "17:45hs"
              ],
              "sabados_domingos_ida": [
                  "20:00hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:45hs",
                "12:45hs",
                "19:45hs"
              ],
              "sabados_domingos_vuelta": [
              
                "11:15hs",
                "19:15hs"
              ],
              "diario": [
                "13:30hs"
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
        "destino": "Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1900,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:15hs",
                "17:45hs"
              ],
              "sabados_domingos_ida": [
                "20:00hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:40hs",
                "12:40hs",
                "19:40hs"
              ],
              "sabados_domingos_vuelta": [
                
                "11:10hs",
                "19:10hs"
              ],
              "diario": [
                "13:30hs"
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
        "destino": "Acceso Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:15hs",
                "17:45hs"
              ],
              "sabados_domingos_ida": [
                  "20:00hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                "6:39hs",
                "12:39hs",
                "19:39hs"
              ],
              "sabados_domingos_vuelta": [
              
                "11:09hs",
                "19:09hs"
              ],
              "diario": [
                "13:30hs"
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
        "destino": "Sauce Montrul",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2500,
            "horarios": {
              "lunes_a_viernes_ida": [
                  "06:15hs",
                "17:45hs"
              ],
              "sabados_domingos_ida": [
               "20:00hs"
              ],
              "lunes_a_viernes_vuelta": [
              
                "6:35hs",
                "12:35hs",
                "19:35hs"
              ],
              "sabados_domingos_vuelta": [
                
                 "11:05hs",
                "19:05hs"
              ],
              "diario": [
                "13:30hs"
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
        "destino": "Empalme Ruta 12 Y 18",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2600,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:15hs",
                "17:45hs"
              ],
              "sabados_domingos_ida": [
                 "20:00hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:30hs",
                "12:30hs",
                "19:30hs"
              ],
              "sabados_domingos_vuelta": [
               
                "11:00hs",
                "19:00hs"
              ],
              "diario": [
                "13:30hs"
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
        "destino": "Colonia Avellaneda",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2800,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:15hs",
                "17:45hs"
              ],
              "sabados_domingos_ida": [
                 "20:00hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                "6:10hs",
                "12:10hs",
                "19:10hs"
              ],
              "sabados_domingos_vuelta": [
               
                "10:40hs",
                "18:40hs"
              ],
              "diario": [
                "13:30hs"
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
        "destino": "San Benito",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2900,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:15hs",
                "17:45hs"
              ],
              "sabados_domingos_ida": [
               "20:00hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:05hs",
                "12:05hs",
                "19:05hs"
              ],
              "sabados_domingos_vuelta": [
                
                 "10:35hs",
                "18:35hs"
              ],
              "diario": [
                "13:30hs"
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
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3900,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:15hs",
                "17:45hs"
              ],
              "sabados_domingos_ida": [
               "20:00hs"
              ],
              "lunes_a_viernes_vuelta": [
              
                 "6:00hs",
                "12:00hs",
                "19:00hs"
              ],
              "sabados_domingos_vuelta": [
                
                 "10:30hs",
                "18:30hs"
              ],
              "diario": [
                "13:30hs"
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
        "destino": "Villa Urquiza",
        "servicios": [
          {
            "tipo": "Coche Común",
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
      }
    ]
  },
  {
    "origen": "Escuela Agrotecnica",
    "destinos": [
      {
        "destino": "Villa Urquiza",
        "servicios": [
          {
            "tipo": "Coche Común",
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
        "destino": "La Balsa ",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                  "06:02hs",
                "17:32hs"
              ],
              "sabados_domingos_ida": [
                 "19:47hs"
              ],
              "lunes_a_viernes_vuelta": [
             
                 "7:00hs",
                "13:00hs",
                "20:00hs"
              ],
              "sabados_domingos_vuelta": [
              
                 "11:30hs",
                "19:30hs"
              ],
              "diario": [
                "13:17hs"
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
        "destino": "Colonia Nueva",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1700,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:02hs",
                "17:32hs"
              ],
              "sabados_domingos_ida": [
                "19:47hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:50hs",
                "12:50hs",
                "19:50hs"
              ],
              "sabados_domingos_vuelta": [
                
                "11:20hs",
                "19:20hs"
              ],
              "diario": [
                "13:17hs"
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
        "destino": "La Picada",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2400,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:02hs",
                "17:32hs"
              ],
              "sabados_domingos_ida": [
                 "19:47hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:45hs",
                "12:45hs",
                "19:45hs"
              ],
              "sabados_domingos_vuelta": [
               
                "11:15hs",
                "19:15hs"
              ],
              "diario": [
                "13:17hs"
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
        "destino": "Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2400,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:02hs",
                "17:32hs"
              ],
              "sabados_domingos_ida": [
                 "19:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                "6:40hs",
                "12:40hs",
                "19:40hs"
              ],
              "sabados_domingos_vuelta": [
               
                "11:10hs",
                "19:10hs"
              ],
              "diario": [
                "13:17hs"
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
        "destino": "Acceso Escuela Almafuerte",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2400,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:02hs",
                "17:32hs"
              ],
              "sabados_domingos_ida": [
                 "19:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                "6:39hs",
                "12:39hs",
                "19:39hs"
              ],
              "sabados_domingos_vuelta": [
               
                "11:09hs",
                "19:09hs"
              ],
              "diario": [
                "13:17hs"
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
        "destino": "Sauce Montrul",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3100,
            "horarios": {
              "lunes_a_viernes_ida": [
                  "06:02hs",
                "17:32hs"
              ],
              "sabados_domingos_ida": [
                "19:47hs"
              ],
              "lunes_a_viernes_vuelta": [
              
                "6:35hs",
                "12:35hs",
                "19:35hs"
              ],
              "sabados_domingos_vuelta": [
                
                "11:05hs",
                "19:05hs"
              ],
              "diario": [
                "13:17hs"
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
        "destino": "Empalme Ruta 12 Y 18",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3200,
            "horarios": {
              "lunes_a_viernes_ida": [
                "06:02hs",
                "17:32hs"
              ],
              "sabados_domingos_ida": [
                "19:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                
                "6:30hs",
                "12:30hs",
                "19:30hs"
              ],
              "sabados_domingos_vuelta": [
                
                "11:00hs",
                "19:00hs"
              ],
              "diario": [
                "13:17hs"
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
        "destino": "Colonia Avellaneda",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3500,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:02hs",
                "17:32hs"
              ],
              "sabados_domingos_ida": [
                "19:47hs"
              ],
              "lunes_a_viernes_vuelta": [
               
                "6:10hs",
                "12:10hs",
                "19:10hs"
              ],
              "sabados_domingos_vuelta": [
               
                 "10:40hs",
                "18:40hs"
              ],
              "diario": [
                "13:17hs"
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
        "destino": "San Benito",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3600,
            "horarios": {
              "lunes_a_viernes_ida": [
                  "06:02hs",
                "17:32hs"
              ],
              "sabados_domingos_ida": [
                "19:47hs"
              ],
              "lunes_a_viernes_vuelta": [
              
                "6:05hs",
                "12:05hs",
                "19:05hs"
              ],
              "sabados_domingos_vuelta": [
                
                "10:35hs",
                "18:35hs"
              ],
              "diario": [
                "13:17hs"
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
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 4600,
            "horarios": {
              "lunes_a_viernes_ida": [
                 "06:02hs",
                "17:32hs"
              ],
              "sabados_domingos_ida": [
                "19:47hs"
              ],
              "lunes_a_viernes_vuelta": [
              
                 "6:00hs",
                "12:00hs",
                "19:00hs"
              ],
              "sabados_domingos_vuelta": [
                
                "10:30hs",
                "18:30hs"
              ],
              "diario": [
                "13:17hs"
              ],
              "domingos_ida": [],
              "domingos_vuelta": [],
              "diario_ida": [],
              "diario_vuelta": []
            }
          }
        ]
      },
    ]
  },
  {
    "origen": "Oro Verde",
    "destinos": [
      {
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:43hs",
                "9:03hs",
                "9:48hs",
                "11:28hs",
                "12:28hs",
                "14:28hs",
                "15:28hs",
                "18:18hs",
                "21:28hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:43hs",
                "11:13hs",
                "13:58hs"
              ],
              "diario_ida": [
                "16:58hs",
                "20:43hs",
                "23:28hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:10hs",
                "6:55hs",
                "8:40hs",
                "9:40hs",
                "11:40hs",
                "13:40hs",
                "14:50hs",
                "17:40hs",
                "19:25hs",
                "20:40hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "7:10hs",
                "10:10hs",
                "13:25hs"
              ],
              "diario_vuelta": [
                "16:10hs",
                "22:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Colonia Ensayo",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:43hs",
                "9:03hs",
                "9:48hs",
                "11:28hs",
                "12:28hs",
                "14:28hs",
                "15:28hs",
                "18:18hs",
                "21:28hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:43hs",
                "11:13hs",
                "13:58hs"
              ],
              "diario_ida": [
                "16:58hs",
                "20:43hs",
                "23:28hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:36hs",
                "6:21hs",
                "8:06hs",
                "9:06hs",
                "11:06hs",
                "13:06hs",
                "14:16hs",
                "17:06hs",
                "18:51hs",
                "20:06hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:36hs",
                "9:36hs",
                "12:51hs"
              ],
              "diario_vuelta": [
                "15:36hs",
                "22:06hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Brasilera",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:43hs",
                "9:03hs",
                "9:48hs",
                "11:28hs",
                "12:28hs",
                "14:28hs",
                "15:28hs",
                "18:18hs",
                "21:28hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:43hs",
                "11:13hs",
                "13:58hs"
              ],
              "diario_ida": [
                "16:58hs",
                "20:43hs",
                "23:28hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:33hs",
                "6:18hs",
                "8:03hs",
                "9:03hs",
                "11:03hs",
                "13:03hs",
                "14:13hs",
                "17:03hs",
                "18:48hs",
                "20:03hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:33hs",
                "9:33hs",
                "12:48hs"
              ],
              "diario_vuelta": [
                "15:33hs",
                "22:03hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Spattzenkuter",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2200,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:43hs",
                "9:03hs",
                "9:48hs",
                "11:28hs",
                "12:28hs",
                "14:28hs",
                "15:28hs",
                "18:18hs",
                "21:28hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:43hs",
                "11:13hs",
                "13:58hs"
              ],
              "diario_ida": [
                "16:58hs",
                "20:43hs",
                "23:28hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:29hs",
                "6:14hs",
                "7:59hs",
                "8:59hs",
                "10:59hs",
                "12:59hs",
                "14:09hs",
                "16:59hs",
                "18:44hs",
                "19:59hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:29hs",
                "9:29hs",
                "12:44hs"
              ],
              "diario_vuelta": [
                "15:29hs",
                "21:59hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Valle María",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2800,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:43hs",
                "9:03hs",
                "9:48hs",
                "11:28hs",
                "12:28hs",
                "14:28hs",
                "15:28hs",
                "18:18hs",
                "21:28hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:43hs",
                "11:13hs",
                "13:58hs"
              ],
              "diario_ida": [
                "16:58hs",
                "20:43hs",
                "23:28hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:23hs",
                "6:08hs",
                "7:53hs",
                "8:53hs",
                "10:53hs",
                "12:53hs",
                "14:03hs",
                "16:53hs",
                "18:38hs",
                "19:53hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:23hs",
                "9:23hs",
                "12:38hs"
              ],
              "diario_vuelta": [
                "15:23hs",
                "21:53hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Tablilla",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3400,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:43hs",
                "9:03hs",
                "9:48hs",
                "11:28hs",
                "12:28hs",
                "14:28hs",
                "15:28hs",
                "18:18hs",
                "21:28hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:43hs",
                "11:13hs",
                "13:58hs"
              ],
              "diario_ida": [
                "16:58hs",
                "20:43hs",
                "23:28hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:17hs",
                "6:02hs",
                "7:47hs",
                "8:47hs",
                "10:47hs",
                "12:47hs",
                "13:57hs",
                "16:47hs",
                "18:32hs",
                "19:47hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:17hs",
                "9:17hs",
                "12:32hs"
              ],
              "diario_vuelta": [
                "15:17hs",
                "21:47hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Virgen",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:43hs",
                "9:03hs",
                "9:48hs",
                "11:28hs",
                "12:28hs",
                "14:28hs",
                "15:28hs",
                "18:18hs",
                "21:28hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:43hs",
                "11:13hs",
                "13:58hs"
              ],
              "diario_ida": [
                "16:58hs",
                "20:43hs",
                "23:28hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:14hs",
                "5:59hs",
                "7:44hs",
                "8:44hs",
                "10:44hs",
                "12:44hs",
                "13:54hs",
                "16:44hs",
                "18:29hs",
                "19:44hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:14hs",
                "9:14hs",
                "12:29hs"
              ],
              "diario_vuelta": [
                "15:14hs",
                "21:44hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Strobel",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3900,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:43hs",
                "9:03hs",
                "9:48hs",
                "11:28hs",
                "12:28hs",
                "14:28hs",
                "15:28hs",
                "18:18hs",
                "21:28hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:43hs",
                "11:13hs",
                "13:58hs"
              ],
              "diario_ida": [
                "16:58hs",
                "20:43hs",
                "23:28hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:10hs",
                "5:55hs",
                "7:40hs",
                "8:40hs",
                "10:40hs",
                "12:40hs",
                "13:50hs",
                "16:40hs",
                "18:25hs",
                "19:40hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:10hs",
                "9:10hs",
                "12:25hs"
              ],
              "diario_vuelta": [
                "15:10hs",
                "21:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Diamante",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 4500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:43hs",
                "9:03hs",
                "9:48hs",
                "11:28hs",
                "12:28hs",
                "14:28hs",
                "15:28hs",
                "18:18hs",
                "21:28hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:43hs",
                "11:13hs",
                "13:58hs"
              ],
              "diario_ida": [
                "16:58hs",
                "20:43hs",
                "23:28hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:00hs",
                "5:45hs",
                "7:30hs",
                "8:30hs",
                "10:30hs",
                "12:30hs",
                "13:40hs",
                "16:30hs",
                "18:15hs",
                "19:30hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:00hs",
                "9:00hs",
                "12:15hs"
              ],
              "diario_vuelta": [
                "15:00hs",
                "21:30hs"
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "origen": "Colonia Ensayo",
    "destinos": [
      {
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2000,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:49hs",
                "9:09hs",
                "9:54hs",
                "11:34hs",
                "12:34hs",
                "14:34hs",
                "15:34hs",
                "18:24hs",
                "21:34hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:49hs",
                "11:19hs",
                "14:04hs"
              ],
              "diario_ida": [
                "17:04hs",
                "20:49hs",
                "23:34hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:10hs",
                "6:55hs",
                "8:40hs",
                "9:40hs",
                "11:40hs",
                "13:40hs",
                "14:50hs",
                "17:40hs",
                "19:25hs",
                "20:40hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "7:10hs",
                "10:10hs",
                "13:25hs"
              ],
              "diario_vuelta": [
                "16:10hs",
                "22:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Oro Verde",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:49hs",
                "9:09hs",
                "9:54hs",
                "11:34hs",
                "12:34hs",
                "14:34hs",
                "15:34hs",
                "18:24hs",
                "21:34hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:49hs",
                "11:19hs",
                "14:04hs"
              ],
              "diario_ida": [
                "17:04hs",
                "20:49hs",
                "23:34hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:42hs",
                "6:27hs",
                "8:12hs",
                "9:12hs",
                "11:12hs",
                "13:12hs",
                "14:22hs",
                "17:12hs",
                "18:57hs",
                "20:12hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:42hs",
                "9:42hs",
                "12:57hs"
              ],
              "diario_vuelta": [
                "15:42hs",
                "22:12hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Brasilera",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:49hs",
                "9:09hs",
                "9:54hs",
                "11:34hs",
                "12:34hs",
                "14:34hs",
                "15:34hs",
                "18:24hs",
                "21:34hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:49hs",
                "11:19hs",
                "14:04hs"
              ],
              "diario_ida": [
                "17:04hs",
                "20:49hs",
                "23:34hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:33hs",
                "6:18hs",
                "8:03hs",
                "9:03hs",
                "11:03hs",
                "13:03hs",
                "14:13hs",
                "17:03hs",
                "18:48hs",
                "20:03hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:33hs",
                "9:33hs",
                "12:48hs"
              ],
              "diario_vuelta": [
                "15:33hs",
                "22:03hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Spattzenkuter",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:49hs",
                "9:09hs",
                "9:54hs",
                "11:34hs",
                "12:34hs",
                "14:34hs",
                "15:34hs",
                "18:24hs",
                "21:34hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:49hs",
                "11:19hs",
                "14:04hs"
              ],
              "diario_ida": [
                "17:04hs",
                "20:49hs",
                "23:34hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:29hs",
                "6:14hs",
                "7:59hs",
                "8:59hs",
                "10:59hs",
                "12:59hs",
                "14:09hs",
                "16:59hs",
                "18:44hs",
                "19:59hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:29hs",
                "9:29hs",
                "12:44hs"
              ],
              "diario_vuelta": [
                "15:29hs",
                "21:59hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Valle María",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1900,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:49hs",
                "9:09hs",
                "9:54hs",
                "11:34hs",
                "12:34hs",
                "14:34hs",
                "15:34hs",
                "18:24hs",
                "21:34hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:49hs",
                "11:19hs",
                "14:04hs"
              ],
              "diario_ida": [
                "17:04hs",
                "20:49hs",
                "23:34hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:23hs",
                "6:08hs",
                "7:53hs",
                "8:53hs",
                "10:53hs",
                "12:53hs",
                "14:03hs",
                "16:53hs",
                "18:38hs",
                "19:53hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:23hs",
                "9:23hs",
                "12:38hs"
              ],
              "diario_vuelta": [
                "15:23hs",
                "21:53hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Tablilla",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:49hs",
                "9:09hs",
                "9:54hs",
                "11:34hs",
                "12:34hs",
                "14:34hs",
                "15:34hs",
                "18:24hs",
                "21:34hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:49hs",
                "11:19hs",
                "14:04hs"
              ],
              "diario_ida": [
                "17:04hs",
                "20:49hs",
                "23:34hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:17hs",
                "6:02hs",
                "7:47hs",
                "8:47hs",
                "10:47hs",
                "12:47hs",
                "13:57hs",
                "16:47hs",
                "18:32hs",
                "19:47hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:17hs",
                "9:17hs",
                "12:32hs"
              ],
              "diario_vuelta": [
                "15:17hs",
                "21:47hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Virgen",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2700,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:49hs",
                "9:09hs",
                "9:54hs",
                "11:34hs",
                "12:34hs",
                "14:34hs",
                "15:34hs",
                "18:24hs",
                "21:34hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:49hs",
                "11:19hs",
                "14:04hs"
              ],
              "diario_ida": [
                "17:04hs",
                "20:49hs",
                "23:34hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:14hs",
                "5:59hs",
                "7:44hs",
                "8:44hs",
                "10:44hs",
                "12:44hs",
                "13:54hs",
                "16:44hs",
                "18:29hs",
                "19:44hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:14hs",
                "9:14hs",
                "12:29hs"
              ],
              "diario_vuelta": [
                "15:14hs",
                "21:44hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Strobel",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3000,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:49hs",
                "9:09hs",
                "9:54hs",
                "11:34hs",
                "12:34hs",
                "14:34hs",
                "15:34hs",
                "18:24hs",
                "21:34hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:49hs",
                "11:19hs",
                "14:04hs"
              ],
              "diario_ida": [
                "17:04hs",
                "20:49hs",
                "23:34hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:10hs",
                "5:55hs",
                "7:40hs",
                "8:40hs",
                "10:40hs",
                "12:40hs",
                "13:50hs",
                "16:40hs",
                "18:25hs",
                "19:40hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:10hs",
                "9:10hs",
                "12:25hs"
              ],
              "diario_vuelta": [
                "15:10hs",
                "21:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Diamante",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3600,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:49hs",
                "9:09hs",
                "9:54hs",
                "11:34hs",
                "12:34hs",
                "14:34hs",
                "15:34hs",
                "18:24hs",
                "21:34hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:49hs",
                "11:19hs",
                "14:04hs"
              ],
              "diario_ida": [
                "17:04hs",
                "20:49hs",
                "23:34hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:00hs",
                "5:45hs",
                "7:30hs",
                "8:30hs",
                "10:30hs",
                "12:30hs",
                "13:40hs",
                "16:30hs",
                "18:15hs",
                "19:30hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:00hs",
                "9:00hs",
                "12:15hs"
              ],
              "diario_vuelta": [
                "15:00hs",
                "21:30hs"
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "origen": "Aldea Brasilera",
    "destinos": [
      {
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:52hs",
                "9:12hs",
                "9:57hs",
                "11:37hs",
                "12:37hs",
                "14:37hs",
                "15:37hs",
                "18:27hs",
                "21:37hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:52hs",
                "11:22hs",
                "14:07hs"
              ],
              "diario_ida": [
                "17:07hs",
                "20:52hs",
                "23:37hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:10hs",
                "6:55hs",
                "8:40hs",
                "9:40hs",
                "11:40hs",
                "13:40hs",
                "15:40hs",
                "17:40hs",
                "19:25hs",
                "20:40hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "7:10hs",
                "10:10hs",
                "13:26hs"
              ],
              "diario_vuelta": [
                "15:10hs",
                "22:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Oro Verde",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:52hs",
                "9:12hs",
                "9:57hs",
                "11:37hs",
                "12:37hs",
                "14:37hs",
                "15:37hs",
                "18:27hs",
                "21:37hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:52hs",
                "11:22hs",
                "14:07hs"
              ],
              "diario_ida": [
                "17:07hs",
                "20:52hs",
                "23:37hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:42hs",
                "8:27hs",
                "8:12hs",
                "9:12hs",
                "11:12hs",
                "13:12hs",
                "14:22hs",
                "17:12hs",
                "18:57hs",
                "20:12hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "8:42hs",
                "9:42hs",
                "12:57hs"
              ],
              "diario_vuelta": [
                "15:42hs",
                "22:22hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Colonia Ensayo",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:52hs",
                "9:12hs",
                "9:57hs",
                "11:37hs",
                "12:37hs",
                "14:37hs",
                "15:37hs",
                "18:27hs",
                "21:37hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:52hs",
                "11:22hs",
                "14:07hs"
              ],
              "diario_ida": [
                "17:07hs",
                "20:52hs",
                "23:37hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:38hs",
                "8:21hs",
                "8:06hs",
                "9:08hs",
                "11:08hs",
                "13:08hs",
                "14:18hs",
                "17:08hs",
                "18:58hs",
                "20:08hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "8:38hs",
                "9:38hs",
                "12:54hs"
              ],
              "diario_vuelta": [
                "15:38hs",
                "22:08hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Spattzenkuter",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:52hs",
                "9:12hs",
                "9:57hs",
                "11:37hs",
                "12:37hs",
                "14:37hs",
                "15:37hs",
                "18:27hs",
                "21:37hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:52hs",
                "11:22hs",
                "14:07hs"
              ],
              "diario_ida": [
                "17:07hs",
                "20:52hs",
                "23:37hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:29hs",
                "8:14hs",
                "7:59hs",
                "8:59hs",
                "10:59hs",
                "12:59hs",
                "14:09hs",
                "17:09hs",
                "18:49hs",
                "19:59hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "8:29hs",
                "9:29hs",
                "12:49hs"
              ],
              "diario_vuelta": [
                "15:29hs",
                "21:59hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Valle María",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:52hs",
                "9:12hs",
                "9:57hs",
                "11:37hs",
                "12:37hs",
                "14:37hs",
                "15:37hs",
                "18:27hs",
                "21:37hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:52hs",
                "11:22hs",
                "14:07hs"
              ],
              "diario_ida": [
                "17:07hs",
                "20:52hs",
                "23:37hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:23hs",
                "8:08hs",
                "7:53hs",
                "8:53hs",
                "10:53hs",
                "12:53hs",
                "14:03hs",
                "16:53hs",
                "18:38hs",
                "19:53hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "8:23hs",
                "9:23hs",
                "12:38hs"
              ],
              "diario_vuelta": [
                "15:23hs",
                "21:53hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Virgen",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2000,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:52hs",
                "9:12hs",
                "9:57hs",
                "11:37hs",
                "12:37hs",
                "14:37hs",
                "15:37hs",
                "18:27hs",
                "21:37hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:52hs",
                "11:22hs",
                "14:07hs"
              ],
              "diario_ida": [
                "17:07hs",
                "20:52hs",
                "23:37hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:15hs",
                "8:00hs",
                "7:45hs",
                "8:45hs",
                "10:45hs",
                "12:45hs",
                "13:55hs",
                "16:45hs",
                "18:30hs",
                "19:45hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "8:15hs",
                "9:15hs",
                "12:30hs"
              ],
              "diario_vuelta": [
                "15:15hs",
                "21:45hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Tablilla",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2000,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:52hs",
                "9:12hs",
                "9:57hs",
                "11:37hs",
                "12:37hs",
                "14:37hs",
                "15:37hs",
                "18:27hs",
                "21:37hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:52hs",
                "11:22hs",
                "14:07hs"
              ],
              "diario_ida": [
                "17:07hs",
                "20:52hs",
                "23:37hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:12hs",
                "7:47hs",
                "8:47hs",
                "10:47hs",
                "12:47hs",
                "13:57hs",
                "16:47hs",
                "18:32hs",
                "19:47hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "8:12hs",
                "9:12hs",
                "12:32hs"
              ],
              "diario_vuelta": [
                "15:12hs",
                "21:47hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Strobel",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2600,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:52hs",
                "9:12hs",
                "9:57hs",
                "11:37hs",
                "12:37hs",
                "14:37hs",
                "15:37hs",
                "18:27hs",
                "21:37hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:52hs",
                "11:22hs",
                "14:07hs"
              ],
              "diario_ida": [
                "17:07hs",
                "20:52hs",
                "23:37hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:05hs",
                "7:50hs",
                "7:40hs",
                "8:40hs",
                "10:40hs",
                "12:40hs",
                "13:50hs",
                "16:40hs",
                "18:25hs",
                "19:40hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "8:05hs",
                "9:05hs",
                "12:25hs"
              ],
              "diario_vuelta": [
                "15:05hs",
                "21:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Diamante",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3100,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:52hs",
                "9:12hs",
                "9:57hs",
                "11:37hs",
                "12:37hs",
                "14:37hs",
                "15:37hs",
                "18:27hs",
                "21:37hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:52hs",
                "11:22hs",
                "14:07hs"
              ],
              "diario_ida": [
                "17:07hs",
                "20:52hs",
                "23:37hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:00hs",
                "8:00hs",
                "9:00hs",
                "12:15hs",
                "13:00hs",
                "13:40hs",
                "18:10hs",
                "19:30hs",
                "20:00hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "8:00hs",
                "9:00hs",
                "12:15hs"
              ],
              "diario_vuelta": [
                "15:00hs",
                "21:30hs"
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "origen": "Aldea Spattzenkuter",
    "destinos": [
      {
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3400,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:56hs",
                "9:16hs",
                "10:01hs",
                "11:41hs",
                "12:41hs",
                "14:41hs",
                "15:41hs",
                "18:31hs",
                "21:41hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:56hs",
                "11:26hs",
                "14:11hs"
              ],
              "diario_ida": [
                "17:11hs",
                "20:56hs",
                "23:41hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:10hs",
                "6:55hs",
                "8:40hs",
                "9:40hs",
                "11:40hs",
                "13:40hs",
                "14:50hs",
                "17:40hs",
                "19:25hs",
                "20:40hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "7:10hs",
                "10:10hs",
                "13:25hs"
              ],
              "diario_vuelta": [
                "16:10hs",
                "22:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Oro Verde",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2200,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:56hs",
                "9:16hs",
                "10:01hs",
                "11:41hs",
                "12:41hs",
                "14:41hs",
                "15:41hs",
                "18:31hs",
                "21:41hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:56hs",
                "11:26hs",
                "14:11hs"
              ],
              "diario_ida": [
                "17:11hs",
                "20:56hs",
                "23:41hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:42hs",
                "6:27hs",
                "8:12hs",
                "9:12hs",
                "11:12hs",
                "13:12hs",
                "14:22hs",
                "17:12hs",
                "18:57hs",
                "20:12hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:42hs",
                "9:42hs",
                "12:57hs"
              ],
              "diario_vuelta": [
                "15:42hs",
                "22:12hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Colonia Ensayo",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:56hs",
                "9:16hs",
                "10:01hs",
                "11:41hs",
                "12:41hs",
                "14:41hs",
                "15:41hs",
                "18:31hs",
                "21:41hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:56hs",
                "11:26hs",
                "14:11hs"
              ],
              "diario_ida": [
                "17:11hs",
                "20:56hs",
                "23:41hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:36hs",
                "6:21hs",
                "8:06hs",
                "9:06hs",
                "11:06hs",
                "13:06hs",
                "14:16hs",
                "17:06hs",
                "18:51hs",
                "20:06hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:36hs",
                "9:36hs",
                "12:51hs"
              ],
              "diario_vuelta": [
                "15:36hs",
                "22:06hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Brasilera",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:56hs",
                "9:16hs",
                "10:01hs",
                "11:41hs",
                "12:41hs",
                "14:41hs",
                "15:41hs",
                "18:31hs",
                "21:41hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:56hs",
                "11:26hs",
                "14:11hs"
              ],
              "diario_ida": [
                "17:11hs",
                "20:56hs",
                "23:41hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:33hs",
                "6:18hs",
                "8:03hs",
                "9:03hs",
                "11:03hs",
                "13:03hs",
                "14:13hs",
                "17:03hs",
                "18:48hs",
                "20:03hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:33hs",
                "9:33hs",
                "12:48hs"
              ],
              "diario_vuelta": [
                "15:33hs",
                "22:03hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Valle María",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:56hs",
                "9:16hs",
                "10:01hs",
                "11:41hs",
                "12:41hs",
                "14:41hs",
                "15:41hs",
                "18:31hs",
                "21:41hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:56hs",
                "11:26hs",
                "14:11hs"
              ],
              "diario_ida": [
                "17:11hs",
                "20:56hs",
                "23:41hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:23hs",
                "6:08hs",
                "7:53hs",
                "8:53hs",
                "10:53hs",
                "12:53hs",
                "14:03hs",
                "16:53hs",
                "19:33hs",
                "19:53hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:23hs",
                "9:23hs",
                "12:38hs"
              ],
              "diario_vuelta": [
                "15:23hs",
                "21:53hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Tablilla",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:56hs",
                "9:16hs",
                "10:01hs",
                "11:41hs",
                "12:41hs",
                "14:41hs",
                "15:41hs",
                "18:31hs",
                "21:41hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:56hs",
                "11:26hs",
                "14:11hs"
              ],
              "diario_ida": [
                "17:11hs",
                "20:56hs",
                "23:41hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:17hs",
                "6:02hs",
                "7:47hs",
                "8:47hs",
                "10:47hs",
                "12:47hs",
                "13:57hs",
                "16:47hs",
                "18:32hs",
                "19:47hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:17hs",
                "9:17hs",
                "12:32hs"
              ],
              "diario_vuelta": [
                "15:17hs",
                "21:47hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Virgen",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:56hs",
                "9:16hs",
                "10:01hs",
                "11:41hs",
                "12:41hs",
                "14:41hs",
                "15:41hs",
                "18:31hs",
                "21:41hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:56hs",
                "11:26hs",
                "14:11hs"
              ],
              "diario_ida": [
                "17:11hs",
                "20:56hs",
                "23:41hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:14hs",
                "5:59hs",
                "7:44hs",
                "8:44hs",
                "10:44hs",
                "12:44hs",
                "13:54hs",
                "16:44hs",
                "18:29hs",
                "19:44hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:14hs",
                "9:14hs",
                "12:29hs"
              ],
              "diario_vuelta": [
                "15:14hs",
                "21:44hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Strobel",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1700,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:56hs",
                "9:16hs",
                "10:01hs",
                "11:41hs",
                "12:41hs",
                "14:41hs",
                "15:41hs",
                "18:31hs",
                "21:41hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:56hs",
                "11:26hs",
                "14:11hs"
              ],
              "diario_ida": [
                "17:11hs",
                "20:56hs",
                "23:41hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:10hs",
                "5:55hs",
                "7:40hs",
                "8:40hs",
                "10:40hs",
                "12:40hs",
                "13:50hs",
                "16:40hs",
                "18:25hs",
                "19:40hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:10hs",
                "9:10hs",
                "12:25hs"
              ],
              "diario_vuelta": [
                "15:10hs",
                "21:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Diamante",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2200,
            "horarios": {
              "lunes_a_viernes_ida": [
                "6:56hs",
                "9:16hs",
                "10:01hs",
                "11:41hs",
                "12:41hs",
                "14:41hs",
                "15:41hs",
                "18:31hs",
                "21:41hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:56hs",
                "11:26hs",
                "14:11hs"
              ],
              "diario_ida": [
                "17:11hs",
                "20:56hs",
                "23:41hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:00hs",
                "5:45hs",
                "7:30hs",
                "8:30hs",
                "10:30hs",
                "12:30hs",
                "13:40hs",
                "16:30hs",
                "18:15hs",
                "19:30hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:00hs",
                "9:00hs",
                "12:15hs"
              ],
              "diario_vuelta": [
                "15:00hs",
                "21:30hs"
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "origen": "Valle María",
    "destinos": [
      {
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3900,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:02hs",
                "9:22hs",
                "10:07hs",
                "11:47hs",
                "12:47hs",
                "14:47hs",
                "15:47hs",
                "18:37hs",
                "21:47hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:02hs",
                "11:32hs",
                "14:17hs"
              ],
              "diario_ida": [
                "17:17hs",
                "21:02hs",
                "23:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:10hs",
                "6:55hs",
                "8:40hs",
                "9:40hs",
                "11:40hs",
                "13:40hs",
                "14:50hs",
                "17:40hs",
                "19:25hs",
                "20:40hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "7:10hs",
                "10:10hs",
                "13:25hs"
              ],
              "diario_vuelta": [
                "16:10hs",
                "22:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Oro Verde",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2800,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:02hs",
                "9:22hs",
                "10:07hs",
                "11:47hs",
                "12:47hs",
                "14:47hs",
                "15:47hs",
                "18:37hs",
                "21:47hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:02hs",
                "11:32hs",
                "14:17hs"
              ],
              "diario_ida": [
                "17:17hs",
                "21:02hs",
                "23:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:42hs",
                "6:27hs",
                "8:12hs",
                "9:12hs",
                "11:12hs",
                "13:12hs",
                "14:22hs",
                "17:12hs",
                "18:57hs",
                "20:12hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:42hs",
                "9:42hs",
                "12:57hs"
              ],
              "diario_vuelta": [
                "15:42hs",
                "22:12hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Colonia Ensayo",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1900,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:02hs",
                "9:22hs",
                "10:07hs",
                "11:47hs",
                "12:47hs",
                "14:47hs",
                "15:47hs",
                "18:37hs",
                "21:47hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:02hs",
                "11:32hs",
                "14:17hs"
              ],
              "diario_ida": [
                "17:17hs",
                "21:02hs",
                "23:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:36hs",
                "6:21hs",
                "8:06hs",
                "9:06hs",
                "11:06hs",
                "13:06hs",
                "14:16hs",
                "17:06hs",
                "18:51hs",
                "20:06hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:36hs",
                "9:36hs",
                "12:51hs"
              ],
              "diario_vuelta": [
                "15:36hs",
                "22:06hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Brasilera",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:02hs",
                "9:22hs",
                "10:07hs",
                "11:47hs",
                "12:47hs",
                "14:47hs",
                "15:47hs",
                "18:37hs",
                "21:47hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:02hs",
                "11:32hs",
                "14:17hs"
              ],
              "diario_ida": [
                "17:17hs",
                "21:02hs",
                "23:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:33hs",
                "6:18hs",
                "8:03hs",
                "9:03hs",
                "11:03hs",
                "13:03hs",
                "14:13hs",
                "17:03hs",
                "18:48hs",
                "20:03hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:33hs",
                "9:33hs",
                "12:48hs"
              ],
              "diario_vuelta": [
                "15:33hs",
                "22:03hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Spattzenkuter",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:02hs",
                "9:22hs",
                "10:07hs",
                "11:47hs",
                "12:47hs",
                "14:47hs",
                "15:47hs",
                "18:37hs",
                "21:47hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:02hs",
                "11:32hs",
                "14:17hs"
              ],
              "diario_ida": [
                "17:17hs",
                "21:02hs",
                "23:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:29hs",
                "6:14hs",
                "7:59hs",
                "8:59hs",
                "10:59hs",
                "12:59hs",
                "13:09hs",
                "16:59hs",
                "18:44hs",
                "19:59hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:29hs",
                "9:29hs",
                "12:44hs"
              ],
              "diario_vuelta": [
                "15:29hs",
                "21:59hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Tablilla",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:02hs",
                "9:22hs",
                "10:07hs",
                "11:47hs",
                "12:47hs",
                "14:47hs",
                "15:47hs",
                "18:37hs",
                "21:47hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:02hs",
                "11:32hs",
                "14:17hs"
              ],
              "diario_ida": [
                "17:17hs",
                "21:02hs",
                "23:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:17hs",
                "6:02hs",
                "7:47hs",
                "8:47hs",
                "10:47hs",
                "12:47hs",
                "13:57hs",
                "16:47hs",
                "18:32hs",
                "19:47hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:17hs",
                "9:17hs",
                "12:32hs"
              ],
              "diario_vuelta": [
                "15:17hs",
                "21:47hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Virgen",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:02hs",
                "9:22hs",
                "10:07hs",
                "11:47hs",
                "12:47hs",
                "14:47hs",
                "15:47hs",
                "18:37hs",
                "21:47hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:02hs",
                "11:32hs",
                "14:17hs"
              ],
              "diario_ida": [
                "17:17hs",
                "21:02hs",
                "23:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:14hs",
                "5:59hs",
                "7:44hs",
                "8:44hs",
                "10:44hs",
                "12:44hs",
                "13:54hs",
                "16:44hs",
                "18:29hs",
                "19:44hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:14hs",
                "9:14hs",
                "12:29hs"
              ],
              "diario_vuelta": [
                "15:14hs",
                "21:44hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Strobel",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:02hs",
                "9:22hs",
                "10:07hs",
                "11:47hs",
                "12:47hs",
                "14:47hs",
                "15:47hs",
                "18:37hs",
                "21:47hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:02hs",
                "11:32hs",
                "14:17hs"
              ],
              "diario_ida": [
                "17:17hs",
                "21:02hs",
                "23:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:10hs",
                "5:55hs",
                "7:40hs",
                "8:40hs",
                "10:40hs",
                "12:40hs",
                "13:50hs",
                "16:40hs",
                "18:25hs",
                "19:40hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:10hs",
                "9:10hs",
                "12:25hs"
              ],
              "diario_vuelta": [
                "15:10hs",
                "21:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Diamante",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1700,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:02hs",
                "9:22hs",
                "10:07hs",
                "11:47hs",
                "12:47hs",
                "14:47hs",
                "15:47hs",
                "18:37hs",
                "21:47hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:02hs",
                "11:32hs",
                "14:17hs"
              ],
              "diario_ida": [
                "17:17hs",
                "21:02hs",
                "23:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:00hs",
                "5:45hs",
                "7:30hs",
                "8:30hs",
                "10:30hs",
                "12:30hs",
                "13:40hs",
                "16:30hs",
                "18:15hs",
                "19:30hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:00hs",
                "9:00hs",
                "12:15hs"
              ],
              "diario_vuelta": [
                "15:00hs",
                "21:30hs"
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "origen": "La Tablilla",
    "destinos": [
      {
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 4500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:08hs",
                "9:28hs",
                "10:13hs",
                "11:53hs",
                "12:53hs",
                "14:53hs",
                "15:53hs",
                "18:43hs",
                "21:53hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:08hs",
                "11:38hs",
                "14:23hs"
              ],
              "diario_ida": [
                "17:23hs",
                "21:08hs",
                "23:53hs"
              ],
              "lunes_a_viernes_vuelta": [
                "6:10hs",
                "6:55hs",
                "8:40hs",
                "9:40hs",
                "11:40hs",
                "13:40hs",
                "14:50hs",
                "17:40hs",
                "19:25hs",
                "20:40hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "7:10hs",
                "10:10hs",
                "13:25hs"
              ],
              "diario_vuelta": [
                "16:10hs",
                "22:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Oro Verde",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3400,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:08hs",
                "9:28hs",
                "10:13hs",
                "11:53hs",
                "12:53hs",
                "14:53hs",
                "15:53hs",
                "18:43hs",
                "21:53hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:08hs",
                "11:38hs",
                "14:23hs"
              ],
              "diario_ida": [
                "17:23hs",
                "21:08hs",
                "23:53hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:42hs",
                "6:27hs",
                "8:12hs",
                "9:12hs",
                "11:12hs",
                "13:12hs",
                "14:22hs",
                "17:12hs",
                "18:57hs",
                "20:12hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:42hs",
                "9:42hs",
                "12:57hs"
              ],
              "diario_vuelta": [
                "15:42hs",
                "22:12hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Colonia Ensayo",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:08hs",
                "9:28hs",
                "10:13hs",
                "11:53hs",
                "12:53hs",
                "14:53hs",
                "15:53hs",
                "18:43hs",
                "21:53hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:08hs",
                "11:38hs",
                "14:23hs"
              ],
              "diario_ida": [
                "17:23hs",
                "21:08hs",
                "23:53hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:36hs",
                "6:21hs",
                "8:06hs",
                "9:06hs",
                "11:06hs",
                "13:06hs",
                "14:16hs",
                "17:06hs",
                "18:51hs",
                "20:06hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:36hs",
                "9:36hs",
                "12:51hs"
              ],
              "diario_vuelta": [
                "15:36hs",
                "22:06hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Brasilera",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2000,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:08hs",
                "9:28hs",
                "10:13hs",
                "11:53hs",
                "12:53hs",
                "14:53hs",
                "15:53hs",
                "18:43hs",
                "21:53hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:08hs",
                "11:38hs",
                "14:23hs"
              ],
              "diario_ida": [
                "17:23hs",
                "21:08hs",
                "23:53hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:33hs",
                "6:18hs",
                "8:03hs",
                "9:03hs",
                "11:03hs",
                "13:03hs",
                "14:13hs",
                "17:03hs",
                "18:48hs",
                "20:03hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:33hs",
                "9:33hs",
                "12:48hs"
              ],
              "diario_vuelta": [
                "15:33hs",
                "22:03hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Spattzenkuter",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:08hs",
                "9:28hs",
                "10:13hs",
                "11:53hs",
                "12:53hs",
                "14:53hs",
                "15:53hs",
                "18:43hs",
                "21:53hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:08hs",
                "11:38hs",
                "14:23hs"
              ],
              "diario_ida": [
                "17:23hs",
                "21:08hs",
                "23:53hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:29hs",
                "6:14hs",
                "7:59hs",
                "8:59hs",
                "10:59hs",
                "12:59hs",
                "13:09hs",
                "16:59hs",
                "18:44hs",
                "19:59hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:29hs",
                "9:29hs",
                "12:44hs"
              ],
              "diario_vuelta": [
                "15:29hs",
                "21:59hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Valle María",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:08hs",
                "9:28hs",
                "10:13hs",
                "11:53hs",
                "12:53hs",
                "14:53hs",
                "15:53hs",
                "18:43hs",
                "21:53hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:08hs",
                "11:38hs",
                "14:23hs"
              ],
              "diario_ida": [
                "17:23hs",
                "21:08hs",
                "23:53hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:23hs",
                "6:08hs",
                "7:53hs",
                "8:53hs",
                "10:53hs",
                "12:53hs",
                "14:03hs",
                "16:53hs",
                "18:33hs",
                "19:53hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:23hs",
                "9:23hs",
                "12:38hs"
              ],
              "diario_vuelta": [
                "15:23hs",
                "21:53hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Virgen",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:08hs",
                "9:28hs",
                "10:13hs",
                "11:53hs",
                "12:53hs",
                "14:53hs",
                "15:53hs",
                "18:43hs",
                "21:53hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:08hs",
                "11:38hs",
                "14:23hs"
              ],
              "diario_ida": [
                "17:23hs",
                "21:08hs",
                "23:53hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:14hs",
                "5:59hs",
                "7:44hs",
                "8:44hs",
                "10:44hs",
                "12:44hs",
                "13:54hs",
                "16:44hs",
                "18:29hs",
                "19:44hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:14hs",
                "9:14hs",
                "12:29hs"
              ],
              "diario_vuelta": [
                "15:14hs",
                "21:44hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Strobel",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:08hs",
                "9:28hs",
                "10:13hs",
                "11:53hs",
                "12:53hs",
                "14:53hs",
                "15:53hs",
                "18:43hs",
                "21:53hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:08hs",
                "11:38hs",
                "14:23hs"
              ],
              "diario_ida": [
                "17:23hs",
                "21:08hs",
                "23:53hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:10hs",
                "5:55hs",
                "7:40hs",
                "8:40hs",
                "10:40hs",
                "12:40hs",
                "13:50hs",
                "16:40hs",
                "18:25hs",
                "19:40hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:10hs",
                "9:10hs",
                "12:25hs"
              ],
              "diario_vuelta": [
                "15:10hs",
                "21:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Diamante",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:08hs",
                "9:28hs",
                "10:13hs",
                "11:53hs",
                "12:53hs",
                "14:53hs",
                "15:53hs",
                "18:43hs",
                "21:53hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "8:08hs",
                "11:38hs",
                "14:23hs"
              ],
              "diario_ida": [
                "17:23hs",
                "21:08hs",
                "23:53hs"
              ],
              "lunes_a_viernes_vuelta": [
                "5:00hs",
                "5:45hs",
                "7:30hs",
                "8:30hs",
                "10:30hs",
                "12:30hs",
                "13:40hs",
                "16:30hs",
                "18:15hs",
                "19:30hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:00hs",
                "9:00hs",
                "12:15hs"
              ],
              "diario_vuelta": [
                "15:00hs",
                "21:30hs"
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "origen": "La Virgen",
    "destinos": [
      {
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 4700,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:11hs",
                "9:31hs",
                "10:16hs",
                "11:56hs",
                "12:56hs",
                "14:56hs",
                "15:56hs",
                "18:46hs",
                "21:56hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:10hs",
                "10:10hs",
                "13:25hs"
              ],
              "diario_ida": [
                "16:10hs",
                "22:40hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:11hs",
                "11:41hs",
                "14:26hs",
                "17:26hs",
                "21:11hs",
                "23:56hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:10hs",
                "6:55hs",
                "8:40hs",
                "9:40hs",
                "11:40hs",
                "13:40hs",
                "14:50hs",
                "17:40hs",
                "19:25hs",
                "20:40hs"
              ],
              "diario_vuelta": [
                "16:10hs",
                "22:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Oro Verde",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:11hs",
                "9:31hs",
                "10:16hs",
                "11:56hs",
                "12:56hs",
                "14:56hs",
                "15:56hs",
                "18:46hs",
                "21:56hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:24hs",
                "9:42hs",
                "12:57hs"
              ],
              "diario_ida": [
                "15:42hs",
                "22:12hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:11hs",
                "11:41hs",
                "14:26hs",
                "17:26hs",
                "21:11hs",
                "23:56hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:42hs",
                "6:27hs",
                "8:12hs",
                "9:12hs",
                "11:12hs",
                "13:12hs",
                "14:22hs",
                "17:12hs",
                "18:57hs",
                "20:12hs"
              ],
              "diario_vuelta": [
                "15:42hs",
                "22:12hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Colonia Ensayo",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2700,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:11hs",
                "9:31hs",
                "10:16hs",
                "11:56hs",
                "12:56hs",
                "14:56hs",
                "15:56hs",
                "18:46hs",
                "21:56hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:36hs",
                "9:36hs",
                "12:51hs"
              ],
              "diario_ida": [
                "15:32hs",
                "22:06hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:11hs",
                "11:41hs",
                "14:26hs",
                "17:26hs",
                "21:11hs",
                "23:56hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:36hs",
                "6:21hs",
                "8:06hs",
                "9:06hs",
                "11:06hs",
                "13:06hs",
                "14:16hs",
                "17:06hs",
                "18:51hs",
                "20:06hs"
              ],
              "diario_vuelta": [
                "15:32hs",
                "22:06hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Brasilera",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2200,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:11hs",
                "9:31hs",
                "10:16hs",
                "11:56hs",
                "12:56hs",
                "14:56hs",
                "15:56hs",
                "18:46hs",
                "21:56hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:33hs",
                "9:33hs",
                "12:48hs"
              ],
              "diario_ida": [
                "15:23hs",
                "22:03hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:11hs",
                "11:41hs",
                "14:26hs",
                "17:26hs",
                "21:11hs",
                "23:56hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:33hs",
                "6:18hs",
                "8:03hs",
                "9:03hs",
                "11:03hs",
                "13:03hs",
                "14:13hs",
                "17:03hs",
                "18:48hs",
                "20:03hs"
              ],
              "diario_vuelta": [
                "15:23hs",
                "22:03hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Spattzenkuter",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:11hs",
                "9:31hs",
                "10:16hs",
                "11:56hs",
                "12:56hs",
                "14:56hs",
                "15:56hs",
                "18:46hs",
                "21:56hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:29hs",
                "9:29hs",
                "12:44hs"
              ],
              "diario_ida": [
                "15:29hs",
                "21:59hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:11hs",
                "11:41hs",
                "14:26hs",
                "17:26hs",
                "21:11hs",
                "23:56hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:29hs",
                "6:14hs",
                "7:59hs",
                "8:59hs",
                "10:59hs",
                "12:59hs",
                "14:09hs",
                "16:59hs",
                "18:44hs",
                "19:59hs"
              ],
              "diario_vuelta": [
                "15:29hs",
                "21:59hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Valle María",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:11hs",
                "9:31hs",
                "10:16hs",
                "11:56hs",
                "12:56hs",
                "14:56hs",
                "15:56hs",
                "18:46hs",
                "21:56hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:23hs",
                "9:23hs",
                "12:38hs"
              ],
              "diario_ida": [
                "15:23hs",
                "21:53hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:11hs",
                "11:41hs",
                "14:26hs",
                "17:26hs",
                "21:11hs",
                "23:56hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:23hs",
                "6:08hs",
                "7:53hs",
                "8:53hs",
                "10:53hs",
                "12:53hs",
                "14:03hs",
                "16:53hs",
                "18:38hs",
                "19:53hs"
              ],
              "diario_vuelta": [
                "15:23hs",
                "21:53hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Tablilla",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:11hs",
                "9:31hs",
                "10:16hs",
                "11:56hs",
                "12:56hs",
                "14:56hs",
                "15:56hs",
                "18:46hs",
                "21:56hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:17hs",
                "9:17hs",
                "12:32hs"
              ],
              "diario_ida": [
                "15:17hs",
                "21:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:11hs",
                "11:41hs",
                "14:26hs",
                "17:26hs",
                "21:11hs",
                "23:56hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:17hs",
                "6:02hs",
                "7:47hs",
                "8:47hs",
                "10:47hs",
                "12:47hs",
                "13:57hs",
                "16:47hs",
                "18:32hs",
                "19:47hs"
              ],
              "diario_vuelta": [
                "15:17hs",
                "21:47hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Strobel",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:11hs",
                "9:31hs",
                "10:16hs",
                "11:56hs",
                "12:56hs",
                "14:56hs",
                "15:56hs",
                "18:46hs",
                "21:56hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:10hs",
                "9:10hs",
                "12:25hs"
              ],
              "diario_ida": [
                "15:10hs",
                "21:40hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:11hs",
                "11:41hs",
                "14:26hs",
                "17:26hs",
                "21:11hs",
                "23:56hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:10hs",
                "5:55hs",
                "7:40hs",
                "8:40hs",
                "10:40hs",
                "12:40hs",
                "13:50hs",
                "16:40hs",
                "18:25hs",
                "19:40hs"
              ],
              "diario_vuelta": [
                "15:10hs",
                "21:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Diamante",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:11hs",
                "9:31hs",
                "10:16hs",
                "11:56hs",
                "12:56hs",
                "14:56hs",
                "15:56hs",
                "18:46hs",
                "21:56hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:00hs",
                "9:00hs",
                "12:15hs"
              ],
              "diario_ida": [
                "15:05hs",
                "21:30hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:11hs",
                "11:41hs",
                "14:26hs",
                "17:26hs",
                "21:11hs",
                "23:56hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:00hs",
                "5:45hs",
                "7:30hs",
                "8:30hs",
                "10:30hs",
                "12:30hs",
                "13:40hs",
                "16:30hs",
                "18:15hs",
                "19:30hs"
              ],
              "diario_vuelta": [
                "15:05hs",
                "21:30hs"
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "origen": "Strobel",
    "destinos": [
      {
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 5000,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:15hs",
                "9:35hs",
                "10:20hs",
                "12:00hs",
                "13:00hs",
                "15:00hs",
                "16:00hs",
                "18:50hs",
                "22:00hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:10hs",
                "10:10hs",
                "13:25hs"
              ],
              "diario_ida": [
                "16:10hs",
                "22:40hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:15hs",
                "11:45hs",
                "14:30hs",
                "17:30hs",
                "21:15hs",
                "0:00hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:10hs",
                "6:55hs",
                "8:40hs",
                "9:40hs",
                "11:40hs",
                "13:40hs",
                "14:50hs",
                "17:40hs",
                "19:25hs",
                "20:40hs"
              ],
              "diario_vuelta": [
                "16:10hs",
                "22:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Oro Verde",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3900,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:15hs",
                "9:35hs",
                "10:20hs",
                "12:00hs",
                "13:00hs",
                "15:00hs",
                "16:00hs",
                "18:50hs",
                "22:00hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:24hs",
                "9:42hs",
                "12:57hs"
              ],
              "diario_ida": [
                "15:42hs",
                "22:12hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:15hs",
                "11:45hs",
                "14:30hs",
                "17:30hs",
                "21:15hs",
                "0:00hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:42hs",
                "6:27hs",
                "8:12hs",
                "9:12hs",
                "11:12hs",
                "13:12hs",
                "14:22hs",
                "17:12hs",
                "18:57hs",
                "20:12hs"
              ],
              "diario_vuelta": [
                "15:42hs",
                "22:12hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Colonia Ensayo",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3000,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:15hs",
                "9:35hs",
                "10:20hs",
                "12:00hs",
                "13:00hs",
                "15:00hs",
                "16:00hs",
                "18:50hs",
                "22:00hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:36hs",
                "9:36hs",
                "12:51hs"
              ],
              "diario_ida": [
                "15:36hs",
                "22:06hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:15hs",
                "11:45hs",
                "14:30hs",
                "17:30hs",
                "21:15hs",
                "0:00hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:36hs",
                "6:21hs",
                "8:06hs",
                "9:06hs",
                "11:06hs",
                "13:06hs",
                "14:16hs",
                "17:06hs",
                "18:51hs",
                "20:06hs"
              ],
              "diario_vuelta": [
                "15:36hs",
                "22:06hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Brasilera",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2600,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:15hs",
                "9:35hs",
                "10:20hs",
                "12:00hs",
                "13:00hs",
                "15:00hs",
                "16:00hs",
                "18:50hs",
                "22:00hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:33hs",
                "9:33hs",
                "12:48hs"
              ],
              "diario_ida": [
                "15:33hs",
                "22:03hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:15hs",
                "11:45hs",
                "14:30hs",
                "17:30hs",
                "21:15hs",
                "0:00hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:33hs",
                "6:18hs",
                "8:03hs",
                "9:03hs",
                "11:03hs",
                "13:03hs",
                "14:13hs",
                "17:03hs",
                "18:48hs",
                "20:03hs"
              ],
              "diario_vuelta": [
                "15:33hs",
                "22:03hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Spattzenkuter",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1700,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:15hs",
                "9:35hs",
                "10:20hs",
                "12:00hs",
                "13:00hs",
                "15:00hs",
                "16:00hs",
                "18:50hs",
                "22:00hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:29hs",
                "9:29hs",
                "12:44hs"
              ],
              "diario_ida": [
                "15:29hs",
                "21:59hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:15hs",
                "11:45hs",
                "14:30hs",
                "17:30hs",
                "21:15hs",
                "0:00hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:29hs",
                "6:14hs",
                "7:59hs",
                "8:59hs",
                "10:59hs",
                "12:59hs",
                "14:09hs",
                "16:59hs",
                "18:44hs",
                "19:59hs"
              ],
              "diario_vuelta": [
                "15:29hs",
                "21:59hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Valle María",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:15hs",
                "9:35hs",
                "10:20hs",
                "12:00hs",
                "13:00hs",
                "15:00hs",
                "16:00hs",
                "18:50hs",
                "22:00hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:23hs",
                "9:23hs",
                "12:38hs"
              ],
              "diario_ida": [
                "15:23hs",
                "21:53hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:15hs",
                "11:45hs",
                "14:30hs",
                "17:30hs",
                "21:15hs",
                "0:00hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:23hs",
                "6:08hs",
                "7:53hs",
                "8:53hs",
                "10:53hs",
                "12:53hs",
                "14:03hs",
                "16:53hs",
                "18:38hs",
                "19:53hs"
              ],
              "diario_vuelta": [
                "15:23hs",
                "21:53hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Tablilla",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:15hs",
                "9:35hs",
                "10:20hs",
                "12:00hs",
                "13:00hs",
                "15:00hs",
                "16:00hs",
                "18:50hs",
                "22:00hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:17hs",
                "9:17hs",
                "12:32hs"
              ],
              "diario_ida": [
                "15:17hs",
                "21:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:15hs",
                "11:45hs",
                "14:30hs",
                "17:30hs",
                "21:15hs",
                "0:00hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:17hs",
                "6:02hs",
                "7:47hs",
                "8:47hs",
                "10:47hs",
                "12:47hs",
                "13:57hs",
                "16:47hs",
                "18:32hs",
                "19:47hs"
              ],
              "diario_vuelta": [
                "15:17hs",
                "21:47hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Virgen",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:15hs",
                "9:35hs",
                "10:20hs",
                "12:00hs",
                "13:00hs",
                "15:00hs",
                "16:00hs",
                "18:50hs",
                "22:00hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:14hs",
                "9:14hs",
                "12:29hs"
              ],
              "diario_ida": [
                "15:14hs",
                "21:44hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:15hs",
                "11:45hs",
                "14:30hs",
                "17:30hs",
                "21:15hs",
                "0:00hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:14hs",
                "5:59hs",
                "7:44hs",
                "8:44hs",
                "10:44hs",
                "12:44hs",
                "13:54hs",
                "16:44hs",
                "18:29hs",
                "19:44hs"
              ],
              "diario_vuelta": [
                "15:14hs",
                "21:44hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Diamante",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:15hs",
                "9:35hs",
                "10:20hs",
                "12:00hs",
                "13:00hs",
                "15:00hs",
                "16:00hs",
                "18:50hs",
                "22:00hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:00hs",
                "9:00hs",
                "12:15hs"
              ],
              "diario_ida": [
                "15:05hs",
                "21:30hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:15hs",
                "11:45hs",
                "14:30hs",
                "17:30hs",
                "21:15hs",
                "0:00hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:00hs",
                "5:45hs",
                "7:30hs",
                "8:30hs",
                "10:30hs",
                "12:30hs",
                "13:40hs",
                "16:30hs",
                "18:15hs",
                "19:30hs"
              ],
              "diario_vuelta": [
                "15:05hs",
                "21:30hs"
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "origen": "Diamante",
    "destinos": [
      {
        "destino": "Paraná",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 5600,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:25hs",
                "9:45hs",
                "10:30hs",
                "12:10hs",
                "13:10hs",
                "15:10hs",
                "16:10hs",
                "19:00hs",
                "22:10hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "7:10hs",
                "10:10hs",
                "13:25hs"
              ],
              "diario_ida": [
                "16:10hs",
                "22:40hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:25hs",
                "11:55hs",
                "14:40hs",
                "17:40hs",
                "21:25hs",
                "0:10hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "6:10hs",
                "6:55hs",
                "8:40hs",
                "9:40hs",
                "11:40hs",
                "13:40hs",
                "14:50hs",
                "17:40hs",
                "19:25hs",
                "20:40hs"
              ],
              "diario_vuelta": [
                "16:10hs",
                "22:40hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Oro Verde",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 4500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:25hs",
                "9:45hs",
                "10:30hs",
                "12:10hs",
                "13:10hs",
                "15:10hs",
                "16:10hs",
                "19:00hs",
                "22:10hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:24hs",
                "9:42hs",
                "12:57hs"
              ],
              "diario_ida": [
                "15:42hs",
                "22:12hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:25hs",
                "11:55hs",
                "14:40hs",
                "17:40hs",
                "21:25hs",
                "0:10hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:42hs",
                "6:27hs",
                "8:12hs",
                "9:12hs",
                "11:12hs",
                "13:12hs",
                "14:22hs",
                "17:12hs",
                "18:57hs",
                "20:12hs"
              ],
              "diario_vuelta": [
                "15:42hs",
                "22:12hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Colonia Ensayo",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3600,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:25hs",
                "9:45hs",
                "10:30hs",
                "12:10hs",
                "13:10hs",
                "15:10hs",
                "16:10hs",
                "19:00hs",
                "22:10hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:36hs",
                "9:36hs",
                "12:51hs"
              ],
              "diario_ida": [
                "15:36hs",
                "22:06hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:25hs",
                "11:55hs",
                "14:40hs",
                "17:40hs",
                "21:25hs",
                "0:10hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:36hs",
                "6:21hs",
                "8:06hs",
                "9:06hs",
                "11:06hs",
                "13:06hs",
                "14:16hs",
                "17:06hs",
                "18:51hs",
                "20:06hs"
              ],
              "diario_vuelta": [
                "15:36hs",
                "22:06hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Brasilera",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 3100,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:25hs",
                "9:45hs",
                "10:30hs",
                "12:10hs",
                "13:10hs",
                "15:10hs",
                "16:10hs",
                "19:00hs",
                "22:10hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:33hs",
                "9:33hs",
                "12:48hs"
              ],
              "diario_ida": [
                "15:33hs",
                "22:03hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:25hs",
                "11:55hs",
                "14:40hs",
                "17:40hs",
                "21:25hs",
                "0:10hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:33hs",
                "6:18hs",
                "8:03hs",
                "9:03hs",
                "11:03hs",
                "13:03hs",
                "14:13hs",
                "17:03hs",
                "18:48hs",
                "20:03hs"
              ],
              "diario_vuelta": [
                "15:33hs",
                "22:03hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Aldea Spattzenkuter",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 2200,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:25hs",
                "10:30hs",
                "12:10hs",
                "13:10hs",
                "15:10hs",
                "16:10hs",
                "19:00hs",
                "22:10hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:29hs",
                "9:29hs",
                "12:44hs"
              ],
              "diario_ida": [
                "15:29hs",
                "21:59hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:25hs",
                "11:55hs",
                "14:40hs",
                "17:40hs",
                "21:25hs",
                "0:10hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:29hs",
                "6:14hs",
                "7:59hs",
                "8:59hs",
                "10:59hs",
                "12:59hs",
                "14:09hs",
                "16:59hs",
                "18:44hs",
                "19:59hs"
              ],
              "diario_vuelta": [
                "15:29hs",
                "21:59hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Valle María",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1700,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:25hs",
                "9:45hs",
                "10:30hs",
                "12:10hs",
                "13:10hs",
                "15:10hs",
                "16:10hs",
                "19:00hs",
                "22:10hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:23hs",
                "9:23hs",
                "12:38hs"
              ],
              "diario_ida": [
                "15:23hs",
                "21:53hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:25hs",
                "11:55hs",
                "14:40hs",
                "17:40hs",
                "21:25hs",
                "0:10hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:23hs",
                "6:08hs",
                "7:53hs",
                "8:53hs",
                "10:53hs",
                "12:53hs",
                "14:03hs",
                "16:53hs",
                "18:38hs",
                "19:53hs"
              ],
              "diario_vuelta": [
                "15:23hs",
                "21:53hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Tablilla",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:25hs",
                "9:45hs",
                "10:30hs",
                "12:10hs",
                "13:10hs",
                "15:10hs",
                "16:10hs",
                "19:00hs",
                "22:10hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:17hs",
                "9:17hs",
                "12:32hs"
              ],
              "diario_ida": [
                "15:17hs",
                "21:47hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:25hs",
                "11:55hs",
                "14:40hs",
                "17:40hs",
                "21:25hs",
                "0:10hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:17hs",
                "6:02hs",
                "7:47hs",
                "8:47hs",
                "10:47hs",
                "12:47hs",
                "13:57hs",
                "16:47hs",
                "18:32hs",
                "19:47hs"
              ],
              "diario_vuelta": [
                "15:17hs",
                "21:47hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "La Virgen",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:25hs",
                "9:45hs",
                "10:30hs",
                "12:10hs",
                "13:10hs",
                "15:10hs",
                "16:10hs",
                "19:00hs",
                "22:10hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:14hs",
                "9:14hs",
                "12:29hs"
              ],
              "diario_ida": [
                "15:14hs",
                "21:44hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:25hs",
                "11:55hs",
                "14:40hs",
                "17:40hs",
                "21:25hs",
                "0:10hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:14hs",
                "5:59hs",
                "7:44hs",
                "8:44hs",
                "10:44hs",
                "12:44hs",
                "13:54hs",
                "16:44hs",
                "18:29hs",
                "19:44hs"
              ],
              "diario_vuelta": [
                "15:14hs",
                "21:44hs"
              ]
            }
          }
        ]
      },
      {
        "destino": "Strobel",
        "servicios": [
          {
            "tipo": "Coche Común",
            "precio": 1500,
            "horarios": {
              "lunes_a_viernes_ida": [
                "7:25hs",
                "9:45hs",
                "10:30hs",
                "12:10hs",
                "13:10hs",
                "15:10hs",
                "16:10hs",
                "19:00hs",
                "22:10hs"
              ],
              "sabados_domingos_ida": [],
              "domingos_ida": [
                "6:10hs",
                "9:10hs",
                "12:25hs"
              ],
              "diario_ida": [
                "15:10hs",
                "21:40hs"
              ],
              "lunes_a_viernes_vuelta": [
                "8:25hs",
                "11:55hs",
                "14:40hs",
                "17:40hs",
                "21:25hs",
                "0:10hs"
              ],
              "sabados_domingos_vuelta": [],
              "domingos_vuelta": [
                "5:10hs",
                "5:55hs",
                "7:40hs",
                "8:40hs",
                "10:40hs",
                "12:40hs",
                "13:50hs",
                "16:40hs",
                "18:25hs",
                "19:40hs"
              ],
              "diario_vuelta": [
                "15:10hs",
                "21:40hs"
              ]
            }
          }
        ]
      }
    ]
  },
  {
  "origen": "GNL Genolot",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:25hs"],
            "domingos_ida": ["21:25hs"],
            "diario_ida": ["21:25hs"],
            "lunes_a_viernes_vuelta": ["08:15hs"],
            "domingos_vuelta": ["08:15hs"],
            "diario_vuelta": ["08:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:40hs"],
            "domingos_ida": ["08:40hs"],
            "diario_ida": ["08:40hs"],
            "lunes_a_viernes_vuelta": ["20:55hs"],
            "domingos_vuelta": ["20:55hs"],
            "diario_vuelta": ["20:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3100, "Cama": 3500 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:50hs"],
            "domingos_ida": ["08:50hs"],
            "diario_ida": ["08:50hs"],
            "lunes_a_viernes_vuelta": ["20:45hs"],
            "domingos_vuelta": ["20:45hs"],
            "diario_vuelta": ["20:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3400, "Cama": 3800 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:00hs"],
            "domingos_ida": ["09:00hs"],
            "diario_ida": ["09:00hs"],
            "lunes_a_viernes_vuelta": ["20:40hs"],
            "domingos_vuelta": ["20:40hs"],
            "diario_vuelta": ["20:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4000, "Cama": 4900 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:15hs"],
            "domingos_ida": ["09:15hs"],
            "diario_ida": ["09:15hs"],
            "lunes_a_viernes_vuelta": ["20:20hs"],
            "domingos_vuelta": ["20:20hs"],
            "diario_vuelta": ["20:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5400, "Cama": 6000 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:25hs"],
            "domingos_ida": ["09:25hs"],
            "diario_ida": ["09:25hs"],
            "lunes_a_viernes_vuelta": ["20:10hs"],
            "domingos_vuelta": ["20:10hs"],
            "diario_vuelta": ["20:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6300, "Cama": 7100 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7500, "Cama": 8400 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:45hs"],
            "domingos_ida": ["09:45hs"],
            "diario_ida": ["09:45hs"],
            "lunes_a_viernes_vuelta": ["19:50hs"],
            "domingos_vuelta": ["19:50hs"],
            "diario_vuelta": ["19:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9000, "Cama": 10100 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:55hs"],
            "domingos_ida": ["09:55hs"],
            "diario_ida": ["09:55hs"],
            "lunes_a_viernes_vuelta": ["19:40hs"],
            "domingos_vuelta": ["19:40hs"],
            "diario_vuelta": ["19:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10500, "Cama": 11800 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:06hs"],
            "domingos_ida": ["10:06hs"],
            "diario_ida": ["10:06hs"],
            "lunes_a_viernes_vuelta": ["19:30hs"],
            "domingos_vuelta": ["19:30hs"],
            "diario_vuelta": ["19:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 12200, "Cama": 13700 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:15hs"],
            "domingos_ida": ["10:15hs"],
            "diario_ida": ["10:15hs"],
            "lunes_a_viernes_vuelta": ["19:20hs"],
            "domingos_vuelta": ["19:20hs"],
            "diario_vuelta": ["19:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14700, "Cama": 16500 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15500, "Cama": 17500 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:20hs"],
            "domingos_ida": ["10:20hs"],
            "diario_ida": ["10:20hs"],
            "lunes_a_viernes_vuelta": ["18:50hs"],
            "domingos_vuelta": ["18:50hs"],
            "diario_vuelta": ["18:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16500, "Cama": 18600 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:25hs"],
            "domingos_ida": ["10:25hs"],
            "diario_ida": ["10:25hs"],
            "lunes_a_viernes_vuelta": ["19:00hs"],
            "domingos_vuelta": ["19:00hs"],
            "diario_vuelta": ["19:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 17600, "Cama": 19700 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:50hs"],
            "domingos_ida": ["10:50hs"],
            "diario_ida": ["10:50hs"],
            "lunes_a_viernes_vuelta": ["18:40hs"],
            "domingos_vuelta": ["18:40hs"],
            "diario_vuelta": ["18:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19800, "Cama": 22200 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:05hs"],
            "domingos_ida": ["11:05hs"],
            "diario_ida": ["11:05hs"],
            "lunes_a_viernes_vuelta": ["18:25hs"],
            "domingos_vuelta": ["18:25hs"],
            "diario_vuelta": ["18:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador (ERI)",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 21600, "Cama": 24300 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:30hs"],
            "domingos_ida": ["11:30hs"],
            "diario_ida": ["11:30hs"],
            "lunes_a_viernes_vuelta": ["18:10hs"],
            "domingos_vuelta": ["18:10hs"],
            "diario_vuelta": ["18:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Gral. Campos (E. Ríos)",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 23500, "Cama": 26300 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:50hs"],
            "domingos_ida": ["11:50hs"],
            "diario_ida": ["11:50hs"],
            "lunes_a_viernes_vuelta": ["17:45hs"],
            "domingos_vuelta": ["17:45hs"],
            "diario_vuelta": ["17:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 25500, "Cama": 28300 },
          "horarios": {
            "lunes_a_viernes_ida": ["12:45hs"],
            "domingos_ida": ["12:45hs"],
            "diario_ida": ["12:45hs"],
            "lunes_a_viernes_vuelta": ["16:55hs"],
            "domingos_vuelta": ["16:55hs"],
            "diario_vuelta": ["16:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 34500, "Cama": 38600 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:35hs"],
            "domingos_ida": ["13:35hs"],
            "diario_ida": ["13:35hs"],
            "lunes_a_viernes_vuelta": ["15:50hs"],
            "domingos_vuelta": ["15:50hs"],
            "diario_vuelta": ["15:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 34500, "Cama": 38600 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:45hs"],
            "domingos_ida": ["13:45hs"],
            "diario_ida": ["13:45hs"],
            "lunes_a_viernes_vuelta": ["15:40hs"],
            "domingos_vuelta": ["15:40hs"],
            "diario_vuelta": ["15:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Tres Bocas",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3100, "Cama": 3500 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:25hs"],
            "domingos_ida": ["21:25hs"],
            "diario_ida": ["21:25hs"],
            "lunes_a_viernes_vuelta": ["08:15hs"],
            "domingos_vuelta": ["08:15hs"],
            "diario_vuelta": ["08:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:05hs"],
            "domingos_ida": ["21:05hs"],
            "diario_ida": ["21:05hs"],
            "lunes_a_viernes_vuelta": ["08:30hs"],
            "domingos_vuelta": ["08:30hs"],
            "diario_vuelta": ["08:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:50hs"],
            "domingos_ida": ["08:50hs"],
            "diario_ida": ["08:50hs"],
            "lunes_a_viernes_vuelta": ["20:45hs"],
            "domingos_vuelta": ["20:45hs"],
            "diario_vuelta": ["20:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2900, "Cama": 3200 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:00hs"],
            "domingos_ida": ["09:00hs"],
            "diario_ida": ["09:00hs"],
            "lunes_a_viernes_vuelta": ["20:40hs"],
            "domingos_vuelta": ["20:40hs"],
            "diario_vuelta": ["20:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3900, "Cama": 3900 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:15hs"],
            "domingos_ida": ["09:15hs"],
            "diario_ida": ["09:15hs"],
            "lunes_a_viernes_vuelta": ["20:20hs"],
            "domingos_vuelta": ["20:20hs"],
            "diario_vuelta": ["20:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4800, "Cama": 4900 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:25hs"],
            "domingos_ida": ["09:25hs"],
            "diario_ida": ["09:25hs"],
            "lunes_a_viernes_vuelta": ["20:10hs"],
            "domingos_vuelta": ["20:10hs"],
            "diario_vuelta": ["20:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5400, "Cama": 5400 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7500, "Cama": 6700 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:45hs"],
            "domingos_ida": ["09:45hs"],
            "diario_ida": ["09:45hs"],
            "lunes_a_viernes_vuelta": ["19:50hs"],
            "domingos_vuelta": ["19:50hs"],
            "diario_vuelta": ["19:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9000, "Cama": 9000 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:55hs"],
            "domingos_ida": ["09:55hs"],
            "diario_ida": ["09:55hs"],
            "lunes_a_viernes_vuelta": ["19:40hs"],
            "domingos_vuelta": ["19:40hs"],
            "diario_vuelta": ["19:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10700, "Cama": 10100 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:06hs"],
            "domingos_ida": ["10:06hs"],
            "diario_ida": ["10:06hs"],
            "lunes_a_viernes_vuelta": ["19:30hs"],
            "domingos_vuelta": ["19:30hs"],
            "diario_vuelta": ["19:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13200, "Cama": 13700 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:15hs"],
            "domingos_ida": ["10:15hs"],
            "diario_ida": ["10:15hs"],
            "lunes_a_viernes_vuelta": ["19:20hs"],
            "domingos_vuelta": ["19:20hs"],
            "diario_vuelta": ["19:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15400, "Cama": 14800 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16500, "Cama": 15700 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:20hs"],
            "domingos_ida": ["10:20hs"],
            "diario_ida": ["10:20hs"],
            "lunes_a_viernes_vuelta": ["18:50hs"],
            "domingos_vuelta": ["18:50hs"],
            "diario_vuelta": ["18:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 17400, "Cama": 16900 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:25hs"],
            "domingos_ida": ["10:25hs"],
            "diario_ida": ["10:25hs"],
            "lunes_a_viernes_vuelta": ["19:00hs"],
            "domingos_vuelta": ["19:00hs"],
            "diario_vuelta": ["19:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 18500, "Cama": 18000 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:50hs"],
            "domingos_ida": ["10:50hs"],
            "diario_ida": ["10:50hs"],
            "lunes_a_viernes_vuelta": ["18:40hs"],
            "domingos_vuelta": ["18:40hs"],
            "diario_vuelta": ["18:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19800, "Cama": 20500 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:05hs"],
            "domingos_ida": ["11:05hs"],
            "diario_ida": ["11:05hs"],
            "lunes_a_viernes_vuelta": ["18:25hs"],
            "domingos_vuelta": ["18:25hs"],
            "diario_vuelta": ["18:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 20500, "Cama": 22500 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:30hs"],
            "domingos_ida": ["11:30hs"],
            "diario_ida": ["11:30hs"],
            "lunes_a_viernes_vuelta": ["18:10hs"],
            "domingos_vuelta": ["18:10hs"],
            "diario_vuelta": ["18:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 22200, "Cama": 24500 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:50hs"],
            "domingos_ida": ["11:50hs"],
            "diario_ida": ["11:50hs"],
            "lunes_a_viernes_vuelta": ["17:45hs"],
            "domingos_vuelta": ["17:45hs"],
            "diario_vuelta": ["17:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 23500, "Cama": 26500 },
          "horarios": {
            "lunes_a_viernes_ida": ["12:45hs"],
            "domingos_ida": ["12:45hs"],
            "diario_ida": ["12:45hs"],
            "lunes_a_viernes_vuelta": ["16:55hs"],
            "domingos_vuelta": ["16:55hs"],
            "diario_vuelta": ["16:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 35000, "Cama": 37000 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:35hs"],
            "domingos_ida": ["13:35hs"],
            "diario_ida": ["13:35hs"],
            "lunes_a_viernes_vuelta": ["15:50hs"],
            "domingos_vuelta": ["15:50hs"],
            "diario_vuelta": ["15:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 35000, "Cama": 37000 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:45hs"],
            "domingos_ida": ["13:45hs"],
            "diario_ida": ["13:45hs"],
            "lunes_a_viernes_vuelta": ["15:40hs"],
            "domingos_vuelta": ["15:40hs"],
            "diario_vuelta": ["15:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Quebacho",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3500, "Cama": 3900 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:45hs"],
            "domingos_ida": ["20:45hs"],
            "diario_ida": ["20:45hs"],
            "lunes_a_viernes_vuelta": ["08:50hs"],
            "domingos_vuelta": ["08:50hs"],
            "diario_vuelta": ["08:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3100, "Cama": 3500 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:45hs"],
            "domingos_ida": ["20:45hs"],
            "diario_ida": ["20:45hs"],
            "lunes_a_viernes_vuelta": ["08:50hs"],
            "domingos_vuelta": ["08:50hs"],
            "diario_vuelta": ["08:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:45hs"],
            "domingos_ida": ["20:45hs"],
            "diario_ida": ["20:45hs"],
            "lunes_a_viernes_vuelta": ["08:50hs"],
            "domingos_vuelta": ["08:50hs"],
            "diario_vuelta": ["08:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },

    { "destino": "Rambon",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 2700, "Cama": 3100 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Viale Acceso",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 3900, "Cama": 4500 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Rossier",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 3900, "Cama": 4500 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Tres Sauces",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 5100, "Cama": 5400 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Barbagelatta",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 5700, "Cama": 6200 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Pineiro",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 8000, "Cama": 9000 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Fca de Palmas",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 9700, "Cama": 9300 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Baño Oficial",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 13200, "Cama": 13900 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Villaguay",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 14300, "Cama": 14100 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Travichet",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 15300, "Cama": 15700 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Camino de Ripio",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 16300, "Cama": 16100 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Villa Clara",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 17400, "Cama": 17200 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Jubileo Acceso",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 19300, "Cama": 21300 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "San Salvador",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 19100, "Cama": 21700 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "General Campos",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 21000, "Cama": 23700 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Concordia",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 23000, "Cama": 25700 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Acceso Federacion",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 23000, "Cama": 26700 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    },
    { "destino": "Federacion",
      "servicios": [{
        "tipo": "Semicama y Cama",
        "precios": { "Semicama": 32000, "Cama": 35500 },
        "horarios": {
          "lunes_a_viernes_ida": ["08:50hs"],
          "domingos_ida": ["08:50hs"],
          "diario_ida": ["08:50hs"],
          "lunes_a_viernes_vuelta": ["20:45hs"],
          "domingos_vuelta": ["20:45hs"],
          "diario_vuelta": ["20:45hs"],
          "sabados_domingos_ida": [],
          "sabados_domingos_vuelta": [],
          "diario": []
        }
      }]
    }
  ]
},
{
  "origen": "Rambon",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4400, "Cama": 4900 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:25hs"],
            "domingos_ida": ["21:25hs"],
            "diario_ida": ["21:25hs"],
            "lunes_a_viernes_vuelta": ["08:15hs"],
            "domingos_vuelta": ["08:15hs"],
            "diario_vuelta": ["08:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3800, "Cama": 3800 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:05hs"],
            "domingos_ida": ["21:05hs"],
            "diario_ida": ["21:05hs"],
            "lunes_a_viernes_vuelta": ["08:30hs"],
            "domingos_vuelta": ["08:30hs"],
            "diario_vuelta": ["08:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2900, "Cama": 3300 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:55hs"],
            "domingos_ida": ["20:55hs"],
            "diario_ida": ["20:55hs"],
            "lunes_a_viernes_vuelta": ["08:40hs"],
            "domingos_vuelta": ["08:40hs"],
            "diario_vuelta": ["08:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:45hs"],
            "domingos_ida": ["20:45hs"],
            "diario_ida": ["20:45hs"],
            "lunes_a_viernes_vuelta": ["08:50hs"],
            "domingos_vuelta": ["08:50hs"],
            "diario_vuelta": ["08:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3300, "Cama": 3300 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:20hs"],
            "domingos_ida": ["20:20hs"],
            "diario_ida": ["20:20hs"],
            "lunes_a_viernes_vuelta": ["09:15hs"],
            "domingos_vuelta": ["09:15hs"],
            "diario_vuelta": ["09:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2900, "Cama": 3200 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:10hs"],
            "domingos_ida": ["20:10hs"],
            "diario_ida": ["20:10hs"],
            "lunes_a_viernes_vuelta": ["09:25hs"],
            "domingos_vuelta": ["09:25hs"],
            "diario_vuelta": ["09:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4100, "Cama": 4100 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:00hs"],
            "domingos_ida": ["20:00hs"],
            "diario_ida": ["20:00hs"],
            "lunes_a_viernes_vuelta": ["09:37hs"],
            "domingos_vuelta": ["09:37hs"],
            "diario_vuelta": ["09:37hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5200, "Cama": 5200 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:50hs"],
            "domingos_ida": ["19:50hs"],
            "diario_ida": ["19:50hs"],
            "lunes_a_viernes_vuelta": ["09:45hs"],
            "domingos_vuelta": ["09:45hs"],
            "diario_vuelta": ["09:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7100, "Cama": 5600 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:40hs"],
            "domingos_ida": ["19:40hs"],
            "diario_ida": ["19:40hs"],
            "lunes_a_viernes_vuelta": ["09:55hs"],
            "domingos_vuelta": ["09:55hs"],
            "diario_vuelta": ["09:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8800, "Cama": 7600 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:30hs"],
            "domingos_ida": ["19:30hs"],
            "diario_ida": ["19:30hs"],
            "lunes_a_viernes_vuelta": ["10:06hs"],
            "domingos_vuelta": ["10:06hs"],
            "diario_vuelta": ["10:06hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11100, "Cama": 9300 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:20hs"],
            "domingos_ida": ["19:20hs"],
            "diario_ida": ["19:20hs"],
            "lunes_a_viernes_vuelta": ["10:15hs"],
            "domingos_vuelta": ["10:15hs"],
            "diario_vuelta": ["10:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13200, "Cama": 11100 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14200, "Cama": 12100 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:50hs"],
            "domingos_ida": ["18:50hs"],
            "diario_ida": ["18:50hs"],
            "lunes_a_viernes_vuelta": ["10:37hs"],
            "domingos_vuelta": ["10:37hs"],
            "diario_vuelta": ["10:37hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15200, "Cama": 13300 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:00hs"],
            "domingos_ida": ["19:00hs"],
            "diario_ida": ["19:00hs"],
            "lunes_a_viernes_vuelta": ["10:25hs"],
            "domingos_vuelta": ["10:25hs"],
            "diario_vuelta": ["10:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16300, "Cama": 14400 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:40hs"],
            "domingos_ida": ["18:40hs"],
            "diario_ida": ["18:40hs"],
            "lunes_a_viernes_vuelta": ["10:50hs"],
            "domingos_vuelta": ["10:50hs"],
            "diario_vuelta": ["10:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16900, "Cama": 16900 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:25hs"],
            "domingos_ida": ["18:25hs"],
            "diario_ida": ["18:25hs"],
            "lunes_a_viernes_vuelta": ["11:05hs"],
            "domingos_vuelta": ["11:05hs"],
            "diario_vuelta": ["11:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 18100, "Cama": 19000 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:10hs"],
            "domingos_ida": ["18:10hs"],
            "diario_ida": ["18:10hs"],
            "lunes_a_viernes_vuelta": ["11:30hs"],
            "domingos_vuelta": ["11:30hs"],
            "diario_vuelta": ["11:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 20100, "Cama": 21400 },
          "horarios": {
            "lunes_a_viernes_ida": ["17:45hs"],
            "domingos_ida": ["17:45hs"],
            "diario_ida": ["17:45hs"],
            "lunes_a_viernes_vuelta": ["11:50hs"],
            "domingos_vuelta": ["11:50hs"],
            "diario_vuelta": ["11:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 23100, "Cama": 23400 },
          "horarios": {
            "lunes_a_viernes_ida": ["16:55hs"],
            "domingos_ida": ["16:55hs"],
            "diario_ida": ["16:55hs"],
            "lunes_a_viernes_vuelta": ["12:45hs"],
            "domingos_vuelta": ["12:45hs"],
            "diario_vuelta": ["12:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 31000, "Cama": 27400 },
          "horarios": {
            "lunes_a_viernes_ida": ["15:50hs"],
            "domingos_ida": ["15:50hs"],
            "diario_ida": ["15:50hs"],
            "lunes_a_viernes_vuelta": ["13:35hs"],
            "domingos_vuelta": ["13:35hs"],
            "diario_vuelta": ["13:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 31000, "Cama": 34700 },
          "horarios": {
            "lunes_a_viernes_ida": ["15:40hs"],
            "domingos_ida": ["15:40hs"],
            "diario_ida": ["15:40hs"],
            "lunes_a_viernes_vuelta": ["13:45hs"],
            "domingos_vuelta": ["13:45hs"],
            "diario_vuelta": ["13:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Viale Acceso",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6400, "Cama": 7200 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:25hs"],
            "domingos_ida": ["21:25hs"],
            "diario_ida": ["21:25hs"],
            "lunes_a_viernes_vuelta": ["08:15hs"],
            "domingos_vuelta": ["08:15hs"],
            "diario_vuelta": ["08:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4400, "Cama": 4900 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:05hs"],
            "domingos_ida": ["21:05hs"],
            "diario_ida": ["21:05hs"],
            "lunes_a_viernes_vuelta": ["08:30hs"],
            "domingos_vuelta": ["08:30hs"],
            "diario_vuelta": ["08:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3200, "Cama": 3300 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:55hs"],
            "domingos_ida": ["20:55hs"],
            "diario_ida": ["20:55hs"],
            "lunes_a_viernes_vuelta": ["08:40hs"],
            "domingos_vuelta": ["08:40hs"],
            "diario_vuelta": ["08:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2900, "Cama": 3400 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:45hs"],
            "domingos_ida": ["20:45hs"],
            "diario_ida": ["20:45hs"],
            "lunes_a_viernes_vuelta": ["08:50hs"],
            "domingos_vuelta": ["08:50hs"],
            "diario_vuelta": ["08:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3300 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:40hs"],
            "domingos_ida": ["20:40hs"],
            "diario_ida": ["20:40hs"],
            "lunes_a_viernes_vuelta": ["09:00hs"],
            "domingos_vuelta": ["09:00hs"],
            "diario_vuelta": ["09:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:10hs"],
            "domingos_ida": ["20:10hs"],
            "diario_ida": ["20:10hs"],
            "lunes_a_viernes_vuelta": ["09:25hs"],
            "domingos_vuelta": ["09:25hs"],
            "diario_vuelta": ["09:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3100, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:00hs"],
            "domingos_ida": ["20:00hs"],
            "diario_ida": ["20:00hs"],
            "lunes_a_viernes_vuelta": ["09:37hs"],
            "domingos_vuelta": ["09:37hs"],
            "diario_vuelta": ["09:37hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4600, "Cama": 3700 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:50hs"],
            "domingos_ida": ["19:50hs"],
            "diario_ida": ["19:50hs"],
            "lunes_a_viernes_vuelta": ["09:45hs"],
            "domingos_vuelta": ["09:45hs"],
            "diario_vuelta": ["09:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6100, "Cama": 4600 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:40hs"],
            "domingos_ida": ["19:40hs"],
            "diario_ida": ["19:40hs"],
            "lunes_a_viernes_vuelta": ["09:55hs"],
            "domingos_vuelta": ["09:55hs"],
            "diario_vuelta": ["09:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7800, "Cama": 6800 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:30hs"],
            "domingos_ida": ["19:30hs"],
            "diario_ida": ["19:30hs"],
            "lunes_a_viernes_vuelta": ["10:06hs"],
            "domingos_vuelta": ["10:06hs"],
            "diario_vuelta": ["10:06hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10300, "Cama": 9600 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:20hs"],
            "domingos_ida": ["19:20hs"],
            "diario_ida": ["19:20hs"],
            "lunes_a_viernes_vuelta": ["10:15hs"],
            "domingos_vuelta": ["10:15hs"],
            "diario_vuelta": ["10:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 12400, "Cama": 11900 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13500, "Cama": 13000 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:50hs"],
            "domingos_ida": ["18:50hs"],
            "diario_ida": ["18:50hs"],
            "lunes_a_viernes_vuelta": ["10:37hs"],
            "domingos_vuelta": ["10:37hs"],
            "diario_vuelta": ["10:37hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14900, "Cama": 14100 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:00hs"],
            "domingos_ida": ["19:00hs"],
            "diario_ida": ["19:00hs"],
            "lunes_a_viernes_vuelta": ["10:25hs"],
            "domingos_vuelta": ["10:25hs"],
            "diario_vuelta": ["10:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15600, "Cama": 15300 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:40hs"],
            "domingos_ida": ["18:40hs"],
            "diario_ida": ["18:40hs"],
            "lunes_a_viernes_vuelta": ["10:50hs"],
            "domingos_vuelta": ["10:50hs"],
            "diario_vuelta": ["10:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15400, "Cama": 17800 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:25hs"],
            "domingos_ida": ["18:25hs"],
            "diario_ida": ["18:25hs"],
            "lunes_a_viernes_vuelta": ["11:05hs"],
            "domingos_vuelta": ["11:05hs"],
            "diario_vuelta": ["11:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19400, "Cama": 19900 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:10hs"],
            "domingos_ida": ["18:10hs"],
            "diario_ida": ["18:10hs"],
            "lunes_a_viernes_vuelta": ["11:30hs"],
            "domingos_vuelta": ["11:30hs"],
            "diario_vuelta": ["11:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19100, "Cama": 21900 },
          "horarios": {
            "lunes_a_viernes_ida": ["17:45hs"],
            "domingos_ida": ["17:45hs"],
            "diario_ida": ["17:45hs"],
            "lunes_a_viernes_vuelta": ["11:50hs"],
            "domingos_vuelta": ["11:50hs"],
            "diario_vuelta": ["11:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 21100, "Cama": 23900 },
          "horarios": {
            "lunes_a_viernes_ida": ["16:55hs"],
            "domingos_ida": ["16:55hs"],
            "diario_ida": ["16:55hs"],
            "lunes_a_viernes_vuelta": ["12:45hs"],
            "domingos_vuelta": ["12:45hs"],
            "diario_vuelta": ["12:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 30100, "Cama": 33700 },
          "horarios": {
            "lunes_a_viernes_ida": ["15:50hs"],
            "domingos_ida": ["15:50hs"],
            "diario_ida": ["15:50hs"],
            "lunes_a_viernes_vuelta": ["13:35hs"],
            "domingos_vuelta": ["13:35hs"],
            "diario_vuelta": ["13:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 30100, "Cama": 33700 },
          "horarios": {
            "lunes_a_viernes_ida": ["15:40hs"],
            "domingos_ida": ["15:40hs"],
            "diario_ida": ["15:40hs"],
            "lunes_a_viernes_vuelta": ["13:45hs"],
            "domingos_vuelta": ["13:45hs"],
            "diario_vuelta": ["13:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Rossier",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6400, "Cama": 7200 },
          "horarios": {
            "lunes_a_viernes_vuelta": ["21:25hs"],
            "domingos_vuelta": ["21:25hs"],
            "diario_vuelta": ["21:25hs"]
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5400, "Cama": 6000 },
          "horarios": {
            "lunes_a_viernes_vuelta": ["21:05hs"],
            "domingos_vuelta": ["21:05hs"],
            "diario_vuelta": ["21:05hs"]
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3500, "Cama": 3900 },
          "horarios": {
            "lunes_a_viernes_vuelta": ["20:55hs"],
            "domingos_vuelta": ["20:55hs"],
            "diario_vuelta": ["20:55hs"]
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3900, "Cama": 4500 },
          "horarios": {
            "lunes_a_viernes_vuelta": ["20:45hs"],
            "domingos_vuelta": ["20:45hs"],
            "diario_vuelta": ["20:45hs"]
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2900, "Cama": 3200 },
          "horarios": {
            "lunes_a_viernes_vuelta": ["20:40hs"],
            "domingos_vuelta": ["20:40hs"],
            "diario_vuelta": ["20:40hs"]
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_vuelta": ["20:20hs"],
            "domingos_vuelta": ["20:20hs"],
            "diario_vuelta": ["20:20hs"]
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3100, "Cama": 3500 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:45hs"],
            "domingos_ida": ["09:45hs"],
            "diario_ida": ["09:45hs"],
            "lunes_a_viernes_vuelta": ["19:50hs"],
            "domingos_vuelta": ["19:50hs"],
            "diario_vuelta": ["19:50hs"]
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5100, "Cama": 5600 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:55hs"],
            "domingos_ida": ["09:55hs"],
            "diario_ida": ["09:55hs"],
            "lunes_a_viernes_vuelta": ["19:40hs"],
            "domingos_vuelta": ["19:40hs"],
            "diario_vuelta": ["19:40hs"]
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6800, "Cama": 7800 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:06hs"],
            "domingos_ida": ["10:06hs"],
            "diario_ida": ["10:06hs"],
            "lunes_a_viernes_vuelta": ["19:30hs"],
            "domingos_vuelta": ["19:30hs"],
            "diario_vuelta": ["19:30hs"]
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9300, "Cama": 9600 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:15hs"],
            "domingos_ida": ["10:15hs"],
            "diario_ida": ["10:15hs"],
            "lunes_a_viernes_vuelta": ["19:20hs"],
            "domingos_vuelta": ["19:20hs"],
            "diario_vuelta": ["19:20hs"]
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11400, "Cama": 10800 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"]
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 12400, "Cama": 11900 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:20hs"],
            "domingos_ida": ["10:20hs"],
            "diario_ida": ["10:20hs"],
            "lunes_a_viernes_vuelta": ["18:50hs"],
            "domingos_vuelta": ["18:50hs"],
            "diario_vuelta": ["18:50hs"]
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13400, "Cama": 13000 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:25hs"],
            "domingos_ida": ["10:25hs"],
            "diario_ida": ["10:25hs"],
            "lunes_a_viernes_vuelta": ["19:00hs"],
            "domingos_vuelta": ["19:00hs"],
            "diario_vuelta": ["19:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14500, "Cama": 14100 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:50hs"],
            "domingos_ida": ["10:50hs"],
            "diario_ida": ["10:50hs"],
            "lunes_a_viernes_vuelta": ["18:40hs"],
            "domingos_vuelta": ["18:40hs"],
            "diario_vuelta": ["18:40hs"]
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14300, "Cama": 16600 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:05hs"],
            "domingos_ida": ["11:05hs"],
            "diario_ida": ["11:05hs"],
            "lunes_a_viernes_vuelta": ["18:25hs"],
            "domingos_vuelta": ["18:25hs"],
            "diario_vuelta": ["18:25hs"]
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16100, "Cama": 18800 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:30hs"],
            "domingos_ida": ["11:30hs"],
            "diario_ida": ["11:30hs"],
            "lunes_a_viernes_vuelta": ["18:10hs"],
            "domingos_vuelta": ["18:10hs"],
            "diario_vuelta": ["18:10hs"]
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 18000, "Cama": 20800 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:50hs"],
            "domingos_ida": ["11:50hs"],
            "diario_ida": ["11:50hs"],
            "lunes_a_viernes_vuelta": ["17:45hs"],
            "domingos_vuelta": ["17:45hs"],
            "diario_vuelta": ["17:45hs"]
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 20000, "Cama": 22800 },
          "horarios": {
            "lunes_a_viernes_ida": ["12:45hs"],
            "domingos_ida": ["12:45hs"],
            "diario_ida": ["12:45hs"],
            "lunes_a_viernes_vuelta": ["16:55hs"],
            "domingos_vuelta": ["16:55hs"],
            "diario_vuelta": ["16:55hs"]
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 26100, "Cama": 30600 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:35hs"],
            "domingos_ida": ["13:35hs"],
            "diario_ida": ["13:35hs"],
            "lunes_a_viernes_vuelta": ["15:50hs"],
            "domingos_vuelta": ["15:50hs"],
            "diario_vuelta": ["15:50hs"]
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 29000, "Cama": 32600 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:45hs"],
            "domingos_ida": ["13:45hs"],
            "diario_ida": ["13:45hs"],
            "lunes_a_viernes_vuelta": ["15:40hs"],
            "domingos_vuelta": ["15:40hs"],
            "diario_vuelta": ["15:40hs"]
          }
        }
      ]
    }
  ]
},
{
  "origen": "Tres Sauces",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7300, "Cama": 8200 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6300, "Cama": 7100 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6300, "Cama": 6300 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5100, "Cama": 5300 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4100, "Cama": 4100 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3100, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3100, "Cama": 3700 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5900, "Cama": 4800 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8500, "Cama": 7600 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10300, "Cama": 9900 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11400, "Cama": 11000 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 12700, "Cama": 12100 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13500, "Cama": 13200 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13300, "Cama": 15700 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19100, "Cama": 23100 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 17000, "Cama": 19900 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19000, "Cama": 21900 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 27000, "Cama": 31700 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 28000, "Cama": 31700 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:37hs"],
            "domingos_ida": ["09:37hs"],
            "diario_ida": ["09:37hs"],
            "lunes_a_viernes_vuelta": ["20:00hs"],
            "domingos_vuelta": ["20:00hs"],
            "diario_vuelta": ["20:00hs"]
          }
        }
      ]
    }
  ]
},
{
  "origen": "Barbagelatta",
  "destinos": [
   {
  "destino": "Parana",
  "servicios": [
    {
      "tipo": "Semicama y Cama",
      "precios": { "Semicama": 8500, "Cama": 9700 },
      "horarios": {
        "lunes_a_viernes_ida": ["21:25hs"],
        "domingos_ida": ["21:25hs"],
        "diario_ida": ["21:25hs"],
        "lunes_a_viernes_vuelta": ["21:25hs"],
        "domingos_vuelta": ["21:25hs"],
        "diario_vuelta": ["21:25hs"],
        "sabados_domingos_ida": [],
        "sabados_domingos_vuelta": [],
        "diario": []
      }
    }
  ]
},
{
  "destino": "GNL Genolot",
  "servicios": [
    {
      "tipo": "Semicama y Cama",
      "precios": { "Semicama": 7500, "Cama": 8700 },
      "horarios": {
        "lunes_a_viernes_ida": ["21:05hs"],
        "domingos_ida": ["21:05hs"],
        "diario_ida": ["21:05hs"],
        "lunes_a_viernes_vuelta": ["21:05hs"],
        "domingos_vuelta": ["21:05hs"],
        "diario_vuelta": ["21:05hs"],
        "sabados_domingos_ida": [],
        "sabados_domingos_vuelta": [],
        "diario": []
      }
    }
  ]
},
{
  "destino": "Tres Bocas",
  "servicios": [
    {
      "tipo": "Semicama y Cama",
      "precios": { "Semicama": 6700, "Cama": 7600 },
      "horarios": {
        "lunes_a_viernes_ida": ["20:55hs"],
        "domingos_ida": ["20:55hs"],
        "diario_ida": ["20:55hs"],
        "lunes_a_viernes_vuelta": ["20:55hs"],
        "domingos_vuelta": ["20:55hs"],
        "diario_vuelta": ["20:55hs"],
        "sabados_domingos_ida": [],
        "sabados_domingos_vuelta": [],
        "diario": []
      }
    }
  ]
},
{
  "destino": "Quebacho",
  "servicios": [
    {
      "tipo": "Semicama y Cama",
      "precios": { "Semicama": 6500, "Cama": 7400 },
      "horarios": {
        "lunes_a_viernes_ida": ["20:45hs"],
        "domingos_ida": ["20:45hs"],
        "diario_ida": ["20:45hs"],
        "lunes_a_viernes_vuelta": ["20:45hs"],
        "domingos_vuelta": ["20:45hs"],
        "diario_vuelta": ["20:45hs"],
        "sabados_domingos_ida": [],
        "sabados_domingos_vuelta": [],
        "diario": []
      }
    }
  ]
},
{
  "destino": "Rambon",
  "servicios": [
    {
      "tipo": "Semicama y Cama",
      "precios": { "Semicama": 4600, "Cama": 5300 },
      "horarios": {
        "lunes_a_viernes_ida": ["20:40hs"],
        "domingos_ida": ["20:40hs"],
        "diario_ida": ["20:40hs"],
        "lunes_a_viernes_vuelta": ["20:40hs"],
        "domingos_vuelta": ["20:40hs"],
        "diario_vuelta": ["20:40hs"],
        "sabados_domingos_ida": [],
        "sabados_domingos_vuelta": [],
        "diario": []
      }
    }
  ]
},
{
  "destino": "Viale Acceso",
  "servicios": [
    {
      "tipo": "Semicama y Cama",
      "precios": { "Semicama": 4600, "Cama": 5300 },
      "horarios": {
        "lunes_a_viernes_ida": ["20:20hs"],
        "domingos_ida": ["20:20hs"],
        "diario_ida": ["20:20hs"],
        "lunes_a_viernes_vuelta": ["20:20hs"],
        "domingos_vuelta": ["20:20hs"],
        "diario_vuelta": ["20:20hs"],
        "sabados_domingos_ida": [],
        "sabados_domingos_vuelta": [],
        "diario": []
      }
    }
  ]
},
{
  "destino": "Rossier",
  "servicios": [
    {
      "tipo": "Semicama y Cama",
      "precios": { "Semicama": 3600, "Cama": 4300 },
      "horarios": {
        "lunes_a_viernes_ida": ["20:10hs"],
        "domingos_ida": ["20:10hs"],
        "diario_ida": ["20:10hs"],
        "lunes_a_viernes_vuelta": ["20:10hs"],
        "domingos_vuelta": ["20:10hs"],
        "diario_vuelta": ["20:10hs"],
        "sabados_domingos_ida": [],
        "sabados_domingos_vuelta": [],
        "diario": []
      }
    }
  ]
},
{
  "destino": "Tres Sauces",
  "servicios": [
    {
      "tipo": "Semicama y Cama",
      "precios": { "Semicama": 2700, "Cama": 3100 },
      "horarios": {
        "lunes_a_viernes_ida": ["20:00hs"],
        "domingos_ida": ["20:00hs"],
        "diario_ida": ["20:00hs"],
        "lunes_a_viernes_vuelta": ["20:00hs"],
        "domingos_vuelta": ["20:00hs"], 
        "diario_vuelta": ["20:00hs"],
        "sabados_domingos_ida": [],
        "sabados_domingos_vuelta": [],
        "diario": []
      }
    }
  ]
},
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:55hs"],
            "domingos_ida": ["09:55hs"],
            "diario_ida": ["09:55hs"],
            "lunes_a_viernes_vuelta": ["19:40hs"],
            "domingos_vuelta": ["19:40hs"],
            "diario_vuelta": ["19:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4200, "Cama": 4900 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:06hs"],
            "domingos_ida": ["10:06hs"],
            "diario_ida": ["10:06hs"],
            "lunes_a_viernes_vuelta": ["19:30hs"],
            "domingos_vuelta": ["19:30hs"],
            "diario_vuelta": ["19:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5800, "Cama": 6700 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:15hs"],
            "domingos_ida": ["10:15hs"],
            "diario_ida": ["10:15hs"],
            "lunes_a_viernes_vuelta": ["19:20hs"],
            "domingos_vuelta": ["19:20hs"],
            "diario_vuelta": ["19:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8400, "Cama": 9600 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9500, "Cama": 10700 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:20hs"],
            "domingos_ida": ["10:20hs"],
            "diario_ida": ["10:20hs"],
            "lunes_a_viernes_vuelta": ["18:50hs"],
            "domingos_vuelta": ["18:50hs"],
            "diario_vuelta": ["18:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10900, "Cama": 11500 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:25hs"],
            "domingos_ida": ["10:25hs"],
            "diario_ida": ["10:25hs"],
            "lunes_a_viernes_vuelta": ["19:00hs"],
            "domingos_vuelta": ["19:00hs"],
            "diario_vuelta": ["19:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11600, "Cama": 12800 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:50hs"],
            "domingos_ida": ["10:50hs"],
            "diario_ida": ["10:50hs"],
            "lunes_a_viernes_vuelta": ["18:40hs"],
            "domingos_vuelta": ["18:40hs"],
            "diario_vuelta": ["18:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10800, "Cama": 12500 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:05hs"],
            "domingos_ida": ["11:05hs"],
            "diario_ida": ["11:05hs"],
            "lunes_a_viernes_vuelta": ["18:25hs"],
            "domingos_vuelta": ["18:25hs"],
            "diario_vuelta": ["18:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 12600, "Cama": 17400 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:30hs"],
            "domingos_ida": ["11:30hs"],
            "diario_ida": ["11:30hs"],
            "lunes_a_viernes_vuelta": ["18:10hs"],
            "domingos_vuelta": ["18:10hs"],
            "diario_vuelta": ["18:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14500, "Cama": 15900 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:50hs"],
            "domingos_ida": ["11:50hs"],
            "diario_ida": ["11:50hs"],
            "lunes_a_viernes_vuelta": ["17:45hs"],
            "domingos_vuelta": ["17:45hs"],
            "diario_vuelta": ["17:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16500, "Cama": 17900 },
          "horarios": {
            "lunes_a_viernes_ida": ["12:45hs"],
            "domingos_ida": ["12:45hs"],
            "diario_ida": ["12:45hs"],
            "lunes_a_viernes_vuelta": ["16:55hs"],
            "domingos_vuelta": ["16:55hs"],
            "diario_vuelta": ["16:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 25500, "Cama": 28100 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:35hs"],
            "domingos_ida": ["13:35hs"],
            "diario_ida": ["13:35hs"],
            "lunes_a_viernes_vuelta": ["15:50hs"],
            "domingos_vuelta": ["15:50hs"],
            "diario_vuelta": ["15:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 25500, "Cama": 28100 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:45hs"],
            "domingos_ida": ["13:45hs"],
            "diario_ida": ["13:45hs"],
            "lunes_a_viernes_vuelta": ["15:40hs"],
            "domingos_vuelta": ["15:40hs"],
            "diario_vuelta": ["15:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Pineiro",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10000, "Cama": 11200 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:25hs"],
            "domingos_ida": ["21:25hs"],
            "diario_ida": ["21:25hs"],
            "lunes_a_viernes_vuelta": ["08:15hs"],
            "domingos_vuelta": ["08:15hs"],
            "diario_vuelta": ["08:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9000, "Cama": 10100 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:05hs"],
            "domingos_ida": ["21:05hs"],
            "diario_ida": ["21:05hs"],
            "lunes_a_viernes_vuelta": ["08:30hs"],
            "domingos_vuelta": ["08:30hs"],
            "diario_vuelta": ["08:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9000, "Cama": 8400 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:55hs"],
            "domingos_ida": ["20:55hs"],
            "diario_ida": ["20:55hs"],
            "lunes_a_viernes_vuelta": ["08:40hs"],
            "domingos_vuelta": ["08:40hs"],
            "diario_vuelta": ["08:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8000, "Cama": 7700 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:45hs"],
            "domingos_ida": ["20:45hs"],
            "diario_ida": ["20:45hs"],
            "lunes_a_viernes_vuelta": ["08:50hs"],
            "domingos_vuelta": ["08:50hs"],
            "diario_vuelta": ["08:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7100, "Cama": 5600 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:40hs"],
            "domingos_ida": ["20:40hs"],
            "diario_ida": ["20:40hs"],
            "lunes_a_viernes_vuelta": ["09:00hs"],
            "domingos_vuelta": ["09:00hs"],
            "diario_vuelta": ["09:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6100, "Cama": 4600 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:20hs"],
            "domingos_ida": ["20:20hs"],
            "diario_ida": ["20:20hs"],
            "lunes_a_viernes_vuelta": ["09:15hs"],
            "domingos_vuelta": ["09:15hs"],
            "diario_vuelta": ["09:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5100, "Cama": 3400 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:10hs"],
            "domingos_ida": ["20:10hs"],
            "diario_ida": ["20:10hs"],
            "lunes_a_viernes_vuelta": ["09:25hs"],
            "domingos_vuelta": ["09:25hs"],
            "diario_vuelta": ["09:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4200, "Cama": 3700 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:00hs"],
            "domingos_ida": ["20:00hs"],
            "diario_ida": ["20:00hs"],
            "lunes_a_viernes_vuelta": ["09:37hs"],
            "domingos_vuelta": ["09:37hs"],
            "diario_vuelta": ["09:37hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:50hs"],
            "domingos_ida": ["19:50hs"],
            "diario_ida": ["19:50hs"],
            "lunes_a_viernes_vuelta": ["09:45hs"],
            "domingos_vuelta": ["09:45hs"],
            "diario_vuelta": ["09:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3200 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:06hs"],
            "domingos_ida": ["10:06hs"],
            "diario_ida": ["10:06hs"],
            "lunes_a_viernes_vuelta": ["19:30hs"],
            "domingos_vuelta": ["19:30hs"],
            "diario_vuelta": ["19:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3000, "Cama": 5100 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:15hs"],
            "domingos_ida": ["10:15hs"],
            "diario_ida": ["10:15hs"],
            "lunes_a_viernes_vuelta": ["19:20hs"],
            "domingos_vuelta": ["19:20hs"],
            "diario_vuelta": ["19:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5800, "Cama": 7500 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7000, "Cama": 8600 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:45hs"],
            "domingos_ida": ["10:45hs"],
            "diario_ida": ["10:45hs"],
            "lunes_a_viernes_vuelta": ["18:50hs"],
            "domingos_vuelta": ["18:50hs"],
            "diario_vuelta": ["18:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8000, "Cama": 9700 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:47hs"],
            "domingos_ida": ["10:47hs"],
            "diario_ida": ["10:47hs"],
            "lunes_a_viernes_vuelta": ["18:55hs"],
            "domingos_vuelta": ["18:55hs"],
            "diario_vuelta": ["18:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9100, "Cama": 10900 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:50hs"],
            "domingos_ida": ["10:50hs"],
            "diario_ida": ["10:50hs"],
            "lunes_a_viernes_vuelta": ["18:40hs"],
            "domingos_vuelta": ["18:40hs"],
            "diario_vuelta": ["18:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9400, "Cama": 13400 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:05hs"],
            "domingos_ida": ["11:05hs"],
            "diario_ida": ["11:05hs"],
            "lunes_a_viernes_vuelta": ["18:25hs"],
            "domingos_vuelta": ["18:25hs"],
            "diario_vuelta": ["18:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11200, "Cama": 15600 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:30hs"],
            "domingos_ida": ["11:30hs"],
            "diario_ida": ["11:30hs"],
            "lunes_a_viernes_vuelta": ["18:10hs"],
            "domingos_vuelta": ["18:10hs"],
            "diario_vuelta": ["18:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13200, "Cama": 17600 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:50hs"],
            "domingos_ida": ["11:50hs"],
            "diario_ida": ["11:50hs"],
            "lunes_a_viernes_vuelta": ["17:45hs"],
            "domingos_vuelta": ["17:45hs"],
            "diario_vuelta": ["17:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15100, "Cama": 19600 },
          "horarios": {
            "lunes_a_viernes_ida": ["12:45hs"],
            "domingos_ida": ["12:45hs"],
            "diario_ida": ["12:45hs"],
            "lunes_a_viernes_vuelta": ["16:55hs"],
            "domingos_vuelta": ["16:55hs"],
            "diario_vuelta": ["16:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 24200, "Cama": 29900 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:35hs"],
            "domingos_ida": ["13:35hs"],
            "diario_ida": ["13:35hs"],
            "lunes_a_viernes_vuelta": ["15:50hs"],
            "domingos_vuelta": ["15:50hs"],
            "diario_vuelta": ["15:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 24200, "Cama": 29900 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:45hs"],
            "domingos_ida": ["13:45hs"],
            "diario_ida": ["13:45hs"],
            "lunes_a_viernes_vuelta": ["15:40hs"],
            "domingos_vuelta": ["15:40hs"],
            "diario_vuelta": ["15:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Fca de Palmas",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11500, "Cama": 12900 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:25hs"],
            "domingos_ida": ["21:25hs"],
            "diario_ida": ["21:25hs"],
            "lunes_a_viernes_vuelta": ["08:15hs"],
            "domingos_vuelta": ["08:15hs"],
            "diario_vuelta": ["08:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10500, "Cama": 11800 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:05hs"],
            "domingos_ida": ["21:05hs"],
            "diario_ida": ["21:05hs"],
            "lunes_a_viernes_vuelta": ["08:30hs"],
            "domingos_vuelta": ["08:30hs"],
            "diario_vuelta": ["08:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10700, "Cama": 11800 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:55hs"],
            "domingos_ida": ["20:55hs"],
            "diario_ida": ["20:55hs"],
            "lunes_a_viernes_vuelta": ["08:40hs"],
            "domingos_vuelta": ["08:40hs"],
            "diario_vuelta": ["08:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9700, "Cama": 9300 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:45hs"],
            "domingos_ida": ["20:45hs"],
            "diario_ida": ["20:45hs"],
            "lunes_a_viernes_vuelta": ["08:50hs"],
            "domingos_vuelta": ["08:50hs"],
            "diario_vuelta": ["08:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8600, "Cama": 7600 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:40hs"],
            "domingos_ida": ["20:40hs"],
            "diario_ida": ["20:40hs"],
            "lunes_a_viernes_vuelta": ["09:00hs"],
            "domingos_vuelta": ["09:00hs"],
            "diario_vuelta": ["09:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7800, "Cama": 6800 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:20hs"],
            "domingos_ida": ["20:20hs"],
            "diario_ida": ["20:20hs"],
            "lunes_a_viernes_vuelta": ["09:15hs"],
            "domingos_vuelta": ["09:15hs"],
            "diario_vuelta": ["09:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6800, "Cama": 5400 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:10hs"],
            "domingos_ida": ["20:10hs"],
            "diario_ida": ["20:10hs"],
            "lunes_a_viernes_vuelta": ["09:25hs"],
            "domingos_vuelta": ["09:25hs"],
            "diario_vuelta": ["09:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5900, "Cama": 5000 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:00hs"],
            "domingos_ida": ["20:00hs"],
            "diario_ida": ["20:00hs"],
            "lunes_a_viernes_vuelta": ["09:37hs"],
            "domingos_vuelta": ["09:37hs"],
            "diario_vuelta": ["09:37hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4200, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:50hs"],
            "domingos_ida": ["19:50hs"],
            "diario_ida": ["19:50hs"],
            "lunes_a_viernes_vuelta": ["09:45hs"],
            "domingos_vuelta": ["09:45hs"],
            "diario_vuelta": ["09:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3200 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:40hs"],
            "domingos_ida": ["19:40hs"],
            "diario_ida": ["19:40hs"],
            "lunes_a_viernes_vuelta": ["09:55hs"],
            "domingos_vuelta": ["09:55hs"],
            "diario_vuelta": ["09:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5000, "Cama": 5800 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:15hs"],
            "domingos_ida": ["10:15hs"],
            "diario_ida": ["10:15hs"],
            "lunes_a_viernes_vuelta": ["19:20hs"],
            "domingos_vuelta": ["19:20hs"],
            "diario_vuelta": ["19:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4000, "Cama": 5800 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5600, "Cama": 7000 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:45hs"],
            "domingos_ida": ["10:45hs"],
            "diario_ida": ["10:45hs"],
            "lunes_a_viernes_vuelta": ["18:50hs"],
            "domingos_vuelta": ["18:50hs"],
            "diario_vuelta": ["18:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6400, "Cama": 8200 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:47hs"],
            "domingos_ida": ["10:47hs"],
            "diario_ida": ["10:47hs"],
            "lunes_a_viernes_vuelta": ["18:55hs"],
            "domingos_vuelta": ["18:55hs"],
            "diario_vuelta": ["18:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7700, "Cama": 9400 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:50hs"],
            "domingos_ida": ["10:50hs"],
            "diario_ida": ["10:50hs"],
            "lunes_a_viernes_vuelta": ["18:40hs"],
            "domingos_vuelta": ["18:40hs"],
            "diario_vuelta": ["18:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9300, "Cama": 11900 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:05hs"],
            "domingos_ida": ["11:05hs"],
            "diario_ida": ["11:05hs"],
            "lunes_a_viernes_vuelta": ["18:25hs"],
            "domingos_vuelta": ["18:25hs"],
            "diario_vuelta": ["18:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10200, "Cama": 14000 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:30hs"],
            "domingos_ida": ["11:30hs"],
            "diario_ida": ["11:30hs"],
            "lunes_a_viernes_vuelta": ["18:10hs"],
            "domingos_vuelta": ["18:10hs"],
            "diario_vuelta": ["18:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 12000, "Cama": 16100 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:50hs"],
            "domingos_ida": ["11:50hs"],
            "diario_ida": ["11:50hs"],
            "lunes_a_viernes_vuelta": ["17:45hs"],
            "domingos_vuelta": ["17:45hs"],
            "diario_vuelta": ["17:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14000, "Cama": 18100 },
          "horarios": {
            "lunes_a_viernes_ida": ["12:45hs"],
            "domingos_ida": ["12:45hs"],
            "diario_ida": ["12:45hs"],
            "lunes_a_viernes_vuelta": ["16:55hs"],
            "domingos_vuelta": ["16:55hs"],
            "diario_vuelta": ["16:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 23000, "Cama": 27600 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:35hs"],
            "domingos_ida": ["13:35hs"],
            "diario_ida": ["13:35hs"],
            "lunes_a_viernes_vuelta": ["15:50hs"],
            "domingos_vuelta": ["15:50hs"],
            "diario_vuelta": ["15:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 23000, "Cama": 27600 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:45hs"],
            "domingos_ida": ["13:45hs"],
            "diario_ida": ["13:45hs"],
            "lunes_a_viernes_vuelta": ["15:40hs"],
            "domingos_vuelta": ["15:40hs"],
            "diario_vuelta": ["15:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Baño Oficial",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13200, "Cama": 14800 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:25hs"],
            "domingos_ida": ["21:25hs"],
            "diario_ida": ["21:25hs"],
            "lunes_a_viernes_vuelta": ["08:15hs"],
            "domingos_vuelta": ["08:15hs"],
            "diario_vuelta": ["08:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 12200, "Cama": 13700 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:05hs"],
            "domingos_ida": ["21:05hs"],
            "diario_ida": ["21:05hs"],
            "lunes_a_viernes_vuelta": ["08:30hs"],
            "domingos_vuelta": ["08:30hs"],
            "diario_vuelta": ["08:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 12300, "Cama": 12800 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:55hs"],
            "domingos_ida": ["20:55hs"],
            "diario_ida": ["20:55hs"],
            "lunes_a_viernes_vuelta": ["08:40hs"],
            "domingos_vuelta": ["08:40hs"],
            "diario_vuelta": ["08:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 12200, "Cama": 11200 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:45hs"],
            "domingos_ida": ["20:45hs"],
            "diario_ida": ["20:45hs"],
            "lunes_a_viernes_vuelta": ["08:50hs"],
            "domingos_vuelta": ["08:50hs"],
            "diario_vuelta": ["08:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11200, "Cama": 8800 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:40hs"],
            "domingos_ida": ["20:40hs"],
            "diario_ida": ["20:40hs"],
            "lunes_a_viernes_vuelta": ["09:00hs"],
            "domingos_vuelta": ["09:00hs"],
            "diario_vuelta": ["09:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10300, "Cama": 9700 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:20hs"],
            "domingos_ida": ["20:20hs"],
            "diario_ida": ["20:20hs"],
            "lunes_a_viernes_vuelta": ["09:15hs"],
            "domingos_vuelta": ["09:15hs"],
            "diario_vuelta": ["09:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9300, "Cama": 8500 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:10hs"],
            "domingos_ida": ["20:10hs"],
            "diario_ida": ["20:10hs"],
            "lunes_a_viernes_vuelta": ["09:25hs"],
            "domingos_vuelta": ["09:25hs"],
            "diario_vuelta": ["09:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8500, "Cama": 7800 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:00hs"],
            "domingos_ida": ["20:00hs"],
            "diario_ida": ["20:00hs"],
            "lunes_a_viernes_vuelta": ["09:37hs"],
            "domingos_vuelta": ["09:37hs"],
            "diario_vuelta": ["09:37hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5900, "Cama": 5100 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:50hs"],
            "domingos_ida": ["19:50hs"],
            "diario_ida": ["19:50hs"],
            "lunes_a_viernes_vuelta": ["09:45hs"],
            "domingos_vuelta": ["09:45hs"],
            "diario_vuelta": ["09:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4200, "Cama": 5100 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:40hs"],
            "domingos_ida": ["19:40hs"],
            "diario_ida": ["19:40hs"],
            "lunes_a_viernes_vuelta": ["09:55hs"],
            "domingos_vuelta": ["09:55hs"],
            "diario_vuelta": ["09:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3600, "Cama": 3800 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:30hs"],
            "domingos_ida": ["19:30hs"],
            "diario_ida": ["19:30hs"],
            "lunes_a_viernes_vuelta": ["10:06hs"],
            "domingos_vuelta": ["10:06hs"],
            "diario_vuelta": ["10:06hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 5800 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3300, "Cama": 3300 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:45hs"],
            "domingos_ida": ["10:45hs"],
            "diario_ida": ["10:45hs"],
            "lunes_a_viernes_vuelta": ["18:50hs"],
            "domingos_vuelta": ["18:50hs"],
            "diario_vuelta": ["18:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4300, "Cama": 4600 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:47hs"],
            "domingos_ida": ["10:47hs"],
            "diario_ida": ["10:47hs"],
            "lunes_a_viernes_vuelta": ["18:55hs"],
            "domingos_vuelta": ["18:55hs"],
            "diario_vuelta": ["18:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5400, "Cama": 5600 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:50hs"],
            "domingos_ida": ["10:50hs"],
            "diario_ida": ["10:50hs"],
            "lunes_a_viernes_vuelta": ["18:40hs"],
            "domingos_vuelta": ["18:40hs"],
            "diario_vuelta": ["18:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6100, "Cama": 8100 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:05hs"],
            "domingos_ida": ["11:05hs"],
            "diario_ida": ["11:05hs"],
            "lunes_a_viernes_vuelta": ["18:25hs"],
            "domingos_vuelta": ["18:25hs"],
            "diario_vuelta": ["18:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9300, "Cama": 10400 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:30hs"],
            "domingos_ida": ["11:30hs"],
            "diario_ida": ["11:30hs"],
            "lunes_a_viernes_vuelta": ["18:10hs"],
            "domingos_vuelta": ["18:10hs"],
            "diario_vuelta": ["18:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9500, "Cama": 12400 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:50hs"],
            "domingos_ida": ["11:50hs"],
            "diario_ida": ["11:50hs"],
            "lunes_a_viernes_vuelta": ["17:45hs"],
            "domingos_vuelta": ["17:45hs"],
            "diario_vuelta": ["17:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11300, "Cama": 14400 },
          "horarios": {
            "lunes_a_viernes_ida": ["12:45hs"],
            "domingos_ida": ["12:45hs"],
            "diario_ida": ["12:45hs"],
            "lunes_a_viernes_vuelta": ["16:55hs"],
            "domingos_vuelta": ["16:55hs"],
            "diario_vuelta": ["16:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 22300, "Cama": 25600 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:35hs"],
            "domingos_ida": ["13:35hs"],
            "diario_ida": ["13:35hs"],
            "lunes_a_viernes_vuelta": ["15:50hs"],
            "domingos_vuelta": ["15:50hs"],
            "diario_vuelta": ["15:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 22300, "Cama": 25600 },
          "horarios": {
            "lunes_a_viernes_ida": ["13:45hs"],
            "domingos_ida": ["13:45hs"],
            "diario_ida": ["13:45hs"],
            "lunes_a_viernes_vuelta": ["15:40hs"],
            "domingos_vuelta": ["15:40hs"],
            "diario_vuelta": ["15:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Villaguay",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15500, "Cama": 17400 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14700, "Cama": 16500 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15400, "Cama": 16500 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14300, "Cama": 14000 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13200, "Cama": 11100 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 12400, "Cama": 11900 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11400, "Cama": 10800 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10600, "Cama": 9300 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8400, "Cama": 9300 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5800, "Cama": 7500 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4300, "Cama": 6300 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3300, "Cama": 3900 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4400, "Cama": 4500 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5100, "Cama": 7100 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7300, "Cama": 9300 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8500, "Cama": 11400 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10300, "Cama": 13400 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 21300, "Cama": 23500 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 21300, "Cama": 23500 },
          "horarios": {
            "lunes_a_viernes_ida": ["10:30hs"],
            "domingos_ida": ["10:30hs"],
            "diario_ida": ["10:30hs"],
            "lunes_a_viernes_vuelta": ["19:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["19:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Travichet",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16600, "Cama": 18500 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:25hs"],
            "domingos_ida": ["21:25hs"],
            "diario_ida": ["21:25hs"],
            "lunes_a_viernes_vuelta": ["08:15hs"],
            "domingos_vuelta": ["08:15hs"],
            "diario_vuelta": ["08:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16500, "Cama": 17500 },
          "horarios": {
            "lunes_a_viernes_ida": ["21:05hs"],
            "domingos_ida": ["21:05hs"],
            "diario_ida": ["21:05hs"],
            "lunes_a_viernes_vuelta": ["08:30hs"],
            "domingos_vuelta": ["08:30hs"],
            "diario_vuelta": ["08:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16400, "Cama": 15700 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:55hs"],
            "domingos_ida": ["20:55hs"],
            "diario_ida": ["20:55hs"],
            "lunes_a_viernes_vuelta": ["08:40hs"],
            "domingos_vuelta": ["08:40hs"],
            "diario_vuelta": ["08:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15300, "Cama": 15000 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:45hs"],
            "domigos_ida": ["20:45hs"],
            "diario_ida": ["20:45hs"],
            "lunes_a_viernes_vuelta": ["08:50hs"],
            "domingos_vuelta": ["08:50hs"],
            "diario_vuelta": ["08:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14200, "Cama": 12100 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:40hs"],
            "domingos_ida": ["20:40hs"],
            "diario_ida": ["20:40hs"],
            "lunes_a_viernes_vuelta": ["09:00hs"],
            "domingos_vuelta": ["09:00hs"],
            "diario_vuelta": ["09:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13500, "Cama": 13000 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:20hs"],
            "domingos_ida": ["20:20hs"],
            "diario_ida": ["20:20hs"],
            "lunes_a_viernes_vuelta": ["09:15hs"],
            "domingos_vuelta": ["09:15hs"],
            "diario_vuelta": ["09:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 12400, "Cama": 11900 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:10hs"],
            "domingos_ida": ["20:10hs"],
            "diario_ida": ["20:10hs"],
            "lunes_a_viernes_vuelta": ["09:25hs"],
            "domingos_vuelta": ["09:25hs"],
            "diario_vuelta": ["09:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11300, "Cama": 11000 },
          "horarios": {
            "lunes_a_viernes_ida": ["20:00hs"],
            "domingos_ida": ["20:00hs"],
            "diario_ida": ["20:00hs"],
            "lunes_a_viernes_vuelta": ["09:37hs"],
            "domingos_vuelta": ["09:37hs"],
            "diario_vuelta": ["09:37hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9500, "Cama": 10400 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:50hs"],
            "domingos_ida": ["19:50hs"],
            "diario_ida": ["19:50hs"],
            "lunes_a_viernes_vuelta": ["09:45hs"],
            "domingos_vuelta": ["09:45hs"],
            "diario_vuelta": ["09:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7000, "Cama": 8600 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:40hs"],
            "domingos_ida": ["19:40hs"],
            "diario_ida": ["19:40hs"],
            "lunes_a_viernes_vuelta": ["09:55hs"],
            "domingos_vuelta": ["09:55hs"],
            "diario_vuelta": ["09:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6700, "Cama": 7000 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:30hs"],
            "domingos_ida": ["19:30hs"],
            "diario_ida": ["19:30hs"],
            "lunes_a_viernes_vuelta": ["10:06hs"],
            "domingos_vuelta": ["10:06hs"],
            "diario_vuelta": ["10:06hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3300, "Cama": 3300 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:20hs"],
            "domingos_ida": ["19:20hs"],
            "diario_ida": ["19:20hs"],
            "lunes_a_viernes_vuelta": ["10:15hs"],
            "domingos_vuelta": ["10:15hs"],
            "diario_vuelta": ["10:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["19:10hs"],
            "domingos_ida": ["19:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["10:30hs"],
            "domingos_vuelta": ["10:30hs"],
            "diario_vuelta": ["10:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["10:47hs"],
            "domingos_vuelta": ["10:47hs"],
            "diario_vuelta": ["10:47hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3300, "Cama": 3300 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:40hs"],
            "domingos_ida": ["18:40hs"],
            "diario_ida": ["18:40hs"],
            "lunes_a_viernes_vuelta": ["10:50hs"],
            "domingos_vuelta": ["10:50hs"],
            "diario_vuelta": ["10:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4200, "Cama": 6300 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:25hs"],
            "domingos_ida": ["18:25hs"],
            "diario_ida": ["18:25hs"],
            "lunes_a_viernes_vuelta": ["11:05hs"],
            "domingos_vuelta": ["11:05hs"],
            "diario_vuelta": ["11:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7300, "Cama": 8600 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:10hs"],
            "domingos_ida": ["18:10hs"],
            "diario_ida": ["18:10hs"],
            "lunes_a_viernes_vuelta": ["11:30hs"],
            "domingos_vuelta": ["11:30hs"],
            "diario_vuelta": ["11:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7500, "Cama": 10600 },
          "horarios": {
            "lunes_a_viernes_ida": ["17:45hs"],
            "domingos_ida": ["17:45hs"],
            "diario_ida": ["17:45hs"],
            "lunes_a_viernes_vuelta": ["11:50hs"],
            "domingos_vuelta": ["11:50hs"],
            "diario_vuelta": ["11:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9200, "Cama": 12600 },
          "horarios": {
            "lunes_a_viernes_ida": ["16:55hs"],
            "domingos_ida": ["16:55hs"],
            "diario_ida": ["16:55hs"],
            "lunes_a_viernes_vuelta": ["12:45hs"],
            "domingos_vuelta": ["12:45hs"],
            "diario_vuelta": ["12:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 20300, "Cama": 22500 },
          "horarios": {
            "lunes_a_viernes_ida": ["15:50hs"],
            "domingos_ida": ["15:50hs"],
            "diario_ida": ["15:50hs"],
            "lunes_a_viernes_vuelta": ["13:35hs"],
            "domingos_vuelta": ["13:35hs"],
            "diario_vuelta": ["13:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 20300, "Cama": 22500 },
          "horarios": {
            "lunes_a_viernes_ida": ["15:40hs"],
            "domingos_ida": ["15:40hs"],
            "diario_ida": ["15:40hs"],
            "lunes_a_viernes_vuelta": ["13:45hs"],
            "domingos_vuelta": ["13:45hs"],
            "diario_vuelta": ["13:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Camino de Ripio",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 17500, "Cama": 19600 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["06:20hs"],
            "domingos_vuelta": ["06:20hs"],
            "diario_vuelta": ["06:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16500, "Cama": 18600 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["06:25hs"],
            "domingos_vuelta": ["06:25hs"],
            "diario_vuelta": ["06:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 17400, "Cama": 16900 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["06:30hs"],
            "domingos_vuelta": ["06:30hs"],
            "diario_vuelta": ["06:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16300, "Cama": 16100 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["06:32hs"],
            "domingos_vuelta": ["06:32hs"],
            "diario_vuelta": ["06:32hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15200, "Cama": 16000 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["06:35hs"],
            "domingos_vuelta": ["06:35hs"],
            "diario_vuelta": ["06:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14500, "Cama": 14100 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["06:40hs"],
            "domingos_vuelta": ["06:40hs"],
            "diario_vuelta": ["06:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13000, "Cama": 13000 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["06:45hs"],
            "domingos_vuelta": ["06:45hs"],
            "diario_vuelta": ["06:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 12400, "Cama": 11900 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["06:50hs"],
            "domingos_vuelta": ["06:50hs"],
            "diario_vuelta": ["06:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10500, "Cama": 11500 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["06:55hs"],
            "domingos_vuelta": ["06:55hs"],
            "diario_vuelta": ["06:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8500, "Cama": 9700 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["07:05hs"],
            "domingos_vuelta": ["07:05hs"],
            "diario_vuelta": ["07:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6600, "Cama": 8200 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["07:15hs"],
            "domingos_vuelta": ["07:15hs"],
            "diario_vuelta": ["07:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4300, "Cama": 4400 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["07:20hs"],
            "domingos_vuelta": ["07:20hs"],
            "diario_vuelta": ["07:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3300, "Cama": 3300 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["07:35hs"],
            "domingos_vuelta": ["07:35hs"],
            "diario_vuelta": ["07:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["07:40hs"],
            "domingos_vuelta": ["07:40hs"],
            "diario_vuelta": ["07:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["07:50hs"],
            "domingos_vuelta": ["07:50hs"],
            "diario_vuelta": ["07:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2900, "Cama": 5200 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["08:05hs"],
            "domingos_vuelta": ["08:05hs"],
            "diario_vuelta": ["08:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4400, "Cama": 7600 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["08:20hs"],
            "domingos_vuelta": ["08:20hs"],
            "diario_vuelta": ["08:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6100, "Cama": 10600 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["08:35hs"],
            "domingos_vuelta": ["08:35hs"],
            "diario_vuelta": ["08:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7800, "Cama": 11600 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["08:55hs"],
            "domingos_vuelta": ["08:55hs"],
            "diario_vuelta": ["08:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19800, "Cama": 21100 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["09:55hs"],
            "domingos_vuelta": ["09:55hs"],
            "diario_vuelta": ["09:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19800, "Cama": 21100 },
          "horarios": {
            "lunes_a_viernes_ida": ["18:55hs"],
            "domingos_ida": ["18:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["10:05hs"],
            "domingos_vuelta": ["10:05hs"],
            "diario_vuelta": ["10:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
  {
  "origen": "Villa Clara",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 18600, "Cama": 20800 },
          "horarios": {
            "lunes_a_viernes_ida": [],
            "domingos_ida": [],
            "diario_ida": [],
            "lunes_a_viernes_vuelta": ["08:05hs"],
            "domingos_vuelta": ["08:05hs"],
            "diario_vuelta": ["08:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 17600, "Cama": 19700 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 18500, "Cama": 18000 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16300, "Cama": 17200 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16300, "Cama": 14400 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15600, "Cama": 15300 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14500, "Cama": 14100 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13500, "Cama": 13200 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11600, "Cama": 12700 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9100, "Cama": 9100 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7700, "Cama": 9400 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6500, "Cama": 5600 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4400, "Cama": 4500 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3300, "Cama": 3300 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 6300 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4000, "Cama": 8400 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6300, "Cama": 10600 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7400, "Cama": 12600 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 18800, "Cama": 19800 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 18800, "Cama": 19800 },
          "horarios": {
            "lunes_a_viernes_ida": ["11:02hs"],
            "domingos_ida": ["11:02hs"],
            "diario_ida": ["11:02hs"],
            "lunes_a_viernes_vuelta": ["18:35hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["18:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Jubileo Acceso",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 20800, "Cama": 23300 },
          "horarios": {
            "lunes_a_viernes_ida": ["05:55hs","11:25hs","18:10hs"],
            "domingos_ida": ["10:15hs"],
            "diario_ida": ["16:20hs"],
            "lunes_a_viernes_vuelta": ["07:20hs","15:05hs","21:35hs"],
            "domingos_vuelta": ["19:30hs"],
            "diario_vuelta": ["12:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19800, "Cama": 22200 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:08hs","11:18hs","17:55hs"],
            "domingos_ida": ["10:05hs"],
            "diario_ida": ["15:45hs"],
            "lunes_a_viernes_vuelta": ["07:32hs","14:52hs","21:10hs"],
            "domingos_vuelta": ["19:20hs"],
            "diario_vuelta": ["12:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 18300, "Cama": 20500 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:15hs","11:40hs","18:25hs"],
            "domingos_ida": ["10:25hs"],
            "diario_ida": ["16:05hs"],
            "lunes_a_viernes_vuelta": ["07:05hs","15:20hs","21:15hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["13:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 17300, "Cama": 19700 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:22hs","11:50hs","18:35hs"],
            "domingos_ida": ["10:35hs"],
            "diario_ida": ["16:15hs"],
            "lunes_a_viernes_vuelta": ["07:12hs","15:28hs","21:22hs"],
            "domingos_vuelta": ["19:18hs"],
            "diario_vuelta": ["13:12hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16400, "Cama": 16800 },
          "horarios": {
            "lunes_a_viernes_ida": ["05:45hs","10:55hs","17:30hs"],
            "domingos_ida": ["09:50hs"],
            "diario_ida": ["15:20hs"],
            "lunes_a_viernes_vuelta": ["06:50hs","14:20hs","20:40hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["12:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15400, "Cama": 17800 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:05hs","12:05hs","18:50hs"],
            "domingos_ida": ["10:45hs"],
            "diario_ida": ["16:30hs"],
            "lunes_a_viernes_vuelta": ["07:18hs","15:05hs","21:05hs"],
            "domingos_vuelta": ["19:22hs"],
            "diario_vuelta": ["12:58hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14300, "Cama": 16800 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:12hs","12:12hs","18:57hs"],
            "domingos_ida": ["10:52hs"],
            "diario_ida": ["16:37hs"],
            "lunes_a_viernes_vuelta": ["07:25hs","15:12hs","21:12hs"],
            "domingos_vuelta": ["19:29hs"],
            "diario_vuelta": ["13:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13200, "Cama": 15700 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:18hs","12:18hs","19:03hs"],
            "domingos_ida": ["10:58hs"],
            "diario_ida": ["16:43hs"],
            "lunes_a_viernes_vuelta": ["07:31hs","15:18hs","21:18hs"],
            "domingos_vuelta": ["19:35hs"],
            "diario_vuelta": ["13:11hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10800, "Cama": 15200 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:25hs","12:25hs","19:10hs"],
            "domingos_ida": ["11:05hs"],
            "diario_ida": ["16:50hs"],
            "lunes_a_viernes_vuelta": ["07:38hs","15:25hs","21:25hs"],
            "domingos_vuelta": ["19:42hs"],
            "diario_vuelta": ["13:18hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9400, "Cama": 13400 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:32hs","12:32hs","19:17hs"],
            "domingos_ida": ["11:12hs"],
            "diario_ida": ["16:57hs"],
            "lunes_a_viernes_vuelta": ["07:45hs","15:32hs","21:32hs"],
            "domingos_vuelta": ["19:49hs"],
            "diario_vuelta": ["13:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9300, "Cama": 11900 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:40hs","12:40hs","19:24hs"],
            "domingos_ida": ["11:19hs"],
            "diario_ida": ["17:04hs"],
            "lunes_a_viernes_vuelta": ["07:52hs","15:40hs","21:40hs"],
            "domingos_vuelta": ["19:56hs"],
            "diario_vuelta": ["13:32hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8100, "Cama": 8100 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:48hs","12:48hs","19:31hs"],
            "domingos_ida": ["11:26hs"],
            "diario_ida": ["17:11hs"],
            "lunes_a_viernes_vuelta": ["08:00hs","15:48hs","21:48hs"],
            "domingos_vuelta": ["20:03hs"],
            "diario_vuelta": ["13:39hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5100, "Cama": 7100 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:05hs","13:05hs","19:50hs"],
            "domingos_ida": ["11:45hs"],
            "diario_ida": ["17:30hs"],
            "lunes_a_viernes_vuelta": ["08:18hs","16:05hs","22:05hs"],
            "domingos_vuelta": ["20:20hs"],
            "diario_vuelta": ["13:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4200, "Cama": 6300 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:12hs","13:12hs","19:57hs"],
            "domingos_ida": ["11:52hs"],
            "diario_ida": ["17:37hs"],
            "lunes_a_viernes_vuelta": ["08:25hs","16:12hs","22:12hs"],
            "domingos_vuelta": ["20:27hs"],
            "diario_vuelta": ["14:02hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2900, "Cama": 5200 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:20hs","13:20hs","20:05hs"],
            "domingos_ida": ["12:00hs"],
            "diario_ida": ["17:45hs"],
            "lunes_a_viernes_vuelta": ["08:33hs","16:20hs","22:20hs"],
            "domingos_vuelta": ["20:35hs"],
            "diario_vuelta": ["14:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3900 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:28hs","13:28hs","20:13hs"],
            "domingos_ida": ["12:08hs"],
            "diario_ida": ["17:53hs"],
            "lunes_a_viernes_vuelta": ["08:41hs","16:28hs","22:28hs"],
            "domingos_vuelta": ["20:43hs"],
            "diario_vuelta": ["14:18hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:40hs","13:40hs","20:25hs"],
            "domingos_ida": ["12:20hs"],
            "diario_ida": ["18:05hs"],
            "lunes_a_viernes_vuelta": ["08:53hs","16:40hs","22:40hs"],
            "domingos_vuelta": ["20:55hs"],
            "diario_vuelta": ["14:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3000, "Cama": 3300 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:55hs","13:55hs","20:40hs"],
            "domingos_ida": ["12:35hs"],
            "diario_ida": ["18:20hs"],
            "lunes_a_viernes_vuelta": ["09:08hs","16:55hs","22:55hs"],
            "domingos_vuelta": ["21:10hs"],
            "diario_vuelta": ["14:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5900, "Cama": 7000 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:10hs","14:10hs","20:55hs"],
            "domingos_ida": ["12:50hs"],
            "diario_ida": ["18:35hs"],
            "lunes_a_viernes_vuelta": ["09:23hs","17:10hs","23:10hs"],
            "domingos_vuelta": ["21:25hs"],
            "diario_vuelta": ["15:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16000, "Cama": 18300 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:25hs","14:25hs","21:10hs"],
            "domingos_ida": ["13:05hs"],
            "diario_ida": ["18:50hs"],
            "lunes_a_viernes_vuelta": ["09:38hs","17:25hs","23:25hs"],
            "domingos_vuelta": ["21:40hs"],
            "diario_vuelta": ["15:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16000, "Cama": 18300 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:35hs","14:35hs","21:20hs"],
            "domingos_ida": ["13:15hs"],
            "diario_ida": ["19:00hs"],
            "lunes_a_viernes_vuelta": ["09:48hs","17:35hs","23:35hs"],
            "domingos_vuelta": ["21:50hs"],
            "diario_vuelta": ["15:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Federacion",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 35500, "Cama": 39800 },
          "horarios": {
            "lunes_a_viernes_ida": ["05:55hs","11:25hs","18:10hs"],
            "domingos_ida": ["10:15hs"],
            "diario_ida": ["16:20hs"],
            "lunes_a_viernes_vuelta": ["07:20hs","15:05hs","21:35hs"],
            "domingos_vuelta": ["19:30hs"],
            "diario_vuelta": ["12:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 34500, "Cama": 38800 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:08hs","11:18hs","17:55hs"],
            "domingos_ida": ["10:05hs"],
            "diario_ida": ["15:45hs"],
            "lunes_a_viernes_vuelta": ["07:32hs","14:52hs","21:10hs"],
            "domingos_vuelta": ["19:20hs"],
            "diario_vuelta": ["12:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 35000, "Cama": 37000 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:15hs","11:40hs","18:25hs"],
            "domingos_ida": ["10:25hs"],
            "diario_ida": ["16:05hs"],
            "lunes_a_viernes_vuelta": ["07:05hs","15:20hs","21:15hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["13:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 34000, "Cama": 36000 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:22hs","11:50hs","18:35hs"],
            "domingos_ida": ["10:35hs"],
            "diario_ida": ["16:15hs"],
            "lunes_a_viernes_vuelta": ["07:12hs","15:28hs","21:22hs"],
            "domingos_vuelta": ["19:18hs"],
            "diario_vuelta": ["13:12hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 31000, "Cama": 34700 },
          "horarios": {
            "lunes_a_viernes_ida": ["05:45hs","10:55hs","17:30hs"],
            "domingos_ida": ["09:50hs"],
            "diario_ida": ["15:20hs"],
            "lunes_a_viernes_vuelta": ["06:50hs","14:20hs","20:40hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["12:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 30100, "Cama": 33700 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:05hs","12:05hs","18:50hs"],
            "domingos_ida": ["10:45hs"],
            "diario_ida": ["16:30hs"],
            "lunes_a_viernes_vuelta": ["07:18hs","15:05hs","21:05hs"],
            "domingos_vuelta": ["19:22hs"],
            "diario_vuelta": ["12:58hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 28000, "Cama": 32600 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:12hs","12:12hs","18:57hs"],
            "domingos_ida": ["10:52hs"],
            "diario_ida": ["16:37hs"],
            "lunes_a_viernes_vuelta": ["07:25hs","15:12hs","21:12hs"],
            "domingos_vuelta": ["19:29hs"],
            "diario_vuelta": ["13:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 27000, "Cama": 31700 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:18hs","12:18hs","19:03hs"],
            "domingos_ida": ["10:58hs"],
            "diario_ida": ["16:43hs"],
            "lunes_a_viernes_vuelta": ["07:31hs","15:18hs","21:18hs"],
            "domingos_vuelta": ["19:35hs"],
            "diario_vuelta": ["13:11hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 25500, "Cama": 31200 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:25hs","12:25hs","19:10hs"],
            "domingos_ida": ["11:05hs"],
            "diario_ida": ["16:50hs"],
            "lunes_a_viernes_vuelta": ["07:38hs","15:25hs","21:25hs"],
            "domingos_vuelta": ["19:42hs"],
            "diario_vuelta": ["13:18hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 24200, "Cama": 29800 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:32hs","12:32hs","19:17hs"],
            "domingos_ida": ["11:12hs"],
            "diario_ida": ["16:57hs"],
            "lunes_a_viernes_vuelta": ["07:45hs","15:32hs","21:32hs"],
            "domingos_vuelta": ["19:49hs"],
            "diario_vuelta": ["13:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 23000, "Cama": 27600 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:40hs","12:40hs","19:24hs"],
            "domingos_ida": ["11:19hs"],
            "diario_ida": ["17:04hs"],
            "lunes_a_viernes_vuelta": ["07:52hs","15:40hs","21:40hs"],
            "domingos_vuelta": ["19:56hs"],
            "diario_vuelta": ["13:32hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 22300, "Cama": 25600 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:48hs","12:48hs","19:31hs"],
            "domingos_ida": ["11:26hs"],
            "diario_ida": ["17:11hs"],
            "lunes_a_viernes_vuelta": ["08:00hs","15:48hs","21:48hs"],
            "domingos_vuelta": ["20:03hs"],
            "diario_vuelta": ["13:39hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 21300, "Cama": 23500 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:05hs","13:05hs","19:50hs"],
            "domingos_ida": ["11:45hs"],
            "diario_ida": ["17:30hs"],
            "lunes_a_viernes_vuelta": ["08:18hs","16:05hs","22:05hs"],
            "domingos_vuelta": ["20:20hs"],
            "diario_vuelta": ["13:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 20300, "Cama": 22500 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:12hs","13:12hs","19:57hs"],
            "domigos_ida": ["11:52hs"],
            "domingos_ida": ["11:52hs"],
            "diario_ida": ["17:37hs"],
            "lunes_a_viernes_vuelta": ["08:25hs","16:12hs","22:12hs"],
            "domingos_vuelta": ["20:27hs"],
            "diario_vuelta": ["14:02hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19800, "Cama": 21100 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:20hs","13:20hs","20:05hs"],
            "domingos_ida": ["12:00hs"],
            "diario_ida": ["17:45hs"],
            "lunes_a_viernes_vuelta": ["08:33hs","16:20hs","22:20hs"],
            "domingos_vuelta": ["20:35hs"],
            "diario_vuelta": ["14:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 18800, "Cama": 19800 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:28hs","13:28hs","20:13hs"],
            "domingos_ida": ["12:08hs"],
            "diario_ida": ["17:53hs"],
            "lunes_a_viernes_vuelta": ["08:41hs","16:28hs","22:28hs"],
            "domingos_vuelta": ["20:43hs"],
            "diario_vuelta": ["14:18hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16000, "Cama": 18300 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:35hs","13:35hs","20:20hs"],
            "domingos_ida": ["12:15hs"],
            "diario_ida": ["18:00hs"],
            "lunes_a_viernes_vuelta": ["08:48hs","16:35hs","22:35hs"],
            "domingos_vuelta": ["20:50hs"],
            "diario_vuelta": ["14:22hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11600, "Cama": 17400 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:40hs","13:40hs","20:25hs"],
            "domingos_ida": ["12:20hs"],
            "diario_ida": ["18:05hs"],
            "lunes_a_viernes_vuelta": ["08:53hs","16:40hs","22:40hs"],
            "domingos_vuelta": ["20:55hs"],
            "diario_vuelta": ["14:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8400, "Cama": 15900 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:55hs","13:55hs","20:40hs"],
            "domingos_ida": ["12:35hs"],
            "diario_ida": ["18:20hs"],
            "lunes_a_viernes_vuelta": ["09:08hs","16:55hs","22:55hs"],
            "domingos_vuelta": ["21:10hs"],
            "diario_vuelta": ["14:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8400, "Cama": 14700 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:10hs","14:10hs","20:55hs"],
            "domingos_ida": ["12:50hs"],
            "diario_ida": ["18:35hs"],
            "lunes_a_viernes_vuelta": ["09:23hs","17:10hs","23:10hs"],
            "domingos_vuelta": ["21:25hs"],
            "diario_vuelta": ["15:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8400, "Cama": 9100 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:25hs","14:25hs","21:10hs"],
            "domingos_ida": ["13:05hs"],
            "diario_ida": ["18:50hs"],
            "lunes_a_viernes_vuelta": ["09:38hs","17:25hs","23:25hs"],
            "domingos_vuelta": ["21:40hs"],
            "diario_vuelta": ["15:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Acceso Federacion",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 35500, "Cama": 39800 },
          "horarios": {
            "lunes_a_viernes_ida": ["05:40hs","12:20hs","18:35hs"],
            "domingos_ida": ["10:05hs"],
            "diario_ida": ["16:10hs"],
            "lunes_a_viernes_vuelta": ["07:10hs","15:15hs","21:20hs"],
            "domingos_vuelta": ["19:25hs"],
            "diario_vuelta": ["12:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 34500, "Cama": 38800 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:08hs","11:18hs","17:55hs"],
            "domingos_ida": ["10:35hs"],
            "diario_ida": ["15:45hs"],
            "lunes_a_viernes_vuelta": ["07:32hs","14:52hs","21:10hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["12:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 35000, "Cama": 37000 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:15hs","11:40hs","18:25hs"],
            "domingos_ida": ["10:25hs"],
            "diario_ida": ["16:05hs"],
            "lunes_a_viernes_vuelta": ["07:05hs","15:20hs","21:15hs"],
            "domingos_vuelta": ["19:15hs"],
            "diario_vuelta": ["13:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 32000, "Cama": 35500 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:22hs","11:50hs","18:35hs"],
            "domingos_ida": ["10:45hs"],
            "diario_ida": ["16:15hs"],
            "lunes_a_viernes_vuelta": ["07:12hs","15:28hs","21:22hs"],
            "domingos_vuelta": ["19:35hs"],
            "diario_vuelta": ["13:12hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 31000, "Cama": 34700 },
          "horarios": {
            "lunes_a_viernes_ida": ["05:55hs","10:55hs","17:30hs"],
            "domingos_ida": ["09:50hs"],
            "diario_ida": ["15:20hs"],
            "lunes_a_viernes_vuelta": ["06:50hs","14:20hs","20:40hs"],
            "domingos_vuelta": ["18:40hs"],
            "diario_vuelta": ["12:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 30100, "Cama": 33700 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:05hs","12:05hs","18:50hs"],
            "domingos_ida": ["10:40hs"],
            "diario_ida": ["16:30hs"],
            "lunes_a_viernes_vuelta": ["07:18hs","15:05hs","21:05hs"],
            "domingos_vuelta": ["19:28hs"],
            "diario_vuelta": ["12:58hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rosier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 29000, "Cama": 32600 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:12hs","12:12hs","18:57hs"],
            "domingos_ida": ["10:52hs"],
            "diario_ida": ["16:37hs"],
            "lunes_a_viernes_vuelta": ["07:25hs","15:12hs","21:12hs"],
            "domingos_vuelta": ["19:22hs"],
            "diario_vuelta": ["13:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 28000, "Cama": 31700 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:18hs","12:18hs","19:03hs"],
            "domingos_ida": ["10:58hs"],
            "diario_ida": ["16:43hs"],
            "lunes_a_viernes_vuelta": ["07:31hs","15:18hs","21:18hs"],
            "domingos_vuelta": ["19:30hs"],
            "diario_vuelta": ["13:11hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 25500, "Cama": 31200 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:25hs","12:25hs","19:10hs"],
            "domingos_ida": ["11:05hs"],
            "diario_ida": ["16:50hs"],
            "lunes_a_viernes_vuelta": ["07:38hs","15:25hs","21:25hs"],
            "domingos_vuelta": ["19:45hs"],
            "diario_vuelta": ["13:18hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 24200, "Cama": 29900 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:32hs","12:32hs","19:17hs"],
            "domingos_ida": ["11:12hs"],
            "diario_ida": ["16:57hs"],
            "lunes_a_viernes_vuelta": ["07:45hs","15:32hs","21:32hs"],
            "domingos_vuelta": ["19:52hs"],
            "diario_vuelta": ["13:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 23000, "Cama": 27600 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:40hs","12:40hs","19:24hs"],
            "domingos_ida": ["11:19hs"],
            "diario_ida": ["17:04hs"],
            "lunes_a_viernes_vuelta": ["07:52hs","15:40hs","21:40hs"],
            "domingos_vuelta": ["19:58hs"],
            "diario_vuelta": ["13:32hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 22300, "Cama": 25600 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:48hs","12:48hs","19:31hs"],
            "domingos_ida": ["11:26hs"],
            "diario_ida": ["17:11hs"],
            "lunes_a_viernes_vuelta": ["08:00hs","15:48hs","21:48hs"],
            "domingos_vuelta": ["20:03hs"],
            "diario_vuelta": ["13:39hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 21300, "Cama": 23500 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:05hs","13:05hs","19:50hs"],
            "domingos_ida": ["11:45hs"],
            "diario_ida": ["17:30hs"],
            "lunes_a_viernes_vuelta": ["08:18hs","16:05hs","22:05hs"],
            "domingos_vuelta": ["20:20hs"],
            "diario_vuelta": ["13:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 20300, "Cama": 22500 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:12hs","13:12hs","19:57hs"],
            "domingos_ida": ["11:52hs"],
            "diario_ida": ["17:37hs"],
            "lunes_a_viernes_vuelta": ["08:25hs","16:12hs","22:12hs"],
            "domingos_vuelta": ["20:27hs"],
            "diario_vuelta": ["14:02hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19800, "Cama": 21100 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:20hs","13:20hs","20:05hs"],
            "domingos_ida": ["12:00hs"],
            "diario_ida": ["17:45hs"],
            "lunes_a_viernes_vuelta": ["08:33hs","16:20hs","22:20hs"],
            "domingos_vuelta": ["20:35hs"],
            "diario_vuelta": ["14:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 18800, "Cama": 19800 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:28hs","13:28hs","20:13hs"],
            "domingos_ida": ["12:08hs"],
            "diario_ida": ["17:53hs"],
            "lunes_a_viernes_vuelta": ["08:41hs","16:28hs","22:28hs"],
            "domingos_vuelta": ["20:43hs"],
            "diario_vuelta": ["14:18hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16000, "Cama": 18300 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:35hs","13:35hs","20:20hs"],
            "domingos_ida": ["12:15hs"],
            "diario_ida": ["18:00hs"],
            "lunes_a_viernes_vuelta": ["08:48hs","16:35hs","22:35hs"],
            "domingos_vuelta": ["20:50hs"],
            "diario_vuelta": ["14:22hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11600, "Cama": 17400 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:40hs","13:40hs","20:25hs"],
            "domingos_ida": ["12:20hs"],
            "diario_ida": ["18:05hs"],
            "lunes_a_viernes_vuelta": ["08:53hs","16:40hs","22:40hs"],
            "domingos_vuelta": ["20:55hs"],
            "diario_vuelta": ["14:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6400, "Cama": 15900 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:55hs","13:55hs","20:40hs"],
            "domingos_ida": ["12:35hs"],
            "diario_ida": ["18:20hs"],
            "lunes_a_viernes_vuelta": ["09:08hs","16:55hs","22:55hs"],
            "domingos_vuelta": ["21:10hs"],
            "diario_vuelta": ["14:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6400, "Cama": 14100 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:10hs","14:10hs","20:55hs"],
            "domingos_ida": ["12:50hs"],
            "diario_ida": ["18:35hs"],
            "lunes_a_viernes_vuelta": ["09:23hs","17:10hs","23:10hs"],
            "domingos_vuelta": ["21:25hs"],
            "diario_vuelta": ["15:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6400, "Cama": 13100 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:20hs","14:25hs","21:10hs"],
            "domingos_ida": ["13:05hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["09:35hs","17:25hs","23:15hs"],
            "domingos_vuelta": ["21:40hs"],
            "diario_vuelta": ["15:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Concordia",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 26100, "Cama": 29200 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:00hs","12:10hs","18:40hs"],
            "domingos_ida": ["10:20hs"],
            "diario_ida": ["16:25hs"],
            "lunes_a_viernes_vuelta": ["07:25hs","15:00hs","21:30hs"],
            "domingos_vuelta": ["19:35hs"],
            "diario_vuelta": ["12:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 25500, "Cama": 28300 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:08hs","11:18hs","17:55hs"],
            "domingos_ida": ["10:05hs"],
            "diario_ida": ["15:45hs"],
            "lunes_a_viernes_vuelta": ["07:32hs","14:52hs","21:10hs"],
            "domingos_vuelta": ["19:20hs"],
            "diario_vuelta": ["12:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 24000, "Cama": 28500 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:15hs","11:40hs","18:25hs"],
            "domingos_ida": ["10:25hs"],
            "diario_ida": ["16:05hs"],
            "lunes_a_viernes_vuelta": ["07:05hs","15:20hs","21:15hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["13:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 23100, "Cama": 25700 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:22hs","11:50hs","18:35hs"],
            "domingos_ida": ["10:35hs"],
            "diario_ida": ["16:15hs"],
            "lunes_a_viernes_vuelta": ["07:12hs","15:28hs","21:22hs"],
            "domingos_vuelta": ["19:18hs"],
            "diario_vuelta": ["13:12hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 22100, "Cama": 23400 },
          "horarios": {
            "lunes_a_viernes_ida": ["05:45hs","10:55hs","17:30hs"],
            "domingos_ida": ["09:50hs"],
            "diario_ida": ["15:20hs"],
            "lunes_a_viernes_vuelta": ["06:50hs","14:20hs","20:40hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["12:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 21100, "Cama": 23900 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:05hs","12:05hs","18:50hs"],
            "domingos_ida": ["10:45hs"],
            "diario_ida": ["16:30hs"],
            "lunes_a_viernes_vuelta": ["07:18hs","15:05hs","21:05hs"],
            "domingos_vuelta": ["19:22hs"],
            "diario_vuelta": ["12:58hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rosier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 20000, "Cama": 22800 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:12hs","12:12hs","18:57hs"],
            "domingos_ida": ["10:52hs"],
            "diario_ida": ["16:37hs"],
            "lunes_a_viernes_vuelta": ["07:25hs","15:12hs","21:12hs"],
            "domingos_vuelta": ["19:29hs"],
            "diario_vuelta": ["13:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19000, "Cama": 21900 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:18hs","12:18hs","19:03hs"],
            "domingos_ida": ["10:58hs"],
            "diario_ida": ["16:43hs"],
            "lunes_a_viernes_vuelta": ["07:31hs","15:18hs","21:18hs"],
            "domingos_vuelta": ["19:35hs"],
            "diario_vuelta": ["13:11hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 18500, "Cama": 21400 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:25hs","12:25hs","19:10hs"],
            "domingos_ida": ["11:05hs"],
            "diario_ida": ["16:50hs"],
            "lunes_a_viernes_vuelta": ["07:38hs","15:25hs","21:25hs"],
            "domingos_vuelta": ["19:42hs"],
            "diario_vuelta": ["13:18hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15100, "Cama": 19800 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:32hs","12:32hs","19:17hs"],
            "domingos_ida": ["11:12hs"],
            "diario_ida": ["16:57hs"],
            "lunes_a_viernes_vuelta": ["07:45hs","15:32hs","21:32hs"],
            "domingos_vuelta": ["19:49hs"],
            "diario_vuelta": ["13:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14000, "Cama": 18100 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:40hs","12:40hs","19:24hs"],
            "domingos_ida": ["11:19hs"],
            "diario_ida": ["17:04hs"],
            "lunes_a_viernes_vuelta": ["07:52hs","15:40hs","21:40hs"],
            "domingos_vuelta": ["19:56hs"],
            "diario_vuelta": ["13:32hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11300, "Cama": 14400 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:48hs","12:48hs","19:31hs"],
            "domingos_ida": ["11:26hs"],
            "diario_ida": ["17:11hs"],
            "lunes_a_viernes_vuelta": ["08:00hs","15:48hs","21:48hs"],
            "domingos_vuelta": ["20:03hs"],
            "diario_vuelta": ["13:39hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10300, "Cama": 13400 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:05hs","13:05hs","19:50hs"],
            "domingos_ida": ["11:45hs"],
            "diario_ida": ["17:30hs"],
            "lunes_a_viernes_vuelta": ["08:18hs","16:05hs","22:05hs"],
            "domingos_vuelta": ["20:20hs"],
            "diario_vuelta": ["13:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9300, "Cama": 12600 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:12hs","13:12hs","19:57hs"],
            "domingos_ida": ["11:52hs"],
            "diario_ida": ["17:37hs"],
            "lunes_a_viernes_vuelta": ["08:25hs","16:12hs","22:12hs"],
            "domingos_vuelta": ["20:27hs"],
            "diario_vuelta": ["14:02hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7800, "Cama": 11600 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:20hs","13:20hs","20:05hs"],
            "domingos_ida": ["12:00hs"],
            "diario_ida": ["17:45hs"],
            "lunes_a_viernes_vuelta": ["08:33hs","16:20hs","22:20hs"],
            "domingos_vuelta": ["20:35hs"],
            "diario_vuelta": ["14:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7400, "Cama": 10400 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:28hs","13:28hs","20:13hs"],
            "domingos_ida": ["12:08hs"],
            "diario_ida": ["17:53hs"],
            "lunes_a_viernes_vuelta": ["08:41hs","16:28hs","22:28hs"],
            "domingos_vuelta": ["20:43hs"],
            "diario_vuelta": ["14:18hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6900, "Cama": 7000 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:35hs","13:35hs","20:20hs"],
            "domingos_ida": ["12:15hs"],
            "diario_ida": ["18:00hs"],
            "lunes_a_viernes_vuelta": ["08:48hs","16:35hs","22:35hs"],
            "domingos_vuelta": ["20:50hs"],
            "diario_vuelta": ["14:22hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6500, "Cama": 9100 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:40hs","13:40hs","20:25hs"],
            "domingos_ida": ["12:20hs"],
            "diario_ida": ["18:05hs"],
            "lunes_a_viernes_vuelta": ["08:53hs","16:40hs","22:40hs"],
            "domingos_vuelta": ["20:55hs"],
            "diario_vuelta": ["14:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:55hs","13:55hs","20:40hs"],
            "domingos_ida": ["12:35hs"],
            "diario_ida": ["18:20hs"],
            "lunes_a_viernes_vuelta": ["09:08hs","16:55hs","22:55hs"],
            "domingos_vuelta": ["21:10hs"],
            "diario_vuelta": ["14:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6400, "Cama": 14000 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:15hs","14:20hs","21:00hs"],
            "domingos_ida": ["13:10hs"],
            "diario_ida": ["18:40hs"],
            "lunes_a_viernes_vuelta": ["09:28hs","17:20hs","23:20hs"],
            "domingos_vuelta": ["21:28hs"],
            "diario_vuelta": ["15:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6400, "Cama": 14000 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:20hs","14:25hs","21:10hs"],
            "domingos_ida": ["13:15hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["09:35hs","17:25hs","23:15hs"],
            "domingos_vuelta": ["21:40hs"],
            "diario_vuelta": ["15:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "San Salvador",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 22600, "Cama": 25300 },
          "horarios": {
            "lunes_a_viernes_ida": ["05:55hs","11:25hs","18:10hs"],
            "domingos_ida": ["10:15hs"],
            "diario_ida": ["16:20hs"],
            "lunes_a_viernes_vuelta": ["07:20hs","15:05hs","21:35hs"],
            "domingos_vuelta": ["19:30hs"],
            "diario_vuelta": ["12:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 21600, "Cama": 24300 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:08hs","11:18hs","17:55hs"],
            "domingos_ida": ["10:05hs"],
            "diario_ida": ["15:45hs"],
            "lunes_a_viernes_vuelta": ["07:32hs","14:52hs","21:10hs"],
            "domingos_vuelta": ["19:20hs"],
            "diario_vuelta": ["12:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 20200, "Cama": 24300 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:15hs","11:40hs","18:25hs"],
            "domingos_ida": ["10:25hs"],
            "diario_ida": ["16:05hs"],
            "lunes_a_viernes_vuelta": ["07:05hs","15:20hs","21:15hs"],
            "domingos_vuelta": ["19:10hs"],
            "diario_vuelta": ["13:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19100, "Cama": 21700 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:22hs","11:50hs","18:35hs"],
            "domingos_ida": ["10:35hs"],
            "diario_ida": ["16:15hs"],
            "lunes_a_viernes_vuelta": ["07:12hs","15:28hs","21:22hs"],
            "domingos_vuelta": ["19:18hs"],
            "diario_vuelta": ["13:12hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 18100, "Cama": 19300 },
          "horarios": {
            "lunes_a_viernes_ida": ["05:45hs","10:55hs","17:30hs"],
            "domingos_ida": ["09:50hs"],
            "diario_ida": ["15:20hs"],
            "lunes_a_viernes_vuelta": ["06:50hs","14:20hs","20:40hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["12:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 17200, "Cama": 19900 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:05hs","12:05hs","18:50hs"],
            "domingos_ida": ["10:45hs"],
            "diario_ida": ["16:30hs"],
            "lunes_a_viernes_vuelta": ["07:18hs","15:05hs","21:05hs"],
            "domingos_vuelta": ["19:22hs"],
            "diario_vuelta": ["12:58hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 16100, "Cama": 18800 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:12hs","12:12hs","18:57hs"],
            "domingos_ida": ["10:52hs"],
            "diario_ida": ["16:37hs"],
            "lunes_a_viernes_vuelta": ["07:25hs","15:12hs","21:12hs"],
            "domingos_vuelta": ["19:29hs"],
            "diario_vuelta": ["13:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 15100, "Cama": 17900 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:18hs","12:18hs","19:03hs"],
            "domingos_ida": ["10:58hs"],
            "diario_ida": ["16:43hs"],
            "lunes_a_viernes_vuelta": ["07:31hs","15:18hs","21:18hs"],
            "domingos_vuelta": ["19:35hs"],
            "diario_vuelta": ["13:11hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 12600, "Cama": 17400 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:25hs","12:25hs","19:10hs"],
            "domingos_ida": ["11:05hs"],
            "diario_ida": ["16:50hs"],
            "lunes_a_viernes_vuelta": ["07:38hs","15:25hs","21:25hs"],
            "domingos_vuelta": ["19:42hs"],
            "diario_vuelta": ["13:18hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11200, "Cama": 15600 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:32hs","12:32hs","19:17hs"],
            "domingos_ida": ["11:12hs"],
            "diario_ida": ["16:57hs"],
            "lunes_a_viernes_vuelta": ["07:45hs","15:32hs","21:32hs"],
            "domingos_vuelta": ["19:49hs"],
            "diario_vuelta": ["13:25hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 10100, "Cama": 14100 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:40hs","12:40hs","19:24hs"],
            "domingos_ida": ["11:19hs"],
            "diario_ida": ["17:04hs"],
            "lunes_a_viernes_vuelta": ["07:52hs","15:40hs","21:40hs"],
            "domingos_vuelta": ["19:56hs"],
            "diario_vuelta": ["13:32hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7600, "Cama": 10400 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:48hs","12:48hs","19:31hs"],
            "domingos_ida": ["11:26hs"],
            "diario_ida": ["17:11hs"],
            "lunes_a_viernes_vuelta": ["08:00hs","15:48hs","21:48hs"],
            "domingos_vuelta": ["20:03hs"],
            "diario_vuelta": ["13:39hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6600, "Cama": 9400 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:05hs","13:05hs","19:50hs"],
            "domingos_ida": ["11:45hs"],
            "diario_ida": ["17:30hs"],
            "lunes_a_viernes_vuelta": ["08:18hs","16:05hs","22:05hs"],
            "domingos_vuelta": ["20:20hs"],
            "diario_vuelta": ["13:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5700, "Cama": 8600 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:12hs","13:12hs","19:57hs"],
            "domingos_ida": ["11:52hs"],
            "diario_ida": ["17:37hs"],
            "lunes_a_viernes_vuelta": ["08:25hs","16:12hs","22:12hs"],
            "domingos_vuelta": ["20:27hs"],
            "diario_vuelta": ["14:02hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4400, "Cama": 7600 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:20hs","13:20hs","20:05hs"],
            "domingos_ida": ["12:00hs"],
            "diario_ida": ["17:45hs"],
            "lunes_a_viernes_vuelta": ["08:33hs","16:20hs","22:20hs"],
            "domingos_vuelta": ["20:35hs"],
            "diario_vuelta": ["14:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4000, "Cama": 6400 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:28hs","13:28hs","20:13hs"],
            "domingos_ida": ["12:08hs"],
            "diario_ida": ["17:53hs"],
            "lunes_a_viernes_vuelta": ["08:41hs","16:28hs","22:28hs"],
            "domingos_vuelta": ["20:43hs"],
            "diario_vuelta": ["14:18hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:35hs","13:35hs","20:20hs"],
            "domingos_ida": ["12:15hs"],
            "diario_ida": ["18:00hs"],
            "lunes_a_viernes_vuelta": ["08:48hs","16:35hs","22:35hs"],
            "domingos_vuelta": ["20:50hs"],
            "diario_vuelta": ["14:22hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "General Campos",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 3100 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:55hs","13:55hs","20:40hs"],
            "domingos_ida": ["12:35hs"],
            "diario_ida": ["18:20hs"],
            "lunes_a_viernes_vuelta": ["09:08hs","16:55hs","22:55hs"],
            "domingos_vuelta": ["21:10hs"],
            "diario_vuelta": ["14:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 4600, "Cama": 5100 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:10hs","14:10hs","20:55hs"],
            "domingos_ida": ["12:50hs"],
            "diario_ida": ["18:35hs"],
            "lunes_a_viernes_vuelta": ["09:23hs","17:10hs","23:10hs"],
            "domingos_vuelta": ["21:25hs"],
            "diario_vuelta": ["15:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11600, "Cama": 17400 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:25hs","14:25hs","21:10hs"],
            "domingos_ida": ["13:05hs"],
            "diario_ida": ["18:50hs"],
            "lunes_a_viernes_vuelta": ["09:38hs","17:25hs","23:25hs"],
            "domingos_vuelta": ["21:40hs"],
            "diario_vuelta": ["15:15hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 11600, "Cama": 17400 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:45hs","14:45hs","21:30hs"],
            "domingos_ida": ["13:25hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["09:15hs","15:40hs","22:40hs"],
            "domingos_vuelta": ["20:55hs"],
            "diario_vuelta": ["14:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "General Campos",
  "destinos": [
    {
      "destino": "Parana",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 24500, "Cama": 27300 },
          "horarios": {
            "lunes_a_viernes_ida": ["05:40hs","11:10hs","17:55hs"],
            "domingos_ida": ["09:55hs"],
            "diario_ida": ["15:55hs"],
            "lunes_a_viernes_vuelta": ["07:35hs","15:20hs","21:50hs"],
            "domingos_vuelta": ["19:45hs"],
            "diario_vuelta": ["12:55hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "GNL Genolot",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 23500, "Cama": 26300 },
          "horarios": {
            "lunes_a_viernes_ida": ["05:55hs","11:05hs","17:45hs"],
            "domingos_ida": ["09:45hs"],
            "diario_ida": ["15:45hs"],
            "lunes_a_viernes_vuelta": ["07:25hs","15:05hs","21:35hs"],
            "domingos_vuelta": ["19:35hs"],
            "diario_vuelta": ["12:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Bocas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 22200, "Cama": 24300 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:05hs","11:25hs","18:10hs"],
            "domingos_ida": ["10:05hs"],
            "diario_ida": ["16:05hs"],
            "lunes_a_viernes_vuelta": ["07:10hs","15:15hs","21:25hs"],
            "domingos_vuelta": ["19:25hs"],
            "diario_vuelta": ["13:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Quebacho",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 21000, "Cama": 23700 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:15hs","11:35hs","18:20hs"],
            "domingos_ida": ["10:15hs"],
            "diario_ida": ["16:15hs"],
            "lunes_a_viernes_vuelta": ["07:00hs","15:25hs","21:35hs"],
            "domingos_vuelta": ["19:15hs"],
            "diario_vuelta": ["13:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rambon",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 20100, "Cama": 21400 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:25hs","11:45hs","18:30hs"],
            "domingos_ida": ["10:25hs"],
            "diario_ida": ["16:25hs"],
            "lunes_a_viernes_vuelta": ["06:50hs","15:35hs","21:45hs"],
            "domingos_vuelta": ["19:05hs"],
            "diario_vuelta": ["13:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Viale Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 19100, "Cama": 21900 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:35hs","11:55hs","18:40hs"],
            "domingos_ida": ["10:35hs"],
            "diario_ida": ["16:35hs"],
            "lunes_a_viernes_vuelta": ["06:40hs","15:45hs","21:55hs"],
            "domingos_vuelta": ["18:55hs"],
            "diario_vuelta": ["13:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Rossier",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 18000, "Cama": 20800 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:45hs","12:05hs","18:50hs"],
            "domingos_ida": ["10:45hs"],
            "diario_ida": ["16:45hs"],
            "lunes_a_viernes_vuelta": ["06:30hs","15:55hs","22:05hs"],
            "domingos_vuelta": ["18:45hs"],
            "diario_vuelta": ["13:40hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Tres Sauces",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 17100, "Cama": 19900 },
          "horarios": {
            "lunes_a_viernes_ida": ["06:55hs","12:15hs","19:00hs"],
            "domingos_ida": ["10:55hs"],
            "diario_ida": ["16:55hs"],
            "lunes_a_viernes_vuelta": ["06:20hs","16:05hs","22:15hs"],
            "domingos_vuelta": ["18:35hs"],
            "diario_vuelta": ["13:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Barbagelatta",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 14500, "Cama": 19400 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:05hs","12:25hs","19:10hs"],
            "domingos_ida": ["11:05hs"],
            "diario_ida": ["17:05hs"],
            "lunes_a_viernes_vuelta": ["06:10hs","16:15hs","22:25hs"],
            "domingos_vuelta": ["18:25hs"],
            "diario_vuelta": ["14:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Pineiro",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 13200, "Cama": 17600 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:15hs","12:35hs","19:20hs"],
            "domingos_ida": ["11:15hs"],
            "diario_ida": ["17:15hs"],
            "lunes_a_viernes_vuelta": ["06:00hs","16:25hs","22:35hs"],
            "domingos_vuelta": ["18:15hs"],
            "diario_vuelta": ["14:10hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Fca de Palmas",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 9100, "Cama": 16100 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:25hs","12:45hs","19:30hs"],
            "domingos_ida": ["11:25hs"],
            "diario_ida": ["17:25hs"],
            "lunes_a_viernes_vuelta": ["09:55hs","16:35hs","22:45hs"],
            "domingos_vuelta": ["21:05hs"],
            "diario_vuelta": ["14:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Baño Oficial",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5200, "Cama": 12400 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:35hs","12:55hs","19:40hs"],
            "domingos_ida": ["11:35hs"],
            "diario_ida": ["17:35hs"],
            "lunes_a_viernes_vuelta": ["09:45hs","16:45hs","22:55hs"],
            "domingos_vuelta": ["20:55hs"],
            "diario_vuelta": ["14:30hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villaguay",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 8500, "Cama": 11400 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:50hs","13:10hs","19:55hs"],
            "domingos_ida": ["11:50hs"],
            "diario_ida": ["17:50hs"],
            "lunes_a_viernes_vuelta": ["09:30hs","17:00hs","23:10hs"],
            "domingos_vuelta": ["20:40hs"],
            "diario_vuelta": ["14:45hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Travichet",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 7200, "Cama": 10400 },
          "horarios": {
            "lunes_a_viernes_ida": ["07:58hs","13:18hs","20:03hs"],
            "domingos_ida": ["11:58hs"],
            "diario_ida": ["17:58hs"],
            "lunes_a_viernes_vuelta": ["09:22hs","17:08hs","23:18hs"],
            "domingos_vuelta": ["20:32hs"],
            "diario_vuelta": ["14:53hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Camino de Ripio",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5900, "Cama": 9600 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:05hs","13:25hs","20:10hs"],
            "domingos_ida": ["12:05hs"],
            "diario_ida": ["18:05hs"],
            "lunes_a_viernes_vuelta": ["09:15hs","17:15hs","23:25hs"],
            "domingos_vuelta": ["20:25hs"],
            "diario_vuelta": ["15:00hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Villa Clara",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 5500, "Cama": 8400 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:12hs","13:32hs","20:17hs"],
            "domingos_ida": ["12:12hs"],
            "diario_ida": ["18:12hs"],
            "lunes_a_viernes_vuelta": ["09:08hs","17:22hs","23:32hs"],
            "domingos_vuelta": ["20:18hs"],
            "diario_vuelta": ["15:07hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Jubileo Acceso",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 5000 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:18hs","13:38hs","20:23hs"],
            "domingos_ida": ["12:18hs"],
            "diario_ida": ["18:18hs"],
            "lunes_a_viernes_vuelta": ["09:02hs","17:28hs","23:38hs"],
            "domingos_vuelta": ["20:12hs"],
            "diario_vuelta": ["15:13hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "San Salvador",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 2700, "Cama": 5300 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:25hs","13:45hs","20:30hs"],
            "domingos_ida": ["12:25hs"],
            "diario_ida": ["18:25hs"],
            "lunes_a_viernes_vuelta": ["08:55hs","17:35hs","23:45hs"],
            "domingos_vuelta": ["20:05hs"],
            "diario_vuelta": ["15:20hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Concordia",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 3200, "Cama": 3700 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:40hs","14:00hs","20:45hs"],
            "domingos_ida": ["12:40hs"],
            "diario_ida": ["18:40hs"],
            "lunes_a_viernes_vuelta": ["08:40hs","17:50hs","23:55hs"],
            "domingos_vuelta": ["19:50hs"],
            "diario_vuelta": ["15:35hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Acceso Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6400, "Cama": 15900 },
          "horarios": {
            "lunes_a_viernes_ida": ["08:55hs","14:15hs","21:00hs"],
            "domingos_ida": ["12:55hs"],
            "diario_ida": ["18:55hs"],
            "lunes_a_viernes_vuelta": ["08:25hs","18:05hs","00:10hs"],
            "domingos_vuelta": ["19:35hs"],
            "diario_vuelta": ["15:50hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    },
    {
      "destino": "Federacion",
      "servicios": [
        {
          "tipo": "Semicama y Cama",
          "precios": { "Semicama": 6400, "Cama": 15900 },
          "horarios": {
            "lunes_a_viernes_ida": ["09:10hs","14:30hs","21:15hs"],
            "domingos_ida": ["13:10hs"],
            "diario_ida": ["19:10hs"],
            "lunes_a_viernes_vuelta": ["08:10hs","18:20hs","00:25hs"],
            "domingos_vuelta": ["19:20hs"],
            "diario_vuelta": ["16:05hs"],
            "sabados_domingos_ida": [],
            "sabados_domingos_vuelta": [],
            "diario": []
          }
        }
      ]
    }
  ]
},
{
  "origen": "Villa Urquiza",
  "destinos": [
    {
      "destino": "Paraná",
      "servicios": [
        {
          "tipo": "Coche común",
          "precios": 4700,
          "horarios": {
            "lunes_a_viernes_ida": ["06:00hs", "17:30hs"],
            "sabados_domingos_ida": ["19:45hs"],
            "domingos_ida": [],
            "diario_ida": [],
            "lunes_a_viernes_vuelta": ["06:00hs", "12:00hs", "19:00hs"],
            "sabados_domingos_vuelta": ["10:30hs", "18:30hs"],
            "domingos_vuelta": [],
            "diario_vuelta": [],
            "diario": ["13:15hs"]
          }
        }
      ]
    },
    {
      "destino": "San Benito",
      "servicios": [
        {
          "tipo": "Coche común",
          "precios": 3700,
          "horarios": {
            "lunes_a_viernes_ida": ["06:00hs", "17:30hs"],
            "sabados_domingos_ida": ["19:45hs"],
            "domingos_ida": [],
            "diario_ida": [],
            "lunes_a_viernes_vuelta": ["06:05hs", "12:05hs", "19:05hs"],
            "sabados_domingos_vuelta": ["10:35hs", "18:35hs"],
            "domingos_vuelta": [],
            "diario_vuelta": [],
            "diario": ["13:15hs"]
          }
        }
      ]
    },
    {
      "destino": "Colonia Avellaneda",
      "servicios": [
        {
          "tipo": "Coche común",
          "precios": 3600,
          "horarios": {
            "lunes_a_viernes_ida": ["06:00hs", "17:30hs"],
            "sabados_domingos_ida": ["19:45hs"],
            "domingos_ida": [],
            "diario_ida": [],
            "lunes_a_viernes_vuelta": ["06:10hs", "12:10hs", "19:10hs"],
            "sabados_domingos_vuelta": ["10:40hs", "18:40hs"],
            "domingos_vuelta": [],
            "diario_vuelta": [],
            "diario": ["13:15hs"]
          }
        }
      ]
    },
    {
      "destino": "Empalme Ruta 12 y 18",
      "servicios": [
        {
          "tipo": "Coche común",
          "precios": 3300,
          "horarios": {
            "lunes_a_viernes_ida": ["06:00hs", "17:30hs"],
            "sabados_domingos_ida": ["19:45hs"],
            "domingos_ida": [],
            "diario_ida": [],
            "lunes_a_viernes_vuelta": ["06:30hs", "12:30hs", "19:30hs"],
            "sabados_domingos_vuelta": ["11:00hs", "19:00hs"],
            "domingos_vuelta": [],
            "diario_vuelta": [],
            "diario": ["13:15hs"]
          }
        }
      ]
    },
    {
      "destino": "Sauce Montrul",
      "servicios": [
        {
          "tipo": "Coche común",
          "precios": 3200,
          "horarios": {
            "lunes_a_viernes_ida": ["06:00hs", "17:30hs"],
            "sabados_domingos_ida": ["19:45hs"],
            "domingos_ida": [],
            "diario_ida": [],
            "lunes_a_viernes_vuelta": ["06:35hs", "12:35hs", "19:35hs"],
            "sabados_domingos_vuelta": ["11:05hs", "19:05hs"],
            "domingos_vuelta": [],
            "diario_vuelta": [],
            "diario": ["13:15hs"]
          }
        }
      ]
    },
    {
      "destino": "Acceso Escuela Almafuerte",
      "servicios": [
        {
          "tipo": "Coche común",
          "precios": 2500,
          "horarios": {
            "lunes_a_viernes_ida": ["06:00hs", "17:30hs"],
            "sabados_domingos_ida": ["19:45hs"],
            "domingos_ida": [],
            "diario_ida": [],
            "lunes_a_viernes_vuelta": ["06:39hs", "12:39hs", "19:39hs"],
            "sabados_domingos_vuelta": ["11:09hs", "19:09hs"],
            "domingos_vuelta": [],
            "diario_vuelta": [],
            "diario": ["13:15hs"]
          }
        }
      ]
    },
    {
      "destino": "Escuela Almafuerte",
      "servicios": [
        {
          "tipo": "Coche común",
          "precios": 2500,
          "horarios": {
            "lunes_a_viernes_ida": ["06:00hs", "17:30hs"],
            "sabados_domingos_ida": ["19:45hs"],
            "domingos_ida": [],
            "diario_ida": [],
            "lunes_a_viernes_vuelta": ["06:40hs", "12:40hs", "19:40hs"],
            "sabados_domingos_vuelta": ["11:10hs", "19:10hs"],
            "domingos_vuelta": [],
            "diario_vuelta": [],
            "diario": ["13:15hs"]
          }
        }
      ]
    },
    {
      "destino": "La Picada",
      "servicios": [
        {
          "tipo": "Coche común",
          "precios": 2500,
          "horarios": {
            "lunes_a_viernes_ida": ["06:00hs", "17:30hs"],
            "sabados_domingos_ida": ["19:45hs"],
            "domingos_ida": [],
            "diario_ida": [],
            "lunes_a_viernes_vuelta": ["06:45hs", "12:45hs", "19:45hs"],
            "sabados_domingos_vuelta": ["11:15hs", "19:15hs"],
            "domingos_vuelta": [],
            "diario_vuelta": [],
            "diario": ["13:15hs"]
          }
        }
      ]
    },
    {
      "destino": "Colonia Nueva",
      "servicios": [
        {
          "tipo": "Coche común",
          "precios": 1800,
          "horarios": {
            "lunes_a_viernes_ida": ["06:00hs", "17:30hs"],
            "sabados_domingos_ida": ["19:45hs"],
            "domingos_ida": [],
            "diario_ida": [],
            "lunes_a_viernes_vuelta": ["06:50hs", "12:50hs", "19:50hs"],
            "sabados_domingos_vuelta": ["11:20hs", "19:20hs"],
            "domingos_vuelta": [],
            "diario_vuelta": [],
            "diario": ["13:15hs"]
          }
        }
      ]
    },
    {
      "destino": "La Balsa",
      "servicios": [
        {
          "tipo": "Coche común",
          "precios": 1500,
          "horarios": {
            "lunes_a_viernes_ida": ["06:00hs", "17:30hs"],
            "sabados_domingos_ida": ["19:45hs"],
            "domingos_ida": [],
            "diario_ida": [],
            "lunes_a_viernes_vuelta": ["07:00hs", "13:00hs", "20:00hs"],
            "sabados_domingos_vuelta": ["11:30hs", "19:30hs"],
            "domingos_vuelta": [],
            "diario_vuelta": [],
            "diario": ["13:15hs"]
          }
        }
      ]
    },
    {
      "destino": "Escuela Agrotecnica",
      "servicios": [
        {
          "tipo": "Coche común",
          "precios": 1500,
          "horarios": {
            "lunes_a_viernes_ida": ["06:00hs", "17:30hs"],
            "sabados_domingos_ida": ["19:45hs"],
            "domingos_ida": [],
            "diario_ida": [],
            "lunes_a_viernes_vuelta": ["07:13hs", "13:13hs", "20:13hs"],
            "sabados_domingos_vuelta": ["11:43hs", "19:43hs"],
            "domingos_vuelta": [],
            "diario_vuelta": [],
            "diario": ["13:15hs"]
          }
        }
      ]
    }
  ]
}

];
  const STOPWORDS = new Set(['de','del','la','las','los','y','e','el','a','al','en','por','para']);
function limpiarTexto(texto = "") {
  return texto
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // saca acentos robusto
    .replace(/[^\w\s]/g, " ")                         // saca signos
    .replace(/\s+/g, " ")
    .trim();
}
function tokens(s = "") {
  return limpiarTexto(s)
    .split(/\s+/)
    .filter(t => t && !STOPWORDS.has(t));
}
function mismasPalabras(tA, tB) {
  if (tA.length !== tB.length) return false;
  const setB = new Set(tB);
  for (const t of tA) if (!setB.has(t)) return false;
  return true;
}

// 🔎 Fuzzy matching (Levenshtein)
function lev(a, b) {
  a = limpiarTexto(a); b = limpiarTexto(b);
  const m = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) m[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const costo = a[i - 1] === b[j - 1] ? 0 : 1;
      m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + costo);
    }
  }
  return m[a.length][b.length];
}
function similitud(a, b) {
  const la = limpiarTexto(a).length;
  const lb = limpiarTexto(b).length;
  const L = Math.max(la, lb) || 1;
  return 1 - (lev(a, b) / L); // 0..1
}

// 🧠 Mejor coincidencia: prioridad exacto → mismas palabras → mejor Jaccard penalizando extras (+ tie con Levenshtein)
function mejorCoincidencia(candidatos, query) {
  const qNorm = limpiarTexto(query);
  const qTok  = tokens(qNorm);

  let best = null;
  let bestScore = -Infinity;

  for (const c of candidatos) {
    const cNorm = limpiarTexto(c);
    const cTok  = tokens(cNorm);

    // 1) Exacto normalizado
    if (cNorm === qNorm) return c;

    // 2) Mismas palabras (sin importar orden)
    if (mismasPalabras(qTok, cTok)) return c;

    // 3) Jaccard + penalización de "extras" + Levenshtein como tie-break
    const inter = new Set(qTok.filter(t => cTok.includes(t))).size;
    const union = new Set([...qTok, ...cTok]).size || 1;
    const jaccard = inter / union;

    const extras = Math.max(0, cTok.length - qTok.length); // penaliza superstrings ("acceso ..." vs "escuela almafuerte")
    const charSim = similitud(cNorm, qNorm);

    // pesos: Jaccard manda, Levenshtein ayuda con typos, extras penaliza
    const score = (jaccard * 2.0) + (charSim * 0.5) - (extras * 0.4);

    if (score > bestScore) {
      bestScore = score;
      best = c;
    }
  }
  return best; // si nada exacto, devuelve el mejor rankeado
}

// 🏠 GET raíz
app.get('/', (req, res) => {
  res.send('🚌 API de colectivos funcionando con horarios completos');
});

// 🔍 GET /rutas?origen=X&destino=Y  (matching robusto en origen y destino)
app.get('/rutas', (req, res) => {
  const origenParam  = req.query.origen || "";
  const destinoParam = req.query.destino || "";

  // Si no mandan ambos, devolvemos todo (mantengo tu comportamiento)
  if (!origenParam || !destinoParam) {
    return res.json(rutas);
  }

  // 1) Buscar origen: exacto normalizado → mejorCoincidencia
  const origenExacto = rutas.find(r => limpiarTexto(r.origen) === limpiarTexto(origenParam));
  let ruta = origenExacto;
  if (!ruta) {
    const matchOrigen = mejorCoincidencia(rutas.map(r => r.origen), origenParam);
    if (matchOrigen) {
      ruta = rutas.find(r => limpiarTexto(r.origen) === limpiarTexto(matchOrigen));
    }
  }
  if (!ruta) return res.status(404).json({ mensaje: "Origen no encontrado" });

  // 2) Buscar destino: exacto normalizado → mejorCoincidencia (SIN includes/startsWith)
  let destino = ruta.destinos.find(d => limpiarTexto(d.destino) === limpiarTexto(destinoParam));
  if (!destino) {
    const matchDestino = mejorCoincidencia(ruta.destinos.map(d => d.destino), destinoParam);
    if (matchDestino) {
      destino = ruta.destinos.find(d => limpiarTexto(d.destino) === limpiarTexto(matchDestino));
    }
  }
  if (!destino) return res.status(404).json({ mensaje: "Destino no encontrado para ese origen" });

  // 3) Respuesta final (mismo formato que usabas)
  return res.json([{ origen: ruta.origen, destinos: [destino] }]);
});

// 🔁 GET /rutas/:origen (todos los destinos desde una ciudad) con matching robusto en origen
app.get('/rutas/:origen', (req, res) => {
  const origenParam = req.params.origen || "";

  let ruta = rutas.find(r => limpiarTexto(r.origen) === limpiarTexto(origenParam));
  if (!ruta) {
    const matchOrigen = mejorCoincidencia(rutas.map(r => r.origen), origenParam);
    if (matchOrigen) {
      ruta = rutas.find(r => limpiarTexto(r.origen) === limpiarTexto(matchOrigen));
    }
  }

  if (!ruta) return res.status(404).json({ mensaje: "Origen no encontrado" });
  res.json(ruta.destinos);
});

// 🔁 GET /rutas/:origen (todos los destinos desde una ciudad) con fuzzy en origen
app.get('/rutas/:origen', (req, res) => {
  const origenParam = limpiarTexto(req.params.origen);

  let ruta = rutas.find(r => limpiarTexto(r.origen) === origenParam);
  if (!ruta) {
    const matchOrigen = mejorCoincidencia(rutas.map(r => r.origen), origenParam, 0.6);
    if (matchOrigen) {
      ruta = rutas.find(r => limpiarTexto(r.origen) === limpiarTexto(matchOrigen));
    }
  }

  if (!ruta) return res.status(404).json({ mensaje: "Origen no encontrado" });
  res.json(ruta.destinos);
});


// 🚀 Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
