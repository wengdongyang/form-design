<template>
  <el-input :value="innerValue" @input="onChangeValue" />
</template>
<script>
export default {
  name: 'InputMobile',
  props: {
    value: String,
    modelValue: String,
  },
  data() {
    const { value, modelValue } = this;
    console.error(this);
    return {
      innerValue: value,
    };
  },
  methods: {
    onChangeValue(e) {
      try {
        console.error('e', e);
        this.innerValue = e;
        this.$emit('input', e); // todo,这个地方接收的好像有问题
        this.$emit('update:value', e);
        this.$emit('update:modelValue', e);
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
    },
  },
  watch: {
    value(newVal) {
      console.warn(newVal);
    },
  },
};
</script>
