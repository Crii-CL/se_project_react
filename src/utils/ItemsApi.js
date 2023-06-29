import checkResponse from "../utils/api";

export default function itemsApi(currentUser) {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://api.wtwr-crii.chickenkiller.com"
      : "http://localhost:3001";

  const token = localStorage.getItem("jwt");

  return {
    get: () => {
      return fetch(`${baseUrl}/items`)
        .then(checkResponse)
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
      }).then(checkResponse);
    },
    remove: (id) => {
      return fetch(`${baseUrl}/items/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then(checkResponse);
    },
    addCardLike: (id, userId) => {
      const body = { likes: [] };

      body.likes.push(userId);

      return fetch(`${baseUrl}/items/${id}/likes`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      }).then(checkResponse);
    },
    removeCardLike: (id) => {
      return fetch(`${baseUrl}/items/${id}/likes`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then(checkResponse);
    },
  };
}
