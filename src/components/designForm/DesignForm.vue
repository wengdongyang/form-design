<template>
  <div class="hello">
    {{ formData }}
    <input-mobile />
    <!-- 问题1 -->
    <!-- <form-create :value.sync="formData" v-model="fapi" :rule="rule" :option="option" @submit="onSubmit"></form-create> -->
    <fc-designer ref="designerRef" height="60vh" :config="config" />
  </div>
</template>

<script>
import { InputMobileRule } from './configs';
export default {
  name: 'DesignForm',
  props: {
    msg: String,
  },
  data() {
    return {
      formData: {},
      fapi: {},
      rule: [
        {
          type: 'input-mobile',
          field: '手机号输入框',
          title: '手机号输入框',
          $required: true,
          effect: { componentValidate: true },
          validate: [{ required: false, message: '手机号码' }],
        },
        {
          type: 'input',
          field: '普通输入框',
          title: '普通输入框',
        },
      ],
      option: {
        form: { inline: false, labelPosition: 'right', size: 'default', labelWidth: '125px' },
        resetBtn: { show: false, innerText: '重置' },
        submitBtn: { show: false, innerText: '提交' },
      },
    };
  },
  computed: {
    config() {
      return {
        fieldReadonly: false,
        hiddenDragMenu: false,
        hiddenDragBtn: false,
        hiddenMenu: ['subform', 'layout', 'aide'],
        showFormConfig: false,
        hiddenItem: ['password', 'inputNumber', 'switch', 'rate', 'slider', 'colorPicker', 'cascader', 'elTransfer', 'tree', 'fcEditor'],
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initDesigner();
    });
  },
  methods: {
    initDesigner() {
      try {
        this.$refs.designerRef.addComponent(InputMobileRule);
      } catch (error) {
        console.warn(error);
      }
    },
    onSubmit(values) {
      try {
        console.error(values);
      } catch (error) {
        console.warn(error);
      }
    },
  },
};
</script>

<style scoped></style>
