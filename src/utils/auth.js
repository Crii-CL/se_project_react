export default function RegisterOrLogin() {
  function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error${res.status}`);
  }

  const baseUrl = "http://localhost:3001";

  return {
    register: (name, avatar, email, password) => {
      return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          avatar,
          email,
          password,
        }),
      }).then(() => {
        checkResponse;
      });
    },
    login: (email, password) => {
      return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
    },
  };
}
