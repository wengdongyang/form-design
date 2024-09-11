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
        const emailRegex = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
        console.error(emailRegex.test('15906683084'));
        if (emailRegex.test(value)) {
          callback();
        } else {
          callback('请输入有效的手机号');
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