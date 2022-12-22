import { defineStore } from "pinia";
import axios from "axios";

export const useDataStore = defineStore("data", {
  state: () => {
    return {
      joke: {},
    };
  },
  actions: {
    async fetchRandomDadJoke() {
      try {
        let data = await axios({
          url: `https://official-joke-api.appspot.com/random_joke`,
          method: "GET",
        });
        this.joke = data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
