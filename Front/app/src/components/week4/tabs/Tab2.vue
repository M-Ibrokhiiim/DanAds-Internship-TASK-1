<template>
  <form
    @submit.prevent="saveSettings"
    class="mx-auto max-w-md space-y-5 rounded-xl bg-white p-6 shadow-lg"
  >
    <h2 class="text-2xl font-semibold text-gray-800 text-center">
      User Settings
    </h2>

    <!-- Theme -->
    <div>
      <label class="block text-sm font-medium text-gray-700">
        Theme
      </label>
      <select
        v-model="settings.theme"
        class="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>

    <!-- Language -->
    <div>
      <label class="block text-sm font-medium text-gray-700">
        Language
      </label>
      <select
        v-model="settings.language"
        class="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>
    </div>

    <!-- Notifications -->
    <div class="flex items-center justify-between">
      <label class="text-sm font-medium text-gray-700">
        Enable notifications
      </label>
      <input
        v-model="settings.notifications"
        type="checkbox"
        class="h-5 w-5 accent-blue-500 cursor-pointer"
      />
    </div>

    <button
      class="w-full rounded-lg bg-indigo-500 py-2 font-semibold text-white hover:bg-indigo-600 transition"
    >
      Save Settings
    </button>

    <p v-if="saved" class="text-green-600 text-sm text-center">
      ✅ Settings saved
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const saved = ref(false)

const settings = ref({
  theme: 'light',
  language: 'en',
  notifications: true,
})

const saveSettings = () => {
  saved.value = true

  setTimeout(() => {
    saved.value = false
  }, 2000)
}
</script>