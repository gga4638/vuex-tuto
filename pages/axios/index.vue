<template>
  <div>
    <h1 class="mb-3">Axios</h1>
    <ul class="d-flex">
      <li>
        <NuxtLink to="/axios/get">api get</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/axios/chaining">Promise Chaining</NuxtLink>
      </li>
    </ul>
    <hr/>
    <NuxtChild />
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
ul {
  li {
    margin-right: 40px;
  }
}
</style>

