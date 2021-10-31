<template>
  <div class="burger-menu">
    <input id="menu-toggle" type="checkbox" />
    <label class="menu-btn" for="menu-toggle">
      <span></span>
    </label>

    <ul class="menubox">
      <li><NuxtLink class="menu-item" to="/">Мантры</NuxtLink></li>
      <li><NuxtLink class="menu-item" to="/practiceAll">Практика</NuxtLink></li>
      <li><NuxtLink class="menu-item" to="/bookAll">Услуги</NuxtLink></li>
      <li><NuxtLink class="menu-item" to="/codes">Коды</NuxtLink></li>
      <li>    <auth/></li>
    </ul>
  </div>
</template>

<script>
import auth from "~/components/layouts/auth";
export default {
  name: "burger",
  components:{auth}
}
</script>

<style scoped>
.menu-btn{
  display: flex;
  align-items: center;
  position: absolute;
  top: 50;
  right: -1;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 150;
}

.menu-btn > span,
.menu-btn > span::before,
.menu-btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: white;
  transition-duration: .25s;
}
.menu-btn > span::before {
  content: '';
  top: -8px;
}
.menu-btn > span::after {
  content: '';
  top: 8px;
}
.menubox{
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: -100%;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #847BB2;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
  transition-duration: .25s;
  z-index: 1;
}
.menu-item {
  display: block;
  padding: 12px 24px;
  color: white;
  font-family: Jost;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;
}
.menu-item:hover {
  background-color: #CFD8DC;
}
#menu-toggle{
  opacity: 0;
}
#menu-toggle:checked ~ .menu-btn > span{
  transform: rotate(45deg);
}
#menu-toggle:checked ~ .menu-btn > span::before{
  top: 0;
  transform: rotate(0);
}
#menu-toggle:checked ~ .menu-btn > span::after{
  top: 0;
  transform: rotate(90deg);
}
#menu-toggle:checked ~ .menubox{
  visibility: visible;
  left: 0;
}
</style>
