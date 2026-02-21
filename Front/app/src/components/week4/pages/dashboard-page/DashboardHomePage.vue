<template>
  <div
    class="h-[570px]  w-[330px]  bg-gray-100 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200""
  >
    
  <main class="mr-[25px]">
    <header class="bg-white px-4 py-3 flex items-center justify-end shadow-sm">
      <img
        src="https://i.pravatar.cc/80"
        class="w-9 h-9 rounded-full"
        alt="profile"
      />
    </header>

    
    <div class="px-4 mt-4">
      <input
        type="text"
        placeholder="Search..."
        class="w-full p-3 rounded-xl bg-white shadow text-sm outline-none"
      />
    </div>


    <section class="px-4 mt-4">
      <div class="bg-blue-600 text-white p-4 rounded-2xl">
        <h2 class="text-lg font-semibold">Special Offer 🎉</h2>
        <p class="text-sm opacity-90 mt-1">
          Get 30% off your first order today.
        </p>
        <button
          class="mt-3 bg-white text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold"
        >
          Order Now
        </button>
      </div>
    </section>

    
    <section class="px-4 mt-6">
      <h3 class="text-sm font-semibold mb-3">Quick Actions</h3>

      <div class="grid grid-cols-2 gap-3 text-center text-xs">
        <div class="bg-white p-3 rounded-xl shadow">
          🛒
          <p class="mt-1">Shop</p>
        </div>
        <div class="bg-white p-3 rounded-xl shadow">
          📦
          <p class="mt-1">Orders</p>
        </div>
      </div>
    </section>

    <section class="px-4 mt-6 pb-24">
      <h3 class="text-sm font-semibold mb-3">Recent Items</h3>

      <div class="space-y-3">
        <div
          class="bg-white p-3 rounded-xl shadow flex justify-between items-center"
        >
          <div>
            <p class="text-sm font-semibold">Wireless Headphones</p>
            <p class="text-xs text-gray-500">$120</p>
          </div>
          <button class="text-blue-600 text-sm">View</button>
        </div>

        <div
          class="bg-white p-3 rounded-xl shadow flex justify-between items-center"
        >
          <div>
            <p class="text-sm font-semibold">Smart Watch</p>
            <p class="text-xs text-gray-500">$220</p>
          </div>
          <button class="text-blue-600 text-sm">View</button>
        </div>
      </div>
    </section>
  </main>  

  </div>
</template>