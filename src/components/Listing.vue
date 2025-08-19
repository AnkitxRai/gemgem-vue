<template>
<table>
    
</table>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const orders = ref([]);
const apiUrl = import.meta.env.VITE_API_URL;
const loader = ref(false);
const error = ref('');

const fetchOrders = async () => {
    loader.value = true;
    error.value = '';
    try {
        const response = await axios.get(`${apiUrl}/orders`);
        orders.value = response.data;
    } catch (err) {
        console.log(err)
        error.value = "failed to load orders data"
    } finally {
        loader.value = false;
    }
}

onMounted(() => {
    console.log("hello");
    console.log(apiUrl);
    fetchOrders();
});

</script>
