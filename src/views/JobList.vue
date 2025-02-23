<template>
  <div class="job-list">
    <div class="container mt-4 w-md-75 w-lg-50">
      <div class="row mb-3">
        <div class="col">
          <h2>
            Available jobs for: Frontend
          </h2>
        </div>
      </div>
        <Search />
        <Filters />
      <div class="row d-flex">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import Filters from '@/components/Filters.vue';
import JobCard from '@/components/JobCard.vue';
import Search from '@/components/Search.vue';

</script>
