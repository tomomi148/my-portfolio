<template>
  <div class="top">
    <h1 class="logo">
      <span class="logo-title">Tomomi Sato's portfolio</span>
      <span class="logo-desc">Web Engineer</span>
    </h1>

    <div class="link-contener">
      <router-link class="link-icon profile-icon" to="/profile">Profile</router-link>
      <router-link class="link-icon skill-icon" to="/skill">Skill</router-link>
      <router-link class="link-icon product-icon" to="/product">Product</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
}
</script>

<style lang="scss" scoped>
.top {
  .logo {
    vertical-align: middle;
    color: #c8bca0;
    .logo-title {
      display: block;
      font-size: 40pt;
      padding: 60px 0 30px;
    }
    .logo-desc {
      display: block;
      font-size: 28px;
    }
  }

  .link-contener {
    padding: 25px;
    height: 100px;
    .link-icon {
      display: inline-block;
      vertical-align: middle;
      text-decoration: none;
      background: #fdfdfb;
      color: #c8bca0;
      margin: 10px;
      padding: 25px;
      font-size: 12pt;

      &:hover {
        cursor: pointer;
        color: #db077f;
        background: #c8bca0;
      }
    }

    .profile-icon {
      border-radius: 30% 70% 30% 70% / 30% 30% 70% 70%;
    }
    .skill-icon {
      border-radius: 70% 30% 30% 70% / 70% 30% 70% 30%;
    }
    .product-icon {
      border-radius: 70% 30% 30% 30% / 70% 70% 30% 30%;
    }
  }
}
</style>