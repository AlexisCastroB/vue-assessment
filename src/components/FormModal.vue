<template>
  <v-btn
    class="text-none"
    color="black"
    @click="modal = true"
  >
    Apply Now
  </v-btn>

  <v-dialog
    v-model="modal"
    width="auto"
  >
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
          <v-form ref="form">
            <v-row>
                <v-col
                  cols="12"
                  md="12"
                  lg="4"
                >
                  <v-text-field
                    v-model="fullName"
                    :rules="fullNameRules"
                    hide-details="auto"
                    variant="outlined"
                    label="Full name"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="8"
                  lg="4"
                >
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    hide-details="auto"
                    variant="outlined"
                    label="Email"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-file-input
                    v-model="resume"
                    :rules="resumeRules"
                    label="Resume"
                    variant="outlined"
                    prepend-icon="mdi-paperclip"
                    required
                  >
                  </v-file-input>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="coverLetter"
                    :rules="coverLetterRules"
                    variant="outlined"
                    label="Cover letter"
                    required
                  >
                  </v-textarea>
                </v-col>
                <v-col
                  class="text-end"
                  cols="12"
                >
                  <v-btn
                    class="ms-auto text-none"
                    color="black"
                    variant="flat"
                    @click="submitForm"
                  >
                    Submit
                  </v-btn>
                </v-col>
            </v-row>
          </v-form>
        </v-container>
      </template>
    </v-card>
  </v-dialog>
  <v-snackbar
    v-model="showSnackbar"
    :timeout="5000"
    color="orange-darken-2"
    vertical
  >
    <h5>
      Form sent successfully.
    </h5>
    <p>
      Thank you for applying. We'll contact you as soon as possible.
    </p>
  </v-snackbar>
</template>

<script setup>
import { ref } from 'vue';

const modal = ref(false);
const showSnackbar = ref(false);
const form = ref(null);
const fullName = ref(null);
const email = ref(null);
const resume = ref(null);
const coverLetter = ref(null);

const fullNameRules = [
  value => !!value || 'Full name is required',
];

const emailRules = [
  value => {
    if (value) return true
    return 'E-mail is required.'
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true
    return 'E-mail must be valid.'
  },
];

const resumeRules = [
  value => !!value || 'Resume is required',
  value => {
    return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
  },
];

const coverLetterRules = [
  value => !!value || 'Cover letter is required',
];

const submitForm = async () => {
  const { valid } = await form.value.validate()
  if(!valid) return false

  const formData = new FormData()
  formData.append('fullName', fullName.value)
  formData.append('email', email.value)
  formData.append('resume', resume.value)
  formData.append('coverLetter', coverLetter.value)

  console.log('Form sent successfully.')
  for(const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`)
  }
  modal.value = false
  showSnackbar.value = true
}
</script>
