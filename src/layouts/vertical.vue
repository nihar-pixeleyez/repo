<script setup>
import NavBar from "@/components/nav-bar.vue";
import Menu from "../components/menu.vue";
import Footer from "../components/footer.vue";
import rtlLtr from "../components/rtlLtr.vue";
document.body.classList.add('dark')
</script>
<template>
  <div class="bg-[#f9fbfd] dark:bg-dark text-black">
    <!-- Start detached bg -->
    <div class="bg-[url('@/assets/images/bg-main.png')] bg-black min-h-[220px] sm:min-h-[250px] bg-bottom fixed hidden w-full -z-50 detached-img"></div>
    <!-- End detached bg -->

    <!-- Start Menu Sidebar Overlay -->
    <div x-cloak class="fixed inset-0 bg-black/60 dark:bg-dark/90 z-[999] lg:hidden hidden" id="sidebarOverlay"></div>
    <!-- End Menu Sidebar Overlay -->
    <!-- Start Main Content -->
    <div class="flex mx-auto main-container">
      <Menu />
      <div class="flex-1 main-content">
        <NavBar />
        <div class="h-[calc(100vh-60px)] relative overflow-y-auto overflow-x-hidden p-4 space-y-4 detached-content">
          <slot />
          <Footer />
        </div>
      </div>
    </div>
  </div>
  <rtlLtr />
</template>

