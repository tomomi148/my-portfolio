<template>
  <div id="nav">
    <router-link to="/">Top</router-link>
    <router-link to="/profile">Profile</router-link>
    <router-link to="/skill">Skill</router-link>
    <router-link to="/product">Product</router-link>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  // text-align: right;
  padding: 20px 0;
  background: #0065b2;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 10px 0 rgba(252, 229, 226, 0.5);
  a {
    color: #fdfdfb;
    font-size: 20px;
    text-decoration: none;
    margin: 0 10px;

    &.router-link-exact-active {
      color: #db077f;
      font-weight: bold;
    }
  }
}
</style>