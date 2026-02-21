<template>
  <div class="bg-gray-50 flex flex-col  ">

     <header class="bg-white px-4 py-4 flex items-center justify-between shadow-md">
      <h1 class="text-xl font-bold text-gray-800">Settings</h1>
      <img
        src="https://randomuser.me/api/portraits/men/30.jpg"
        class="w-10 h-10 rounded-full border-2 border-blue-500"
        alt="user"
      />
    </header>

    <main class="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide">

       
      <div class="bg-white p-4 rounded-2xl shadow-lg flex items-center gap-4">
        <img
          src="https://randomuser.me/api/portraits/men/30.jpg"
          class="w-16 h-16 rounded-full border-2 border-blue-500 object-cover"
          alt="profile"
        />
        <div>
          <p class="text-lg font-semibold text-gray-800">Jack Roll</p>
          <p class="text-sm text-gray-500">jakeroll@gmail.com</p>
        </div>
         
      </div>

       <section class="space-y-4">

        <div class="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-blue-500 text-xl">🔒</span>
            <div>
              <p class="text-sm font-semibold text-gray-800">Account</p>
              <p class="text-xs text-gray-500">Change your account info</p>
            </div>
          </div>
          <span class="text-blue-500 text-sm cursor-pointer">Edit</span>
        </div>

        <div class="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-green-500 text-xl">🔔</span>
            <div>
              <p class="text-sm font-semibold text-gray-800">Notifications</p>
              <p class="text-xs text-gray-500">Manage notification preferences</p>
            </div>
          </div>
          <span class="text-green-500 text-sm cursor-pointer">Manage</span>
        </div>

        <div class="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-yellow-500 text-xl">🛡️</span>
            <div>
              <p class="text-sm font-semibold text-gray-800">Privacy</p>
              <p class="text-xs text-gray-500">Update privacy settings</p>
            </div>
          </div>
          <span class="text-yellow-500 text-sm cursor-pointer">Edit</span>
        </div>

        <div class="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-purple-500 text-xl">❓</span>
            <div>
              <p class="text-sm font-semibold text-gray-800">Help & Support</p>
              <p class="text-xs text-gray-500">Get help or contact support</p>
            </div>
          </div>
          <span class="text-purple-500 text-sm cursor-pointer">Open</span>
        </div>

      </section>

    </main>

    
     
  </div>
</template>

<script setup>
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>