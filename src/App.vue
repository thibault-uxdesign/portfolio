<script>
export default {
  name: "App",
};
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
html,
body {
  height: 100%;
}

html {
  background-color: #020717;
}

body {
  margin: auto;
}

@media (max-width: 860px) {
  body {
    width: auto;
  }
}

#app {
  font-family: "Libre Franklin", "sans-serif";
  src: url("../assets/fonts/libre-franklin-v13-latin-regular.woff") format("woff"),
    url("../assets/fonts/libre-franklin-v13-latin-regular.woff2") format("woff2");
  src: url("../assets/fonts/libre-franklin-v13-latin-600.woff") format("woff"),
    url("../assets/fonts/libre-franklin-v13-latin-600.woff2") format("woff2");
  src: url("../assets/fonts/libre-franklin-v13-latin-500.woff") format("woff"),
    url("../assets/fonts/libre-franklin-v13-latin-500.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}
</style>
