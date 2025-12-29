<template>
  <section class="order_success_section error_section">
    <div class="container">
      <!-- <h1 class="text-center mt-5 mb-5">Add New User</h1> -->

      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body p-4 p-md-5">
              <div class="text-center">

                <!-- <h1>404</h1> -->
                <!-- <img src="../assets/image/errorImg.svg" alt="" class="w-50"> -->
              </div>
              <div class="text-center ">
               <h2 class="text-center ">Update User</h2>

                <form @submit.prevent="submitForm">
                  <input type="text" placeholder="Name" v-model="name" required />
                  <input type="email" placeholder="Email" v-model="email" required />
                  <input type="tel" placeholder="Phone" v-model="phone" required />

                  <button type="submit" class="mb-5">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>






</template>
<script setup>
import { ref, onMounted } from "vue";
import api from "@/services/api";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
import { toast } from 'vue3-toastify';

const id = route.params.id;

const name = ref("");
const email = ref("");
const phone = ref("");

const submitForm = async () => {

  try {

    const response = await api.put(`/users/${id}`, {
      name: name.value,
      email: email.value,
      phone: phone.value,
    });
    if (response.status === 200) {

      toast.success(response.data.message || "User updated successfully!");
          router.push({ name: 'dashboard' });
          }

  } catch (err) {
    console.error("Error creating user:", err);
  }
}

onMounted(async () => {

  try {
    const response = await api.get(`users/${id}`);
    name.value = response.data.user.name;
    email.value = response.data.user.email;
    phone.value = response.data.user.phone;

  } catch (error) {
    console.log(error);
  } finally {
    // loaderStore.hideLoader();
  }

});

</script>
<style scoped>
.form-box {
  max-width: 00px;
  margin: 50px auto;
  padding: 25px;
  border-radius: 8px;
  background: #f8fafc;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background: #2563eb;
  color: white;
  border: none;
  cursor: pointer;
}
</style>