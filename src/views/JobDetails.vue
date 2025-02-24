<template>
  <div class="job-details">
    <div class="container mt-4 w-md-75 w-lg-50">
      <div class="row">
        <div class="col">
          <v-btn
            class="text-none pa-0"
            prepend-icon="mdi-chevron-left"
            variant="plain"
            @click="goBack()"
          >
            Search results
          </v-btn>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 py-4">
          <small class="m-0">
            Posted on {{ dayjs(store.jobDetails.date).format('MMMM DD, YYYY') }}
          </small>
          <h3 class="my-3">
            {{ store.jobDetails.title }}
          </h3>
          <v-chip>
            {{ store.jobDetails.category }}
          </v-chip>
          <p class="mb-1">
            <small class="text-grey w-100">
              {{ store.jobDetails.salary }} yearly
            </small>
          </p>
          <p>
            <v-icon icon="mdi-map-marker"></v-icon>
            {{ store.jobDetails.location }}
          </p>
          <h5 class="text-grey">
            <v-avatar color="grey">
              <span class="text-h6">TC</span>
            </v-avatar>
            {{ store.jobDetails.company }}
          </h5>
        </div>
        <div class="col-md-6 py-4 text-md-end">
          <FormModal />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <v-divider thickness="2"></v-divider>
        </div>
      </div>
      <div class="row">
        <div class="col pb-4">
          <h5>
            Job Details
          </h5>
          <p>
            {{ store.jobDetails.description}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FormModal from '@/components/FormModal.vue';
import { useRoute, useRouter } from 'vue-router';
import { useJobListStore } from '@/stores/jobList';
import dayjs from 'dayjs';

const { params } = useRoute();
const router = useRouter();
const store = useJobListStore();
store.getJob(params.id)
const goBack = () => {
  router.go(-1)
}
</script>
