import { defineStore } from "pinia";
import { reactive } from "vue";
import api from "../api.js";

const InitialState = {
    userDetails: reactive({}),
    UserId: "",
    status: false,
    role: "",
};
export const useAuthStore = defineStore("authStore", {
    state: () => InitialState,

    actions: {

        setUser(data) {
            this.userDetails = data.user;
            this.UserId = data.user.id;
            this.status = true;
            this.role = data.user.role;
        },
        // async getUser() {
        //     const response = await api.get("/users/");
        //     console.log(response);
        //     return response;
        // },
        
        removeUser() {
            this.userDetails = {};
            this.status = false;
            this.role = "";
            this.UserId = "";
        },

    },
});
