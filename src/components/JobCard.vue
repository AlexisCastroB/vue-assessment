<template>
    <div class="job-card col-sm-6 col-md-4 pb-4">
      <RouterLink
        class="text-dark text-decoration-none"
        :to="{ name: 'Job Details', params: { id: job.id } }"
      >
        <v-card
          :title="job.title"
          :subtitle="job.location"
          :text="dayjs(job.date).format('MMMM DD, YYYY')"
          elevation="4"
          link
        >
          <v-card-actions>
            <v-chip>
              {{ job.category }}
            </v-chip>
            <v-chip variant="text">
              {{ job.salary }}
            </v-chip>
          </v-card-actions>
        </v-card>
      </RouterLink>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
import dayjs from 'dayjs';

const props = defineProps({ job: Object });
const { job } = toRefs(props)
</script>
