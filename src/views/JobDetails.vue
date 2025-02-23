<template>
  <div class="job-details">
    <div class="container mt-4 w-md-75 w-lg-50">
      <div class="row">
        <div class="col">
          <v-btn class="text-none pa-0"
          prepend-icon="mdi-chevron-left"
          variant="plain">
            Search results
          </v-btn>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 py-4">
          <small class="m-0">
            Posted on September 15, 2023
          </small>
          <h3>
            Frontend Developer
          </h3>
          <v-chip>
            Junior
          </v-chip>
          <p class="mb-1">
            <small class="text-grey w-100">
              $85,000 yearly
            </small>
          </p>
          <p><v-icon icon="mdi-map-marker"></v-icon>Los Angeles</p>
          <h5 class="text-grey">
            <v-avatar color="grey">
              <span class="text-h6">TC</span>
            </v-avatar>
            TechCorp
          </h5>
        </div>
        <div class="col-md-6 py-4 text-md-end">
          <FormModal />
          <!-- <v-btn class="text-none"
          color="black">
            Apply Now
          </v-btn> -->
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
            We're looking for a Vue.js developer to join our dynamic team. The ideal candidate will have a strong understanding of Vue.js and its core principles, along with experience in building scalable and efficient user interfaces. You will work closely with our design and backend teams to create seamless and responsive web applications. If you are passionate about frontend development and enjoy working in a collaborative environment, this is the perfect role for you. Join us and help shape the future of our digital products.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FormModal from '@/components/FormModal.vue';

</script>
