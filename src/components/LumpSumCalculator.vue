<template>
  <base-card>
  <div>
  <form @submit.prevent="calculate">
    <div class="form-control">
      <label for="amount">Investment Amount</label>
      <input id="amount" name="amount" type="number" v-model="amount"/>
    </div>
    <div class="form-control">
      <label for="years">Number of years</label>
      <input id="years" name="years" type="number" v-model="years"/>
    </div>
    <div class="form-control">
      <label for="rate">Interest Rate</label>
      <input id="rate" name="rate" type="number" v-model="rate"/>
    </div>
    <div class="form-control">
      <label for="compounding">Compounding Type</label> <br>
      <input id="compounding" name="compounding" type="radio" value="1" v-model="compounding"> Annually
      <input id="compounding" name="compounding" type="radio" value="2" v-model="compounding"> Half Yearly
      <input id="compounding" name="compounding" type="radio" value="4" v-model="compounding"> Quarterly 
      <input id="compounding" name="compounding" type="radio" value="12" v-model="compounding"> Monthly
    </div>
  </form>
  </div>
  <div>
  <h3> Invested Amount : Rs.{{ investedAmount }}</h3>
  <h3> Resultant Amount : Rs.{{ finalAmount }} </h3>
  </div>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      amount : '',
      years : '',
      rate : '',
      compounding :'',
    };
  },
  computed: {
    finalAmount() {
      let r=this.rate/(100);
      if(this.amount==0 || this.years==0 || this.rate==0){
        return 0;
      }
      else {
      let amount = (this.amount*Math.pow(1+(r/this.compounding),(this.compounding * this.years)));
      return Math.round(amount);
      }
    },
    investedAmount() {
      if(this.amount==0){
        return 0;
      }
      else{
        return this.amount;
      } 
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

#compounding {
  width:auto;
  font-size: 1rem !important;
  height: 1rem !important;
}
</style>
