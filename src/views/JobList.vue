<template>
  <div class="job-list">
    <div class="container my-4 w-md-75 w-lg-50">
      <div class="row mb-3">
        <div class="col">
          <h2>
            Available jobs for: {{query.title}}
          </h2>
        </div>
      </div>
      <Search />
      <Filters />
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
        <div
          v-if="store.filteredResults.length"
          class="row d-flex"
        >
          <JobCard
          v-for="job in store.filteredResults"
          :job="job"
          :key="job.id"
        />
        </div>
        <div
          v-else
          class="row d-flex"
        >
          <div class="col my-5">
            <h5>
              There are no job opportunities matching your search criteria.
            </h5>
            <p>
              Try searching with different parameters or less filtered data.
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import Filters from '@/components/Filters.vue';
import JobCard from '@/components/JobCard.vue';
import Search from '@/components/Search.vue';
import { useRoute } from 'vue-router';
import { useJobListStore } from '@/stores/jobListStore';

const {query} = useRoute();
const store = useJobListStore();
store.getResults(query.title || '', query.location || '');
</script>
