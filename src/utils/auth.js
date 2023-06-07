export default function SignupOrSignin() {
  function _checkResponse(res) {
    console.log(res);
    if (res.ok) {
      return res.json();
    }
    console.log("check response rejecting");
    return Promise.reject(`Error${res.status}`);
  }

  const baseUrl = "http://localhost:3001";

  return {
    signUp: (email, password, name, avatar) => {
      return fetch(`${baseUrl}/signup`, {
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
        return _checkResponse(res);
      });
    },
    signIn: (email, password) => {
      return fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => {
          return _checkResponse(res);
        })
        .then((res) => {
          const token = res.token;
          localStorage.setItem("jwt", token);
        });
    },
    validateToken: (token) => {
      return fetch(`${baseUrl}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        return _checkResponse(res);
      });
    },
  };
}
