# Simple Node.js Web Server

Welcome to the Simple Node.js Web Server project! This project demonstrates how to create a basic web server using Node.js and Express framework.

## Dependencies

This project uses the following Node modules:

- `express`: A fast, unopinionated, minimalist web framework for Node.js.
- `path`: A module for working with file paths.
- `fs`: A module for interacting with the file system.

## How to Run

1. Clone this repository:

git clone simple-nodejs-web-server
cd simple-nodejs-web-server

2. Install dependencies:
   npm install

3. Start the server:
   node server.js

The server will start listening on `http://localhost:4000` by default.

## Configuration

### Changing Server Address and Port

You can change the server address and port by modifying the `ipAddress` and `port` variables in `server.js` file.

### Organizing HTML Files

HTML files are stored in the `./www` directory by default. You can modify the directory where HTML files are stored by changing the `www` variable in `server.js` file.

### Customizing Console Log Message

You can customize the console log message displayed when the server starts listening by modifying the message in the `app.listen()` function in `server.js` file.

## Closing Note

Feel free to customize and expand this project according to your needs. Happy coding!

If you have any questions or feedback, please don't hesitate to reach out.

---

**Note:** This project is for educational purposes and may not cover all production-level best practices.
