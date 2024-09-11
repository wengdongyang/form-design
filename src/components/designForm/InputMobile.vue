<template>
  <el-input v-model="innerValue" @change="onChangeValue" />
</template>
<script>
export default {
  name: 'InputMobile',
  props: {
    modelValue: [String]
  },
  data() {
    const { modelValue } = this;
    return {
      innerValue: modelValue
    };
  },
  methods: {

    onChangeValue(value) {
      try {
        console.error(value);
        this.$emit('update:modelValue', value);
      } catch (error) {
        console.warn(error);
      }
    },

    formCreateValidate(rule, value, callback) {
      try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value)) {
          callback();
        } else {
          callback('请输入有效的电子邮件地址');
        }
      } catch (error) {
        console.warn(error);
      }
    }
  },
  watch: {
    modelValue(newVal) {
      console.warn(newVal);
    }
  }
};
</script>