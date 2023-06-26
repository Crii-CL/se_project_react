import checkResponse from "../utils/api";

export default function SignupOrSignin() {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://api.wtwr-crii.chickenkiller.com"
      : "http://localhost:3001";

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
        return checkResponse(res);
      });
    },
    signIn: (email, password) => {
      return fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => {
          return checkResponse(res);
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
        return checkResponse(res);
      });
    },
    editUser: (name, avatar, token) => {
      return fetch(`${baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, avatar }),
      }).then((res) => {
        return checkResponse(res);
      });
    },
  };
}
