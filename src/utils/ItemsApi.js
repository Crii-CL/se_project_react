export default function itemsApi(currentUser) {
  function _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error${res.status}`);
  }

  const baseUrl =
    "https://my-json-server.typicode.com/crii-cl/se_project_react";

  const token = localStorage.getItem("jwt");

  return {
    get: () => {
      return fetch(`${baseUrl}/items`)
        .then(_checkResponse)
        .then((cards) => {
          return cards.map((card) => ({
            ...card,
            owner: card._id,
            likes: [],
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
    // addCardLike: (id, user) => {
    //   console.log(id);
    //   return fetch(`${baseUrl}/items/${id}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //       authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({ id, user }),
    //   }).then(_checkResponse);
    // },
    // removeCardLike: (id, user) => {
    //   console.log(id);
    //   return fetch(`${baseUrl}/items/${id}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //       authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({ id, user }),
    //   }).then(_checkResponse);
    // },
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
