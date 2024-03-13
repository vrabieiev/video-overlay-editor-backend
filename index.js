const Creatomate = require('creatomate');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/health', async(req, res) => {
    res.status(200).json({ message: 'Healthy Route' });
})

app.post('/renders', async (req, res) => {
  const { rawvideoURL, creatorAvatarURL, creatorName, bio } = req.body
  const bioWords = bio.split(" ");
  let prefixBio = "", suffixBio = "";
  let flag = false;

  bioWords.forEach(bioWord => {
    if ( prefixBio.length + bioWord.length > 20) {
      flag = true;
    }
    if (flag == false) {
      prefixBio += bioWord + " ";
    } else {
      suffixBio += bioWord + " ";
    }
    
  });

  const client = new Creatomate.Client('7285731054e64354984d476098347faf36df3c12bef36d7c5e430a27fa8dc4d491d4f4ccdd024d7aff2b4c8744d07241');

  const source = new Creatomate.Source({
    "output_format": "mp4",
    "width": 1080,
    "height": 1920,
    "frame_rate": "30 fps",
    "snapshot_time": "3.5 s",
    "elements": [
      {
        "id": "636ea2d0-4e15-438f-a55a-1dea3cd9acc7",
        "type": "video",
        "track": 1,
        "source": rawvideoURL
      },
      {
        "id": "ae8af623-45f5-493d-97ce-8a8acea64b40",
        "name": "logoslider",
        "type": "image",
        "track": 2,
        "time": "1 s",
        "duration": "4 s",
        "x": [
          {
            "time": "0 s",
            "value": "-100%"
          },
          {
            "time": "0.5 s",
            "value": "0%"
          },
          {
            "time": "3.5 s",
            "value": "0%"
          },
          {
            "time": "4 s",
            "value": "-100%"
          }
        ],
        "y": 1355,
        "width": 564,
        "height": 160,
        "x_anchor": "0%",
        "y_anchor": "0%",
        "source": "https://drive.google.com/file/d/1Nn0YkkMWB8XtF7SgaXu5TGzDPT-kMkMN"
      },
      {
        "id": "964ce7e5-dbb5-442e-b515-97f6fdb6c6ec",
        "name": "logo",
        "type": "image",
        "track": 3,
        "time": "1 s",
        "duration": "4 s",
        "x": [
          {
            "time": "0 s",
            "value": "-100%"
          },
          {
            "time": "0.5 s",
            "value": 73
          },
          {
            "time": "3.5 s",
            "value": 73
          },
          {
            "time": "4 s",
            "value": "-100%"
          }
        ],
        "y": 1376,
        "width": 381,
        "height": 119,
        "x_anchor": "0%",
        "y_anchor": "0%",
        "source": "https://drive.google.com/file/d/1FNNfIoSB7n-hcXEB028VA6ahX3ipnmos"
      },
      {
        "id": "6f9a5d18-0197-4a86-a50c-43f2f1ba2465",
        "name": "bioslider",
        "type": "image",
        "track": 4,
        "time": "1 s",
        "duration": "4 s",
        "x": [
          {
            "time": "0 s",
            "value": "-100%"
          },
          {
            "time": "0.5 s",
            "value": 0
          },
          {
            "time": "3.5 s",
            "value": 0
          },
          {
            "time": "3.99 s",
            "value": "-100%"
          },
          {
            "time": "3.992 s",
            "value": "-100%"
          }
        ],
        "y": 1095,
        "width": 844,
        "height": 220,
        "x_anchor": "0%",
        "y_anchor": "0%",
        "opacity": "90%",
        "source": "https://drive.google.com/file/d/13t8xWQDhfMTMwJyR9QSykG9rOI3YEJu5"
      },
      {
        "id": "679e66bc-2ef9-4044-9d8e-8f77ba7d6039",
        "name": "biobubble",
        "type": "image",
        "track": 5,
        "time": "1 s",
        "duration": "4 s",
        "x": [
          {
            "time": "0 s",
            "value": "-100%"
          },
          {
            "time": "0.5 s",
            "value": 31
          },
          {
            "time": "3.5 s",
            "value": 31
          },
          {
            "time": "4 s",
            "value": "-100%"
          }
        ],
        "y": 1118,
        "width": 166,
        "height": 175,
        "x_anchor": "0%",
        "y_anchor": "0%",
        "source": "https://drive.google.com/file/d/1cGd13ohShuv_iRVEKMz8DkqFLb6m_2Fp"
      },
      {
        "id": "15fb3f31-44ec-4dc7-82f2-f0011f6678ae",
        "name": "creatoravatar",
        "type": "image",
        "track": 6,
        "time": "1 s",
        "duration": "4 s",
        "x": [
          {
            "time": "0 s",
            "value": "-100%"
          },
          {
            "time": "0.5 s",
            "value": 45
          },
          {
            "time": "3.5 s",
            "value": 45
          },
          {
            "time": "4 s",
            "value": "-100%"
          }
        ],
        "y": 1131,
        "width": 138,
        "height": 138,
        "x_anchor": "0%",
        "y_anchor": "0%",
        "border_radius": "64.4 vmin",
        "source": creatorAvatarURL,
        "smart_crop": true
      },
      {
        "id": "cc6785bd-aadb-426e-87cb-80e23fe044f4",
        "name": "creatorname",
        "type": "text",
        "track": 7,
        "time": "1 s",
        "duration": "4 s",
        "x": [
          {
            "time": "0 s",
            "value": "-100%"
          },
          {
            "time": "0.5 s",
            "value": 250
          },
          {
            "time": "3.5 s",
            "value": 250
          },
          {
            "time": "4 s",
            "value": "-100%"
          }
        ],
        "y": 1120,
        "x_anchor": "0%",
        "y_anchor": "0%",
        "fill_color": "rgba(255,255,255,1)",
        "text": creatorName,
        "font_size": 64
      },
      {
        "id": "87a84c18-79da-4158-bee3-c74f542ee7bd",
        "name": "bio",
        "type": "text",
        "track": 8,
        "time": "1 s",
        "duration": "4 s",
        "x": [
          {
            "time": "0 s",
            "value": "-100%"
          },
          {
            "time": "0.5 s",
            "value": 250
          },
          {
            "time": "3.5 s",
            "value": 250
          },
          {
            "time": "4 s",
            "value": "-100%"
          }
        ],
        "y": 1207,
        "x_anchor": "0%",
        "y_anchor": "0%",
        "fill_color": "rgba(255,255,255,1)",
        "text": prefixBio + "\n" + suffixBio,
        "font_size": 32
      }
    ]
  });

  console.log('Please wait while your video is being rendered...');

  try {
    const renders = await client.render({ source });
    console.log('Completed:', renders);
    res.status(200).json({ videoLink: renders[0].url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while rendering" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
