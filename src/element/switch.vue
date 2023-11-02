<template>
    <div>
        <p>switch开关</p>
        <el-switch v-model="value1" @change="ButSwith" active-text="白天" inactive-text="黑夜">
        </el-switch>
    </div>
</template>
<script>
import bus from '../js/bus.js'
export default {
    data() {
        return {
            value1: true,
        }
    },
    methods: {
        ButSwith(val) {
            bus.$emit('deom', val)
        }
    }
}
</script>
