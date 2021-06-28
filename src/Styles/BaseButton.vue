<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
div {
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 20px;
  padding: 2rem;
  background-color: #456782;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 20rem;
  font-size: larger;
}
</style>