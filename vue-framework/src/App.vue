<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld />
<!--    <HelloWorld2 />-->
    <el-button type="primary">test</el-button>
    <div id="reactApp"></div>
  </div>
</template>

<script>
import HelloWorld from 'vue2Project/HelloWorld'
import {ElementUI} from 'vue2Project/ElementUI'
import ReactApp from 'react2Project/App'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line no-debugger
// debugger
// Vue.use(ElementUI)
// import HelloWorld2 from 'vue2Project2/HelloWorld'
export default {
  name: 'App',
  mounted() {
    const container = document.getElementById('reactApp');
    const root = createRoot(container);
    root.render(<ReactApp/>);
  },
  components: {
    HelloWorld,
    // HelloWorld2,
    [ElementUI.Button.name]: ElementUI.Button
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
