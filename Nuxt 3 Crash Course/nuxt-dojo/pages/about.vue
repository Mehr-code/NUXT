<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae eveniet
      eligendi, iure fugit provident similique magnam doloribus fugiat
      reiciendis? Dolores, quia.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae eveniet
      eligendi, iure fugit provident similique magnam doloribus fugiat
      reiciendis? Dolores, quia.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="js">
const { data } = await useFetch('/api/currency/GBP');
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
