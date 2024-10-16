const axios = require('axios');


async function fetchAPI1() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Replace with actual API
    console.log('API 1 Response:');
  } catch (error) {
    console.error('Error fetching API 1:', error.message);
  }
}

setInterval(() => {
    fetchAPI1()
}, 10000);