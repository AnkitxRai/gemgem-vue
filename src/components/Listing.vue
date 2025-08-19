<template>
<div v-if="successMessage" style="color:green; margin-bottom: 10px; margin-top: 10px">
    {{  successMessage }}
</div>

<div v-if="error" style="color:red; margin-bottom: 10px; margin-top: 10px">
    {{  error }}
</div>

<div style="margin-bottom: 20px;">
    <button @click="createOrder()" style="padding: 6px 12px; background-color: #ccc; border: none; border-radius: 4px; cursor: pointer;">
    Create Order
    </button>
</div>

<h1>Order listing</h1>

<div v-if="orders.length === 0" class="text-gray-500">
    No order to display, Please create one.
</div>

<table v-else border="1" cellpadding="25" cellspacing="0" class="w-full">
    <thead>
        <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.customer.name }}</td>
            <td>{{ order.customer.email }}</td>
            <td>{{ order.product.name }}</td>
            <td>{{ order.product.price }}</td>
            <td>
                <select v-model="order.status" @change="updateOrderStatus(order)">
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                    <option value="cancelled">Cancelled</option>
                </select>
            </td>
        </tr>

    </tbody>
</table>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const orders = ref([]);
const apiUrl = import.meta.env.VITE_API_URL;
const loader = ref(false);
const error = ref('');
const successMessage = ref('');
const router = useRouter();

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

const updateOrderStatus = async (order) => {
    try {
        await axios.patch(`${apiUrl}/orders/${order.id}`, {
            status: order.status
        });
        successMessage.value = `Status of order ${order.id} updated to ${order.status} successfully.`

        // reset success message afyer 2 seconds
        setTimeout(() => {
            successMessage.value = "";
        }, 2000)

    } catch (err) {
        console.log(err)
        error.value = `Failed to update status for the order id ${order.id}`;
    }
}

const createOrder = () => {
    router.push({name: 'Create'});
}

onMounted(() => {
    console.log("hello");
    console.log(apiUrl);
    fetchOrders();
});

</script>
