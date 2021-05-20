import axios from "axios";

// Export an object with a "search" method that searches the Random User API for the passed query
export default {
  getUser() {
    return axios.get("https://randomuser.me/api/?results=30")
  }
};
