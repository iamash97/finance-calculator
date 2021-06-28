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
    <!-- <div class="form-control">
      <label for="compounding">Compounding Type</label>
      <input id="compounding" name="compounding" type="radio" value="1" v-model="compounding"/>
      <input id="compounding" name="compounding" type="radio" value="3" v-model="compounding"/>
      <input id="compounding" name="compounding" type="radio" value="6" v-model="compounding"/>
      <input id="compounding" name="compounding" type="radio" value="12" v-model="compounding"/>
    </div> -->
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
      let amount = (this.amount*Math.pow(1+r,this.years));
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
</style>


// Time	Compound Interest Formula
// 1 year [Compounded annually]            	P(1 + r)^t – P
// 6 months [Compounded half yearly]	        P[1 + (r/2)^2t] – P
// 3 months [Compounded quarterly]	            P[1 + (r/4)^4t] – P
// 1 month [Monthly compound interest formula]	P[1 + (r/12)^12t] – P