export default function itemsApi(currentUser) {
  function _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error${res.status}`);
  }

  const baseUrl = "http://localhost:3001";

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
      const body = {
        name,
        imageUrl,
        weather,
        owner: currentUser._id,
        likes: [],
      };
      return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
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
    addCardLike: (id) => {
      return fetch(`${baseUrl}/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ likes: [1] }),
      }).then(_checkResponse);
    },
    removeCardLike: (id) => {
      return fetch(`${baseUrl}/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ likes: [0] }),
      }).then(_checkResponse);
    },
  };
}
