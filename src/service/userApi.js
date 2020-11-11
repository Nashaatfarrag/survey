const axios = require("axios");
import store from "../store/index";

function handleErr(err) {
  store.state.alert.status = true;
  store.state.alert.message = err.response.data.error;
  store.state.alert.type = "error";
}

function handleSuccess(msg) {
  store.state.alert.status = true;
  store.state.alert.message = msg;
  store.state.alert.type = "success";
}

const apiClient = axios.create({
  headers: {
    Authorization: JWT(),
  },
});

function JWT() {
  return localStorage.getItem("jwt")
    ? "Bearer " + localStorage.getItem("jwt")
    : "";
}
export default {
  successAlert(msg) {
    handleSuccess(msg);
  },
  Receptionist: {
    Ticket: {
      async updateTicketStatus(ticket) {
        let jwt = JWT();
        return axios
          .post(`/api/ticket/updateTicketStatus`, ticket, {
            headers: {
              authorization: jwt,
            },
          })
          .catch((err) => handleErr(err));
      },
      async updateTicketPStatus(ticket) {
        let jwt = JWT();
        return axios
          .post(`/api/ticket/updateTicketPStatus`, ticket, {
            headers: {
              authorization: jwt,
            },
          })
          .catch((err) => handleErr(err));
      },
      async getTicketById(id) {
        let jwt = JWT();
        return axios
          .get(`/api/ticket/getTickets?ProfileID=${id}`, {
            headers: {
              authorization: jwt,
            },
          })
          .catch((err) => handleErr(err));
      },
      async rejectTicket(id) {
        let jwt = JWT();
        return axios
          .get(`/api/ticket/rejectTicket?TicketID=${id}`, {
            headers: {
              authorization: jwt,
            },
          })
          .catch((err) => handleErr(err));
      },

      async updateTicket(ticket) {
        let jwt = JWT();
        return axios
          .post(`/api/ticket/updateTicket`, ticket, {
            headers: {
              authorization: jwt,
            },
          })
          .catch((err) => handleErr(err));
      },
      async getAvailablePTech() {
        let jwt = JWT();
        return axios
          .get(`/api/ticket/getAllPTechs`, {
            headers: {
              authorization: jwt,
            },
          })
          .catch((err) => handleErr(err));
      },
      async getAvailableTech() {
        let jwt = JWT();
        return axios
          .get(`/api/ticket/getAllTechs`, {
            headers: {
              authorization: jwt,
            },
          })
          .catch((err) => handleErr(err));
      },
    },
    UserProfile: {
      async getUserProfile(Phone) {
        let jwt = JWT();
        return axios
          .get(`/api/profile/getAllProfiles?ClientPhone=${Phone}`, {
            headers: {
              authorization: jwt,
            },
          })
          .catch((err) => handleErr(err));
      },
    },
    async getTickets(status) {
      let jwt = JWT();
      return axios

        .get(`/api/ticket/getAllTickets`, {
          headers: {
            authorization: jwt,
          },
        })
        .catch((err) => handleErr(err));
    },
    async getPhoneByCarNum() {
      let jwt = JWT();
      return axios
        .get("/api/ticket/", {
          headers: {
            authorization: jwt,
          },
        })
        .catch((err) => handleErr(err));
    },
    async getRegisteredCarsByPhone() {
      let jwt = JWT();
      return axios
        .get("/api/ticket/", {
          headers: {
            authorization: jwt,
          },
        })
        .catch((err) => handleErr(err));
    },
    async createTicket(ticketObject) {
      let jwt = JWT();
      return axios
        .post("/api/ticket/create", ticketObject, {
          headers: {
            authorization: jwt,
          },
        })
        .catch((err) => handleErr(err));
    },

    async createUserProfile(userProfile) {
      let jwt = JWT();
      return axios
        .post("/api/profile/create", userProfile, {
          headers: {
            authorization: jwt,
          },
        })
        .catch((err) => handleErr(err));
    },
  },
  Root: {
    async creatOwner(ownerObject) {
      let jwt = localStorage.getItem("jwt")
        ? "Bearer " + localStorage.getItem("jwt")
        : "";

      return axios.post("/api/users/ownerSignUp", ownerObject, {
        headers: {
          authorization: jwt,
        },
      });
      // .catch((err) => handleErr(err));
    },
    async getOwners() {
      let jwt = JWT();
      return axios
        .get("/api/users/getAllOwners", {
          headers: {
            authorization: jwt,
          },
        })
        .catch((err) => handleErr(err));
    },
    async updateOwner(ownerObject) {
      let jwt = JWT();
      return axios.post("/api/users/updateOwners", ownerObject, {
        headers: {
          authorization: jwt,
        },
      });
    },
  },
  Tech: {
    async getTickets(status) {
      let jwt = JWT();
      return axios
        .get(`/api/ticket/getTickets`, {
          headers: {
            authorization: jwt,
          },
        })
        .catch((err) => handleErr(err));
    },
  },
  Owner: {
    async getAllMangers() {
      let jwt = JWT();
      return axios
        .get("/api/users/getAllMangers", {
          headers: {
            authorization: jwt,
          },
        })
        .catch((err) => handleErr(err));
    },
    async createBranch(shopObj) {
      let jwt = JWT();
      return axios.post("/api/shops/registerShop", shopObj, {
        headers: {
          authorization: jwt,
        },
      });
      // .catch((err) => handleErr(err));
    },
    async updateWorkshop(shopObj) {
      let jwt = JWT();
      return axios.post("/api/users/updateMangers", shopObj, {
        headers: {
          authorization: jwt,
        },
      });
    },
  },
  Manager: {
    async getAllPTechs() {
      let jwt = JWT();
      return axios
        .get("/api/users/getAllPTechs", {
          headers: {
            authorization: jwt,
          },
        })
        .catch((err) => handleErr(err));
    },
    async getAllTechs() {
      let jwt = JWT();
      return axios
        .get("/api/users/getAllTechs", {
          headers: {
            authorization: jwt,
          },
        })
        .catch((err) => handleErr(err));
    },
    async getAllReceps() {
      let jwt = JWT();
      return axios
        .get("/api/users/getAllReceps", {
          headers: {
            authorization: jwt,
          },
        })
        .catch((err) => handleErr(err));
    },
  },
  async getCurrentUser() {
    let jwt = JWT();
    // console.log(store.state.user.userJWT)
    return axios
      .get("/api/users/getMe", {
        headers: {
          Authorization: jwt,
        },
      })
      .catch((err) => handleErr(err));
  },
  async signIn(credentails) {
    return axios
      .post("/api/users/signIn", credentails)
      .catch((err) => handleErr(err));
  },

  async getMenu(formName) {
    let jwt = JWT();
    return axios
      .post(
        "/api/formupload/Gforms",
        {
          form: formName,
        },
        {
          headers: {
            authorization: jwt,
          },
        }
      )
      .catch((err) => handleErr(err));
  },

  async addBranchWorker(obj) {
    let jwt = JWT();

    return axios.post("/api/users/workerSignUp", obj, {
      headers: {
        authorization: jwt,
      },
    });
    // .catch((err) => handleErr(err));
  },
  async updateMenu(formName, data) {
    let jwt = JWT();
    return axios
      .post(
        "/api/formupload/Pforms",
        {
          formlist: data,
          form: formName,
        },
        {
          headers: {
            authorization: jwt,
          },
        }
      )
      .catch((err) => handleErr(err));
  },

  async updateUserPreference(obj) {
    let jwt = JWT();
    return axios
      .post("/api/users/preferenceEdit", obj, {
        headers: {
          authorization: jwt,
        },
      })
      .catch((err) => handleErr(err));
  },

  async updateMailAndPassword(obj) {
    let jwt = JWT();
    let body = {
      oldemail: obj.currentMail,
      oldpassword: obj.currentPassword,
      newemail: obj.newMail,
      newpassword: obj.newPassword,
    };
    return axios
      .post("/api/users/passwordUpdate", body, {
        headers: {
          authorization: jwt,
        },
      })
      .catch((err) => handleErr(err));
  },
};
