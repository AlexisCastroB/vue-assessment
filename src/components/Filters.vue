<template>
  <div class="filters row my-5">
    <div class="col-sm-4">
      <v-select v-model="experience"
        :items="experienceItems"
        variant="outlined"
        label="Filter by">
      </v-select>
    </div>
    <div class="col-sm-4">
      <v-select v-model="orderBy"
        :items="orderByItems"
        variant="outlined"
        label="Order by">
      </v-select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const experience = ref('Junior');
const orderBy = ref('Newest');
const experienceItems = [
  'Entry Level',
  'Junior',
  'Mid-Senior',
  'Senior',
  'Leader'
]
const orderByItems = [
  'Newest',
  'Oldest',
  'Salary',
]

</script>
