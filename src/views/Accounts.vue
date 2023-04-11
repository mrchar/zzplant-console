<script lang="ts" setup>
const accounts = ref([
    {
        code: "0001",
        name: "account1",
        user: {name: "用户名", gender: "MALE", phoneNumber: "15888888888"},
    },
    {
        code: "0002",
        name: "account2",
        user: {name: "用户名", gender: "FEMALE", phoneNumber: "15666666666"},
    },
    {
        code: "0003",
        name: "account3",
        user: {name: "404", gender: null, phoneNumber: "10000000000"},
    },
])

const genderMap = {"male": "男士", "female": "女士"}
</script>
<template>
    <div class="text-2xl my-4 px-2">所有用户</div>
    <div class="w-full h-full flex flex-col gap-4">
        <el-card v-for="account in accounts" :key="account.code">
            <el-descriptions>
                <el-descriptions-item label="编码">
                    {{ account.code }}
                </el-descriptions-item>
                <el-descriptions-item label="名称">
                    {{ account.name }}
                </el-descriptions-item>
                <el-descriptions-item label="用户名">
                    {{ account.user.name }}
                </el-descriptions-item>
                <el-descriptions-item label="性别">
                    {{ account.user.gender ? genderMap[account.user.gender.toLowerCase()] : "未知" }}
                </el-descriptions-item>
                <el-descriptions-item label="手机号码">
                    {{ account.user.phoneNumber.replace(/(\d{3})(\d{4})(\d+)/, "$1****$3") }}
                </el-descriptions-item>
            </el-descriptions>
        </el-card>
        <el-pagination class="self-end"
                       background
                       layout="sizes, prev, pager, next, jumper ->, total"
                       :total="1000"/>
    </div>
</template>