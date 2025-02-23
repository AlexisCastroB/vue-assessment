<template>
  <v-btn class="text-none"
    color="black"
    @click="modal = true">
      Apply Now
  </v-btn>

  <v-dialog v-model="modal"
  width="auto">
  <v-card>
    <template v-slot:text>
      <v-container>
        <v-row>
          <v-col>
            <h3>
              Applying form for Frontend Developer position in TechCorp
            </h3>
            <p>
              Please fill and submit this form so we can get in contact with you. All fields are required.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12"
          md="12"
          lg="4">
            <v-text-field v-model="fullName"
            :rules="fullNameRules"
            hide-details="auto"
            variant="outlined"
            label="Full name">
            </v-text-field>
          </v-col>
          <v-col cols="12"
          md="8"
          lg="4">
            <v-text-field v-model="email"
            :rules="emailRules"
            hide-details="auto"
            variant="outlined"
            label="Email">
            </v-text-field>
          </v-col>
          <v-col cols="12"
          md="4">
            <v-file-input v-model="resume"
            :rules="resumeRules"
            label="Resume"
            variant="outlined"
            prepend-icon="mdi-paperclip">
            </v-file-input>
          </v-col>
          <v-col cols="12">
            <v-textarea v-modal="coverLetter"
            :rules="coverLetterRules"
            variant="outlined"
            label="Cover letter">
            </v-textarea>
          </v-col>
          <v-col class="text-end"
          cols="12">
            <v-btn class="ms-auto text-none"
            color="black"
            variant="flat"
            @click="modal = false">
            Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-card>
</v-dialog>
</template>

<script setup>
import { ref } from 'vue';

const modal = ref(false);
const fullName = ref('');
const email = ref('');
const resume = ref(null)
const coverLetter = ref('')

const fullNameRules = [
  value => !!value || 'Full name is required'
]

const emailRules = [
  value => {
    if (value) return true
    return 'E-mail is required.'
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true
    return 'E-mail must be valid.'
  },
]

const resumeRules = [
  value => !!value || 'Resume is required',
  value => {
    return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
  },
]

const coverLetterRules = [
  value => !!value || 'Cover letter is required'
]
</script>
