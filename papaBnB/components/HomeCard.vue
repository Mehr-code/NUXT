<template>
  <div>
    <div
      v-for="hme in home"
      :key="hme.objectID"
      style="float: left; margin: 10px"
    >
      <img :src="hme.images[0]" alt="" style="width: 200px" /><br />
      {{ hme.title }}<br />
      {{ hme.location.address }}{{ hme.location.city }}{{ hme.location.state
      }}<br />
      {{ hme.guests }} guests<br />
      {{ hme.pricePerNight }} / night <br />
    </div>
  </div>
</template>

<script setup>
const { hme } = defineProps(["home"]);
</script>

<style scoped></style>
