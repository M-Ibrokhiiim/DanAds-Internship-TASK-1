<template>
  <form
    @submit.prevent="submitForm"
    class="mx-auto max-w-md space-y-5 rounded-xl bg-white p-6 shadow-lg"
  >
    <h2 class="text-2xl font-semibold text-gray-800">
      Contact Us
    </h2>

     <div>
      <label class="block text-sm font-medium text-gray-700">
        Name
      </label>
      <input
        v-model="form.name"
        type="text"
        placeholder="M_Ibrokhiiim"
        class="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
    </div>

     
    <div>
      <label class="block text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        v-model="form.email"
        type="email"
        placeholder="mribrokhiiim@gmail.com"
        class="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
    </div>

    
    <div>
      <label class="block text-sm font-medium text-gray-700">
        Message
      </label>
      <textarea
        v-model="form.message"
        rows="4"
        placeholder="Your message..."
        class="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      ></textarea>
    </div>

    <button
      class="w-full rounded-lg bg-blue-400 py-2 font-semibold text-white hover:bg-blue-700 transition"
    >
      Submit
    </button>

    <p 
      v-if="submitted" 
      class="text-green-600 text-sm text-center"
    >
      ✅ Form submitted successfully!
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const submitted = ref<boolean>(false)

const form = ref({
  name: '',
  email: '',
  message: '',
})

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    message: '',
  }
}

const submitForm = () => {
  if (!form.value.name) return

  submitted.value = true
  resetForm()

  setTimeout(() => {
    submitted.value = false
  }, 2000)
}
</script>