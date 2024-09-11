<template>
  <el-input :value="innerValue" @input="onChangeValue" />
</template>
<script>
export default {
  name: 'InputMobile',
  props: {
    value: [String]
  },
  data() {
    const { value } = this;
    console.error(this);
    return {
      innerValue: value
    };
  },
  methods: {

    onChangeValue(e) {
      try {
        this.innerValue = e;
        this.$emit('update:value', e);
      } catch (error) {
        console.warn(error);
      }
    },

    formCreateValidate(rule, value, callback) {
      try {
        const emailRegex = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
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
    value(newVal) {
      console.warn(newVal);
    }
  }
};
</script>