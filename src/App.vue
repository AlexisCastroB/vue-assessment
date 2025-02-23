<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script setup>
import './styles/main.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>
