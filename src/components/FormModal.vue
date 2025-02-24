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
    <v-card :loading="loading">
      <template v-slot:text>
        <v-container>
          <v-row>
            <v-col>
              <h3>
                Applying form for {{ job.title }} position in {{ job.company }}
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
                  lg="4"
                  md="12"
                >
                  <v-text-field
                    append-icon="mdi-close"
                    hide-details="auto"
                    label="Full name"
                    required
                    variant="underlined"
                    v-model="fullName"
                    :rules="rules.fullName"
                    @click:append="fullName = null"
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  lg="4"
                  md="8"
                >
                  <v-text-field
                    append-icon="mdi-close"
                    hide-details="auto"
                    label="Email"
                    required
                    variant="underlined"
                    v-model="email"
                    :rules="rules.email"
                    @click:append="email = null"
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-file-input
                    accept="application/pdf,application/msword,.docx,.doc"
                    append-icon="mdi-paperclip"
                    label="Resume"
                    :prepend-icon="null"
                    required
                    variant="underlined"
                    v-model="resume"
                    :rules="rules.resume"
                  >
                  </v-file-input>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    append-icon="mdi-close"
                    label="Cover letter"
                    required
                    variant="underlined"
                    v-model="coverLetter"
                    :rules="rules.coverLetter"
                    @click:append="coverLetter = null"
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
    color="orange-darken-2"
    vertical
    v-model="showSnackbar"
    :timeout="5000"
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
import { defineProps, toRefs, ref } from 'vue';

const props = defineProps({ job: Object });
const { job } = toRefs(props);

const modal = ref(false);
const showSnackbar = ref(false);
const loading = ref(false);
const form = ref(null);
const fullName = ref(null);
const email = ref(null);
const resume = ref(null);
const coverLetter = ref(null);
const rules = {
  'fullName': [
    value => !!value || 'Full name is required',
  ],
  'email': [
    value => {
      if (value) return true
      return 'E-mail is required.'
    },
    value => {
      if (/.+@.+\..+/.test(value)) return true
      return 'E-mail must be valid.'
    },
  ],
  'resume': [
    value => !!value || 'Resume is required',
    value => value.size < 5000000 || 'File size should be less than 5 MB!',
  ],
  'coverLetter': [
    value => !!value || 'Cover letter is required',
  ],
}

const submitForm = async () => {
  const { valid } = await form.value.validate();
  if(!valid) return false;

  loading.value = true;
  const formData = new FormData();
  formData.append('fullName', fullName.value);
  formData.append('email', email.value);
  formData.append('resume', resume.value);
  formData.append('coverLetter', coverLetter.value);

  // Mocking sent to API
  setTimeout(async () => {
    console.log('Form sent successfully.');
    for(const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    loading.value = false;
    modal.value = false;
    showSnackbar.value = true;
    
    fullName.value = null;
    email.value = null;
    resume.value = null;
    coverLetter.value = null;
  }, "2000");
}
</script>
