<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- navbar items, navbar burger... -->
      <img src="../assets/logo.png" class="logo" />
    </div>
    <div class="navbar-menu">
      <!-- navbar start, navbar end -->
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </div>
        <div class="navbar-item">
          <router-link :to="{ name: 'About' }">About Us</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>
