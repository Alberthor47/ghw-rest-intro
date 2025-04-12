// Creating our first POST request using fetch
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'my-mlh-post',
    body: 'Do you know that you can learn anything in MLH?',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log('This is the response of the POST request', json));

// Getting the post 1 via GET request
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  })
  .then(data => {
    console.log("Full post:", data);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });

// Updating the post 1 via PUT request
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'This is an updated title',
    body: 'For our MLH post',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log('This is the response of the PUT request', json));

// Deleting the post 1 via DELETE request
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then((response) => {
    console.log('This is the response of the DELETE request', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
