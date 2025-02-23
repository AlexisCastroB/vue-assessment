<template>
    <div class="job-card col-sm-6 col-md-4 pb-4">
      <RouterLink class="text-dark text-decoration-none"
      :to="{ name: 'Job Details', params: { id: 1 } }">
        <v-card title="Frontend Developer"
        subtitle="Los Angeles"
        text="September 15, 2023"
        elevation="4"
        link>
          <v-card-actions>
            <v-chip>
              Junior
            </v-chip>
            <v-chip variant="text">
              $85,000
            </v-chip>
          </v-card-actions>
        </v-card>
      </RouterLink>
    </div>
</template>

<script setup>

</script>
