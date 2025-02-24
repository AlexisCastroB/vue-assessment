<template>
  <div class="job-list">
    <div class="container mt-4 w-md-75 w-lg-50">
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
        class="row d-flex"
        v-if="store.filteredResults.length"
      >
        <JobCard
          v-for="job in store.filteredResults"
          :job="job"
          :key="job.id"
        />
      </div>
      <div
        class="row d-flex"
        v-else
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
    </div>
  </div>
</template>

<script setup>
import Filters from '@/components/Filters.vue';
import JobCard from '@/components/JobCard.vue';
import Search from '@/components/Search.vue';
import { useRoute } from 'vue-router';
import { useJobListStore } from '@/stores/jobList';

const {query} = useRoute();
const store = useJobListStore();
store.getResults(query.title || '', query.location || '');
</script>
