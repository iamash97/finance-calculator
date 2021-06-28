<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
div {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 20px;
  padding: 1rem;
  background-color: red;
  color: white;
  text-align: center;
  width: 10rem;
  max-width: 80rem;
  font-size: larger;
}
</style>