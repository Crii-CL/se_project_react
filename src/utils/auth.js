export default function SignUpOrSignIn() {
  function _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error${res.status}`);
  }

  const baseUrl = "https://localhost:3001";

  return {
    signUp: (name, avatar, email, password) => {
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
        _checkResponse;
      });
    },
    signIn: (email, password) => {
      return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }).then(() => {
        _checkResponse;
      });
    },
  };
}
