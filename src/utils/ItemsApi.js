export default function itemsApi(currentUser) {
  function _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error${res.status}`);
  }

  const baseUrl = "http://localhost:3001";
  // "https://my-json-server.typicode.com/crii-cl/se_project_react";

  const token = localStorage.getItem("jwt");

  return {
    get: () => {
      return fetch(`${baseUrl}/items`)
        .then(_checkResponse)
        .then((data) => {
          const cards = data.data;
          return cards.map((card) => ({
            ...card,
          }));
        });
    },

    add: (name, imageUrl, weather) => {
      return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          imageUrl,
          weather,
          owner: currentUser._id,
          likes: [],
        }),
      }).then(_checkResponse);
    },
    remove: (id) => {
      return fetch(`${baseUrl}/items/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then(_checkResponse);
    },
    addCardLike: (id, likes) => {
      return fetch(`${baseUrl}/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ likes }),
      }).then(_checkResponse);
    },
    removeCardLike: (id, likes) => {
      return fetch(`${baseUrl}/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ likes }),
      }).then(_checkResponse);
    },
  };
}
