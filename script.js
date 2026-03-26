const products = [
  {
    "id": 1,
    "name": "AC Milan Home Front",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for AC Milan",
    "color": "team-colors",
    "image": "Fan Edition/AC Milan/AC Milan Home 25-26 Front.jpeg"
  },
  {
    "id": 2,
    "name": "AC Milan Home Back",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for AC Milan",
    "color": "team-colors",
    "image": "Fan Edition/AC Milan/AC Milan Home 25-26 Back.jpeg"
  },
  {
    "id": 3,
    "name": "Ajax Away Front",
    "league": "Eredivisie",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Ajax",
    "color": "team-colors",
    "image": "Fan Edition/Ajax/Ajax 25-26 away front.jpeg"
  },
  {
    "id": 4,
    "name": "Ajax Away Back",
    "league": "Eredivisie",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Ajax",
    "color": "team-colors",
    "image": "Fan Edition/Ajax/Ajax 25-26 away back.jpeg"
  },
  {
    "id": 5,
    "name": "Arsenal Away Front",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Arsenal",
    "color": "team-colors",
    "image": "Fan Edition/Arsenal/Arsenal away 25-26 Front.jpeg"
  },
  {
    "id": 6,
    "name": "Arsenal Away Back",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Arsenal",
    "color": "team-colors",
    "image": "Fan Edition/Arsenal/Arsenal away 25-26 Back.jpeg"
  },
  {
    "id": 7,
    "name": "Arsenal Home Front",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Arsenal",
    "color": "team-colors",
    "image": "Fan Edition/Arsenal/Arsenal home 25-26 Front.jpeg"
  },
  {
    "id": 8,
    "name": "Arsenal Home Back",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Arsenal",
    "color": "team-colors",
    "image": "Fan Edition/Arsenal/Arsenal home 25-26 Back.jpeg"
  },
  {
    "id": 9,
    "name": "Barcelona Away Front",
    "league": "La Liga",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Barcelona",
    "color": "team-colors",
    "image": "Fan Edition/Barcelona/Barcelona away 25-26 Front.jpeg"
  },
  {
    "id": 10,
    "name": "Barcelona Away Back",
    "league": "La Liga",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Barcelona",
    "color": "team-colors",
    "image": "Fan Edition/Barcelona/Barcelona away 25-26 back.jpeg"
  },
  {
    "id": 11,
    "name": "Barcelona Home Front",
    "league": "La Liga",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Barcelona",
    "color": "team-colors",
    "image": "Fan Edition/Barcelona/Barcelona Home 25-26 Front.jpeg"
  },
  {
    "id": 12,
    "name": "Barcelona Home Back",
    "league": "La Liga",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Barcelona",
    "color": "team-colors",
    "image": "Fan Edition/Barcelona/Barcelona Home 25-26 back.jpeg"
  },
  {
    "id": 13,
    "name": "Bayern München Away Front",
    "league": "Bundesliga",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Bayern München",
    "color": "team-colors",
    "image": "Fan Edition/Bayern München/Bayern München away 25-26 Front.jpeg"
  },
  {
    "id": 14,
    "name": "Bayern München Away Back",
    "league": "Bundesliga",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Bayern München",
    "color": "team-colors",
    "image": "Fan Edition/Bayern München/Bayern München away 25-26 Back.jpeg"
  },
  {
    "id": 15,
    "name": "Bayern München Home Front",
    "league": "Bundesliga",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Bayern München",
    "color": "team-colors",
    "image": "Fan Edition/Bayern München/Bayern München Home 25-26 Front.jpeg"
  },
  {
    "id": 16,
    "name": "Bayern München Home Back",
    "league": "Bundesliga",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Bayern München",
    "color": "team-colors",
    "image": "Fan Edition/Bayern München/Bayern München Home 25-26 Back.jpeg"
  },
  {
    "id": 17,
    "name": "Benfica Away Front",
    "league": "Primeira Liga",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Benfica",
    "color": "team-colors",
    "image": "Fan Edition/Benfica/Benfica away 25-26 Front.jpeg"
  },
  {
    "id": 18,
    "name": "Benfica Away Back",
    "league": "Primeira Liga",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Benfica",
    "color": "team-colors",
    "image": "Fan Edition/Benfica/Benfica away 25-26 Back.jpeg"
  },
  {
    "id": 19,
    "name": "Benfica Home Front",
    "league": "Primeira Liga",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Benfica",
    "color": "team-colors",
    "image": "Fan Edition/Benfica/Benfica Home 25-26 Front.jpeg"
  },
  {
    "id": 20,
    "name": "Benfica Home Back",
    "league": "Primeira Liga",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Benfica",
    "color": "team-colors",
    "image": "Fan Edition/Benfica/Benfica home 25-26 Back.jpeg"
  },
  {
    "id": 21,
    "name": "Betis Home Front",
    "league": "La Liga",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Betis",
    "color": "team-colors",
    "image": "Fan Edition/Betis/Betis home 25-26 Front.jpeg"
  },
  {
    "id": 22,
    "name": "Betis Home Back",
    "league": "La Liga",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Betis",
    "color": "team-colors",
    "image": "Fan Edition/Betis/Betis home 25-26 back.jpeg"
  },
  {
    "id": 23,
    "name": "Bilbao Home Front",
    "league": "La Liga",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Bilbao",
    "color": "team-colors",
    "image": "Fan Edition/Bilbao/Bilbao home 25-26 Front.jpeg"
  },
  {
    "id": 24,
    "name": "Bilbao Home Back",
    "league": "La Liga",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Bilbao",
    "color": "team-colors",
    "image": "Fan Edition/Bilbao/Bilbao home 25-26 Back.jpeg"
  },
  {
    "id": 25,
    "name": "Celtic Home Front",
    "league": "Scottish Premiership",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Celtic",
    "color": "team-colors",
    "image": "Fan Edition/Celtic/Celtic home 25-26 Front.jpeg"
  },
  {
    "id": 26,
    "name": "Celtic Home Back",
    "league": "Scottish Premiership",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Celtic",
    "color": "team-colors",
    "image": "Fan Edition/Celtic/Celtic Home 25-26 Back.jpeg"
  },
  {
    "id": 27,
    "name": "Chelsea Away Front",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Chelsea",
    "color": "team-colors",
    "image": "Fan Edition/Chelsea/Chealsea away 25-26 front.jpeg"
  },
  {
    "id": 28,
    "name": "Chelsea Away Back",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Chelsea",
    "color": "team-colors",
    "image": "Fan Edition/Chelsea/Chealsea away 25-26 back.jpeg"
  },
  {
    "id": 29,
    "name": "Chelsea Home Front",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Chelsea",
    "color": "team-colors",
    "image": "Fan Edition/Chelsea/Home 25-26 Front.jpeg"
  },
  {
    "id": 30,
    "name": "Chelsea Home Back",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Chelsea",
    "color": "team-colors",
    "image": "Fan Edition/Chelsea/Chealsea 25-26 back.jpeg"
  },
  {
    "id": 31,
    "name": "Flamengo Home Front",
    "league": "Brasileirão",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Flamengo",
    "color": "team-colors",
    "image": "Fan Edition/Flamengo/Flamengo home 25-26 Front.jpeg"
  },
  {
    "id": 32,
    "name": "Flamengo Home Back",
    "league": "Brasileirão",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Flamengo",
    "color": "team-colors",
    "image": "Fan Edition/Flamengo/Flamengo home 25-26 Back.jpeg"
  },
  {
    "id": 33,
    "name": "Inter Miami Away Front",
    "league": "MLS",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Inter Miami",
    "color": "team-colors",
    "image": "Fan Edition/Inter Miami/Inter Miami Away 25-26 Front.jpeg"
  },
  {
    "id": 34,
    "name": "Inter Miami Away Back",
    "league": "MLS",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Inter Miami",
    "color": "team-colors",
    "image": "Fan Edition/Inter Miami/Inter Miami Away 25-26 Back.jpeg"
  },
  {
    "id": 35,
    "name": "Inter Miami Home Front",
    "league": "MLS",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Inter Miami",
    "color": "team-colors",
    "image": "Fan Edition/Inter Miami/Inter Miami Home 25-26 Front.jpeg"
  },
  {
    "id": 36,
    "name": "Inter Miami Home Back",
    "league": "MLS",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Inter Miami",
    "color": "team-colors",
    "image": "Fan Edition/Inter Miami/Inter Miami Home 25-26 Back.jpeg"
  },
  {
    "id": 37,
    "name": "Inter Milan Home Front",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Inter Milan",
    "color": "team-colors",
    "image": "Fan Edition/Inter Milan/Inter Milan home 25-26 Front.jpeg"
  },
  {
    "id": 38,
    "name": "Inter Milan Home Back",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Inter Milan",
    "color": "team-colors",
    "image": "Fan Edition/Inter Milan/Inter Milan home 25-26 Back.jpeg"
  },
  {
    "id": 39,
    "name": "Juventus Away Front",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Juventus",
    "color": "team-colors",
    "image": "Fan Edition/Juventus/Juventus away 25-26 Front.jpeg"
  },
  {
    "id": 40,
    "name": "Juventus Away Back",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Juventus",
    "color": "team-colors",
    "image": "Fan Edition/Juventus/Juventus away 25-26 Back.jpeg"
  },
  {
    "id": 41,
    "name": "Juventus Home Front",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Juventus",
    "color": "team-colors",
    "image": "Fan Edition/Juventus/Juventus 25-26 home Front.jpeg"
  },
  {
    "id": 42,
    "name": "Juventus Home Back",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Juventus",
    "color": "team-colors",
    "image": "Fan Edition/Juventus/Juventus 25-26 home back.jpeg"
  },
  {
    "id": 43,
    "name": "Liverpool Away Front",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Liverpool",
    "color": "team-colors",
    "image": "Fan Edition/Liverpool/Liverpool 25-26 Away front.jpeg"
  },
  {
    "id": 44,
    "name": "Liverpool Away Back",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Liverpool",
    "color": "team-colors",
    "image": "Fan Edition/Liverpool/Liverpool 25-26 Away back.jpeg"
  },
  {
    "id": 45,
    "name": "Liverpool Home Front",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Liverpool",
    "color": "team-colors",
    "image": "Fan Edition/Liverpool/Liverpool 25-26 Front.jpeg"
  },
  {
    "id": 46,
    "name": "Liverpool Home Back",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Liverpool",
    "color": "team-colors",
    "image": "Fan Edition/Liverpool/Liverpool 25-26 Back.jpeg"
  },
  {
    "id": 47,
    "name": "Manchester City Away Front",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Manchester City",
    "color": "team-colors",
    "image": "Fan Edition/Manchester City/Manchester city away 25-26 Front.jpeg"
  },
  {
    "id": 48,
    "name": "Manchester City Away Back",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Manchester City",
    "color": "team-colors",
    "image": "Fan Edition/Manchester City/Manchester city away 25-26 Back.jpeg"
  },
  {
    "id": 49,
    "name": "Manchester City Away Black Front",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Away Black Front jersey for Manchester City",
    "color": "team-colors",
    "image": "Fan Edition/Manchester City/Manchester city 25-26 Away black.jpeg"
  },
  {
    "id": 50,
    "name": "Manchester City Away Black Back",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Away Black Back jersey for Manchester City",
    "color": "team-colors",
    "image": "Fan Edition/Manchester City/Manchester city 25-26 Away black back.jpeg"
  },
  {
    "id": 51,
    "name": "Manchester City Home Front",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Manchester City",
    "color": "team-colors",
    "image": "Fan Edition/Manchester City/Manchester city Home 25-26 Front.jpeg"
  },
  {
    "id": 52,
    "name": "Manchester City Home Back",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Manchester City",
    "color": "team-colors",
    "image": "Fan Edition/Manchester City/Manchester city Home 25-26 Back.jpeg"
  },
  {
    "id": 53,
    "name": "Manchester United Away Front",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Manchester United",
    "color": "team-colors",
    "image": "Fan Edition/Manchester United/Manchester United Away 25-26 Front.jpeg"
  },
  {
    "id": 54,
    "name": "Manchester United Away Back",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Manchester United",
    "color": "team-colors",
    "image": "Fan Edition/Manchester United/Manchester United Away 25-26 Back.jpeg"
  },
  {
    "id": 55,
    "name": "Manchester United Home Front",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Manchester United",
    "color": "team-colors",
    "image": "Fan Edition/Manchester United/Manchester United Home 25-26 Front.jpeg"
  },
  {
    "id": 56,
    "name": "Manchester United Home Back",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Manchester United",
    "color": "team-colors",
    "image": "Fan Edition/Manchester United/Manchester United Home 25-26 Back.jpeg"
  },
  {
    "id": 57,
    "name": "Marseille Away Front",
    "league": "Ligue 1",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Marseille",
    "color": "team-colors",
    "image": "Fan Edition/Marseille/Marseille away 25-26 Front.jpeg"
  },
  {
    "id": 58,
    "name": "Marseille Away Back",
    "league": "Ligue 1",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Marseille",
    "color": "team-colors",
    "image": "Fan Edition/Marseille/Marseille away 25-26 back.jpeg"
  },
  {
    "id": 59,
    "name": "Marseille Home Front",
    "league": "Ligue 1",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Marseille",
    "color": "team-colors",
    "image": "Fan Edition/Marseille/Marseille home 25-26 front.jpeg"
  },
  {
    "id": 60,
    "name": "Marseille Home Back",
    "league": "Ligue 1",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Marseille",
    "color": "team-colors",
    "image": "Fan Edition/Marseille/Marseille home 25-26 back.jpeg"
  },
  {
    "id": 61,
    "name": "Mineiro Home Front",
    "league": "Brasileirão",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Mineiro",
    "color": "team-colors",
    "image": "Fan Edition/Mineiro/Mineiro Home 25-26 Front.jpeg"
  },
  {
    "id": 62,
    "name": "Mineiro Home Back",
    "league": "Brasileirão",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Mineiro",
    "color": "team-colors",
    "image": "Fan Edition/Mineiro/Mineiro Home 25-26 Back.jpeg"
  },
  {
    "id": 63,
    "name": "Minens Home Front",
    "league": "Brasileirão",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Minens",
    "color": "team-colors",
    "image": "Fan Edition/Minens/Minens 25-26 front.jpeg"
  },
  {
    "id": 64,
    "name": "Minens Home Back",
    "league": "Brasileirão",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Minens",
    "color": "team-colors",
    "image": "Fan Edition/Minens/Minens 25-26 back.jpeg"
  },
  {
    "id": 65,
    "name": "Napoli Away Front",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Napoli",
    "color": "team-colors",
    "image": "Fan Edition/Napoli/Napoli 25-26 away front.jpeg"
  },
  {
    "id": 66,
    "name": "Napoli Away Back",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Napoli",
    "color": "team-colors",
    "image": "Fan Edition/Napoli/Napoli 25-26 away back.jpeg"
  },
  {
    "id": 67,
    "name": "Napoli Home Front",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Napoli",
    "color": "team-colors",
    "image": "Fan Edition/Napoli/Napoli 25-26 home front.jpeg"
  },
  {
    "id": 68,
    "name": "Napoli Home Back",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Napoli",
    "color": "team-colors",
    "image": "Fan Edition/Napoli/Napoli 25-26 home back.jpeg"
  },
  {
    "id": 69,
    "name": "New Castle Home Front",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for New Castle",
    "color": "team-colors",
    "image": "Fan Edition/New Castle/New Castle home 25-26 Front.jpeg"
  },
  {
    "id": 70,
    "name": "New Castle Home Back",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for New Castle",
    "color": "team-colors",
    "image": "Fan Edition/New Castle/New Castle home 25-26 back.jpeg"
  },
  {
    "id": 71,
    "name": "Palmeiras Away Front",
    "league": "Brasileirão",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Palmeiras",
    "color": "team-colors",
    "image": "Fan Edition/Palmeiras/Palmeiras Away 25-26 Front.jpeg"
  },
  {
    "id": 72,
    "name": "Palmeiras Away Back",
    "league": "Brasileirão",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Palmeiras",
    "color": "team-colors",
    "image": "Fan Edition/Palmeiras/Palmeiras Away 25-26 Back.jpeg"
  },
  {
    "id": 73,
    "name": "Palmeiras Home Front",
    "league": "Brasileirão",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Palmeiras",
    "color": "team-colors",
    "image": "Fan Edition/Palmeiras/Palmeiras Home 25-26 Front.jpeg"
  },
  {
    "id": 74,
    "name": "Palmeiras Home Back",
    "league": "Brasileirão",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Palmeiras",
    "color": "team-colors",
    "image": "Fan Edition/Palmeiras/Palmeiras Home 25-26 Back.jpeg"
  },
  {
    "id": 75,
    "name": "Paris Home Front",
    "league": "Ligue 1",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Paris",
    "color": "team-colors",
    "image": "Fan Edition/Paris/Paris Home 25-26 Front.jpeg"
  },
  {
    "id": 76,
    "name": "Paris Home Back",
    "league": "Ligue 1",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Paris",
    "color": "team-colors",
    "image": "Fan Edition/Paris/Paris Home 25-26 Back.jpeg"
  },
  {
    "id": 77,
    "name": "Porto Away Front",
    "league": "Primeira Liga",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Porto",
    "color": "team-colors",
    "image": "Fan Edition/Porto/Porto away 25-26 Front.jpeg"
  },
  {
    "id": 78,
    "name": "Porto Away Back",
    "league": "Primeira Liga",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Porto",
    "color": "team-colors",
    "image": "Fan Edition/Porto/Porto away 25-26 back.jpeg"
  },
  {
    "id": 79,
    "name": "Porto Home Front",
    "league": "Primeira Liga",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Porto",
    "color": "team-colors",
    "image": "Fan Edition/Porto/Porto home 25-26 Front.jpeg"
  },
  {
    "id": 80,
    "name": "Porto Home Back",
    "league": "Primeira Liga",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Porto",
    "color": "team-colors",
    "image": "Fan Edition/Porto/Porto Home 25-26 back.jpeg"
  },
  {
    "id": 81,
    "name": "Real Madrid Away Front",
    "league": "La Liga",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Real Madrid",
    "color": "team-colors",
    "image": "Fan Edition/Real Madrid/Real Madrid Away 25-26 Front.jpeg"
  },
  {
    "id": 82,
    "name": "Real Madrid Away Back",
    "league": "La Liga",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Real Madrid",
    "color": "team-colors",
    "image": "Fan Edition/Real Madrid/Real Madrid Away 25-26 Back.jpeg"
  },
  {
    "id": 83,
    "name": "Real Madrid Home Front",
    "league": "La Liga",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Real Madrid",
    "color": "team-colors",
    "image": "Fan Edition/Real Madrid/Real Madrid Home 25-26 Front.jpeg"
  },
  {
    "id": 84,
    "name": "Real Madrid Home Back",
    "league": "La Liga",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Real Madrid",
    "color": "team-colors",
    "image": "Fan Edition/Real Madrid/Real Madrid Home 25-26 Back.jpeg"
  },
  {
    "id": 85,
    "name": "Rome Home Front",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Rome",
    "color": "team-colors",
    "image": "Fan Edition/Rome/Rome home 25-26 Front.jpeg"
  },
  {
    "id": 86,
    "name": "Rome Home Back",
    "league": "Serie A",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Rome",
    "color": "team-colors",
    "image": "Fan Edition/Rome/Rome home 25-26 Back.jpeg"
  },
  {
    "id": 87,
    "name": "Santos Home Back",
    "league": "Brasileirão",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Santos",
    "color": "team-colors",
    "image": "Fan Edition/Santos/Santos back.jpeg"
  },
  {
    "id": 88,
    "name": "Sao Paulo Away Front",
    "league": "Brasileirão",
    "price": 79.99,
    "description": "Fan Edition Away Front jersey for Sao Paulo",
    "color": "team-colors",
    "image": "Fan Edition/Sao Paulo/Sao Paulo away 25-26 Front.jpeg"
  },
  {
    "id": 89,
    "name": "Sao Paulo Away Back",
    "league": "Brasileirão",
    "price": 79.99,
    "description": "Fan Edition Away Back jersey for Sao Paulo",
    "color": "team-colors",
    "image": "Fan Edition/Sao Paulo/Sao Paulo away 25-26 Back.jpeg"
  },
  {
    "id": 90,
    "name": "Sporting Lissabon Home Front",
    "league": "Primeira Liga",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Sporting Lissabon",
    "color": "team-colors",
    "image": "Fan Edition/Sporting Lissabon/Sporting Lissabon home 25-26 Front.jpeg"
  },
  {
    "id": 91,
    "name": "Sporting Lissabon Home Back",
    "league": "Primeira Liga",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Sporting Lissabon",
    "color": "team-colors",
    "image": "Fan Edition/Sporting Lissabon/Sporting Lissabon home 25-26 Back.jpeg"
  },
  {
    "id": 92,
    "name": "Totenham Home Front",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Front jersey for Totenham",
    "color": "team-colors",
    "image": "Fan Edition/Totenham/Totenham home 25-26 Front.jpeg"
  },
  {
    "id": 93,
    "name": "Totenham Home Back",
    "league": "Premier League",
    "price": 79.99,
    "description": "Fan Edition Home Back jersey for Totenham",
    "color": "team-colors",
    "image": "Fan Edition/Totenham/Totenham home 25-26 back.jpeg"
  }
];

const nationalTeamsProducts = [
  {
    "id": 1000,
    "name": "Argentina Home Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Argentina",
    "image": "Jerseys/National Teams/Argentina/Argentina home 2026 Front.jpeg"
  },
  {
    "id": 1001,
    "name": "Argentina Home Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Argentina",
    "image": "Jerseys/National Teams/Argentina/Argentina home 2026 back.jpeg"
  },
  {
    "id": 1002,
    "name": "Belgium Home Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Belgium",
    "image": "Jerseys/National Teams/Belgium/Belgium home 2026 Front.jpeg"
  },
  {
    "id": 1003,
    "name": "Belgium Home Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Belgium",
    "image": "Jerseys/National Teams/Belgium/Belgium home 2026 Back.jpeg"
  },
  {
    "id": 1004,
    "name": "Canada Home Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Canada",
    "image": "Jerseys/National Teams/Canada/Canada home 2026 Front.jpeg"
  },
  {
    "id": 1005,
    "name": "Canada Home Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Canada",
    "image": "Jerseys/National Teams/Canada/Canada home 2026 Back.jpeg"
  },
  {
    "id": 1006,
    "name": "Colombia Home Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Colombia",
    "image": "Jerseys/National Teams/Colombia/Colombia home 2026 Front.jpeg"
  },
  {
    "id": 1007,
    "name": "Colombia Home Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Colombia",
    "image": "Jerseys/National Teams/Colombia/Colombia home 2026 Back.jpeg"
  },
  {
    "id": 1008,
    "name": "England Away Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Away 2026 jersey for England",
    "image": "Jerseys/National Teams/England/England Away 2026 Front.jpeg"
  },
  {
    "id": 1009,
    "name": "England Away Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Away 2026 jersey for England",
    "image": "Jerseys/National Teams/England/England Away 2026 Back.jpeg"
  },
  {
    "id": 1010,
    "name": "England Home Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for England",
    "image": "Jerseys/National Teams/England/England Home 2026 Front.jpeg"
  },
  {
    "id": 1011,
    "name": "England Home Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for England",
    "image": "Jerseys/National Teams/England/England Home 2026 Back.jpeg"
  },
  {
    "id": 1012,
    "name": "France Away Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Away 2026 jersey for France",
    "image": "Jerseys/National Teams/France/France away 2026 Front.jpeg"
  },
  {
    "id": 1013,
    "name": "France Away Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Away 2026 jersey for France",
    "image": "Jerseys/National Teams/France/France away 2026 back.jpeg"
  },
  {
    "id": 1014,
    "name": "Germany Home Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Germany",
    "image": "Jerseys/National Teams/Germany/Germany home 2026 Fornt.jpeg"
  },
  {
    "id": 1015,
    "name": "Germany Home Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Germany",
    "image": "Jerseys/National Teams/Germany/Germany home 2026 back.jpeg"
  },
  {
    "id": 1016,
    "name": "Japan Home Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Japan",
    "image": "Jerseys/National Teams/Japan/Japan home 2026 Front.jpeg"
  },
  {
    "id": 1017,
    "name": "Japan Home Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Japan",
    "image": "Jerseys/National Teams/Japan/Japan home 2026 back.jpeg"
  },
  {
    "id": 1018,
    "name": "Mexico Away Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Away 2026 jersey for Mexico",
    "image": "Jerseys/National Teams/Mexico/Mexico away 2026 Front.jpeg"
  },
  {
    "id": 1019,
    "name": "Mexico Away Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Away 2026 jersey for Mexico",
    "image": "Jerseys/National Teams/Mexico/Mexico away 2026 Back.jpeg"
  },
  {
    "id": 1020,
    "name": "Mexico Home Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Mexico",
    "image": "Jerseys/National Teams/Mexico/Mexico Home 2026 Front.jpeg"
  },
  {
    "id": 1021,
    "name": "Mexico Home Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Mexico",
    "image": "Jerseys/National Teams/Mexico/Mexico Home 2026 back.jpeg"
  },
  {
    "id": 1022,
    "name": "Portugal Away Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Away 2026 jersey for Portugal",
    "image": "Jerseys/National Teams/Portugal/Portugal away 2026 Front.jpeg"
  },
  {
    "id": 1023,
    "name": "Portugal Away Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Away 2026 jersey for Portugal",
    "image": "Jerseys/National Teams/Portugal/Portugal away 2026 Back.jpeg"
  },
  {
    "id": 1024,
    "name": "Portugal Home Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Portugal",
    "image": "Jerseys/National Teams/Portugal/Portugal home 2026 Front.jpeg"
  },
  {
    "id": 1025,
    "name": "Portugal Home Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Portugal",
    "image": "Jerseys/National Teams/Portugal/Portugal home 2026 back.jpeg"
  },
  {
    "id": 1026,
    "name": "Spain Home Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Spain",
    "image": "Jerseys/National Teams/Spain/Spain home 2026 Front.jpeg"
  },
  {
    "id": 1027,
    "name": "Spain Home Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Spain",
    "image": "Jerseys/National Teams/Spain/Spain home 2026 Back.jpeg"
  },
  {
    "id": 1028,
    "name": "Uruguay Home Front",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Uruguay",
    "image": "Jerseys/National Teams/Uruguay/Uruguay Home 2026 Front.jpeg"
  },
  {
    "id": 1029,
    "name": "Uruguay Home Back",
    "category": "national",
    "price": 79.99,
    "description": "National Team Home 2026 jersey for Uruguay",
    "image": "Jerseys/National Teams/Uruguay/Uruguay Home 2026 Back.jpeg"
  }
];

const retrosProducts = [
  {
    "id": 2000,
    "name": "AC Milan Home 2006-2007 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2006-2007 for AC Milan",
    "image": "Jerseys/Retros/Clubs/AC Milan/AC Milan black version 2006-2007 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/AC Milan/AC Milan black version 2006-2007 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/AC Milan/AC Milan black version 2006-2007 Logo.jpg"
  },
  {
    "id": 2001,
    "name": "AC Milan Home 2010-2011 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2010-2011 for AC Milan",
    "image": "Jerseys/Retros/Clubs/AC Milan/AC Milan Home 2010-2011 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/AC Milan/AC Milan Home 2010-2011 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/AC Milan/Ac Milan Home 2010-2011 Logo.jpg"
  },
  {
    "id": 2002,
    "name": "Arsenal Home 2002-2004 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2002-2004 for Arsenal",
    "image": "Jerseys/Retros/Clubs/Arsenal/Arsenal Home 2002-2004 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Arsenal/Arsenal Home 2002-2004 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Arsenal/Arsenal Home 2002-2004 Logo.jpg"
  },
  {
    "id": 2003,
    "name": "Arsenal Home 2019-2020 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2019-2020 for Arsenal",
    "image": "Jerseys/Retros/Clubs/Arsenal/Arsenal Home 2019-2020 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Arsenal/Arsenal Home 2019-2020 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Arsenal/Arsenal Home 2019-2020 Logo.jpg"
  },
  {
    "id": 2004,
    "name": "Barcelona Home 2013-2014 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2013-2014 for Barcelona",
    "image": "Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2013-2014 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2013-2014 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2013-2014 Logo.jpg"
  },
  {
    "id": 2005,
    "name": "Barcelona Home 2015-2016 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2015-2016 for Barcelona",
    "image": "Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2015-2016 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2015-2016 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2015-2016 Logo.jpg"
  },
  {
    "id": 2006,
    "name": "Barcelona Home 2019-2020 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2019-2020 for Barcelona",
    "image": "Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2019-2020 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2019-2020 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2019-2020 Logo.jpg"
  },
  {
    "id": 2007,
    "name": "Bayern München Home 2013-2014 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2013-2014 for Bayern München",
    "image": "Jerseys/Retros/Clubs/Bayern München/Bayern München Home 2013-2014 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Bayern München/Bayern München Home 2013-2014 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Bayern München/Bayern München Home 2013-2014 Logo.jpg"
  },
  {
    "id": 2008,
    "name": "Chelsea Home 2011-2012 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2011-2012 for Chelsea",
    "image": "Jerseys/Retros/Clubs/Chelsea/Chelsea Home 2011-2012 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Chelsea/Chelsea Home 2011-2012 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Chelsea/Chelsea Home 2011-2012 Logo.jpg"
  },
  {
    "id": 2009,
    "name": "Inter Mailand Home 2009-2010 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2009-2010 for Inter Mailand",
    "image": "Jerseys/Retros/Clubs/Inter Mailand/Inter Mailand Home 2009-2010 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Inter Mailand/Inter Mailand Home 2009-2010 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Inter Mailand/Inter Mailand Home 2009-2010 Logo.jpg"
  },
  {
    "id": 2010,
    "name": "Juventus Home 1995-1997 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 1995-1997 for Juventus",
    "image": "Jerseys/Retros/Clubs/Juventus/Juventus Home 1995-1997 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Juventus/Juventus Home 1995-1997 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Juventus/Juventus Home 1995-1997 Logojpg.jpg"
  },
  {
    "id": 2011,
    "name": "Juventus Home 2018-2019 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2018-2019 for Juventus",
    "image": "Jerseys/Retros/Clubs/Juventus/Juventus Home 2018-2019 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Juventus/Juventus Home 2018-2019 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Juventus/Juventus Home 2018-2019 Logo.jpg"
  },
  {
    "id": 2012,
    "name": "Liverpool Home 2018-2019 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2018-2019 for Liverpool",
    "image": "Jerseys/Retros/Clubs/Liverpool/Liverpool Home 2018-2019 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Liverpool/Liverpool Home 2018-2019 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Liverpool/Liverpool Home 2018-2019 Logo.jpg"
  },
  {
    "id": 2013,
    "name": "Manchester City Home 2011-2012 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2011-2012 for Manchester City",
    "image": "Jerseys/Retros/Clubs/Manchester City/Manchester City Home 2011-2012 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Manchester City/Manchester City Home 2011-2012 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Manchester City/Manchester City Home 2011-2012 Logo.jpg"
  },
  {
    "id": 2014,
    "name": "Manchester United Home 2007-2008 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2007-2008 for Manchester United",
    "image": "Jerseys/Retros/Clubs/Manchester United/Manchester United Home 2007-2008 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Manchester United/Manchester United Home 2007-2008 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Manchester United/Manchester United Home 2007-2008 Logo.jpg"
  },
  {
    "id": 2015,
    "name": "Marseille Home 1992-1993 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 1992-1993 for Marseille",
    "image": "Jerseys/Retros/Clubs/Marseille/Marseille Home 1992-1993 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Marseille/Marseille Home 1992-1993 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Marseille/Marseille Home 1992-1993 Logo.jpg"
  },
  {
    "id": 2016,
    "name": "PSG Home 2017-2018 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2017-2018 for PSG",
    "image": "Jerseys/Retros/Clubs/PSG/Paris Home 2017-2018 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/PSG/Paris Home 2017-2018 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/PSG/Paris Home 2017-2018 Logo.jpg"
  },
  {
    "id": 2017,
    "name": "Real Madrid Away 2016-2017 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Away jersey 2016-2017 for Real Madrid",
    "image": "Jerseys/Retros/Clubs/Real Madrid/Real Madrid away 2016-2017 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Real Madrid/Real Madrid away 2016-2017 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Real Madrid/Real Madrid away 2016-2017 Logo.jpg"
  },
  {
    "id": 2018,
    "name": "Real Madrid Away 2017-2018 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Away jersey 2017-2018 for Real Madrid",
    "image": "Jerseys/Retros/Clubs/Real Madrid/Real Madrid away 2017-2018 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Real Madrid/Real Madrid away 2017-2018 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Real Madrid/Real Madrid away 2017-2018 Logo.jpg"
  },
  {
    "id": 2019,
    "name": "Real Madrid Home 2017-2018 Front",
    "category": "retro-clubs",
    "price": 89.99,
    "description": "Retro Home jersey 2017-2018 for Real Madrid",
    "image": "Jerseys/Retros/Clubs/Real Madrid/Real Madrid Home 2017-2018 Front.jpg",
    "imageBack": "Jerseys/Retros/Clubs/Real Madrid/Real Madrid Home 2017-2018 Back.jpg",
    "imageLogo": "Jerseys/Retros/Clubs/Real Madrid/Real Madrid Home 2017-2018 Logo.jpg"
  },
  {
    "id": 2020,
    "name": "Argentina Home 2022 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 2022 for Argentina",
    "image": "Jerseys/Retros/National Teams/Argentina/Argentina home 2022 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Argentina/Argentina home 2022 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Argentina/Argentina home 2022 Logo.jpg"
  },
  {
    "id": 2021,
    "name": "Brazil Home 2018 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 2018 for Brazil",
    "image": "Jerseys/Retros/National Teams/Brazil/Brazil Home 2018 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Brazil/Brazil Home 2018 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Brazil/Brazil Home 2018 Logo.jpg"
  },
  {
    "id": 2022,
    "name": "Croatia Home 1998 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 1998 for Croatia",
    "image": "Jerseys/Retros/National Teams/Croatia/Croatia Home 1998 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Croatia/Croatia Home 1998 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Croatia/Croatia Home 1998 Logo.jpg"
  },
  {
    "id": 2023,
    "name": "England Home 1994-1995 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 1994-1995 for England",
    "image": "Jerseys/Retros/National Teams/England/England home 1994-1995 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/England/England home 1994-1995 back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/England/England home 1994-1995 logo.jpg"
  },
  {
    "id": 2024,
    "name": "England Home 2003-2004 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 2003-2004 for England",
    "image": "Jerseys/Retros/National Teams/England/England home 2003-2004 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/England/England home 2003-2004 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/England/England home 2003-2004 Logo.jpg"
  },
  {
    "id": 2025,
    "name": "France Home 2018 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 2018 for France",
    "image": "Jerseys/Retros/National Teams/France/France home 2018 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/France/France home 2018 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/France/France home 2018 Logo.jpg"
  },
  {
    "id": 2026,
    "name": "Germany Home 2014 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 2014 for Germany",
    "image": "Jerseys/Retros/National Teams/Germany/Germany home 2014 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Germany/Germany home 2014 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Germany/Germany home 2014 Logo.jpg"
  },
  {
    "id": 2027,
    "name": "Italy Home 2006 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 2006 for Italy",
    "image": "Jerseys/Retros/National Teams/Italy/Italy Home 2006 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Italy/Italy Home 2006 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Italy/Italy Home 2006 Logo.jpg"
  },
  {
    "id": 2028,
    "name": "Japan Home 2018 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 2018 for Japan",
    "image": "Jerseys/Retros/National Teams/Japan/Japan Home 2018 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Japan/Japan Home 2018 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Japan/Japan Home 2018 Logo.jpg"
  },
  {
    "id": 2029,
    "name": "Marocco Home 1998 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 1998 for Marocco",
    "image": "Jerseys/Retros/National Teams/Marocco/Marocco Home 1998 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Marocco/Marocco Home 1998 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Marocco/Marocco Home 1998 Logo.jpg"
  },
  {
    "id": 2030,
    "name": "Mexico Home 2014 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 2014 for Mexico",
    "image": "Jerseys/Retros/National Teams/Mexico/Mexico Home 2014 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Mexico/Mexico Home 2014 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Mexico/Mexico Home 2014 Logo.jpg"
  },
  {
    "id": 2031,
    "name": "Netherlands Home 2014-2015 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 2014-2015 for Netherlands",
    "image": "Jerseys/Retros/National Teams/Netherlands/Netherlands home 2014-2015 front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Netherlands/Netherlands home 2014-2015 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Netherlands/Netherlands home 2014-2015 Logo.jpg"
  },
  {
    "id": 2032,
    "name": "Nigeria Home 1994-1995 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 1994-1995 for Nigeria",
    "image": "Jerseys/Retros/National Teams/Nigeria/Nigeria Home 1994-1995 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Nigeria/Nigeria Home 1994-1995 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Nigeria/Nigeria Home 1994-1995 Logo.jpg"
  },
  {
    "id": 2033,
    "name": "Portugal Home 2016 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 2016 for Portugal",
    "image": "Jerseys/Retros/National Teams/Portugal/Portugal Home 2016 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Portugal/Portugal Home 2016 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Portugal/Portugal Home 2016 Logo.jpg"
  },
  {
    "id": 2034,
    "name": "Senegal Home 2002 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 2002 for Senegal",
    "image": "Jerseys/Retros/National Teams/Senegal/Senegal Home 2002 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Senegal/Senegal Home 2002 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Senegal/Senegal Home 2002 Logo.jpg"
  },
  {
    "id": 2035,
    "name": "Spain Home 2010 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 2010 for Spain",
    "image": "Jerseys/Retros/National Teams/Spain/Spain Home 2010 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Spain/Spain Home 2010 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Spain/Spain Home 2010 Logo.jpg"
  },
  {
    "id": 2036,
    "name": "Spain Home 2012 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 2012 for Spain",
    "image": "Jerseys/Retros/National Teams/Spain/Spain Home 2012 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Spain/Spain Home 2012 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Spain/Spain Home 2012 Logo.jpg"
  },
  {
    "id": 2037,
    "name": "Türkiye Home 1996 Front",
    "category": "retro-nations",
    "price": 89.99,
    "description": "Retro Home jersey 1996 for Türkiye",
    "image": "Jerseys/Retros/National Teams/Türkiye/Turkey Home 1996 Front.jpg",
    "imageBack": "Jerseys/Retros/National Teams/Türkiye/Turkey Home 1996 Back.jpg",
    "imageLogo": "Jerseys/Retros/National Teams/Türkiye/Turkey Home 1996 Logo.jpg"
  }
];

function renderProducts() {
  renderPairedSection(products, "products-grid", "fe", true);
}

function slideImage(sliderId, direction) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelectorAll(".slide");
  const label = slider.querySelector(".slide-label");
  let currentIndex = 0;

  slides.forEach((slide, i) => {
    if (slide.classList.contains("active")) currentIndex = i;
  });

  slides[currentIndex].classList.remove("active");
  const newIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[newIndex].classList.add("active");

  if (label) {
    label.textContent = newIndex === 0 ? "Front" : "Back";
  }
}


// ── GENERIC PAIRED SECTION RENDERER (Fan Edition + National Teams) ────────
function renderPairedSection(productsArr, gridId, idPrefix, showAddons) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = "";

  const pairs = [];
  const usedIds = new Set();

  productsArr.forEach((product) => {
    if (usedIds.has(product.id)) return;
    if (product.name.includes("Front")) {
      const baseName = product.name.replace(" Front", "");
      const backProduct = productsArr.find((p) => p.name === baseName + " Back");
      pairs.push({ front: product, back: backProduct || null, baseName });
      usedIds.add(product.id);
      if (backProduct) usedIds.add(backProduct.id);
    } else if (!product.name.includes("Back")) {
      pairs.push({ front: product, back: null, baseName: product.name });
      usedIds.add(product.id);
    }
  });

  pairs.forEach((pair, index) => {
    const card = document.createElement("div");
    const teamName = pair.baseName.replace(/ (Home|Away|Away Black)$/, "");
    card.className = "product-card";
    card.dataset.team = teamName;
    const hasBack = pair.back !== null;
    const sliderId = `${idPrefix}-slider-${index}`;

    const addonsHtml = showAddons ? `
      <div class="product-addons">
        <label class="addon-option">
          <input type="checkbox" class="addon-check" data-price="13">
          <span>+ Shorts <span class="addon-price">+13 CHF</span></span>
        </label>
        <label class="addon-option addon-backprint-label">
          <input type="checkbox" class="addon-check addon-backprint-check" data-price="4">
          <span>+ Backprint (Name &amp; Nr.) <span class="addon-price">+4 CHF</span></span>
        </label>
        <div class="backprint-fields" style="display:none;">
          <input type="text" class="backprint-name" placeholder="Player name (e.g. MÜLLER)" maxlength="20" />
          <input type="text" class="backprint-number" placeholder="Number (e.g. 9)" maxlength="3" />
        </div>
      </div>` : "";

    card.innerHTML = `
      <div class="product-image-slider" id="${sliderId}">
        <img class="slide active" src="${pair.front.image || 'https://via.placeholder.com/400x500?text=No+Image'}" alt="${pair.front.name}" />
        ${hasBack ? `<img class="slide" src="${pair.back.image}" alt="${pair.back.name}" />` : ""}
        ${hasBack ? `
          <button class="slider-btn slider-prev" onclick="slideImage('${sliderId}', -1)">&#8592;</button>
          <button class="slider-btn slider-next" onclick="slideImage('${sliderId}', 1)">&#8594;</button>
          <span class="slide-label">Front</span>
        ` : ""}
      </div>
      <div class="product-info">
        <h3>${pair.baseName}</h3>
        <div class="product-price">
          <span class="price-original">CHF 79</span>
          <span class="price-sale">CHF 33</span>
        </div>
      </div>
      ${addonsHtml}
      <button class="add-to-cart-btn" data-id="${pair.front.id}" data-base-price="33">Add to cart — CHF 33</button>
    `;
    grid.appendChild(card);
  });

  // Addon price update logic + backprint field toggle
  if (showAddons) {
    grid.querySelectorAll(".product-card").forEach((card) => {
      const btn = card.querySelector(".add-to-cart-btn");

      // Show/hide backprint name+number fields
      const backprintCheck = card.querySelector(".addon-backprint-check");
      const backprintFields = card.querySelector(".backprint-fields");
      if (backprintCheck && backprintFields) {
        backprintCheck.addEventListener("change", () => {
          backprintFields.style.display = backprintCheck.checked ? "flex" : "none";
          if (!backprintCheck.checked) {
            backprintFields.querySelectorAll("input").forEach(i => i.value = "");
          }
        });
      }

      card.querySelectorAll(".addon-check").forEach((check) => {
        check.addEventListener("change", () => {
          let total = 33;
          card.querySelectorAll(".addon-check:checked").forEach(c => {
            total += Number(c.dataset.price);
          });
          btn.textContent = `Add to cart — CHF ${total}`;
        });
      });
    });
  }

  // Cart button listeners
  grid.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = Number(btn.getAttribute("data-id"));
      const product = productsArr.find((item) => item.id === productId);
      if (!product) return;
      const card = btn.closest(".product-card");
      let extras = [];
      let backprintDetail = "";
      if (card) {
        card.querySelectorAll(".addon-check:checked").forEach(c => {
          extras.push(c.closest(".addon-option").querySelector("span").textContent.trim());
        });
        // Collect backprint name + number if filled
        const bpName   = card.querySelector(".backprint-name");
        const bpNumber = card.querySelector(".backprint-number");
        const bpCheck  = card.querySelector(".addon-backprint-check");
        if (bpCheck && bpCheck.checked) {
          const n = bpName   ? bpName.value.trim()   : "";
          const r = bpNumber ? bpNumber.value.trim()  : "";
          if (n || r) backprintDetail = [n, r].filter(Boolean).join(" #");
        }
      }
      const total = Number(btn.textContent.match(/\d+$/)?.[0] || 33);
      addToCart({
        id: product.id,
        name: product.name + (extras.length ? " (" + extras.join(", ") + ")" : ""),
        backprint: backprintDetail,
        price: total,
        quantity: 1,
        image: product.image || "https://via.placeholder.com/60x60?text=Jersey"
      });
      updateCartCount();
    });
  });
}

function renderNationalTeams() {
  renderPairedSection(nationalTeamsProducts, "national-teams-grid", "nt", true);
}

// Filter products by team name
function filterByTeam(team, gridId, sectionId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.querySelectorAll(".product-card").forEach(card => {
    card.style.display = (!team || card.dataset.team === team) ? "" : "none";
  });
  const section = document.getElementById(sectionId);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── RETROS RENDERER (Front + Back + Logo slider) ──────────────────────────
function renderRetros() {
  ["retros-clubs-grid", "retros-nations-grid"].forEach(id => {
    const g = document.getElementById(id);
    if (g) g.innerHTML = "";
  });

  retrosProducts.forEach((product, index) => {
    const targetGridId = product.category === "retro-clubs" ? "retros-clubs-grid" : "retros-nations-grid";
    const grid = document.getElementById(targetGridId);
    if (!grid) return;

    const card = document.createElement("div");
    const retroTeam = product.name.replace(/ (?:Home|Away)[^"]*? \d.*$/, "").trim();
    card.className = "product-card retro-card";
    card.dataset.team = retroTeam;
    const sliderId = `retro-slider-${index}`;
    const slides = [];
    const labels = [];
    if (product.image)      { slides.push(product.image);      labels.push("Front"); }
    if (product.imageBack)  { slides.push(product.imageBack);  labels.push("Back");  }
    if (product.imageLogo)  { slides.push(product.imageLogo);  labels.push("Logo");  }
    const hasMultiple = slides.length > 1;
    const baseName = product.name.replace(" Front", "");

    card.innerHTML = `
      <div class="product-image-slider" id="${sliderId}" data-labels='${JSON.stringify(labels)}'>
        ${slides.map((src, i) => `<img class="slide ${i === 0 ? "active" : ""}" src="${src}" alt="${baseName}" />`).join("")}
        ${hasMultiple ? `
          <button class="slider-btn slider-prev" onclick="slideRetro('${sliderId}', -1)">&#8592;</button>
          <button class="slider-btn slider-next" onclick="slideRetro('${sliderId}', 1)">&#8594;</button>
          <span class="slide-label">${labels[0]}</span>
        ` : ""}
        <span class="retro-badge">Retro</span>
      </div>
      <div class="product-info">
        <h3>${baseName}</h3>
        <div class="product-price">
          <span class="price-original">CHF 89</span>
          <span class="price-sale">CHF 49</span>
        </div>
      </div>
      <button class="add-to-cart-btn" data-id="${product.id}">Add to cart</button>
    `;
    grid.appendChild(card);
  });

  ["retros-clubs-grid", "retros-nations-grid"].forEach(gridId => {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = Number(btn.getAttribute("data-id"));
        const product = retrosProducts.find((item) => item.id === productId);
        if (!product) return;
        addToCart({ id: product.id, name: product.name, price: 49, quantity: 1, image: product.image || "https://via.placeholder.com/60x60?text=Jersey" });
        updateCartCount();
      });
    });
  });
}

function slideRetro(sliderId, direction) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelectorAll(".slide");
  const label = slider.querySelector(".slide-label");
  const labels = JSON.parse(slider.dataset.labels || "[]");
  let currentIndex = 0;
  slides.forEach((slide, i) => { if (slide.classList.contains("active")) currentIndex = i; });
  slides[currentIndex].classList.remove("active");
  const newIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[newIndex].classList.add("active");
  if (label && labels.length) label.textContent = labels[newIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderNationalTeams();
  renderRetros();
  updateCartCount();
  renderCart();
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", navMenu.classList.contains("active"));
});

// Mobile flyout toggle — level 1 (Fan Edition / National Teams / Retros)
document.querySelectorAll(".has-flyout").forEach((item) => {
  item.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      this.classList.toggle("open");
    }
  });
});

// Mobile flyout toggle — level 2 (Season rows inside level-1)
document.querySelectorAll(".flyout-l1 > li").forEach((item) => {
  item.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      this.classList.toggle("open");
    }
  });
});

// ── GLOBAL SEARCH ────────────────────────────────────────────────────
(function () {
  const searchInput   = document.getElementById("global-search");
  const searchClear   = document.getElementById("search-clear");
  const resultsSection = document.getElementById("search-results-section");
  const resultsGrid   = document.getElementById("search-results-grid");
  const countEl       = document.getElementById("search-results-count");
  const noResults     = document.getElementById("search-no-results");
  const queryDisplay  = document.getElementById("search-query-display");
  const categoryNav   = document.getElementById("category-nav");

  // All the sections to hide while searching
  const mainSections = [
    document.getElementById("fan-edition"),
    document.getElementById("national-teams"),
    document.getElementById("retros-clubs"),
    document.getElementById("retros-nations"),
    document.querySelector(".banner-divider"),
    document.querySelectorAll(".banner-divider"),
  ];

  if (!searchInput) return;

  function getAllSearchableItems() {
    const items = [];
    // Fan Edition (paired: use front image + baseName)
    const feGrid = document.getElementById("products-grid");
    if (feGrid) feGrid.querySelectorAll(".product-card").forEach(card => {
      items.push({ card: card.cloneNode(true), label: "fan", name: card.querySelector("h3")?.textContent || "" });
    });
    // National Teams
    const ntGrid = document.getElementById("national-teams-grid");
    if (ntGrid) ntGrid.querySelectorAll(".product-card").forEach(card => {
      items.push({ card: card.cloneNode(true), label: "national", name: card.querySelector("h3")?.textContent || "" });
    });
    // Retros clubs
    const rcGrid = document.getElementById("retros-clubs-grid");
    if (rcGrid) rcGrid.querySelectorAll(".product-card").forEach(card => {
      items.push({ card: card.cloneNode(true), label: "retro", name: card.querySelector("h3")?.textContent || "" });
    });
    // Retros nations
    const rnGrid = document.getElementById("retros-nations-grid");
    if (rnGrid) rnGrid.querySelectorAll(".product-card").forEach(card => {
      items.push({ card: card.cloneNode(true), label: "retro", name: card.querySelector("h3")?.textContent || "" });
    });
    return items;
  }

  const labelMap = {
    fan:      { text: "Fan Edition",    cls: "" },
    national: { text: "National Teams", cls: "national" },
    retro:    { text: "Retros",         cls: "retro" },
  };

  function showAllSections() {
    document.querySelectorAll(".banner-divider").forEach(el => el.style.display = "");
    ["fan-edition","national-teams","retros-clubs","retros-nations"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "";
    });
    categoryNav && (categoryNav.style.display = "");
    resultsSection.style.display = "none";
  }

  function runSearch(query) {
    const q = query.trim().toLowerCase();

    if (!q) {
      showAllSections();
      searchClear.hidden = true;
      return;
    }

    searchClear.hidden = false;

    // Hide main sections + category pills
    document.querySelectorAll(".banner-divider").forEach(el => el.style.display = "none");
    ["fan-edition","national-teams","retros-clubs","retros-nations"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });
    categoryNav && (categoryNav.style.display = "none");

    // Filter items
    const allItems = getAllSearchableItems();
    const matches = allItems.filter(item => item.name.toLowerCase().includes(q));

    resultsGrid.innerHTML = "";
    noResults.style.display = "none";
    resultsSection.style.display = "";

    if (matches.length === 0) {
      countEl.textContent = "";
      queryDisplay.textContent = query;
      noResults.style.display = "block";
      return;
    }

    countEl.textContent = `${matches.length} jersey${matches.length === 1 ? "" : "s"} found`;

    matches.forEach(({ card, label }) => {
      const wrapper = document.createElement("div");
      // Prepend a small badge indicating the section
      const { text, cls } = labelMap[label] || labelMap.fan;
      const badge = document.createElement("div");
      badge.className = "search-result-badge" + (cls ? " " + cls : "");
      badge.textContent = text;
      // Insert badge before card content
      const inner = card.cloneNode(true);
      const infoDiv = inner.querySelector(".product-info");
      if (infoDiv) infoDiv.insertBefore(badge, infoDiv.firstChild);
      resultsGrid.appendChild(inner);
    });

    // Re-attach cart button listeners on the cloned cards
    resultsGrid.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = Number(btn.getAttribute("data-id"));
        const allProducts = [...products, ...nationalTeamsProducts, ...retrosProducts];
        const product = allProducts.find(p => p.id === productId);
        if (!product) return;
        const card = btn.closest(".product-card");
        let extras = [];
        let backprintDetail = "";
        if (card) {
          card.querySelectorAll(".addon-check:checked").forEach(c => {
            extras.push(c.closest(".addon-option").querySelector("span").textContent.trim());
          });
          const bpCheck  = card.querySelector(".addon-backprint-check");
          const bpName   = card.querySelector(".backprint-name");
          const bpNumber = card.querySelector(".backprint-number");
          if (bpCheck && bpCheck.checked) {
            const n = bpName   ? bpName.value.trim()   : "";
            const r = bpNumber ? bpNumber.value.trim()  : "";
            if (n || r) backprintDetail = [n, r].filter(Boolean).join(" #");
          }
        }
        const total = Number(btn.textContent.match(/\d+$/)?.[0] || product.price || 33);
        addToCart({
          id: product.id,
          name: product.name + (extras.length ? " (" + extras.join(", ") + ")" : ""),
          backprint: backprintDetail,
          price: total,
          quantity: 1,
          image: product.image || "https://via.placeholder.com/60x60?text=Jersey"
        });
        updateCartCount();
      });
    });
  }

  let debounceTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => runSearch(searchInput.value), 200);
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    runSearch("");
  });
})();

// Checkout form — builds a mailto: link and opens the email client
const checkoutForm = document.getElementById("checkout-form");
if (checkoutForm) {
  const successMessage = document.getElementById("checkout-success");
  const errorMessage   = document.getElementById("checkout-error");

  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validate all required fields
    if (!checkoutForm.checkValidity()) {
      checkoutForm.reportValidity();
      return;
    }

    // ── Read form values ─────────────────────────────────────────────
    const fullName   = document.getElementById("fullName").value.trim();
    const email      = document.getElementById("email").value.trim();
    const phone      = document.getElementById("phone").value.trim();
    const address    = document.getElementById("address").value.trim();
    const city       = document.getElementById("city").value.trim();
    const postalCode = document.getElementById("postalCode").value.trim();
    const country    = document.getElementById("country").value.trim();
    const size       = document.getElementById("size").value;
    const notes      = document.getElementById("notes").value.trim();

    // ── Build cart summary ───────────────────────────────────────────
    const cart = getCart();

    if (cart.length === 0) {
      errorMessage.textContent = "⚠️ Your cart is empty. Please add a jersey first.";
      errorMessage.hidden = false;
      return;
    }

    const cartLines = cart.map((item, i) => {
      let line = `${i + 1}. ${item.name}`;
      if (item.backprint) line += ` | Backprint: ${item.backprint}`;
      line += ` | Qty: ${item.quantity} | CHF ${(item.price * item.quantity).toFixed(2)}`;
      return line;
    });
    const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

    // ── Compose the email ────────────────────────────────────────────
    const subject = `New JerseyBase Order – ${fullName}`;

    const body = [
      "=== NEW JERSEYBASE ORDER ===",
      "",
      "CUSTOMER DETAILS",
      `Name:    ${fullName}`,
      `Email:   ${email}`,
      `Phone:   ${phone}`,
      "",
      "SHIPPING ADDRESS",
      `${address}`,
      `${postalCode} ${city}`,
      `${country}`,
      "",
      `SIZE: ${size}`,
      notes ? `NOTES: ${notes}` : null,
      "",
      "=== ORDER ITEMS ===",
      ...cartLines,
      "",
      `TOTAL: CHF ${total.toFixed(2)}`,
      "",
      "===========================",
    ].filter(l => l !== null).join("\n");

    const mailtoUrl = `mailto:jerseyphase@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      // Use a hidden <a> click — safest cross-browser way to open mailto
      // without navigating away from the page
      const link = document.createElement("a");
      link.href = mailtoUrl;
      link.target = "_blank";
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success, clear cart
      successMessage.hidden = false;
      errorMessage.hidden   = true;
      checkoutForm.reset();
      clearCart();
      updateCartCount();
    } catch (err) {
      errorMessage.textContent = "⚠️ Could not open your email client. Please email jerseyphase@gmail.com directly with your order.";
      errorMessage.hidden = false;
    }
  });
}