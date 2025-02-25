<template>
  <div class="search row my-5">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="form-floating">
        <input
          class="form-control"
          id="jobTitle"
          type="text"
          v-model="jobTitle"
          @keyup.enter="goToSearch"
        >
        <label for="jobTitle">
          Job Title
        </label>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="row">
        <div class="col mb-3 mb-sm-0">
          <div class="form-floating">
            <input
              class="form-control"
              id="location"
              type="text"
              v-model="location"
              @keyup.enter="goToSearch"
            >
            <label for="location">
              Location
            </label>
          </div>
        </div>
        <div class="col-sm-auto">
          <button
            class="btn btn-dark text-light"
            id="button"
            type="button"
            @click="goToSearch"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { query } = useRoute();
const router = useRouter();
const jobTitle = ref(query.title);
const location = ref(query.location);

const goToSearch = async () => {
  await router.replace({ name: 'Job Results', query: { title: jobTitle.value, location: location.value }});
  router.go(0)
};
</script>
