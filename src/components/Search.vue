<template>
  <div class="search row my-5">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <v-text-field
        v-model="jobTitle"
        hide-details="auto"
        variant="outlined"
        label="Job Title"
        @keyup.enter="goToSearch"
      >
      </v-text-field>
    </div>
    <div class="col-sm-6">
      <div class="row">
        <div class="col mb-3 mb-sm-0">
          <v-text-field
            v-model="location"
            hide-details="auto"
            variant="outlined"
            label="Location"
            @keyup.enter="goToSearch"
          >
          </v-text-field>
        </div>
        <div class="col-sm-auto">
          <v-btn
            class="text-none"
            icon="mdi-magnify"
            color="black"
            @click="goToSearch"
          >
          </v-btn>
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
  console.log(jobTitle.value, location.value)
  await router.replace({ name: 'Job Results', query: { title: jobTitle.value, location: location.value }});
  router.go(0)
}
</script>
