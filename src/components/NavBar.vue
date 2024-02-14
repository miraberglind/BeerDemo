<!-- Denna delen hanterar Import av paket eller komponenter, javascript funktioner, vue methods, created etc-->
<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <!-- Navbar med en fast position högst upp på sidan -->
    <nav class="navbar">
      <div class="container-fluid">
        <!-- En RouterLink som fungerar som en länk till startsidan och har texten "Goodminton beer" -->
        <RouterLink class="navbar-brand" to="/" style="display: block; text-align: center;">GOODMINTON BEER</RouterLink>

        <!-- En knapp för att visa offcanvas-menyen när skärmen är mindre -->
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Offcanvas-meny som visas när knappen trycks -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">GOODMINTON BEER</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <!-- En lista med navigationslänkar för startsidan och "About" sidan -->
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <RouterLink class="nav-link active" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">About</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/ourbeers">Our Beers</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/weather">Weather</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/epic-images">Epic Images</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
