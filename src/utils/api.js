export default function itemsApi() {
  const baseUrl =
    "https://my-json-server.typicode.com/crii-cl/se_project_react";

  return {
    get: () => {
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
    },
    add: (name, imageUrl, weather) => {
      return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          imageUrl,
          weather,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Error${res.status}`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    remove: (id) => {
      return fetch(`${baseUrl}/items/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Error ${res.status}`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
}
