<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h6>
      Segurança e a integridade das informações da sua empresa.
    </h6>
    <div class="inputCnpj">
      <p>CNPJ: {{ message }}</p>
      <input v-model="message" placeholder="Informe seu CNPJ" />
    </div>

    <div class="inputCnpj">
      <p>Código da Empresa: {{ message }}</p>
      <input v-model="message" placeholder="Informe Código da Empresa" />
    </div>
  </div>
  
</template>

<script setup>


</script>

<style scoped>
h1 {
  font-weight: 600;
  font-size: 3rem;
  line-height: 2.5rem;
  position: relative;
  top: -10px;
  color: #6580FF;
}

h6 {
  font-size: 1.3rem;
  line-height: 1.5rem;
  margin: 0 5px 20px 0;
}

.gretings h1,
.greetings h6,
.greetings .inputCnpj {
  text-align: center;
}

.inputCnpj {
  font-weight: 600;
  font-size: 1rem;
  color: #6580FF;
  align-items: center !important
}


@media (min-width: 1024px) {

  .gretings h1,
  .greetings h6 {
    text-align: center;
  }
}
</style>
