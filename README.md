## Overview
FreshNews provides users with an intuitive interface to browse through news articles from different categories. With the ability to fetch data from the News API, users can stay informed about current events and explore topics of interest effortlessly.

#### Navbar:
![Image 1](frontend/public/images/navbar.png)

#### NewsCart:
![Image 2](frontend/public/images/card.png)

#### Night mode:
![Image 3](frontend/public/images/night_mode.png)

#### Footer:
![Image 5](frontend/public/images/footer.png)

#### Loading functionality:

![loading](frontend/public/gifs/loading.gif)

#### Navigation functionality:

![index](frontend/public/gifs/index.gif)

#### Search functionality:

![search](frontend/public/gifs/search.gif)


## Getting Started
To get started with FreshNews, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/parakh80/FreshNews.git
   ```

2. **Set Up Environment Variables:**
   - Navigate to the backend directory and create a `.env` file.
   - Add the following environment variable to the `.env` file:
     ```
     NEWS_API_KEY=your_news_api_key
     MODE=DEVELOPMENT
     PORT=
     ```
     Note: Replace `your_news_api_key` with your actual News API key obtained from newsapi.org.

3. **Install Dependencies:**
   - Navigate to the root directory of the project.
   - Run the following command to install backend dependencies:
     ```bash
     npm install
     ```
   - Navigate to the frontend directory.
   - Run the following command to install frontend dependencies:
     ```bash
     npm install
     ```

4. **Run the Application:**
   - Navigate to the backend directory and run the following command to start the backend server:
     ```bash
     npm run dev
     ```
   - Navigate to the frontend directory and run the following command to start the frontend server:
     ```bash
     npm start
     ```

5. **Access FreshNews:**
   - Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access FreshNews.

## Contributing
Contributions are welcome! Please feel free to submit issues and pull requests.
