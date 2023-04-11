<script setup lang="ts">
import {zhCn} from "element-plus/lib/locale/index"
import {Avatar, Bell, CreditCard, House, Monitor, OfficeBuilding, Setting, Shop, User} from "@element-plus/icons-vue"
</script>

<template>
    <el-config-provider :locale="zhCn">
        <div class="w-screen h-screen flex flex-col gap-2">
            <div class="flex-none flex justify-between">
                <div class="text-4xl">Logo</div>
                <div class="text-4xl">Title</div>
                <div class="text-4xl flex gap-4">
                    <el-icon size="32px">
                        <Bell/>
                    </el-icon>
                    Avatar
                </div>
            </div>
            <div class="flex-auto flex gap-2">
                <div class="flex-initial">
                    <el-menu class="h-full" :router="true" default-active="/dashboard">
                        <el-menu-item index="/dashboard">
                            <el-icon>
                                <Monitor/>
                            </el-icon>
                            <span>仪表盘</span>
                        </el-menu-item>
                        <el-menu-item index="/accounts">
                            <el-icon>
                                <User/>
                            </el-icon>
                            <span>账户管理</span>
                        </el-menu-item>
                        <el-sub-menu index="/shops">
                            <template #title>
                                <el-icon>
                                    <Shop/>
                                </el-icon>
                                <span>商铺管理</span>
                            </template>
                            <el-menu-item index="/companies">
                                <el-icon>
                                    <OfficeBuilding/>
                                </el-icon>
                                <span>企业管理</span>
                            </el-menu-item>
                            <el-menu-item index="/shops">
                                <el-icon>
                                    <House/>
                                </el-icon>
                                <span>商铺管理</span>
                            </el-menu-item>
                            <el-menu-item index="/shops/accounts">
                                <el-icon>
                                    <CreditCard/>
                                </el-icon>
                                <span>会员管理</span>
                            </el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="/settings">
                            <template #title>
                                <el-icon>
                                    <Setting/>
                                </el-icon>
                                <span>更多</span>
                            </template>
                            <el-menu-item index="roles">
                                <el-icon>
                                    <Avatar/>
                                </el-icon>
                                <span>角色管理</span>
                            </el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </div>
                <div class="flex-auto p-4">
                    <router-view/>
                </div>
            </div>
        </div>
    </el-config-provider>
</template>
