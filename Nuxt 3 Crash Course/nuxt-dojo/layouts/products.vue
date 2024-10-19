<template>
  <div>
    <header>
      <nav>
        <nuxt-link to="/">Nuxt Dojo Merch</nuxt-link>
      </nav>
    </header>

    <!-- output the page content -->
    <div>
      <slot />
    </div>
    <footer>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}

p {
  margin: 20px 0;
}
</style>
