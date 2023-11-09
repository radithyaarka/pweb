<template>
  <nav class="bg-black">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <!--
                Icon when menu is closed.
    
                Menu open: "hidden", Menu closed: "block"
              -->
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!--
                Icon when menu is open.
    
                Menu open: "block", Menu closed: "hidden"
              -->
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <RouterLink to="/" :class="{ 'bg-purple-500 text-white': isRouteActive('/') }" 
                class="text-gray-300 hover:bg-purple-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Home</RouterLink>
                <RouterLink to="/about" :class="{ 'bg-purple-500 text-white': isRouteActive('/about') }"  
                class="text-gray-300 hover:bg-purple-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">About</RouterLink>
                <RouterLink to="/menu" :class="{ 'bg-purple-500 text-white': isRouteActive('/menu') }"  
                class="text-gray-300 hover:bg-purple-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Menu</RouterLink>
                <RouterLink to="/1" :class="{ 'bg-purple-500 text-white': isRouteActive('/1') }"  
                class="text-gray-300 hover:bg-purple-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Calendar</RouterLink>
                <RouterLink to="/2" :class="{ 'bg-purple-500 text-white': isRouteActive('/2') }"  
                class="text-gray-300 hover:bg-purple-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Dashboard</RouterLink>
                <RouterLink to="/3" :class="{ 'bg-purple-500 text-white': isRouteActive('/3') }"  
                class="text-gray-300 hover:bg-purple-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Feedback</RouterLink>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button type="button" class="relative flex rounded-full bg-black text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://devilchan.com/preview/2022/07/05/16/32/30303/30303-300x349.webp" alt="">
                </button>
              </div>
    
            </div>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
import { RouterLink, useRoute } from 'vue-router';

export default {
  components: {
    RouterLink,
  },
  methods: {
    // Check if the current route matches the provided path
    isRouteActive(path) {
      const currentRoute = useRoute();
      return currentRoute.path === path;
    },
  },
};
</script>
