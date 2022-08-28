<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
        // document.body.style.backgroundColor = "yellow";

  }
}
</script>

<style>
html,body {
  font-family: Arial, sans-serif;
  /* background-color: #264653 ; */
  overflow-x: hidden;
  background-attachment: fixed;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: all 5000s ease-in-out 0s;
}
</style>
