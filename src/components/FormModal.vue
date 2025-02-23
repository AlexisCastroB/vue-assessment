<template>
  <v-btn class="text-none"
    @click="modal = true"
    color="black">
      Apply Now
  </v-btn>

  <v-dialog v-model="modal"
  width="auto">
  <v-card max-width="400"
  text="Form placeholder"
  title="Fill out the form">
    <template v-slot:actions>
      <v-btn
        class="ms-auto"
        text="Submit"
        @click="modal = false"
      ></v-btn>
    </template>
  </v-card>
</v-dialog>
</template>

<script setup>
import { ref } from 'vue';

const modal = ref(false);

</script>
