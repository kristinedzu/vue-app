<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add</router-link>
      <router-link to="/mybooks">My List</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  text-align: center;
  color: white;
}

#nav {
  position: absolute;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #7db5c1;
}

#nav a {
  font-weight: bold;
  color: white;
  background-color: #7db5c1;
  padding: 5% 0;
  width: 33.3%;
  text-decoration: none;
  font-family: lato, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
}

#nav a.router-link-exact-active {
  color: #7db5c1;
  background-color: white;
}
</style>
