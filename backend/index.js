import express from 'express';
import dotenv from "dotenv";
import cors from 'cors'; 
import path from "path";
import { fileURLToPath } from "url";
import fetch from 'node-fetch'; // Import node-fetch


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "backend/.env" });
}

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}


app.get('/', (req, res) => {
    res.send('hello world!');
});

app.get('/api/news/index', async (req, res) => {
    const apiKey = process.env.NEWS_API;
    const url = `https://newsapi.org/v2/top-headlines?${req._parsedUrl.query}&apiKey=${apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`Failed to fetch data: Status - ${response.status}, Status Text - ${response.statusText}, URL - ${response.url}`);
      }
      const data = await response.json();
        res.json(data);
    } catch (error) {
      console.error('Error fetching news:', error);
      res.status(500).json({ error });
    }
});


app.get('/api/news/everything', async (req, res) => {
  const apiKey = process.env.NEWS_API;
  let url = `https://newsapi.org/v2/everything?${req._parsedUrl.query}&apiKey=${apiKey}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`Failed to fetch data: Status - ${response.status}, Status Text - ${response.statusText}, URL - ${response.url}`);
    }
    const data = await response.json();
        res.json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error });
  }
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

