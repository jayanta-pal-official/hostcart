<script setup>
import { RouterView } from "vue-router";
import Footer from "@/components/includes/Footer.vue";
import Header from "@/components/includes/Header.vue";
import Loader from '@/components/includes/Loader.vue';



</script>


<template>
    <!-- <Loader /> -->
    <Header />
    <RouterView />
    <Footer />
</template>



<style>
@import "../assets/css/user.css";
</style>