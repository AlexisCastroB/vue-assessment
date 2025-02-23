<template>
  <div class="search row my-3">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <v-text-field v-model="jobTitle"
      :rules="jobTitleRules"
      hide-details="auto"
      label="Job Title">
      </v-text-field>
    </div>
    <div class="col-sm-6">
      <div class="row">
        <div class="col mb-3 mb-sm-0">
          <v-text-field v-model="location"
          :rules="locationRules"
          hide-details="auto"
          label="Location">
          </v-text-field>
        </div>
        <div class="col-sm-auto">
          <v-btn class="text-none"
          icon="mdi-magnify "
          color="black">
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const jobTitle = ref('Frontend');
const location = ref('Los Angeles');
const jobTitleRules = [
  value => !!value || 'Required'
]
const locationRules =  [
  value => !!value || 'Required'
]

</script>
