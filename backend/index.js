const express = require("express");
const dotenv = require('dotenv');
const Connection = require('./Database/database');
const Router = require('./routes/Route');
const cors = require('cors');
dotenv.config();
const app = express();

// app.use(cors());
app.use(
    cors({
      origin: ["https://tourist-guide-ashen.vercel.app","http://localhost:5173","https://priest-finder-web-app.onrender.com"],
      methods: ["POST", "GET", "PUT"],
      credentials: true,
    })
  );
app.use(express.json());
app.use('/',Router);

const Port = 5000;

// function haversine(lat1, lon1, lat2, lon2) {
//   const R = 6371; // Earth's radius in km
//   const toRadians = (angle) => angle * (Math.PI / 180);

//   const dLat = toRadians(lat2 - lat1);
//   const dLon = toRadians(lon2 - lon1);
//   const lat1Rad = toRadians(lat1);
//   const lat2Rad = toRadians(lat2);

//   const a = Math.sin(dLat / 2) ** 2 +
//             Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const distance = R * c;

//   return distance; // Distance in km
// }

// // Example usage:
// const lat1 = 27.569933, lon1 = 77.688809; // Delhi
// const lat2 = 27.56284, lon2 =77.69716; // Mumbai

// console.log(`Distance: ${haversine(lat1, lon1, lat2, lon2).toFixed(2)} km`);



Connection();
app.listen(Port,()=>console.log(`server running http://localhost:${Port}`));