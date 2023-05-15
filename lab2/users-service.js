function users() {
  get = function () {
    return axios.get("http://localhost:3000/users");
  };
  post = function (user) {
    return axios.post("http://localhost:3000/createUser", {
      data: user,
    });
  };
  deleteUser = function (userName) {
    return axios.delete(`http://localhost:3000/deleteUser/${userName}`);
  };
  return {
    get: get,
    post: post,
    deleteUser: deleteUser,
  };
}
