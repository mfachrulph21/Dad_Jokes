<script>
import { mapActions, mapState } from "pinia";
import { useDataStore } from "../stores/data";

export default {
  name: "HomePage",
  methods: {
    ...mapActions(useDataStore, ["fetchRandomDadJoke"]),
  },
  computed: {
    ...mapState(useDataStore, ["joke"]),
  },
};
</script>

<template>
  <div
    class="d-flex justify-content-center align-items-center container-fluid vh-100"
    style="background-color: #ffcdd2"
  >
    <button
      v-if="!joke.setup"
      class="btn btn-danger fs-5"
      @click="fetchRandomDadJoke"
    >
      Get a Dad Joke 💫
    </button>

    <div v-else class="card" style="width: 600px; text-align: right">
      <div class="card-body">
        <h5 class="card-title fs-2">{{ joke.setup }}</h5>
        <p class="card-text fs-4 fw-bold">{{ joke.punchline }} 😂</p>
        <button @click="fetchRandomDadJoke" class="btn btn-danger fs-5 p-10">
          Reload 💫
        </button>
      </div>
    </div>
  </div>
</template>
