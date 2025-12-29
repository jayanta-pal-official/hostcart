<template>
        <!-- Inner Banner Start-->
        <!-- <section class="inner_banner_section">
        <div class="container">
            <div class="content">
                <ul>
                    <li><i class="fa-solid fa-house"></i></li><i class="fa-solid fa-chevron-right"></i>
                    <li><a href="#">Error</a></li>
                </ul>
            </div>
        </div>
        <img src="../assets/image/inner_banner_image.jpg" alt="">
    </section> -->
    <!-- Inner Banner End-->


    <!-- auth_section Start-->
    <section class="order_success_section error_section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body p-4 p-md-5">
                            <div class="text-center">
                                <!-- <h1>404</h1> -->
                                <!-- <img src="../assets/image/errorImg.svg" alt="" class="w-50"> -->
                            </div>
                            <div class="text-center mt-5 pt-1">
                                <h4 class="mb-3 text-capitalize">OOOPS ! PAGE NOT FOUND</h4>
                                <p class="text-muted mb-2">Sorry the page you are looking for does not exist.</p>
                                <p class="text-muted mb-0">Try going back to our homepage.</p>
                                <div class="mt-4 pt-2 hstack g-2 d-flex justify-content-center">
                                    <RouterLink :to="{ name:'home'}" class="common-btn5">Back To Home <i class="ri-home-4-line align-bottom ms-1"></i></RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- auth_section End-->

</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>