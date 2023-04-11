<script setup lang="ts">
const count = ref(1)
</script>

<template>
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
    <el-button @click="count++">{{ count }}</el-button>
</template>
