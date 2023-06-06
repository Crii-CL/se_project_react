export default function SignupOrSignin() {
  function _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error${res.status}`);
  }

  const baseUrl = "https://localhost:3001";

  return {
    signUp: (email, password, name, avatar) => {
      return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
          avatar,
        }),
      }).then((res) => {
        _checkResponse(res);
      });
    },
    signIn: (email, password) => {
      return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => {
          _checkResponse(res);
        })
        .then((res) => {
          const token = res.token;
          localStorage.setItem("jwt", token);
        });
    },
    validateToken: (token) => {
      return fetch(`${baseUrl}/user/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        _checkResponse(res);
      });
    },
  };
}
