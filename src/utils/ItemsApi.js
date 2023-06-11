export default function itemsApi() {
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
      return fetch(`${baseUrl}/items`).then(_checkResponse);
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
    addCardLike: (id, user) => {
      console.log("this is the card id");
      console.log(id);
      return fetch(`${baseUrl}/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, user }),
      }).then(_checkResponse);
    },
    removeCardLike: (id, user) => {
      console.log(id);
      return fetch(`${baseUrl}/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, user }),
      }).then(_checkResponse);
    },
  };
}
