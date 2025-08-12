
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
        "tipo": "Semicama",
        "precio": 2700,
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
      },
      {
        "tipo": "Cama",
        "precio": 3100,
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
        "tipo": "Semicama",
        "precio": 3100,
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
      },
      {
        "tipo": "Cama",
        "precio": 3500,
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
        "tipo": "Semicama",
        "precio": 3500,
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
      },
      {
        "tipo": "Cama",
        "precio": 3900,
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
        "tipo": "Semicama",
        "precio": 4400,
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
      },
      {
        "tipo": "Cama",
        "precio": 4900,
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
        "tipo": "Semicama",
        "precio": 6400,
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
      },
      {
        "tipo": "Cama",
        "precio": 7200,
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
        "tipo": "Semicama",
        "precio": 6400,
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
      },
      {
        "tipo": "Cama",
        "precio": 7200,
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
        "tipo": "Semicama",
        "precio": 7400,
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
      },
      {
        "tipo": "Cama",
        "precio": 8200,
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
        "tipo": "Semicama",
        "precio": 8500,
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
      },
      {
        "tipo": "Cama",
        "precio": 9500,
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
        "tipo": "Semicama",
        "precio": 10000,
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
      },
      {
        "tipo": "Cama",
        "precio": 11200,
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
        "tipo": "Semicama",
        "precio": 11500,
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
      },
      {
        "tipo": "Cama",
        "precio": 12900,
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
        "tipo": "Semicama",
        "precio": 13200,
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
      },
      {
        "tipo": "Cama",
        "precio": 14800,
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
        "tipo": "Semicama",
        "precio": 15600,
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
      },
      {
        "tipo": "Cama",
        "precio": 17400,
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
        "tipo": "Semicama",
        "precio": 16600,
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
      },
      {
        "tipo": "Cama",
        "precio": 18500,
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
        "tipo": "Semicama",
        "precio": 17500,
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
      },
      {
        "tipo": "Cama",
        "precio": 19600,
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
        "tipo": "Semicama",
        "precio": 18000,
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
      },
      {
        "tipo": "Cama",
        "precio": 20800,
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
        "tipo": "Semicama",
        "precio": 20800,
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
      },
      {
        "tipo": "Cama",
        "precio": 23300,
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
        "tipo": "Semicama",
        "precio": 22600,
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
      },
      {
        "tipo": "Cama",
        "precio": 25300,
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
        "tipo": "Semicama",
        "precio": 24300,
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
      },
      {
        "tipo": "Cama",
        "precio": 27300,
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
        "tipo": "Semicama",
        "precio": 26100,
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
      },
      {
        "tipo": "Cama",
        "precio": 29200,
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
    "destino": "Acc Federacion",
    "servicios": [
      {
        "tipo": "Semicama",
        "precio": 35500,
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
      },
      {
        "tipo": "Cama",
        "precio": 39800,
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
        "tipo": "Semicama",
        "precio": 35500,
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
      },
      {
        "tipo": "Cama",
        "precio": 39800,
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
      }
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
      }
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

  // 🔤 Normalizar texto
function limpiarTexto(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")  // saca acentos
    .replace(/[-_,()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// 🔎 Fuzzy matching (tolerancia a typos)
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
  const L = Math.max(limpiarTexto(a).length, limpiarTexto(b).length) || 1;
  return 1 - (lev(a, b) / L); // 0..1
}
function mejorCoincidencia(candidatos, query, umbral = 0.6) {
  const q = limpiarTexto(query);
  let best = null, bestScore = -1;

  for (const c of candidatos) {
    const cn = limpiarTexto(c);
    if (cn === q) return c;                      // match exacto
    if (cn.startsWith(q) || cn.includes(q)) {    // prefijo / contiene
      return c;
    }
    const s = similitud(cn, q);                  // similitud por Levenshtein
    if (s > bestScore) { bestScore = s; best = c; }
  }
  return bestScore >= umbral ? best : null;
}

// 🏠 GET raíz
app.get('/', (req, res) => {
  res.send('🚌 API de colectivos funcionando con horarios completos');
});

// 🔍 GET /rutas?origen=X&destino=Y  (con fuzzy en origen y destino)
app.get('/rutas', (req, res) => {
  const origenParam = limpiarTexto(req.query.origen || "");
  const destinoParam = limpiarTexto(req.query.destino || "");

  // Si no mandan ambos, devolvemos todo
  if (!origenParam || !destinoParam) {
    return res.json(rutas);
  }

  // 1) Buscar origen (exacto) y si no, fuzzy
  let ruta = rutas.find(r => limpiarTexto(r.origen) === origenParam);
  if (!ruta) {
    const matchOrigen = mejorCoincidencia(rutas.map(r => r.origen), origenParam, 0.6);
    if (matchOrigen) {
      ruta = rutas.find(r => limpiarTexto(r.origen) === limpiarTexto(matchOrigen));
    }
  }
  if (!ruta) return res.status(404).json({ mensaje: "Origen no encontrado" });

  // 2) Buscar destino (includes) y si no, fuzzy
  let destino = ruta.destinos.find(d => limpiarTexto(d.destino).includes(destinoParam));
  if (!destino) {
    const matchDestino = mejorCoincidencia(ruta.destinos.map(d => d.destino), destinoParam, 0.6);
    if (matchDestino) {
      destino = ruta.destinos.find(d => limpiarTexto(d.destino) === limpiarTexto(matchDestino));
    }
  }
  if (!destino) return res.status(404).json({ mensaje: "Destino no encontrado para ese origen" });

  // 3) Respuesta final
  return res.json([{ origen: ruta.origen, destinos: [destino] }]);
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

