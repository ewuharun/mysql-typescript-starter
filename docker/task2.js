const axios = require('axios');


async function fetchAPI2() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Replace with actual API
    console.log('API 2 Response:');
  } catch (error) {
    console.error('Error fetching API 2:', error.message);
  }
}

setInterval(() => {
    fetchAPI2()
}, 5000);
