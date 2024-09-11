<template>
  <div class="hello">
    <fc-designer ref="designerRef" height="60vh" :config="config" />
  </div>
</template>

<script>
import { InputMobileRule } from "./configs";
export default {
  name: 'DesignForm',
  props: {
    msg: String
  },
  data() {
    return {};
  },
  computed: {
    config() {
      return {
        fieldReadonly: false,
        hiddenDragMenu: false,
        hiddenDragBtn: false,
        hiddenMenu: ['subform', 'layout', 'aide'],
        showFormConfig: false,
        hiddenItem: [
          'password',
          'inputNumber',
          'switch',
          'rate',
          'slider',
          'colorPicker',
          'cascader',
          'elTransfer',
          'tree',
          'fcEditor'
        ],
      };
    }
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
  }
};
</script>

<style scoped></style>
