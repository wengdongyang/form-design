<template>
  <el-input :value="value" :disabled="disabled" @input="value => $emit('input', value)" />
</template>
<script>
export default {
  name: 'InputMobile',
  props: {
    value: String,
    disabled: Boolean
  },
  methods: {
    formCreateValidate(rule, value, callback) {
      try {
        const phoneRegex = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
        if (!value) {
          callback();
          return;
        }
        if (phoneRegex.test(value)) {
          callback();
        } else {
          callback('请输入有效的手机号');
        }
      } catch (error) {
        console.warn(error);
      }
    },
  },
};
</script>
