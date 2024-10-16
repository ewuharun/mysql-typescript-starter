const axios = require("axios");
const mysql = require("mysql2/promise");

async function fetchAPI1() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    ); // Replace with actual API
    console.log("API 1 Response:");

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "test",
    });

    const [results, fields] = await connection.query("SELECT 1");

    console.log("result", results);
  } catch (error) {
    console.error("Error fetching API 1:", error.message);
  }
}

setInterval(() => {
  fetchAPI1();
}, 10000);
