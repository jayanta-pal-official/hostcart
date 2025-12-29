<template>
    <!-- Inner Banner Start-->
    <!-- <section class="inner_banner_section">
        <div class="container">
            <div class="content">
                <ul>
                    <li><i class="fa-solid fa-house"></i></li><i class="fa-solid fa-chevron-right"></i>
                    <li>Account</li><i class="fa-solid fa-chevron-right"></i>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </div>
        <img src="@/js/assets/image/inner_banner_image.jpg" alt="">
    </section> -->
    <!-- Inner Banner End-->


    <!-- auth_section Start-->
    <section class="auth_section">
        <div class="container">
            <div class="auth_main_box">
                <div class="auth_inner_box">
                    <h1>Sign In</h1>
                    <form @submit.prevent="FromSubmit">
                        <div class="mb-3">
                            <input type="email" class="form-control" id="email" placeholder="Email" name="email"
                                v-model="email" v-bind="emailAttrs" :class="{ 'border-red-500': errors.email }">

                            <span v-if="errors.email" class="text-danger blockquote">{{
                                errors.email
                                }}</span>
                        </div>

                        <div class="mb-3">
                            <input type="password" class="form-control" id="password" placeholder="password"
                                name="password" v-model="password" v-bind="passwordAttrs"
                                :class="{ 'border-red-500': errors.password }">
                            <span v-if="errors.password" class="text-danger blockquote">{{
                                errors.password
                                }}</span>
                        </div>

                        <div class="mb-3 Fremember_box">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="remember">
                                <label class="form-check-label" for="remember">Remember me</label>
                            </div>

                            <a href="forgetPassword.html" class="forget_password">Forget Password</a>
                        </div>

                        <button type="submit" class="common-btn">Login</button>

                        <p>Don’t have account? <RouterLink to="/register">Sign Up</RouterLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- auth_section End-->
</template>
<script setup>

import { ref } from "vue";
import axios from "axios";
import api from "../../services/api.js";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "@/services/store/auth.js";
import { toast } from 'vue3-toastify' ;


// import { useToast } from "vue-toastification";

// const toast = useToast();
const authstore = useAuthStore();
const router = useRouter();
const formData = ref({});
const schema = yup.object({
    email: yup
        .string().trim()
        .required("Email is required")
        .email("Invalid email address"),
    password: yup
        .string().trim()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),

});
const { errors, handleSubmit, defineField, resetForm } = useForm({
    validationSchema: schema,
});


const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

const onSubmit = async () => {
    try {
        
        const formData = {

            email: email.value,
            password: password.value,

        };
        console.log("Submitting form data:", formData);
        const { data, status } = await api.post("/login", formData);


                if (status === 200) {
                    authstore.setUser(data);
                    toast.success(data.message || "Login successfully!");  

                    if(authstore?.state?.userDetails?.role === 'admin'){
                        router.push("/admin/dashboard");
                        return;
                    }
                    router.push("/user-dashboard");
                   

                } 
               

    } catch (error) {
        if (error.response && error.response.data) {
             toast.error(error.response.data.message || "Login failed!");  

        } else {
            alert("Something went wrong. Please try again.");
        }
    }

}
// console.log(authstore?.state?.userDetails);
const FromSubmit = handleSubmit(onSubmit);
</script>
<style scoped>



</style>