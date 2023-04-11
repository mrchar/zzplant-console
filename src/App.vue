<script setup lang="ts">
import {zhCn} from "element-plus/lib/locale/index"
import {Document, Location, Menu, Setting} from "@element-plus/icons-vue"
</script>

<template>
    <el-config-provider :locale="zhCn">
        <div class="w-screen h-screen flex flex-col gap-2">
            <div class="flex-none flex justify-between">
                <div class="text-4xl">Logo</div>
                <div class="text-4xl">Title</div>
                <div class="text-4xl">Avatar</div>
            </div>
            <div class="flex-auto flex gap-2">
                <div class="flex-initial">
                    <el-menu class="h-full" default-active="2">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <location/>
                                </el-icon>
                                <span>Navigator One</span>
                            </template>
                            <el-menu-item-group title="Group One">
                                <el-menu-item index="1-1">item one</el-menu-item>
                                <el-menu-item index="1-2">item two</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="Group Two">
                                <el-menu-item index="1-3">item three</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="1-4">
                                <template #title>item four</template>
                                <el-menu-item index="1-4-1">item one</el-menu-item>
                            </el-sub-menu>
                        </el-sub-menu>
                        <el-menu-item index="2">
                            <el-icon>
                                <Menu/>
                            </el-icon>
                            <span>Navigator Two</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <el-icon>
                                <document/>
                            </el-icon>
                            <span>Navigator Three</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <el-icon>
                                <setting/>
                            </el-icon>
                            <span>Navigator Four</span>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div class="flex-auto p-4">Main</div>
            </div>
        </div>
    </el-config-provider>
</template>
