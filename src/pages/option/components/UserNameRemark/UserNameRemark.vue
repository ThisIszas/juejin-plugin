<template>
    <div class='cmp_container'>
        <el-form :inline="true" :model="UserNickNameRemarkForm" :rules="UserRemarkRules"
            class="demo-form-inline" ref="UserNickNameRemarkFormRef">
            <el-form-item label="用户id" prop="userId">
                <el-input v-model="UserNickNameRemarkForm.userId" placeholder="请输入用户id" />
            </el-form-item>
            <el-form-item label="昵称备注" prop="nickname">
                <el-input v-model="UserNickNameRemarkForm.nickname" placeholder="请输入昵称备注" />
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="UserNickNameRemarkForm.remark" placeholder="请输入备注" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="saveUserRemark">添加</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="UserRemarkConfigs" style="width: 100%">
            <el-table-column v-for="column of UserRemarkTableColumns" :key="column.prop" :prop="column.prop" :label="column.label"> 
            </el-table-column>
        </el-table>
    </div>
</template>


<script setup>
import { ref, onMounted, nextTick } from 'vue';

import {UserRemarkTableColumns} from "./data/data";

import {getStorage, setStorage} from "../../optionUtils/storageHelper";

///props
const props = withDefaults(defineProps(), {

});
///emits
const emits = defineEmits([]);
///utils
const UserNickNameRemarkFormRef = ref();

///data
const UserNickNameRemarkForm = ref({userId: "", nickname: "", remark: ""});
const UserRemarkConfigs = ref([]);

/// static data
const UserRemarkConfigStorageKey = "UserRemarkConfigsKey";
const UserRemarkRules = {
    userId: [{ required: true }],
    nickname: [{ required: true }]
}
///lifecycle
doInitProcess();
///watch

//view actions
async function saveUserRemark(){
    await UserNickNameRemarkFormRef.value.validate((valid, fields) => {
        if (!valid) {
            return;
        }
    })
    let shouldAdd = true;

    for(let each of UserRemarkConfigs.value){
        if(each.userId === UserNickNameRemarkForm.value.userId){
            shouldAdd = false;
            break;
        }
    }

    if(shouldAdd){
        UserRemarkConfigs.value.push(UserNickNameRemarkForm.value);
        UserNickNameRemarkForm.value = {userId: "", nickname: "", remark: ""};
        nextTick(()=>{
            UserNickNameRemarkFormRef.value.resetFields();
        })   
        setStorage(UserRemarkConfigStorageKey, UserRemarkConfigs.value);
    }
}
///helpers
function doInitProcess(){
    let storedConfig = getStorage(UserRemarkConfigStorageKey) || [];
    UserRemarkConfigs.value = storedConfig;
}
</script>


<style scoped lang="scss">


</style>