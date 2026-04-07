const products = [
  {
    "id": 1,
    "name": "AC Milan Home Front",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Home Front jersey for AC Milan",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/AC Milan/AC Milan Home 25-26 Front.jpeg"
  },
  {
    "id": 2,
    "name": "AC Milan Home Back",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Home Back jersey for AC Milan",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/AC Milan/AC Milan Home 25-26 Back.jpeg"
  },
  {
    "id": 3,
    "name": "Ajax Away Front",
    "league": "Eredivisie",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Ajax",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Ajax/Ajax 25-26 away front.jpeg"
  },
  {
    "id": 4,
    "name": "Ajax Away Back",
    "league": "Eredivisie",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Ajax",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Ajax/Ajax 25-26 away back.jpeg"
  },
  {
    "id": 5,
    "name": "Arsenal Away Front",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Arsenal",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Arsenal/Arsenal away 25-26 Front.jpeg"
  },
  {
    "id": 6,
    "name": "Arsenal Away Back",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Arsenal",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Arsenal/Arsenal away 25-26 Back.jpeg"
  },
  {
    "id": 7,
    "name": "Arsenal Home Front",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Arsenal",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Arsenal/Arsenal home 25-26 Front.jpeg"
  },
  {
    "id": 8,
    "name": "Arsenal Home Back",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Arsenal",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Arsenal/Arsenal home 25-26 Back.jpeg"
  },
  {
    "id": 9,
    "name": "Barcelona Away Front",
    "league": "La Liga",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Barcelona",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Barcelona/Barcelona away 25-26 Front.jpeg"
  },
  {
    "id": 10,
    "name": "Barcelona Away Back",
    "league": "La Liga",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Barcelona",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Barcelona/Barcelona away 25-26 back.jpeg"
  },
  {
    "id": 11,
    "name": "Barcelona Home Front",
    "league": "La Liga",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Barcelona",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Barcelona/Barcelona Home 25-26 Front.jpeg"
  },
  {
    "id": 12,
    "name": "Barcelona Home Back",
    "league": "La Liga",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Barcelona",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Barcelona/Barcelona Home 25-26 back.jpeg"
  },
  {
    "id": 13,
    "name": "Bayern München Away Front",
    "league": "Bundesliga",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Bayern München",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Bayern München/Bayern München away 25-26 Front.jpeg"
  },
  {
    "id": 14,
    "name": "Bayern München Away Back",
    "league": "Bundesliga",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Bayern München",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Bayern München/Bayern München away 25-26 Back.jpeg"
  },
  {
    "id": 15,
    "name": "Bayern München Home Front",
    "league": "Bundesliga",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Bayern München",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Bayern München/Bayern München Home 25-26 Front.jpeg"
  },
  {
    "id": 16,
    "name": "Bayern München Home Back",
    "league": "Bundesliga",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Bayern München",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Bayern München/Bayern München Home 25-26 Back.jpeg"
  },
  {
    "id": 17,
    "name": "Benfica Away Front",
    "league": "Primeira Liga",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Benfica",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Benfica/Benfica away 25-26 Front.jpeg"
  },
  {
    "id": 18,
    "name": "Benfica Away Back",
    "league": "Primeira Liga",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Benfica",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Benfica/Benfica away 25-26 Back.jpeg"
  },
  {
    "id": 19,
    "name": "Benfica Home Front",
    "league": "Primeira Liga",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Benfica",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Benfica/Benfica Home 25-26 Front.jpeg"
  },
  {
    "id": 20,
    "name": "Benfica Home Back",
    "league": "Primeira Liga",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Benfica",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Benfica/Benfica home 25-26 Back.jpeg"
  },
  {
    "id": 21,
    "name": "Betis Home Front",
    "league": "La Liga",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Betis",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Betis/Betis home 25-26 Front.jpeg"
  },
  {
    "id": 22,
    "name": "Betis Home Back",
    "league": "La Liga",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Betis",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Betis/Betis home 25-26 back.jpeg"
  },
  {
    "id": 23,
    "name": "Bilbao Home Front",
    "league": "La Liga",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Bilbao",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Bilbao/Bilbao home 25-26 Front.jpeg"
  },
  {
    "id": 24,
    "name": "Bilbao Home Back",
    "league": "La Liga",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Bilbao",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Bilbao/Bilbao home 25-26 Back.jpeg"
  },
  {
    "id": 25,
    "name": "Celtic Home Front",
    "league": "Scottish Premiership",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Celtic",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Celtic/Celtic home 25-26 Front.jpeg"
  },
  {
    "id": 26,
    "name": "Celtic Home Back",
    "league": "Scottish Premiership",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Celtic",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Celtic/Celtic Home 25-26 Back.jpeg"
  },
  {
    "id": 27,
    "name": "Chelsea Away Front",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Chelsea",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Chelsea/Chealsea away 25-26 front.jpeg"
  },
  {
    "id": 28,
    "name": "Chelsea Away Back",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Chelsea",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Chelsea/Chealsea away 25-26 back.jpeg"
  },
  {
    "id": 29,
    "name": "Chelsea Home Front",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Chelsea",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Chelsea/Home 25-26 Front.jpeg"
  },
  {
    "id": 30,
    "name": "Chelsea Home Back",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Chelsea",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Chelsea/Chealsea 25-26 back.jpeg"
  },
  {
    "id": 31,
    "name": "Flamengo Home Front",
    "league": "Brasileirão",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Flamengo",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Flamengo/Flamengo home 25-26 Front.jpeg"
  },
  {
    "id": 32,
    "name": "Flamengo Home Back",
    "league": "Brasileirão",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Flamengo",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Flamengo/Flamengo home 25-26 Back.jpeg"
  },
  {
    "id": 33,
    "name": "Inter Miami Away Front",
    "league": "MLS",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Inter Miami",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Inter Miami/Inter Miami Away 25-26 Front.jpeg"
  },
  {
    "id": 34,
    "name": "Inter Miami Away Back",
    "league": "MLS",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Inter Miami",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Inter Miami/Inter Miami Away 25-26 Back.jpeg"
  },
  {
    "id": 35,
    "name": "Inter Miami Home Front",
    "league": "MLS",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Inter Miami",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Inter Miami/Inter Miami Home 25-26 Front.jpeg"
  },
  {
    "id": 36,
    "name": "Inter Miami Home Back",
    "league": "MLS",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Inter Miami",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Inter Miami/Inter Miami Home 25-26 Back.jpeg"
  },
  {
    "id": 37,
    "name": "Inter Milan Home Front",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Inter Milan",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Inter Milan/Inter Milan home 25-26 Front.jpeg"
  },
  {
    "id": 38,
    "name": "Inter Milan Home Back",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Inter Milan",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Inter Milan/Inter Milan home 25-26 Back.jpeg"
  },
  {
    "id": 39,
    "name": "Juventus Away Front",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Juventus",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Juventus/Juventus away 25-26 Front.jpeg"
  },
  {
    "id": 40,
    "name": "Juventus Away Back",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Juventus",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Juventus/Juventus away 25-26 Back.jpeg"
  },
  {
    "id": 41,
    "name": "Juventus Home Front",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Juventus",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Juventus/Juventus 25-26 home Front.jpeg"
  },
  {
    "id": 42,
    "name": "Juventus Home Back",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Juventus",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Juventus/Juventus 25-26 home back.jpeg"
  },
  {
    "id": 43,
    "name": "Liverpool Away Front",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Liverpool",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Liverpool/Liverpool 25-26 Away front.jpeg"
  },
  {
    "id": 44,
    "name": "Liverpool Away Back",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Liverpool",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Liverpool/Liverpool 25-26 Away back.jpeg"
  },
  {
    "id": 45,
    "name": "Liverpool Home Front",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Liverpool",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Liverpool/Liverpool 25-26 Front.jpeg"
  },
  {
    "id": 46,
    "name": "Liverpool Home Back",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Liverpool",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Liverpool/Liverpool 25-26 Back.jpeg"
  },
  {
    "id": 47,
    "name": "Manchester City Away Front",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Manchester City",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Manchester City/Manchester city away 25-26 Front.jpeg"
  },
  {
    "id": 48,
    "name": "Manchester City Away Back",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Manchester City",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Manchester City/Manchester city away 25-26 Back.jpeg"
  },
  {
    "id": 49,
    "name": "Manchester City Away Black Front",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Away Black Front jersey for Manchester City",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Manchester City/Manchester city 25-26 Away black.jpeg"
  },
  {
    "id": 50,
    "name": "Manchester City Away Black Back",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Away Black Back jersey for Manchester City",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Manchester City/Manchester city 25-26 Away black back.jpeg"
  },
  {
    "id": 51,
    "name": "Manchester City Home Front",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Manchester City",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Manchester City/Manchester city Home 25-26 Front.jpeg"
  },
  {
    "id": 52,
    "name": "Manchester City Home Back",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Manchester City",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Manchester City/Manchester city Home 25-26 Back.jpeg"
  },
  {
    "id": 53,
    "name": "Manchester United Away Front",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Manchester United",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Manchester United/Manchester United Away 25-26 Front.jpeg"
  },
  {
    "id": 54,
    "name": "Manchester United Away Back",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Manchester United",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Manchester United/Manchester United Away 25-26 Back.jpeg"
  },
  {
    "id": 55,
    "name": "Manchester United Home Front",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Manchester United",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Manchester United/Manchester United Home 25-26 Front.jpeg"
  },
  {
    "id": 56,
    "name": "Manchester United Home Back",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Manchester United",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Manchester United/Manchester United Home 25-26 Back.jpeg"
  },
  {
    "id": 57,
    "name": "Marseille Away Front",
    "league": "Ligue 1",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Marseille",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Marseille/Marseille away 25-26 Front.jpeg"
  },
  {
    "id": 58,
    "name": "Marseille Away Back",
    "league": "Ligue 1",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Marseille",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Marseille/Marseille away 25-26 back.jpeg"
  },
  {
    "id": 59,
    "name": "Marseille Home Front",
    "league": "Ligue 1",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Marseille",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Marseille/Marseille home 25-26 front.jpeg"
  },
  {
    "id": 60,
    "name": "Marseille Home Back",
    "league": "Ligue 1",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Marseille",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Marseille/Marseille home 25-26 back.jpeg"
  },
  {
    "id": 61,
    "name": "Mineiro Home Front",
    "league": "Brasileirão",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Mineiro",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Mineiro/Mineiro Home 25-26 Front.jpeg"
  },
  {
    "id": 62,
    "name": "Mineiro Home Back",
    "league": "Brasileirão",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Mineiro",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Mineiro/Mineiro Home 25-26 Back.jpeg"
  },
  {
    "id": 63,
    "name": "Minens Home Front",
    "league": "Brasileirão",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Minens",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Minens/Minens 25-26 front.jpeg"
  },
  {
    "id": 64,
    "name": "Minens Home Back",
    "league": "Brasileirão",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Minens",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Minens/Minens 25-26 back.jpeg"
  },
  {
    "id": 65,
    "name": "Napoli Away Front",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Napoli",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Napoli/Napoli 25-26 away front.jpeg"
  },
  {
    "id": 66,
    "name": "Napoli Away Back",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Napoli",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Napoli/Napoli 25-26 away back.jpeg"
  },
  {
    "id": 67,
    "name": "Napoli Home Front",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Napoli",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Napoli/Napoli 25-26 home front.jpeg"
  },
  {
    "id": 68,
    "name": "Napoli Home Back",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Napoli",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Napoli/Napoli 25-26 home back.jpeg"
  },
  {
    "id": 69,
    "name": "New Castle Home Front",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Front jersey for New Castle",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/New Castle/New Castle home 25-26 Front.jpeg"
  },
  {
    "id": 70,
    "name": "New Castle Home Back",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Back jersey for New Castle",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/New Castle/New Castle home 25-26 back.jpeg"
  },
  {
    "id": 71,
    "name": "Palmeiras Away Front",
    "league": "Brasileirão",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Palmeiras",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Palmeiras/Palmeiras Away 25-26 Front.jpeg"
  },
  {
    "id": 72,
    "name": "Palmeiras Away Back",
    "league": "Brasileirão",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Palmeiras",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Palmeiras/Palmeiras Away 25-26 Back.jpeg"
  },
  {
    "id": 73,
    "name": "Palmeiras Home Front",
    "league": "Brasileirão",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Palmeiras",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Palmeiras/Palmeiras Home 25-26 Front.jpeg"
  },
  {
    "id": 74,
    "name": "Palmeiras Home Back",
    "league": "Brasileirão",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Palmeiras",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Palmeiras/Palmeiras Home 25-26 Back.jpeg"
  },
  {
    "id": 75,
    "name": "Paris Home Front",
    "league": "Ligue 1",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Paris",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Paris/Paris Home 25-26 Front.jpeg"
  },
  {
    "id": 76,
    "name": "Paris Home Back",
    "league": "Ligue 1",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Paris",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Paris/Paris Home 25-26 Back.jpeg"
  },
  {
    "id": 77,
    "name": "Porto Away Front",
    "league": "Primeira Liga",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Porto",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Porto/Porto away 25-26 Front.jpeg"
  },
  {
    "id": 78,
    "name": "Porto Away Back",
    "league": "Primeira Liga",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Porto",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Porto/Porto away 25-26 back.jpeg"
  },
  {
    "id": 79,
    "name": "Porto Home Front",
    "league": "Primeira Liga",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Porto",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Porto/Porto home 25-26 Front.jpeg"
  },
  {
    "id": 80,
    "name": "Porto Home Back",
    "league": "Primeira Liga",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Porto",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Porto/Porto Home 25-26 back.jpeg"
  },
  {
    "id": 81,
    "name": "Real Madrid Away Front",
    "league": "La Liga",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Real Madrid",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Real Madrid/Real Madrid Away 25-26 Front.jpeg"
  },
  {
    "id": 82,
    "name": "Real Madrid Away Back",
    "league": "La Liga",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Real Madrid",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Real Madrid/Real Madrid Away 25-26 Back.jpeg"
  },
  {
    "id": 83,
    "name": "Real Madrid Home Front",
    "league": "La Liga",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Real Madrid",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Real Madrid/Real Madrid Home 25-26 Front.jpeg"
  },
  {
    "id": 84,
    "name": "Real Madrid Home Back",
    "league": "La Liga",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Real Madrid",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Real Madrid/Real Madrid Home 25-26 Back.jpeg"
  },
  {
    "id": 85,
    "name": "Rome Home Front",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Rome",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Rome/Rome home 25-26 Front.jpeg"
  },
  {
    "id": 86,
    "name": "Rome Home Back",
    "league": "Serie A",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Rome",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Rome/Rome home 25-26 Back.jpeg"
  },
  {
    "id": 87,
    "name": "Santos Home Back",
    "league": "Brasileirão",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Santos",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Santos/Santos back.jpeg"
  },
  {
    "id": 88,
    "name": "Sao Paulo Away Front",
    "league": "Brasileirão",
    "price": 35,
    "description": "Fan Edition Away Front jersey for Sao Paulo",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Sao Paulo/Sao Paulo away 25-26 Front.jpeg"
  },
  {
    "id": 89,
    "name": "Sao Paulo Away Back",
    "league": "Brasileirão",
    "price": 35,
    "description": "Fan Edition Away Back jersey for Sao Paulo",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Sao Paulo/Sao Paulo away 25-26 Back.jpeg"
  },
  {
    "id": 90,
    "name": "Sporting Lissabon Home Front",
    "league": "Primeira Liga",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Sporting Lissabon",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Sporting Lissabon/Sporting Lissabon home 25-26 Front.jpeg"
  },
  {
    "id": 91,
    "name": "Sporting Lissabon Home Back",
    "league": "Primeira Liga",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Sporting Lissabon",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Sporting Lissabon/Sporting Lissabon home 25-26 Back.jpeg"
  },
  {
    "id": 92,
    "name": "Totenham Home Front",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Front jersey for Totenham",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Totenham/Totenham home 25-26 Front.jpeg"
  },
  {
    "id": 93,
    "name": "Totenham Home Back",
    "league": "Premier League",
    "price": 35,
    "description": "Fan Edition Home Back jersey for Totenham",
    "color": "team-colors",
    "image": "Jerseys/Jerseys/Fan Edition/Totenham/Totenham home 25-26 back.jpeg"
  }
];

const nationalTeamsProducts = [
  {
    "id": 1000,
    "name": "Algeria Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Algeria",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Algeria f.webp"
  },
  {
    "id": 1001,
    "name": "Algeria Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Algeria",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Algeria b.webp"
  },
  {
    "id": 1002,
    "name": "Argentina Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Argentina",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Argentina f.webp"
  },
  {
    "id": 1003,
    "name": "Argentina Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Argentina",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Argentina b.webp"
  },
  {
    "id": 1004,
    "name": "Austria Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Austria",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Austria f.webp"
  },
  {
    "id": 1005,
    "name": "Austria Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Austria",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Austria b.webp"
  },
  {
    "id": 1006,
    "name": "Belgium Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Belgium",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Belgium f.webp"
  },
  {
    "id": 1007,
    "name": "Belgium Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Belgium",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Belgium b.webp"
  },
  {
    "id": 1008,
    "name": "Brazil Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Brazil",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Brazil f.jpg"
  },
  {
    "id": 1009,
    "name": "Brazil Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Brazil",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Brazil b.jpg"
  },
  {
    "id": 1010,
    "name": "Canada Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Canada",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Canada f.webp"
  },
  {
    "id": 1011,
    "name": "Canada Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Canada",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Canada b.webp"
  },
  {
    "id": 1012,
    "name": "Chile Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Chile",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Chile f.webp"
  },
  {
    "id": 1013,
    "name": "Chile Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Chile",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Chile b.webp"
  },
  {
    "id": 1014,
    "name": "Colombia Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Colombia",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Colombia f.webp"
  },
  {
    "id": 1015,
    "name": "Colombia Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Colombia",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Colombia b.webp"
  },
  {
    "id": 1016,
    "name": "Costa Rica Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Costa Rica",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Costa rica f.webp"
  },
  {
    "id": 1017,
    "name": "Costa Rica Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Costa Rica",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Costa rica b.webp"
  },
  {
    "id": 1018,
    "name": "Croatia Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Croatia",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Croatia f.jpg"
  },
  {
    "id": 1019,
    "name": "Croatia Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Croatia",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Croatia b.jpg"
  },
  {
    "id": 1020,
    "name": "Czech Republic Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Czech Republic",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Czech republic f.webp"
  },
  {
    "id": 1021,
    "name": "Czech Republic Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Czech Republic",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Czesh republic b.webp"
  },
  {
    "id": 1022,
    "name": "Ecuador Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Ecuador",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Ecuador f.jpg"
  },
  {
    "id": 1023,
    "name": "Ecuador Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Ecuador",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Ecuador b.jpg"
  },
  {
    "id": 1024,
    "name": "England Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for England",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/England f.webp"
  },
  {
    "id": 1025,
    "name": "England Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for England",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Englanx b.webp"
  },
  {
    "id": 1026,
    "name": "France Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for France",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/France f.webp"
  },
  {
    "id": 1027,
    "name": "France Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for France",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Frances b.webp"
  },
  {
    "id": 1028,
    "name": "Germany Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Germany",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Germany f.webp"
  },
  {
    "id": 1029,
    "name": "Germany Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Germany",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Germany b.webp"
  },
  {
    "id": 1030,
    "name": "Ghana Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Ghana",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Ghana f.jpg"
  },
  {
    "id": 1031,
    "name": "Ghana Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Ghana",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Ghana b.jpg"
  },
  {
    "id": 1032,
    "name": "Hungary Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Hungary",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Hungary f.webp"
  },
  {
    "id": 1033,
    "name": "Hungary Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Hungary",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Hungary b.webp"
  },
  {
    "id": 1034,
    "name": "Iceland Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Iceland",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Iceland f.webp"
  },
  {
    "id": 1035,
    "name": "Iceland Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Iceland",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Icelanx b.webp"
  },
  {
    "id": 1036,
    "name": "Italy Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Italy",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Italia f.webp"
  },
  {
    "id": 1037,
    "name": "Italy Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Italy",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Italia b.webp"
  },
  {
    "id": 1038,
    "name": "Ivory Coast Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Ivory Coast",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Ivory Coast f.jpg"
  },
  {
    "id": 1039,
    "name": "Ivory Coast Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Ivory Coast",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Ivory Coast b.jpg"
  },
  {
    "id": 1040,
    "name": "Jamaica Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Jamaica",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Jamaica f.webp"
  },
  {
    "id": 1041,
    "name": "Jamaica Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Jamaica",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Jamaica b.webp"
  },
  {
    "id": 1042,
    "name": "Japan Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Japan",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Japan f.png"
  },
  {
    "id": 1043,
    "name": "Japan Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Japan",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Japan b.webp"
  },
  {
    "id": 1044,
    "name": "Mexico Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Mexico",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Mexico f.webp"
  },
  {
    "id": 1045,
    "name": "Mexico Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Mexico",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Mexico b.webp"
  },
  {
    "id": 1046,
    "name": "Morocco Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Morocco",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Morocco f.jpg"
  },
  {
    "id": 1047,
    "name": "Morocco Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Morocco",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Morocco b.jpg"
  },
  {
    "id": 1048,
    "name": "Netherlands Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Netherlands",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Netherland f.webp"
  },
  {
    "id": 1049,
    "name": "Netherlands Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Netherlands",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Netherlanx b.webp"
  },
  {
    "id": 1050,
    "name": "New Zealand Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for New Zealand",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/New Zealand f.jpg"
  },
  {
    "id": 1051,
    "name": "New Zealand Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for New Zealand",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/New Zealand b.jpg"
  },
  {
    "id": 1052,
    "name": "Nigeria Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Nigeria",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Nigeria f.webp"
  },
  {
    "id": 1053,
    "name": "Nigeria Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Nigeria",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Nigeria b.webp"
  },
  {
    "id": 1054,
    "name": "Norway Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Norway",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Norway f.jpg"
  },
  {
    "id": 1055,
    "name": "Norway Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Norway",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Norway b.jpg"
  },
  {
    "id": 1056,
    "name": "Paraguay Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Paraguay",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Paraguay f.jpg"
  },
  {
    "id": 1057,
    "name": "Paraguay Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Paraguay",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Paraguay b.jpg"
  },
  {
    "id": 1058,
    "name": "Peru Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Peru",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Peru f.webp"
  },
  {
    "id": 1059,
    "name": "Peru Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Peru",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Peru b.webp"
  },
  {
    "id": 1060,
    "name": "Poland Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Poland",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Poland f.jpg"
  },
  {
    "id": 1061,
    "name": "Poland Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Poland",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Poland b.jpg"
  },
  {
    "id": 1062,
    "name": "Portugal Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Portugal",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Portugal f.jpg"
  },
  {
    "id": 1063,
    "name": "Portugal Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Portugal",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Portugal b.jpg"
  },
  {
    "id": 1064,
    "name": "Saudi Arabia Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Saudi Arabia",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Saudia f.webp"
  },
  {
    "id": 1065,
    "name": "Saudi Arabia Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Saudi Arabia",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Saudia b.webp"
  },
  {
    "id": 1066,
    "name": "Scotland Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Scotland",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Scotland f.webp"
  },
  {
    "id": 1067,
    "name": "Scotland Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Scotland",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Scotland b.webp"
  },
  {
    "id": 1068,
    "name": "Senegal Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Senegal",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Senegal f.jpg"
  },
  {
    "id": 1069,
    "name": "Senegal Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Senegal",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Senegal b.jpg"
  },
  {
    "id": 1070,
    "name": "South Africa Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for South Africa",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/South Africa f.jpg"
  },
  {
    "id": 1071,
    "name": "South Africa Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for South Africa",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/South Africa b.jpg"
  },
  {
    "id": 1072,
    "name": "South Korea Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for South Korea",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/south korea f.webp"
  },
  {
    "id": 1073,
    "name": "South Korea Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for South Korea",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/South Korea b.webp"
  },
  {
    "id": 1074,
    "name": "Spain Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Spain",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Spain f.webp"
  },
  {
    "id": 1075,
    "name": "Spain Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Spain",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Spain b.webp"
  },
  {
    "id": 1076,
    "name": "Sweden Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Sweden",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Sweden f.webp"
  },
  {
    "id": 1077,
    "name": "Sweden Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Sweden",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Sweden b.webp"
  },
  {
    "id": 1078,
    "name": "Switzerland Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Switzerland",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Switzerland f.jpg"
  },
  {
    "id": 1079,
    "name": "Switzerland Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Switzerland",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Switzerland b.jpg"
  },
  {
    "id": 1080,
    "name": "Ukraine Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Ukraine",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Ukraine f.webp"
  },
  {
    "id": 1081,
    "name": "Ukraine Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Ukraine",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Ukraine b.webp"
  },
  {
    "id": 1082,
    "name": "USA Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for USA",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Usa f.webp"
  },
  {
    "id": 1083,
    "name": "USA Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for USA",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Usa b.webp"
  },
  {
    "id": 1084,
    "name": "Venezuela Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Venezuela",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Venezuela f.webp"
  },
  {
    "id": 1085,
    "name": "Venezuela Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Venezuela",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/venezula b.webp"
  },
  {
    "id": 1086,
    "name": "Wales Home Front",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Wales",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Wales f.webp"
  },
  {
    "id": 1087,
    "name": "Wales Home Back",
    "category": "national",
    "price": 35,
    "description": "National Team 2026 jersey for Wales",
    "image": "2026 national Teams/Fifa WC 2026 Jerseys/Wales b.webp"
  }
];

const retrosProducts = [
  {
    "id": 2000,
    "name": "AC Milan Home 2006-2007 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2006-2007 for AC Milan",
    "image": "Jerseys/Jerseys/Retros/Clubs/AC Milan/AC Milan black version 2006-2007 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/AC Milan/AC Milan black version 2006-2007 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/AC Milan/AC Milan black version 2006-2007 Logo.jpg"
  },
  {
    "id": 2001,
    "name": "AC Milan Home 2010-2011 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2010-2011 for AC Milan",
    "image": "Jerseys/Jerseys/Retros/Clubs/AC Milan/AC Milan Home 2010-2011 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/AC Milan/AC Milan Home 2010-2011 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/AC Milan/Ac Milan Home 2010-2011 Logo.jpg"
  },
  {
    "id": 2002,
    "name": "Arsenal Home 2002-2004 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2002-2004 for Arsenal",
    "image": "Jerseys/Jerseys/Retros/Clubs/Arsenal/Arsenal Home 2002-2004 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Arsenal/Arsenal Home 2002-2004 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Arsenal/Arsenal Home 2002-2004 Logo.jpg"
  },
  {
    "id": 2003,
    "name": "Arsenal Home 2019-2020 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2019-2020 for Arsenal",
    "image": "Jerseys/Jerseys/Retros/Clubs/Arsenal/Arsenal Home 2019-2020 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Arsenal/Arsenal Home 2019-2020 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Arsenal/Arsenal Home 2019-2020 Logo.jpg"
  },
  {
    "id": 2004,
    "name": "Barcelona Home 2013-2014 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2013-2014 for Barcelona",
    "image": "Jerseys/Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2013-2014 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2013-2014 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2013-2014 Logo.jpg"
  },
  {
    "id": 2005,
    "name": "Barcelona Home 2015-2016 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2015-2016 for Barcelona",
    "image": "Jerseys/Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2015-2016 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2015-2016 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2015-2016 Logo.jpg"
  },
  {
    "id": 2006,
    "name": "Barcelona Home 2019-2020 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2019-2020 for Barcelona",
    "image": "Jerseys/Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2019-2020 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2019-2020 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Barcelona/Barcelona Home 2019-2020 Logo.jpg"
  },
  {
    "id": 2007,
    "name": "Bayern München Home 2013-2014 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2013-2014 for Bayern München",
    "image": "Jerseys/Jerseys/Retros/Clubs/Bayern München/Bayern München Home 2013-2014 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Bayern München/Bayern München Home 2013-2014 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Bayern München/Bayern München Home 2013-2014 Logo.jpg"
  },
  {
    "id": 2008,
    "name": "Chelsea Home 2011-2012 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2011-2012 for Chelsea",
    "image": "Jerseys/Jerseys/Retros/Clubs/Chelsea/Chelsea Home 2011-2012 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Chelsea/Chelsea Home 2011-2012 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Chelsea/Chelsea Home 2011-2012 Logo.jpg"
  },
  {
    "id": 2009,
    "name": "Inter Mailand Home 2009-2010 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2009-2010 for Inter Mailand",
    "image": "Jerseys/Jerseys/Retros/Clubs/Inter Mailand/Inter Mailand Home 2009-2010 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Inter Mailand/Inter Mailand Home 2009-2010 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Inter Mailand/Inter Mailand Home 2009-2010 Logo.jpg"
  },
  {
    "id": 2010,
    "name": "Juventus Home 1995-1997 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 1995-1997 for Juventus",
    "image": "Jerseys/Jerseys/Retros/Clubs/Juventus/Juventus Home 1995-1997 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Juventus/Juventus Home 1995-1997 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Juventus/Juventus Home 1995-1997 Logojpg.jpg"
  },
  {
    "id": 2011,
    "name": "Juventus Home 2018-2019 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2018-2019 for Juventus",
    "image": "Jerseys/Jerseys/Retros/Clubs/Juventus/Juventus Home 2018-2019 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Juventus/Juventus Home 2018-2019 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Juventus/Juventus Home 2018-2019 Logo.jpg"
  },
  {
    "id": 2012,
    "name": "Liverpool Home 2018-2019 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2018-2019 for Liverpool",
    "image": "Jerseys/Jerseys/Retros/Clubs/Liverpool/Liverpool Home 2018-2019 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Liverpool/Liverpool Home 2018-2019 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Liverpool/Liverpool Home 2018-2019 Logo.jpg"
  },
  {
    "id": 2013,
    "name": "Manchester City Home 2011-2012 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2011-2012 for Manchester City",
    "image": "Jerseys/Jerseys/Retros/Clubs/Manchester City/Manchester City Home 2011-2012 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Manchester City/Manchester City Home 2011-2012 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Manchester City/Manchester City Home 2011-2012 Logo.jpg"
  },
  {
    "id": 2014,
    "name": "Manchester United Home 2007-2008 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2007-2008 for Manchester United",
    "image": "Jerseys/Jerseys/Retros/Clubs/Manchester United/Manchester United Home 2007-2008 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Manchester United/Manchester United Home 2007-2008 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Manchester United/Manchester United Home 2007-2008 Logo.jpg"
  },
  {
    "id": 2015,
    "name": "Marseille Home 1992-1993 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 1992-1993 for Marseille",
    "image": "Jerseys/Jerseys/Retros/Clubs/Marseille/Marseille Home 1992-1993 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Marseille/Marseille Home 1992-1993 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Marseille/Marseille Home 1992-1993 Logo.jpg"
  },
  {
    "id": 2016,
    "name": "PSG Home 2017-2018 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2017-2018 for PSG",
    "image": "Jerseys/Jerseys/Retros/Clubs/PSG/Paris Home 2017-2018 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/PSG/Paris Home 2017-2018 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/PSG/Paris Home 2017-2018 Logo.jpg"
  },
  {
    "id": 2017,
    "name": "Real Madrid Away 2016-2017 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Away jersey 2016-2017 for Real Madrid",
    "image": "Jerseys/Jerseys/Retros/Clubs/Real Madrid/Real Madrid away 2016-2017 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Real Madrid/Real Madrid away 2016-2017 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Real Madrid/Real Madrid away 2016-2017 Logo.jpg"
  },
  {
    "id": 2018,
    "name": "Real Madrid Away 2017-2018 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Away jersey 2017-2018 for Real Madrid",
    "image": "Jerseys/Jerseys/Retros/Clubs/Real Madrid/Real Madrid away 2017-2018 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Real Madrid/Real Madrid away 2017-2018 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Real Madrid/Real Madrid away 2017-2018 Logo.jpg"
  },
  {
    "id": 2019,
    "name": "Real Madrid Home 2017-2018 Front",
    "category": "retro-clubs",
    "price": 37,
    "description": "Retro Home jersey 2017-2018 for Real Madrid",
    "image": "Jerseys/Jerseys/Retros/Clubs/Real Madrid/Real Madrid Home 2017-2018 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/Clubs/Real Madrid/Real Madrid Home 2017-2018 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/Clubs/Real Madrid/Real Madrid Home 2017-2018 Logo.jpg"
  },
  {
    "id": 2020,
    "name": "Argentina Home 2022 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 2022 for Argentina",
    "image": "Jerseys/Jerseys/Retros/National Teams/Argentina/Argentina home 2022 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Argentina/Argentina home 2022 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Argentina/Argentina home 2022 Logo.jpg"
  },
  {
    "id": 2021,
    "name": "Brazil Home 2018 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 2018 for Brazil",
    "image": "Jerseys/Jerseys/Retros/National Teams/Brazil/Brazil Home 2018 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Brazil/Brazil Home 2018 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Brazil/Brazil Home 2018 Logo.jpg"
  },
  {
    "id": 2022,
    "name": "Croatia Home 1998 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 1998 for Croatia",
    "image": "Jerseys/Jerseys/Retros/National Teams/Croatia/Croatia Home 1998 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Croatia/Croatia Home 1998 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Croatia/Croatia Home 1998 Logo.jpg"
  },
  {
    "id": 2023,
    "name": "England Home 1994-1995 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 1994-1995 for England",
    "image": "Jerseys/Jerseys/Retros/National Teams/England/England home 1994-1995 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/England/England home 1994-1995 back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/England/England home 1994-1995 logo.jpg"
  },
  {
    "id": 2024,
    "name": "England Home 2003-2004 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 2003-2004 for England",
    "image": "Jerseys/Jerseys/Retros/National Teams/England/England home 2003-2004 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/England/England home 2003-2004 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/England/England home 2003-2004 Logo.jpg"
  },
  {
    "id": 2025,
    "name": "France Home 2018 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 2018 for France",
    "image": "Jerseys/Jerseys/Retros/National Teams/France/France home 2018 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/France/France home 2018 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/France/France home 2018 Logo.jpg"
  },
  {
    "id": 2026,
    "name": "Germany Home 2014 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 2014 for Germany",
    "image": "Jerseys/Jerseys/Retros/National Teams/Germany/Germany home 2014 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Germany/Germany home 2014 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Germany/Germany home 2014 Logo.jpg"
  },
  {
    "id": 2027,
    "name": "Italy Home 2006 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 2006 for Italy",
    "image": "Jerseys/Jerseys/Retros/National Teams/Italy/Italy Home 2006 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Italy/Italy Home 2006 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Italy/Italy Home 2006 Logo.jpg"
  },
  {
    "id": 2028,
    "name": "Japan Home 2018 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 2018 for Japan",
    "image": "Jerseys/Jerseys/Retros/National Teams/Japan/Japan Home 2018 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Japan/Japan Home 2018 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Japan/Japan Home 2018 Logo.jpg"
  },
  {
    "id": 2029,
    "name": "Marocco Home 1998 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 1998 for Marocco",
    "image": "Jerseys/Jerseys/Retros/National Teams/Marocco/Marocco Home 1998 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Marocco/Marocco Home 1998 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Marocco/Marocco Home 1998 Logo.jpg"
  },
  {
    "id": 2030,
    "name": "Mexico Home 2014 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 2014 for Mexico",
    "image": "Jerseys/Jerseys/Retros/National Teams/Mexico/Mexico Home 2014 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Mexico/Mexico Home 2014 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Mexico/Mexico Home 2014 Logo.jpg"
  },
  {
    "id": 2031,
    "name": "Netherlands Home 2014-2015 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 2014-2015 for Netherlands",
    "image": "Jerseys/Jerseys/Retros/National Teams/Netherlands/Netherlands home 2014-2015 front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Netherlands/Netherlands home 2014-2015 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Netherlands/Netherlands home 2014-2015 Logo.jpg"
  },
  {
    "id": 2032,
    "name": "Nigeria Home 1994-1995 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 1994-1995 for Nigeria",
    "image": "Jerseys/Jerseys/Retros/National Teams/Nigeria/Nigeria Home 1994-1995 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Nigeria/Nigeria Home 1994-1995 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Nigeria/Nigeria Home 1994-1995 Logo.jpg"
  },
  {
    "id": 2033,
    "name": "Portugal Home 2016 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 2016 for Portugal",
    "image": "Jerseys/Jerseys/Retros/National Teams/Portugal/Portugal Home 2016 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Portugal/Portugal Home 2016 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Portugal/Portugal Home 2016 Logo.jpg"
  },
  {
    "id": 2034,
    "name": "Senegal Home 2002 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 2002 for Senegal",
    "image": "Jerseys/Jerseys/Retros/National Teams/Senegal/Senegal Home 2002 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Senegal/Senegal Home 2002 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Senegal/Senegal Home 2002 Logo.jpg"
  },
  {
    "id": 2035,
    "name": "Spain Home 2010 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 2010 for Spain",
    "image": "Jerseys/Jerseys/Retros/National Teams/Spain/Spain Home 2010 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Spain/Spain Home 2010 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Spain/Spain Home 2010 Logo.jpg"
  },
  {
    "id": 2036,
    "name": "Spain Home 2012 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 2012 for Spain",
    "image": "Jerseys/Jerseys/Retros/National Teams/Spain/Spain Home 2012 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Spain/Spain Home 2012 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Spain/Spain Home 2012 Logo.jpg"
  },
  {
    "id": 2037,
    "name": "Türkiye Home 1996 Front",
    "category": "retro-nations",
    "price": 37,
    "description": "Retro Home jersey 1996 for Türkiye",
    "image": "Jerseys/Jerseys/Retros/National Teams/Türkiye/Turkey Home 1996 Front.jpg",
    "imageBack": "Jerseys/Jerseys/Retros/National Teams/Türkiye/Turkey Home 1996 Back.jpg",
    "imageLogo": "Jerseys/Jerseys/Retros/National Teams/Türkiye/Turkey Home 1996 Logo.jpg"
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
// Teams currently out of stock for shorts — shorts option hidden on their cards
const NO_SHORTS_TEAMS = new Set([
  "Czech Republic", "Costa Rica", "Ecuador", "Chile", "Iceland",
  "Ghana", "Hungary", "Jamaica", "New Zealand", "Nigeria",
  "Norway", "Peru", "Poland", "Scotland", "South Korea",
  "Sweden", "Ukraine", "Venezuela", "Wales",
]);

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

    const shortsAvailable = !NO_SHORTS_TEAMS.has(teamName);
    const addonsHtml = showAddons ? `
      <div class="product-addons">
        <div class="size-row">
          <label class="size-label">${t("product.size")}</label>
          <div class="size-options">
            <button type="button" class="size-btn" data-size="S">S</button>
            <button type="button" class="size-btn" data-size="M">M</button>
            <button type="button" class="size-btn" data-size="L">L</button>
            <button type="button" class="size-btn" data-size="XL">XL</button>
            <button type="button" class="size-btn" data-size="XXL">XXL</button>
          </div>
        </div>
        ${shortsAvailable ? `
        <label class="addon-option">
          <input type="checkbox" class="addon-check" data-price="13">
          <span>${t("product.shorts")} <span class="addon-price">+13 CHF</span></span>
        </label>` : ""}
        <label class="addon-option addon-backprint-label">
          <input type="checkbox" class="addon-check addon-backprint-check" data-price="4">
          <span>${t("product.backprint")} <span class="addon-price">+4 CHF</span></span>
        </label>
        <div class="backprint-fields" style="display:none;">
          <input type="text" class="backprint-name" placeholder="${t("product.name.ph")}" maxlength="20" />
          <input type="text" class="backprint-number" placeholder="${t("product.number.ph")}" maxlength="3" />
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
          <span class="price-sale">CHF 35</span>
        </div>
      </div>
      ${addonsHtml}
      <button class="add-to-cart-btn" data-id="${pair.front.id}" data-base-price="35">${t("product.addtocart")} 35</button>
    `;
    grid.appendChild(card);
  });

  // Addon + size logic
  if (showAddons) {
    grid.querySelectorAll(".product-card").forEach((card) => {
      const btn = card.querySelector(".add-to-cart-btn");

      // Size buttons toggle
      card.querySelectorAll(".size-btn").forEach(sBtn => {
        sBtn.addEventListener("click", () => {
          card.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
          sBtn.classList.add("selected");
        });
      });

      // Show/hide backprint fields
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

      // Live price update
      card.querySelectorAll(".addon-check").forEach((check) => {
        check.addEventListener("change", () => {
          let total = 35;
          card.querySelectorAll(".addon-check:checked").forEach(c => {
            total += Number(c.dataset.price);
          });
          btn.textContent = `${t("product.addtocart")} ${total}`;
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
      let selectedSize = "";
      if (card) {
        // Get selected size
        const activeSize = card.querySelector(".size-btn.selected");
        selectedSize = activeSize ? activeSize.dataset.size : "";
        if (!selectedSize) {
          card.querySelector(".size-options").classList.add("size-error");
          setTimeout(() => card.querySelector(".size-options").classList.remove("size-error"), 1500);
          return;
        }

        card.querySelectorAll(".addon-check:checked").forEach(c => {
          extras.push(c.closest(".addon-option").querySelector("span").textContent.trim());
        });
        const bpName   = card.querySelector(".backprint-name");
        const bpNumber = card.querySelector(".backprint-number");
        const bpCheck  = card.querySelector(".addon-backprint-check");
        if (bpCheck && bpCheck.checked) {
          const n = bpName   ? bpName.value.trim()   : "";
          const r = bpNumber ? bpNumber.value.trim()  : "";
          if (n || r) backprintDetail = [n, r].filter(Boolean).join(" #");
        }
      }
      const total = Number(btn.textContent.match(/\d+$/)?.[0] || 35);
      // Use card's h3 (baseName) — already stripped of Front/Back
      const cleanName = card.querySelector("h3")?.textContent || product.name;
      addToCart({
        id: product.id,
        name: cleanName + (extras.length ? " (" + extras.join(", ") + ")" : ""),
        size: selectedSize,
        backprint: backprintDetail,
        price: total,
        quantity: 1,
        image: product.image || "https://via.placeholder.com/60x60?text=Jersey"
      });
      updateCartCount();
    });
  });

  // ── VIEW MORE ──────────────────────────────────────────────────────
  // Remove any existing view-more wrapper before adding a new one
  const existingVm = grid.nextElementSibling;
  if (existingVm && existingVm.classList.contains("view-more-wrapper")) existingVm.remove();

  const INITIAL_LIMIT = 8;
  const allRenderedCards = grid.querySelectorAll(".product-card");
  if (allRenderedCards.length > INITIAL_LIMIT) {
    allRenderedCards.forEach((card, i) => {
      if (i >= INITIAL_LIMIT) { card.style.display = "none"; card.dataset.extraCard = "true"; }
    });
    const remaining = allRenderedCards.length - INITIAL_LIMIT;
    const vmWrap = document.createElement("div");
    vmWrap.className = "view-more-wrapper";
    vmWrap.innerHTML = `<button class="view-more-btn">${t("product.viewmore")} <span class="view-more-count">${remaining} ${t("product.morejerseys")}</span></button>`;
    grid.insertAdjacentElement("afterend", vmWrap);
    vmWrap.querySelector(".view-more-btn").addEventListener("click", () => {
      grid.querySelectorAll("[data-extra-card]").forEach(c => { c.style.display = ""; delete c.dataset.extraCard; });
      vmWrap.remove();
    });
  }
}

function renderNationalTeams() {
  renderPairedSection(nationalTeamsProducts, "national-teams-grid", "nt", true);
}

// Filter products by team name
function filterByTeam(team, gridId, sectionId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  const vmWrap = grid.nextElementSibling && grid.nextElementSibling.classList.contains("view-more-wrapper")
    ? grid.nextElementSibling : null;

  if (team) {
    // Show all matching cards, hide everything else, hide the View More button
    grid.querySelectorAll(".product-card").forEach(card => {
      const show = card.dataset.team === team;
      card.style.display = show ? "" : "none";
      if (show) delete card.dataset.extraCard;
    });
    if (vmWrap) vmWrap.style.display = "none";
  } else {
    // Reset: re-apply 8-card limit, show View More again
    grid.querySelectorAll(".product-card").forEach((card, i) => {
      if (i < 8) { card.style.display = ""; delete card.dataset.extraCard; }
      else { card.style.display = "none"; card.dataset.extraCard = "true"; }
    });
    if (vmWrap) vmWrap.style.display = "";
  }
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
          <span class="price-sale">CHF 37</span>
        </div>
      </div>
      <div class="product-addons">
        <div class="size-row">
          <label class="size-label">${t("product.size")}</label>
          <div class="size-options">
            <button type="button" class="size-btn" data-size="S">S</button>
            <button type="button" class="size-btn" data-size="M">M</button>
            <button type="button" class="size-btn" data-size="L">L</button>
            <button type="button" class="size-btn" data-size="XL">XL</button>
            <button type="button" class="size-btn" data-size="XXL">XXL</button>
          </div>
        </div>
        <label class="addon-option addon-backprint-label">
          <input type="checkbox" class="addon-check addon-backprint-check" data-price="4">
          <span>${t("product.backprint")} <span class="addon-price">+4 CHF</span></span>
        </label>
        <div class="backprint-fields" style="display:none;">
          <input type="text" class="backprint-name" placeholder="${t("product.name.ph")}" maxlength="20" />
          <input type="text" class="backprint-number" placeholder="${t("product.number.ph")}" maxlength="3" />
        </div>
      </div>
      <button class="add-to-cart-btn" data-id="${product.id}">${t("product.addtocart")} ${product.price}</button>
    `;
    grid.appendChild(card);
  });

  ["retros-clubs-grid", "retros-nations-grid"].forEach(gridId => {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    // Size button toggle + backprint listeners + live price update
    grid.querySelectorAll(".product-card").forEach((card) => {
      const btn = card.querySelector(".add-to-cart-btn");
      const productId = Number(btn?.getAttribute("data-id"));
      const product = retrosProducts.find(p => p.id === productId);
      const basePrice = product ? product.price : 37;

      card.querySelectorAll(".size-btn").forEach(sBtn => {
        sBtn.addEventListener("click", () => {
          card.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
          sBtn.classList.add("selected");
        });
      });

      // Show/hide backprint fields
      const backprintCheck  = card.querySelector(".addon-backprint-check");
      const backprintFields = card.querySelector(".backprint-fields");
      if (backprintCheck && backprintFields) {
        backprintCheck.addEventListener("change", () => {
          backprintFields.style.display = backprintCheck.checked ? "flex" : "none";
          if (!backprintCheck.checked) {
            backprintFields.querySelectorAll("input").forEach(i => i.value = "");
          }
        });
      }

      // Live price update
      card.querySelectorAll(".addon-check").forEach((check) => {
        check.addEventListener("change", () => {
          let total = basePrice;
          card.querySelectorAll(".addon-check:checked").forEach(c => {
            total += Number(c.dataset.price);
          });
          if (btn) btn.textContent = `${t("product.addtocart")} ${total}`;
        });
      });
    });

    grid.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = Number(btn.getAttribute("data-id"));
        const product = retrosProducts.find((item) => item.id === productId);
        if (!product) return;
        const card = btn.closest(".product-card");
        const activeSize = card ? card.querySelector(".size-btn.selected") : null;
        if (!activeSize) {
          const sizeOptions = card ? card.querySelector(".size-options") : null;
          if (sizeOptions) {
            sizeOptions.classList.add("size-error");
            setTimeout(() => sizeOptions.classList.remove("size-error"), 1500);
          }
          return;
        }
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
        const total = Number(btn.textContent.match(/\d+$/)?.[0] || product.price);
        addToCart({
          id: product.id,
          name: product.name + (extras.length ? " (" + extras.join(", ") + ")" : ""),
          size: activeSize.dataset.size,
          backprint: backprintDetail,
          price: total,
          quantity: 1,
          image: product.image || "https://via.placeholder.com/60x60?text=Jersey"
        });
        updateCartCount();
      });
    });

    // ── VIEW MORE ────────────────────────────────────────────────────
    // Remove any existing view-more wrapper before adding a new one
    const existingRetroVm = grid.nextElementSibling;
    if (existingRetroVm && existingRetroVm.classList.contains("view-more-wrapper")) existingRetroVm.remove();

    const RETRO_LIMIT = 8;
    const retroCards = grid.querySelectorAll(".product-card");
    if (retroCards.length > RETRO_LIMIT) {
      retroCards.forEach((card, i) => {
        if (i >= RETRO_LIMIT) { card.style.display = "none"; card.dataset.extraCard = "true"; }
      });
      const remaining = retroCards.length - RETRO_LIMIT;
      const vmWrap = document.createElement("div");
      vmWrap.className = "view-more-wrapper";
      vmWrap.innerHTML = `<button class="view-more-btn">${t("product.viewmore")} <span class="view-more-count">${remaining} ${t("product.morejerseys")}</span></button>`;
      grid.insertAdjacentElement("afterend", vmWrap);
      vmWrap.querySelector(".view-more-btn").addEventListener("click", () => {
        grid.querySelectorAll("[data-extra-card]").forEach(c => { c.style.display = ""; delete c.dataset.extraCard; });
        vmWrap.remove();
      });
    }
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

// ── REVIEWS DATA ─────────────────────────────────────────────────────
const reviewsData = [
  { name: "Marco T.",  jersey: "Barcelona Home 25/26",    rating: 5, text: "Qualität ist wirklich top! Genau wie auf dem Bild. Sehr schnelle Lieferung. Werde wieder bestellen!", photo: null, date: "März 2026",  verified: true },
  { name: "Lukas B.",  jersey: "Germany Home WC 2026",    rating: 5, text: "Perfekt für das WM 2026 – echte Premium-Qualität. Backprint kam super sauber raus.", photo: null, date: "März 2026",  verified: true },
  { name: "Selin K.",  jersey: "Real Madrid Away",        rating: 4, text: "Sieht sehr gut aus, Passform ist perfekt. Versand war schnell, gerne wieder!", photo: null, date: "Feb 2026",   verified: true },
  { name: "Jonas W.",  jersey: "Argentina Home WC 2026",  rating: 5, text: "Messi-Shirt ist der Wahnsinn. Qualität top, Preis absolut unschlagbar. Klare Empfehlung!", photo: null, date: "Feb 2026",   verified: true },
  { name: "Emre D.",   jersey: "PSG Retro 2017/18",       rating: 5, text: "Retro-Trikot genau wie erwartet. Tolle Qualität, schnelle Abwicklung. Sehr zufrieden!", photo: null, date: "Jan 2026",   verified: true },
  { name: "Ana P.",    jersey: "France Home WC 2026",     rating: 5, text: "Schönes Trikot, sehr gute Qualität. Freue mich schon auf die WM! Alles top.", photo: null, date: "März 2026",  verified: true },
];

function getStars(n) {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function buildReviewCard(r) {
  const initials = r.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
  const badge = r.verified
    ? `<span class="review-verified-badge">✓ Verified Purchase</span>`
    : `<span class="review-pending-badge">⏳ Pending Verification</span>`;
  const photoHtml = r.photo
    ? `<img class="review-card-photo" src="${r.photo}" alt="Customer photo" data-lightbox-src="${r.photo}" />`
    : "";
  return `
    <div class="review-card${r.verified ? "" : " pending"}">
      <div class="review-card-header">
        <span class="review-card-stars">${getStars(r.rating)}</span>
        <span class="review-card-date">${r.date}</span>
      </div>
      ${photoHtml}
      <p class="review-card-text">"${r.text}"</p>
      <div class="review-card-footer">
        <div class="review-card-avatar">${initials}</div>
        <div class="review-card-meta">
          <div class="review-card-name">${r.name}</div>
          <div class="review-card-jersey">${r.jersey}</div>
          ${badge}
        </div>
      </div>
    </div>`;
}

async function renderReviews() {
  const track = document.getElementById("reviews-track");
  const dotsEl = document.getElementById("reviews-dots");
  if (!track || !dotsEl) return;

  // Load approved reviews from server, fall back to hardcoded sample data
  let serverApproved = [];
  try {
    const res = await fetch("/api/reviews/approved");
    if (res.ok) serverApproved = await res.json();
  } catch(e) {}
  const allReviews = serverApproved.length ? serverApproved : reviewsData;
  if (!allReviews.length) return;

  track.innerHTML = allReviews.map(r => buildReviewCard(r)).join("");

  function cardsPerView() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  }

  let currentIdx = 0;
  function maxIdx() { return Math.max(0, allReviews.length - cardsPerView()); }

  function updateSlider(animate) {
    const cards = track.querySelectorAll(".review-card");
    if (!cards.length) return;
    const cardW = cards[0].getBoundingClientRect().width;
    const gap = 16;
    track.style.transition = animate === false ? "none" : "transform 0.4s ease";
    track.style.transform = `translateX(-${currentIdx * (cardW + gap)}px)`;
    dotsEl.querySelectorAll(".rev-dot").forEach((d, i) => d.classList.toggle("active", i === currentIdx));
  }

  function buildDots() {
    const count = maxIdx() + 1;
    dotsEl.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const d = document.createElement("button");
      d.className = "rev-dot" + (i === 0 ? " active" : "");
      d.setAttribute("aria-label", `Review page ${i + 1}`);
      d.addEventListener("click", () => { currentIdx = i; updateSlider(); });
      dotsEl.appendChild(d);
    }
  }

  buildDots();
  updateSlider(false);

  document.getElementById("rev-prev")?.addEventListener("click", () => {
    currentIdx = currentIdx <= 0 ? maxIdx() : currentIdx - 1;
    updateSlider();
  });
  document.getElementById("rev-next")?.addEventListener("click", () => {
    currentIdx = currentIdx >= maxIdx() ? 0 : currentIdx + 1;
    updateSlider();
  });

  // Auto-play
  let timer = setInterval(() => { currentIdx = currentIdx >= maxIdx() ? 0 : currentIdx + 1; updateSlider(); }, 4500);
  track.addEventListener("mouseenter", () => clearInterval(timer));
  track.addEventListener("mouseleave", () => {
    timer = setInterval(() => { currentIdx = currentIdx >= maxIdx() ? 0 : currentIdx + 1; updateSlider(); }, 4500);
  });

  // Touch / swipe
  let touchX = 0;
  track.addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      currentIdx = diff > 0 ? Math.min(currentIdx + 1, maxIdx()) : Math.max(currentIdx - 1, 0);
      updateSlider();
    }
  });

  // Rebuild on resize
  window.addEventListener("resize", () => {
    if (currentIdx > maxIdx()) currentIdx = maxIdx();
    buildDots();
    updateSlider(false);
  });
}

// ── REVIEW MODAL ─────────────────────────────────────────────────────
function initReviewModal() {
  const overlay  = document.getElementById("review-overlay");
  const closeBtn = document.getElementById("review-close");
  const openBtn  = document.getElementById("write-review-btn");
  if (!overlay || !openBtn) return;

  openBtn.addEventListener("click",  () => overlay.classList.add("active"));
  closeBtn?.addEventListener("click", () => overlay.classList.remove("active"));
  overlay.addEventListener("click",  e => { if (e.target === overlay) overlay.classList.remove("active"); });

  // Star picker
  const stars = overlay.querySelectorAll(".star-picker .star");
  const ratingInput = overlay.querySelector("#rating-input");
  let selectedRating = 0;
  stars.forEach(star => {
    star.addEventListener("mouseenter", () => {
      const v = Number(star.dataset.value);
      stars.forEach(s => s.classList.toggle("selected", Number(s.dataset.value) <= v));
    });
    star.addEventListener("mouseleave", () => {
      stars.forEach(s => s.classList.toggle("selected", Number(s.dataset.value) <= selectedRating));
    });
    star.addEventListener("click", () => {
      selectedRating = Number(star.dataset.value);
      if (ratingInput) ratingInput.value = selectedRating;
      stars.forEach(s => s.classList.toggle("selected", Number(s.dataset.value) <= selectedRating));
    });
  });

  // Photo upload + preview
  const photoInput  = overlay.querySelector("#review-photo-input");
  const photoName   = overlay.querySelector("#photo-name");
  const previewWrap = overlay.querySelector("#photo-preview-wrap");
  const previewImg  = overlay.querySelector("#photo-preview");
  const removeBtn   = overlay.querySelector("#photo-remove-btn");
  let photoBase64   = null;

  photoInput?.addEventListener("change", () => {
    const file = photoInput.files[0];
    if (!file) return;
    photoName.textContent = file.name;
    const reader = new FileReader();
    reader.onload = e => {
      photoBase64 = e.target.result;
      previewImg.src = photoBase64;
      previewWrap.style.display = "inline-block";
    };
    reader.readAsDataURL(file);
  });
  removeBtn?.addEventListener("click", () => {
    photoBase64 = null;
    photoInput.value = "";
    photoName.textContent = "No file chosen";
    previewWrap.style.display = "none";
  });

  // Form submit
  const form = overlay.querySelector("#review-form");
  form?.addEventListener("submit", async e => {
    e.preventDefault();
    if (!selectedRating) {
      overlay.querySelector(".star-picker").style.animation = "shake 0.3s ease";
      setTimeout(() => overlay.querySelector(".star-picker").style.animation = "", 400);
      return;
    }
    const orderEmail  = form.querySelector("[name='orderEmail']").value.trim();
    const reviewerName = form.querySelector("[name='reviewerName']").value.trim();
    const jersey       = form.querySelector("[name='jersey']").value.trim();
    const reviewText   = form.querySelector("[name='review']").value.trim();
    const dateStr      = new Date().toLocaleDateString("de-CH", { month: "long", year: "numeric" });

    // Submit review to local server (saved to reviews-pending.json for admin panel)
    let savedToAdmin = false;
    try {
      const apiRes = await fetch("/api/review/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: reviewerName, jersey, rating: selectedRating,
          text: reviewText, photo: photoBase64, date: dateStr, email: orderEmail,
        }),
      });
      savedToAdmin = apiRes.ok;
    } catch(err) {
      savedToAdmin = false;
    }

    // Always notify owner via Formspree email (contains full data for manual entry if API failed)
    const starsDisplay = "⭐".repeat(selectedRating) + "☆".repeat(5 - selectedRating);
    try {
      await fetch("https://formspree.io/f/mreokeok", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: "⭐ New Review – JerseyPhase" + (savedToAdmin ? "" : " [ADMIN SAVE FAILED – manual entry needed]"),
          "Customer Email": orderEmail,
          "Reviewer Name": reviewerName,
          "Jersey": jersey,
          "Rating": starsDisplay + " (" + selectedRating + "/5)",
          "Review Text": reviewText,
          "Date": dateStr,
          "Photo Attached": photoBase64 ? "Yes" : "No",
          "Saved to Admin Panel": savedToAdmin ? "Yes ✅" : "No ❌ – please add manually via Admin → ✍️ Review hinzufügen",
        }),
      });
    } catch(err) {}

    // Show success screen
    form.innerHTML = `
      <div class="review-success">
        <span class="review-success-icon">✅</span>
        <h4>Thank you for your review!</h4>
        <p>We'll verify your order and publish it within 24 hours.<br>You can already see it below as "Pending Verification".</p>
      </div>`;

    // Refresh slider with new pending review
    renderReviews();
  });
}

// ── CONTACT FORM ─────────────────────────────────────────────────────
function initContactForm() {
  const form       = document.getElementById("contact-form");
  const successEl  = document.getElementById("contact-success");
  const errorEl    = document.getElementById("contact-error");
  if (!form) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const name    = form.querySelector("[name='name']").value.trim();
    const email   = form.querySelector("[name='email']").value.trim();
    const subject = form.querySelector("[name='subject']").value.trim();
    const message = form.querySelector("[name='message']").value.trim();
    if (!name || !email || !subject || !message) return;

    const btn = form.querySelector(".contact-submit-btn");
    btn.textContent = "Sending…";
    btn.disabled = true;
    successEl.style.display = "none";
    errorEl.style.display   = "none";

    try {
      const res = await fetch("https://formspree.io/f/mreokeok", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ _subject: "📬 New Contact Message – JerseyPhase", name, email, subject, message }),
      });
      if (res.ok) {
        successEl.style.display = "block";
        form.reset();
      } else {
        errorEl.style.display = "block";
      }
    } catch(err) {
      errorEl.style.display = "block";
    }
    btn.textContent = "Send Message →";
    btn.disabled = false;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderNationalTeams();
  renderRetros();
  renderReviews();
  initReviewModal();
  initContactForm();
  updateCartCount();
  renderCart();
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", navMenu.classList.contains("active"));
  });
}

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
    document.querySelectorAll(".banner-divider")
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

    let searchSliderCounter = 0;
    matches.forEach(({ card, label }) => {
      // Prepend a small badge indicating the section
      const { text, cls } = labelMap[label] || labelMap.fan;
      const badge = document.createElement("div");
      badge.className = "search-result-badge" + (cls ? " " + cls : "");
      badge.textContent = text;
      // Insert badge before card content
      const inner = card.cloneNode(true);
      // Fix hidden cards (e.g. those behind "View More")
      inner.style.display = "";
      // Fix duplicate slider IDs so prev/next buttons work on the cloned card
      const sliderEl = inner.querySelector(".product-image-slider");
      if (sliderEl && sliderEl.id) {
        const newSliderId = "search-slider-" + (searchSliderCounter++);
        sliderEl.id = newSliderId;
        const prevBtn = inner.querySelector(".slider-btn.slider-prev");
        const nextBtn = inner.querySelector(".slider-btn.slider-next");
        if (prevBtn) prevBtn.setAttribute("onclick", `slideImage('${newSliderId}', -1)`);
        if (nextBtn) nextBtn.setAttribute("onclick", `slideImage('${newSliderId}', 1)`);
      }
      const infoDiv = inner.querySelector(".product-info");
      if (infoDiv) infoDiv.insertBefore(badge, infoDiv.firstChild);
      resultsGrid.appendChild(inner);
    });

    // Re-attach size button toggle + backprint listeners on the cloned cards
    resultsGrid.querySelectorAll(".product-card").forEach((card) => {
      card.querySelectorAll(".size-btn").forEach(sBtn => {
        sBtn.addEventListener("click", () => {
          card.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
          sBtn.classList.add("selected");
        });
      });

      // Show/hide backprint fields
      const backprintCheck  = card.querySelector(".addon-backprint-check");
      const backprintFields = card.querySelector(".backprint-fields");
      if (backprintCheck && backprintFields) {
        backprintCheck.addEventListener("change", () => {
          backprintFields.style.display = backprintCheck.checked ? "flex" : "none";
          if (!backprintCheck.checked) {
            backprintFields.querySelectorAll("input").forEach(i => i.value = "");
          }
        });
      }

      // Live price update for addons
      const btn = card.querySelector(".add-to-cart-btn");
      const productId = Number(btn?.getAttribute("data-id"));
      const allProducts = [...products, ...nationalTeamsProducts, ...retrosProducts];
      const product = allProducts.find(p => p.id === productId);
      const basePrice = product ? product.price : 35;
      card.querySelectorAll(".addon-check").forEach((check) => {
        check.addEventListener("change", () => {
          let total = basePrice;
          card.querySelectorAll(".addon-check:checked").forEach(c => {
            total += Number(c.dataset.price);
          });
          if (btn) btn.textContent = `${t("product.addtocart")} ${total}`;
        });
      });
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
        let selectedSize = "";
        if (card) {
          // Get selected size (required if size buttons exist)
          const sizeOptions = card.querySelector(".size-options");
          const activeSize  = card.querySelector(".size-btn.selected");
          if (sizeOptions) {
            selectedSize = activeSize ? activeSize.dataset.size : "";
            if (!selectedSize) {
              sizeOptions.classList.add("size-error");
              setTimeout(() => sizeOptions.classList.remove("size-error"), 1500);
              return;
            }
          }
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
        const total = Number(btn.textContent.match(/\d+$/)?.[0] || product.price || 35);
        const cleanName = card?.querySelector("h3")?.textContent || product.name;
        addToCart({
          id: product.id,
          name: cleanName + (extras.length ? " (" + extras.join(", ") + ")" : ""),
          size: selectedSize,
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

// ── Checkout form — Stripe Payment + EmailJS confirmation ────────────────────
const EMAILJS_SERVICE  = "service_2nkjmgb";
const EMAILJS_TEMPLATE = "template_mhnuwwt";

// ── Stripe initialisation (runs only on checkout page) ───────────────────────
const checkoutForm = document.getElementById("checkout-form");
if (checkoutForm) {
  const successMessage = document.getElementById("checkout-success");
  const errorMessage   = document.getElementById("checkout-error");
  const submitBtn      = document.getElementById("stripe-submit-btn");

  let stripe         = null;
  let cardNumber     = null;
  let cardExpiry     = null;
  let cardCvc        = null;

  const cardStyle = {
    base: {
      color:           "#ffffff",
      fontFamily:      "'Inter', 'Poppins', sans-serif",
      fontSize:        "15px",
      fontSmoothing:   "antialiased",
      "::placeholder": { color: "rgba(255,255,255,0.38)" },
    },
    invalid: { color: "#f87171" },
  };

  // Fetch publishable key from backend, then mount split card fields
  (async () => {
    try {
      const res  = await fetch("/api/stripe-public-key");
      const data = await res.json();
      if (!data.publicKey) throw new Error("No Stripe public key configured.");

      stripe = Stripe(data.publicKey);
      const elements = stripe.elements();

      // Card number
      cardNumber = elements.create("cardNumber", { style: cardStyle, showIcon: true });
      cardNumber.mount("#stripe-card-number");

      // Expiry
      cardExpiry = elements.create("cardExpiry", { style: cardStyle });
      cardExpiry.mount("#stripe-card-expiry");

      // CVC
      cardCvc = elements.create("cardCvc", { style: cardStyle });
      cardCvc.mount("#stripe-card-cvc");

      // Show errors from any field
      const errEl = document.getElementById("stripe-card-errors");
      [cardNumber, cardExpiry, cardCvc].forEach(el => {
        el.on("change", (event) => {
          errEl.textContent = event.error ? event.error.message : "";
        });
      });
    } catch (err) {
      console.error("Stripe init error:", err.message);
      const cardSection = document.getElementById("stripe-card-section");
      if (cardSection) {
        cardSection.innerHTML = `<p style="color:#f87171;font-size:0.9rem;">⚠️ Payment unavailable — ${err.message}</p>`;
      }
    }
  })();

  // ── Form submit handler ───────────────────────────────────────────────────
  checkoutForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!checkoutForm.checkValidity()) {
      checkoutForm.reportValidity();
      return;
    }

    if (!stripe || !cardNumber) {
      errorMessage.textContent = "⚠️ Payment system not loaded yet. Please refresh and try again.";
      errorMessage.hidden = false;
      return;
    }

    // ── Collect form values ─────────────────────────────────────────────
    const fullName   = document.getElementById("fullName").value.trim();
    const email      = document.getElementById("email").value.trim();
    const phone      = document.getElementById("phone").value.trim();
    const address    = document.getElementById("address").value.trim();
    const city       = document.getElementById("city").value.trim();
    const postalCode = document.getElementById("postalCode").value.trim();
    const countryCode = document.getElementById("country").value; // already ISO e.g. "CH"
    const notes      = document.getElementById("notes").value.trim();

    // ── Validate cart ───────────────────────────────────────────────────
    const cart = getCart();
    if (cart.length === 0) {
      errorMessage.textContent = "⚠️ Your cart is empty. Please add a jersey first.";
      errorMessage.hidden = false;
      return;
    }

    const subtotal         = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const discountPercent  = (typeof getDiscountPercent === "function") ? getDiscountPercent() : 0;
    const discountCode     = (typeof getActiveDiscount  === "function") ? getActiveDiscount()  : null;
    const discountSaving   = +(subtotal * discountPercent / 100).toFixed(2);
    const total            = +(subtotal - discountSaving).toFixed(2);

    // ── Build readable cart list ────────────────────────────────────────
    const cartText = cart.map((item, i) => {
      let line = `${i + 1}. ${item.name}  ×${item.quantity}  CHF ${(item.price * item.quantity).toFixed(2)}`;
      if (item.size)      line += `  |  Size: ${item.size}`;
      if (item.backprint) line += `  |  Backprint: ${item.backprint}`;
      return line;
    }).join("
");

    // Unique order ID e.g. JB-K3F2X
    const order_id = "JB-" + Date.now().toString(36).toUpperCase().slice(-5);

    submitBtn.disabled    = true;
    submitBtn.textContent = "Processing…";
    successMessage.hidden = true;
    errorMessage.hidden   = true;

    try {
      // ── Step 1: Create PaymentIntent on backend ─────────────────────
      const piRes  = await fetch("/api/create-payment-intent", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount:         total,
          order_id,
          customer_email: email,
          customer_name:  fullName,
        }),
      });
      const piData = await piRes.json();
      if (!piRes.ok || !piData.clientSecret) {
        throw new Error(piData.error || "Could not create payment. Please try again.");
      }

      // ── Step 2: Confirm card payment via Stripe ─────────────────────
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
        piData.clientSecret,
        {
          payment_method: {
            card: cardNumber,   // use cardNumber element for split fields
            billing_details: {
              name:  fullName,
              email,
              phone,
              address: {
                line1:       address,
                city,
                postal_code: postalCode,
                country:     countryCode, // already correct ISO code e.g. "CH"
              },
            },
          },
        }
      );

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      if (paymentIntent.status !== "succeeded") {
        throw new Error("Payment not completed. Please try again.");
      }

      // ── Step 3: Save order to local server ──────────────────────────
      const orderItems = cart.map(i => ({
        name:      i.name,
        size:      i.size      || "",
        backprint: i.backprint || "",
        quantity:  i.quantity,
        price:     i.price,
        subtotal:  +(i.price * i.quantity).toFixed(2),
      }));
      fetch("/api/order/submit", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id,
          status:   "paid",
          customer: { name: fullName, email, phone, address, city, postalCode, country: countryCode },
          items:    orderItems,
          total:    +total.toFixed(2),
          notes:    notes || "",
          stripe_payment_id: paymentIntent.id,
        }),
      }).catch(() => {}); // silent if server not running

      // ── Step 4: Send confirmation email via EmailJS ─────────────────
      const discountLine = discountPercent > 0
        ? `
Discount code: ${discountCode} (−${discountPercent}%)  −CHF ${discountSaving.toFixed(2)}`
        : "";
      const templateParams = {
        name:         fullName,
        title:        `Order ${order_id} — CHF ${total.toFixed(2)}`,
        order_id,
        email,
        phone,
        address:      `${address}, ${postalCode} ${city}, ${countryCode}`,
        notes:        notes || "—",
        cart_items:   cartText,
        total:        `CHF ${total.toFixed(2)}${discountLine ? `
Subtotal: CHF ${subtotal.toFixed(2)}${discountLine}` : ""}`,
        reply_to:     email,
        payment_info: `----------------------------
PAYMENT CONFIRMED ✅
----------------------------
CHF ${total.toFixed(2)} paid by card via Stripe.${discountPercent > 0 ? `
(Discount code ${discountCode}: −${discountPercent}%, saved CHF ${discountSaving.toFixed(2)})` : ""}
Stripe Payment ID: ${paymentIntent.id}
Order ID: ${order_id}
----------------------------
Your order is confirmed. We will ship it shortly!`,
      };

      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        ...templateParams,
        to_email: email,
      });

      // ── Step 5: Success ─────────────────────────────────────────────
      successMessage.hidden = false;
      errorMessage.hidden   = true;
      checkoutForm.reset();
      cardNumber.clear();
      cardExpiry.clear();
      cardCvc.clear();
      clearCart();
      updateCartCount();

    } catch (err) {
      console.error("Checkout error:", err);
      errorMessage.textContent = "⚠️ " + (err.message || "An error occurred. Please try again.");
      errorMessage.hidden = false;
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = "Pay & Place Order →";
    }
  });
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
(function initLightbox() {
  const overlay  = document.getElementById("lightbox-overlay");
  const imgEl    = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn  = document.getElementById("lightbox-prev");
  const nextBtn  = document.getElementById("lightbox-next");
  const labelEl  = document.getElementById("lightbox-label");
  const dotsEl   = document.getElementById("lightbox-dots");
  if (!overlay || !imgEl) return;

  let images  = [];   // [{ src, alt, label }]
  let current = 0;

  function getLabel(sliderEl, index) {
    // Retro sliders store labels in data-labels JSON
    const stored = sliderEl && sliderEl.dataset.labels;
    if (stored) {
      try { return JSON.parse(stored)[index] || ""; } catch(e) {}
    }
    // Paired sliders: first = Front, second = Back
    return index === 0 ? "Front" : index === 1 ? "Back" : "";
  }

  function renderDots() {
    if (!dotsEl) return;
    dotsEl.innerHTML = images.map((_, i) =>
      `<span class="lb-dot${i === current ? " active" : ""}"></span>`
    ).join("");
  }

  function showImage(index) {
    current = (index + images.length) % images.length;
    const item = images[current];
    imgEl.src = item.src;
    imgEl.alt = item.alt || "Jersey";
    if (labelEl) labelEl.textContent = item.label || "";
    // Show/hide arrows only when multiple images
    const multi = images.length > 1;
    if (prevBtn) prevBtn.hidden = !multi;
    if (nextBtn) nextBtn.hidden = !multi;
    renderDots();
  }

  function openLightbox(clickedImg) {
    const slider = clickedImg.closest(".product-image-slider");
    if (slider) {
      // Collect all slides from this slider
      const slides = Array.from(slider.querySelectorAll(".slide"));
      const labels = slider.dataset.labels ? JSON.parse(slider.dataset.labels) : null;
      images = slides.map((s, i) => ({
        src:   s.src,
        alt:   s.alt,
        label: labels ? (labels[i] || "") : (i === 0 ? "Front" : i === 1 ? "Back" : ""),
      }));
      // Always open on the currently ACTIVE (visible) slide, not the clicked element
      const activeSlide = slider.querySelector(".slide.active");
      current = activeSlide ? slides.indexOf(activeSlide) : 0;
      if (current < 0) current = 0;
    } else {
      // Single image card (no slider)
      images  = [{ src: clickedImg.src, alt: clickedImg.alt, label: "" }];
      current = 0;
    }
    showImage(current);
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => { imgEl.src = ""; images = []; }, 200);
  }

  // Controls
  if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); showImage(current - 1); });
  if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); showImage(current + 1); });
  closeBtn.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeLightbox(); });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("active")) return;
    if (e.key === "Escape")      closeLightbox();
    if (e.key === "ArrowLeft")   showImage(current - 1);
    if (e.key === "ArrowRight")  showImage(current + 1);
  });

  // Delegate clicks on product images
  document.addEventListener("click", (e) => {
    if (e.target.matches(".product-image img") ||
        e.target.matches(".product-image-slider .slide")) {
      openLightbox(e.target);
    }
  });
})();

// ── Review Photo Lightbox ─────────────────────────────────────────────────
(function () {
  const lightbox  = document.getElementById("review-photo-lightbox");
  const closeBtn  = document.getElementById("review-photo-lightbox-close");
  const lightboxImg = lightbox ? lightbox.querySelector("img") : null;

  if (!lightbox || !lightboxImg) return;

  function openReviewLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add("rpl-open");
    document.body.style.overflow = "hidden";
  }

  function closeReviewLightbox() {
    lightbox.classList.remove("rpl-open");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  // Click on review photo
  document.addEventListener("click", (e) => {
    if (e.target.matches(".review-card-photo")) {
      const src = e.target.dataset.lightboxSrc || e.target.src;
      if (src) openReviewLightbox(src);
    }
  });

  // Close button
  closeBtn.addEventListener("click", closeReviewLightbox);

  // Click outside image closes lightbox
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeReviewLightbox();
  });

  // ESC key closes lightbox
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("rpl-open")) {
      closeReviewLightbox();
    }
  });
})();