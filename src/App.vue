<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/example">Example</router-link>
    </div>
    <router-view />
    <notifications position="top center" class="notification-class" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.vue-notification {
  font-size: 20px !important;
  padding: 20px !important;
  margin: 0 !important;
  text-align: center !important;
}

.notification-class {
  margin-top: 30px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
}

.customPagination > li > a {
  color: red !important;
}

.customPagination > li.active > a,
.customPagination > li > a:hover {
  color: white !important;
  background-color: green !important;
}
</style>
