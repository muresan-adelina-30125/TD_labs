function run() {
  new Vue({
    el: "#app",
    data: {
      users: [],
      usersService: null,
    },
    created: function () {
      this.usersService = users();
      this.usersService.get().then((response) => {
        this.users = response.data;
      });
    },
    deleteUser: async function () {
      console.log("here");
    },

    methods: {
      deleteUser: async function () {
        const name = $("#stergereUser").val();
        console.log("here", name);
        try {
          const users = await this.usersService.deleteUser(name);
          console.log("in delete", users);
          this.users = users.data;
        } catch (error) {
          console.log("err", error);
        }
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  run();
});
