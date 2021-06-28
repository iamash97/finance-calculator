<template>
  <base-card>
  <form ref="data" @submit.prevent="calculate">
    <div class="form-control">
      <label for="amount">Monthly Investment Amount</label><br>
      <input id="amount" name="amount" type="number" v-model="amount"/>
    </div>
    <div class="form-control">
      <label for="years">Number of years</label><br>
      <input id="years" name="years" type="number" v-model="years"/>
    </div>
    <div class="form-control">
      <label for="rate">Interest Rate</label><br>
      <input id="rate" name="rate" type="number" v-model="rate"/>
    </div>
  </form>
  <h3> Invested Amount : Rs.{{ investedAmount }}</h3>
  <h3> Resultant Amount : Rs.{{ finalAmount }} </h3>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      amount : '',
      years : '',
      rate : '',
    };
  },
  computed: {
    finalAmount() {
      let r=this.rate/(100*12);
      if(this.amount==0 || this.years==0 || this.rate==0){
        return 0;
      }
      else {
        let amount=(this.amount*((Math.pow(1+r,(this.years*12))-1)/r)*(1+r));
        return Math.round(amount);
      }
    },
    investedAmount() {
      return this.amount*this.years*12;
    }
  }, 
};
</script>

<style scoped>
input {
  width: 100%;
  height: 2.5rem;
  font-size: 2.2rem;
}
</style>