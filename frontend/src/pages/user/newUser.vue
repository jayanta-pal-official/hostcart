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
              <div class="text-center  pt-1">
                <h2 class="text-center ">Add New User</h2>

                <form @submit.prevent="submitForm">
                  <input type="text" placeholder="Name" v-model="name" required />
                  <input type="email" placeholder="Email" v-model="email" required />
                  <input type="tel" placeholder="Phone" v-model="phone" required />
                  <input type="password" placeholder="Password" v-model="password" required />

                  <button type="submit" class="mb-5">Create User</button>
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
import { ref } from "vue";
import api from "@/services/api";
import { useRouter } from "vue-router";
const router = useRouter();
import { toast } from 'vue3-toastify' // ✅

const name = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");

const submitForm = async () => {

  try {

    const response = await api.post("/users", {
      name: name.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
    });
    if (response.status === 201) {
      toast.success(response.data.message || "User created successfully!");

      router.push({ name: 'dashboard' });



    }
    console.log("Backend response:", response);


    // clear form
    name.value = "";
    email.value = "";
    phone.value = "";
    password.value = "";
  } catch (err) {
    console.error("Error creating user:", err);
  }
}
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
  font-size: 16px;
}
</style>