var APP_DATA = {
  "scenes": [
    {
      "id": "0-outside-the-lab",
      "name": "Outside The Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": 1.3403386374175437,
        "pitch": -0.024548836037128652,
        "fov": 1.5181490153448571
      },
      "linkHotspots": [
        {
          "yaw": -0.06507575251915476,
          "pitch": 0.10914378262473967,
          "rotation": 0,
          "target": "1-e-rozgar-lab"
        },
        {
          "yaw": -2.7876588705310557,
          "pitch": 0.5527012685994563,
          "rotation": 0,
          "target": "3-ground"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.5782736773277852,
          "pitch": 0.0894539137299688,
          "title": "Bench",
          "text": "After Lecture Students where site here&nbsp;"
        },
        {
          "yaw": -0.697799966721302,
          "pitch": 0.02003141411128695,
          "title": "Inter Class",
          "text": "This class is for ICS students"
        }
      ]
    },
    {
      "id": "1-e-rozgar-lab",
      "name": "e-Rozgar Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": 0.08567979964334249,
        "pitch": -0.2246776551063725,
        "fov": 1.5181490153448571
      },
      "linkHotspots": [
        {
          "yaw": 2.5776676220621138,
          "pitch": 0.0802655625708919,
          "rotation": 5.497787143782138,
          "target": "0-outside-the-lab"
        },
        {
          "yaw": -2.321644360265715,
          "pitch": 0.12359503781378045,
          "rotation": 0,
          "target": "2-hod-table"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.005612920936519217,
          "pitch": -0.16685174967583727,
          "title": "Projector-Sheet",
          "text": "Usefull in delevring the lectures"
        },
        {
          "yaw": -0.49292407463650356,
          "pitch": -0.049309035777206134,
          "title": "Iron - Man Project",
          "text": "&nbsp;It's a conversational based project"
        },
        {
          "yaw": -0.959108540429682,
          "pitch": 0.3594514013699932,
          "title": "Laptop",
          "text": "Intel 4GB RAM&nbsp;"
        }
      ]
    },
    {
      "id": "2-hod-table",
      "name": "HOD Table",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": 0.27131936553730185,
        "pitch": 0.30866930187510633,
        "fov": 1.5181490153448571
      },
      "linkHotspots": [
        {
          "yaw": -1.263622279373518,
          "pitch": 0.05368941159693108,
          "rotation": 0,
          "target": "0-outside-the-lab"
        },
        {
          "yaw": -2.2038062417902573,
          "pitch": 0.2578923353615661,
          "rotation": 5.497787143782138,
          "target": "1-e-rozgar-lab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.10095391401300269,
          "pitch": 0.179388447073757,
          "title": "Printer",
          "text": "Useable only for Teachers who Prints the documents"
        },
        {
          "yaw": -1.484168681047933,
          "pitch": -0.2458655957954221,
          "title": "Inverter AC",
          "text": "1 - ton inverter AC typically consumes between 300W and 1200W of power, approximately 0.6 to 1.1units (kWh)"
        }
      ]
    },
    {
      "id": "3-ground",
      "name": "Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": -0.9584025724342631,
        "pitch": -0.5165486132277213,
        "fov": 1.5181490153448571
      },
      "linkHotspots": [
        {
          "yaw": 2.649857119254847,
          "pitch": 0.0469213400691455,
          "rotation": 11.780972450961727,
          "target": "0-outside-the-lab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8487312649871122,
          "pitch": -0.1446760739068349,
          "title": "Inter Department",
          "text": "All classes of inter students"
        },
        {
          "yaw": -0.1052198260585353,
          "pitch": -0.0735894748302357,
          "title": "Stage",
          "text": "Assembly of all Inter classes before the first lecture Starts&nbsp;"
        },
        {
          "yaw": -1.6080151797018924,
          "pitch": -0.1391886261947981,
          "title": "Labs",
          "text": "Chemistry lab , Physics lab , Biology lab"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
