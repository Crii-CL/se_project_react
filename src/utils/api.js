const baseUrl = "https://localhost:3000";

return fetch(`${baseUrl}/items`)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error${res.status}`);
  })
  .catch((error) => {
    console.log(error);
  });
