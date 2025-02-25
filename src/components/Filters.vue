<template>
  <div class="filters row my-5">
    <div class="col-sm-4 my-2">
      <div class="form-floating">
        <select
        class="form-select"
        id="filterBy"
        v-model="experience"
        @change="store.setFilters($event.target.value)"
        >
          <option 
            v-for="option in experienceItems"
            :value="option"
            :key="option"
          >
            {{ option }}
          </option>
        </select>
        <label for="filterBy">
          Filter by
        </label>
      </div>
    </div>
    <div class="col-sm-4 my-2">
      <div class="form-floating">
        <select
        class="form-select"
        id="orderBy"
        v-model="orderList"
        @change="store.setOrder($event.target.value)"
        >
          <option 
            v-for="option in orderByItems"
            :value="option"
            :key="option"
          >
            {{ option }}
          </option>
        </select>
        <label for="orderBy">
          Order by
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useJobListStore } from '@/stores/jobListStore';
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
