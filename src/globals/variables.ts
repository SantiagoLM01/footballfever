export const baseFooballApiUrl: string = "https://api.football-data.org/v4"


export const sampleTransfers: any[] = [{
    "player": {
        "id": 1100,
        "name": "E. Haaland",
        "photoPNG": "/images/normal/haaland.png",
        "photoWebp": "/images/webp/haaland.webp",
        "banderaPNG": "/images/normal/banderaNoruega.png",
        "banderaWebp": "/images/webp/banderaNoruega.webp"

    },
    "update": "2023-05-30T09:47:50+00:00",
    "transfers": [
        {
            "date": "2022-07-01",
            "type": "€ 75M",
            "teams": {
                "in": {
                    "id": 50,
                    "name": "Manchester City",
                    "logo": "https://media-1.api-sports.io/football/teams/50.png"
                },
                "out": {
                    "id": 165,
                    "name": "Borussia Dortmund",
                    "logo": "https://media-3.api-sports.io/football/teams/165.png"
                }
            }
        }]
}, {
    "player": {
        "id": 521,
        "name": "R. Lewandowski",
        "photoPNG": "/images/normal/lewandowski.png",
        "photoWebp": "/images/webp/lewandowski.webp",
        "banderaPNG": "/images/normal/banderaPolonia.png",
        "banderaWebp": "/images/webp/banderaPolonia.webp"

    },
    "update": "2023-05-30T16:03:57+00:00",
    "transfers": [
        {
            "date": "2022-07-19",
            "type": "€ 50M",
            "teams": {
                "in": {
                    "id": 529,
                    "name": "Barcelona",
                    "logo": "https://media-2.api-sports.io/football/teams/529.png"
                },
                "out": {
                    "id": 157,
                    "name": "Bayern Munich",
                    "logo": "https://media-2.api-sports.io/football/teams/157.png"
                }
            }
        }
    ]
},
{
    "player": {
        "id": 154,
        "name": "L. Messi",
        "photoPNG": "/images/normal/messi.png",
        "photoWebp": "/images/webp/messi.webp",
        "banderaPNG": '/images/normal/banderaArgentina.png',
        "banderaWebp": "/images/webp/banderaArgentina.webp"


    },
    "update": "2023-05-30T15:54:56+00:00",
    "transfers": [
        {
            "date": "2021-08-10",
            "type": "Free",
            "teams": {
                "in": {
                    "id": 85,
                    "name": "Paris Saint Germain",
                    "logo": "https://media-2.api-sports.io/football/teams/85.png"
                },
                "out": {
                    "id": 529,
                    "name": "Barcelona",
                    "logo": "https://media-2.api-sports.io/football/teams/529.png"
                }
            }
        }]
}, {
    "player": {
        "id": 278,
        "name": "K. Mbappé",
        "photoPNG": "/images/normal/mbappe.png",
        "photoWebp": "/images/webp/mbappe.webp",
        "banderaPNG": "/images/normal/banderaFrancia.png",
        "banderaWebp": "/images/webp/banderaFrancia.webp"


    },
    "update": "2023-05-30T16:06:46+00:00",
    "transfers": [
        {
            "date": "2018-07-01",
            "type": "€ 180M",
            "teams": {
                "in": {
                    "id": 85,
                    "name": "Paris Saint Germain",
                    "logo": "https://media-1.api-sports.io/football/teams/85.png"
                },
                "out": {
                    "id": 91,
                    "name": "Monaco",
                    "logo": "https://media-3.api-sports.io/football/teams/91.png"
                }
            }
        }]
}]

export const sampleStadiums : any[] = [
    {
        address
          :
          "Stadium Way, Wembley, Brent",
        capacity
          :
          90000,
        city
          :
          "London",
        country
          :
          "England",
        id
          :
          489,
        image
          :
          "https://media-1.api-sports.io/football/venues/489.png",
        name
          :
          "Wembley Stadium",
        surface
          :
          "grass"
      }, {
        address
          :
          "Sir Matt Busby Way",
        capacity
          :
          76212,
        city
          :
          "Manchester",
        country
          :
          "England",
        id
          :
          556,
        image
          :
          "https://media-3.api-sports.io/football/venues/556.png",
        name
          :
          "Old Trafford",
        surface
          :
          "grass"
      }, {
        address
          :
          "Carrow Road",
        capacity
          :
          27606,
        city
          :
          "Norwich, Norfolk",
        country
          :
          "England",
        id
          :
          565,
        image
          :
          "https://media-2.api-sports.io/football/venues/565.png",
        name
          :
          "Carrow Road",
        surface
          :
          "grass"
      }];

export const leagues : any[] = [
  {
    "id": 2013,
    "name": "Campeonato Brasileiro Série A",
    "logo": "https://media-1.api-sports.io/football/leagues/71.png"
},
{
  "id": 2016,
  "name": "ELC Championship",
  "logo": "https://crests.football-data.org/ELC.png"
},

{
  "id": 2021,
  "name": "Premier League",
  "logo": "https://crests.football-data.org/PL.png"
},
{
  "id": 2015,
  "name": "Ligue 1",
  "logo": "https://crests.football-data.org/FL1.png"
},
{
  "id": 2002,
  "name": "Bundesliga",
  "logo": "https://crests.football-data.org/BL1.png"
},
{
  "id": 2019,
  "name": "Serie A",
  "logo": "https://crests.football-data.org/SA.png"
},
{
  "id": 2003,
  "name": "Eredivisie",
  "logo": "https://crests.football-data.org/ED.png"
},
{
  "id": 2017,
  "name": "Primeira Liga",
  "logo": "https://crests.football-data.org/PPL.png"
},
{
  "id": 2152,
  "name": "Copa Libertadores",
  "logo": "https://crests.football-data.org/CLI.svg"
},
{
  "id": 2014,
  "name": "Primera Division",
  "logo": "https://crests.football-data.org/PD.png"
}
]