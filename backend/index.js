const express = require('express');
const app = express();

app.use(express.json());
const cors = require('cors'); 

// Enable CORS for all routes
app.use(cors());
app.get('/',(req,res)=>{
    res.send('land');
})
app.get('/api/news', async (req, res) => {
    const { country, category, apiKey, page, pageSize } = req.query;
    console.log(req.query);
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
  console.log(`Server is running on port ${PORT}`);
});

