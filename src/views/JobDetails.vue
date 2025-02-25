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
      <div
        v-if="store.error"
        class="row my-5"
      >
        <div class="col">
          <h5 class="text-center">
            {{ store.error }}
          </h5>
        </div>
      </div>
      <template v-else>
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
                <span class="text-h6">
                  {{ capitalLetters }}
                </span>
              </v-avatar>
              <span class="align-middle pl-2">
                {{ store.jobDetails.company }}
              </span>
            </h5>
          </div>
          <div class="col-md-6 py-4 text-md-end">
            <FormModal :job="store.jobDetails" />
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
      </template>
    </div>
  </div>
</template>

<script setup>
import FormModal from '@/components/FormModal.vue';
import { useRoute, useRouter } from 'vue-router';
import { useJobListStore } from '@/stores/jobListStore';
import dayjs from 'dayjs';
import { computed } from 'vue';

const { params } = useRoute();
const router = useRouter();
const store = useJobListStore();
store.getJob(params.id)
const goBack = () => {
  router.go(-1)
}
const capitalLetters = computed(() => {
  return store.jobDetails.company?.replace(/[^A-Z]+/g,'');
});
</script>
