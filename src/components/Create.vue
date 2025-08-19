<template>
  <div style="max-width: 400px; margin: 50px auto; padding: 20px; border: 1px solid #ccc;">
  
    <div style="margin-bottom: 20px;">
      <button @click="orderListing()" style="padding: 6px 12px; background-color: #ccc; border: none; border-radius: 4px; cursor: pointer;">
        Order Listing Page
      </button>
    </div>


  <h1>Create Order</h1>
<form @submit.prevent="submitOrder">

  <div style="margin-bottom: 10px;">
    <label>Customer Name:</label>
    <input type="text" v-model="orderForm.customer_name" required />
  </div>

    <div style="margin-bottom: 10px;">
    <label>Customer Email:</label>
    <input type="text" v-model="orderForm.customer_name" required />
  </div>

    <div style="margin-bottom: 10px;">
    <label>Product Name:</label>
    <input type="text" v-model="orderForm.customer_name" required />
  </div>

      <div style="margin-bottom: 10px;">
    <label>Product Price:</label>
    <input type="text" v-model="orderForm.customer_name" required />
  </div>

  <div style="margin-bottom: 10px;">
    <label>Status:</label>
    <select v-model="orderForm.status" required>
      <option value="">Select Status</option>
      <option value="pending">Pending</option>
      <option value="paid">Paid</option>
      <option value="cancelled">Cancelled</option>
    </select>
  </div>


  <div>
    <button type="submit"> Submit </button>
  </div>
</form>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const apiUrl = import.meta.env.VITE_API_URL;
// const loader = ref(false);
// const errors = ref([]);
// const successMessage = ref('');


const orderForm = ref({
  customer_name: "",
  customer_email: "",
  product_name: "",
  product_price: "",
  status: ""
});

const submitOrder = async () => {
  //
}

const orderListing = () => {
    router.push('/');
}

</script>

<style scoped>

</style>
