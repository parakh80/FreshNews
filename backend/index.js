const express = require('express');
const app = express();

app.use(express.json());
const cors = require('cors'); 
const path = require("path");
const dotenv = require("dotenv");


// Enable CORS for all routes
app.use(cors());

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config();
}


if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

app.get('/',(req,res)=>{
    res.send('hello');
})

app.get('/api/news', async (req, res) => {
    const { country, category, page, pageSize } = req.query;
    const apiKey = process.env.REACT_APP_NEWS_API;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error fetching news:', error);
      res.status(500).json({ error});

    }
  }); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});