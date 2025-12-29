<template>
       <!-- Inner Banner Start-->
       <!-- <section class="inner_banner_section">
        <div class="container">
            <div class="content">
                <ul>
                    <li><i class="fa-solid fa-house"></i></li><i class="fa-solid fa-chevron-right"></i>
                    <li>Account</li><i class="fa-solid fa-chevron-right"></i>
                    <li><a href="#">Create Account</a></li>
                </ul>
            </div>
        </div>
        <img src="@/assets/image/inner_banner_image.jpg" alt="">
    </section> -->
    <!-- Inner Banner End-->


    <!-- auth_section Start-->
    <section class="auth_section">
        <div class="container">
            <div class="auth_main_box">
                <div class="auth_inner_box">
                    <h1>Sign Up</h1>
                    <form @submit.prevent="FromSubmit">

                        <div class="mb-3">
                            <input type="text" class="form-control" id="f-name" placeholder="First Name" name="first_name" v-model="first_name" v-bind="first_nameAttrs"
                            :class="{ 'border-red-500': errors.first_name }">
                            <span v-if="errors.first_name" class="text-danger blockquote">{{
                            errors.first_name
                        }}</span>
                        </div>

                        <div class="mb-3">
                            <input type="text" class="form-control" id="l-name" placeholder="Last Name" name="last_name" v-model="last_name" v-bind="last_nameAttrs"
                            :class="{ 'border-red-500': errors.last_name }">
                            <span v-if="errors.last_name" class="text-danger blockquote">{{
                            errors.last_name
                        }}</span>
                        </div>

                        <div class="mb-3">
                            <input type="email" class="form-control" id="email" placeholder="Email" name="email" v-model="email"  v-bind="emailAttrs"
                            :class="{ 'border-red-500': errors.email }">
                            
                            <span v-if="errors.email" class="text-danger blockquote">{{
                            errors.email
                        }}</span>
                        </div>

                        <div class="mb-3">
                            <input type="tel" class="form-control" id="number" placeholder="Number" name="phone" v-model="phone"v-bind="phoneAttrs"
                            :class="{ 'border-red-500': errors.phone }">
                            <span v-if="errors.phone" class="text-danger blockquote">{{
                            errors.phone
                        }}</span>
                        </div>

                        <div class="mb-3">
                            <input type="password" class="form-control" id="password" placeholder="password"  name="password" v-model="password"v-bind="passwordAttrs"
                            :class="{ 'border-red-500': errors.password }">
                            <span v-if="errors.password" class="text-danger blockquote">{{
                            errors.password
                        }}</span>
                        </div>

                        <button type="submit" class="common-btn">Sign Up</button>

                        <p>Already have an account? <RouterLink to="/login">Sign In</RouterLink></p>
                    </form>
                </div>
            </div>
        </div>
    </section> 
    <!-- auth_section End-->

</template>
<script setup>
// import { ref } from "vue";
// import axios from "axios";
import api from "../../services/api.js";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import * as yup from "yup";
// import { useAuthStore } from "../../services/store/auth";
// import { useToast } from "vue-toastification";

// const authstore = useAuthStore();
const router = useRouter();
// const formData= ref({});
// const toast = useToast();
const schema = yup.object({
    first_name: yup
        .string().trim()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters long"),
    last_name: yup
        .string().trim()
        .required("Last name is required")
        .min(3, "Last name must be at least 3 characters long"),
    email: yup
        .string().trim()
        .required("Email is required")
        .email("Invalid email address"),
     phone: yup
        .string().trim()
        .required("phone is required"),
    password: yup
        .string().trim()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
      
});
const { errors, handleSubmit, defineField, resetForm } = useForm({
    validationSchema: schema,
});

const [first_name, first_nameAttrs] = defineField("first_name");
const [last_name, last_nameAttrs] = defineField("last_name");
const [email, emailAttrs] = defineField("email");
const [phone, phoneAttrs] = defineField("phone");
const [password, passwordAttrs] = defineField("password");

const onSubmit = async()=>{
    try{
        const formData = {
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            phone: phone.value,
            password: password.value,
          
        };

        const {data,status} = await api.post("/users", formData);
        console.log(data.message);
        console.log(status);
        if(status === 201){
            // toast.success(data.message);
            alert(data.message);
            router.push("/login");
        }
         
    }catch(error){
        if(error.response && error.response.data){
            // toast.error(error.response.data.message);
            alert(error.response.data.message);
        }else {
            alert("Something went wrong. Please try again."); 
        }
    }

}

const FromSubmit = handleSubmit(onSubmit);
</script>
<style scoped>
input.border-red-500 {
    border-color: red;
}
</style>