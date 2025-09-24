# Anime Quote Generator

A web application that fetches and displays random quotes from your favorite anime series using the AnimeChan API.

## Description

This is a capstone project that allows users to search for random quotes from specific anime series. Users can enter an anime name, and the application will fetch a random quote from that anime along with the character who said it.

## Features

- 🎌 Search for quotes from specific anime series
- 🎭 Display character names along with their quotes
- 🔄 Random quote generation for each search
- ⚡ Fast and responsive web interface
- 🛡️ Error handling for invalid or unavailable anime names

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript Templates)
- **HTTP Client**: Axios
- **Body Parsing**: body-parser
- **API**: AnimeChan API (https://api.animechan.io/)

## Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd "Capstone Project"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   node index.js
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Usage

1. Open the application in your web browser
2. Enter the name of an anime series in the search form
3. Click submit to get a random quote from that anime
4. The application will display:
   - The anime name you searched for
   - A random quote from that anime
   - The character who said the quote

## API Information

This application uses the [AnimeChan API](https://api.animechan.io/) to fetch anime quotes. The API endpoint used is:
```
GET https://api.animechan.io/v1/quotes/random?anime={animeName}
```

## Project Structure

```
Capstone Project/
├── index.js          # Main application file
├── package.json      # Project dependencies and metadata
├── package-lock.json # Dependency lock file
├── .gitignore       # Git ignore rules
├── public/          # Static assets (CSS, JS, images)
├── views/           # EJS template files
├── node_modules/    # Installed dependencies
└── README.md        # Project documentation
```

## Error Handling

The application includes error handling for:
- Invalid anime names
- API connection issues
- Anime series not found in the database

When an error occurs, users will see the message: "Sorry, no quote found for that anime."

## Development

### Prerequisites
- Node.js (version 18 or higher)
- npm (Node Package Manager)

### Running in Development Mode
```bash
node index.js
```

The server will start on port 3000 by default.

## Contributing

This is a capstone project, but suggestions and improvements are welcome!

## License

ISC License

## Author

**Pumpkin.pie**

---

*Built as a capstone project to demonstrate web development skills using Node.js, Express.js, and external API integration.*