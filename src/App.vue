<template>
  <section>
    <header>
      <h1>Finance Calculator</h1>
    </header>
    <div id="navs">
    <app-menu id="nav" @click="setSelectedComponent('sip-calculator')">SIP</app-menu>
    <app-menu id="nav" @click="setSelectedComponent('lump-sum-calculator')">Lump Sum</app-menu>
    </div>
    <keep-alive>   
    <component :is="selectedComponent"></component>
    </keep-alive>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedComponent : "sip-calculator",
    };
  },
  methods: {
    setSelectedComponent(comp) {
      this.selectedComponent=comp;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  background-color: #e3e2df;
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1px;
  background-color: #58004d;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  width: 90%;
  max-width: 80rem;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid black;
  background-color: #ff0077;
  color: white;
  margin:auto;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#navs{
  margin: auto;
  width:80%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#nav {
  display: inline-block;
  width: 30%;
}
</style>