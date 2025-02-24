<template>
  <div class="filters row my-5">
    <div class="col-sm-4">
      <v-select
        v-model="experience"
        variant="outlined"
        label="Filter by"
        @update:model-value="store.setFilters"
        :items="experienceItems"
      >
      </v-select>
    </div>
    <div class="col-sm-4">
      <v-select
        v-model="orderList"
        variant="outlined"
        label="Order by"
        @update:model-value="store.setOrder"
        :items="orderByItems"
      >
      </v-select>
    </div>
  </div>
</template>

<script setup>
import { useJobListStore } from '@/stores/jobList';
import { ref } from 'vue';

const store = useJobListStore();
const experience = ref(store.filterBy);
const orderList = ref(store.orderBy);
const experienceItems = [
  'Show All',
  'Entry Level',
  'Junior',
  'Mid-Senior',
  'Senior',
  'Leader'
];
const orderByItems = [
  'Newest',
  'Oldest',
  'Salary',
];
</script>
