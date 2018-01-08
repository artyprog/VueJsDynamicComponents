<template>
  <div>
    <h1>Dynamic Components</h1>
    {{ msg }}
    <br /> <br />
    <div style="dislay:flex">
      <button @click = 'hello()'>Hello</button>      
      <button @click = 'bye()'>Bye</button>
    </div>
    <br />
    <component :is="dynamicComponent"></component>
    <hr />
    <a href="/">Home</a>
  </div>
  

</template>

<script>
    import Vue from 'vue'

    Vue.component('bye', {
      template: '<h1>Bye</h1>'
    });

    Vue.component('hello', {
      template: '<h1>Hello</h1>'
    });

    export default {
      name: 'dyncomp',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          dynamicComponent: 'hello'
        }
      },
      methods: {
        
        bye () {
          this.dynamicComponent = 'bye'
        },

        hello () {
          this.dynamicComponent = 'hello'
        }
      }
    }
</script>

<style>

</style>
