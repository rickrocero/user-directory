import axios from "axios";

// Export an object with a "search" method that searches the Random User API for the passed query
export default {
  search: function() {
    return axios.get("https://randomuser.me/api/");
  }
};
