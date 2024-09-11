<template>
  <div id="app">
    <DesignForm />
  </div>
</template>

<script>
import DesignForm from './components/designForm/DesignForm';
export default {
  name: 'App',
  components: {
    DesignForm
  }
};
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
