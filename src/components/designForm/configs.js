import uniqueId from '@form-create/utils/lib/unique';
import { localeProps } from '@form-create/designer/src/utils';

// export const InputMobileRule = {
//   menu: 'main',
//   icon: 'icon-select',
//   label: '手机号输入框',
//   name: 'input-mobile',
//   mask: true,
//   rule({ t }) {
//     return {
//       type: 'input-mobile',
//       field: uniqueId(),
//       title: '手机号输入框',
//       $required: false,
//       display: true,
//       hidden: false,
//       validate: [{ type: 'string', trigger: 'change', mode: 'pattern', message: '手机号错误', pattern: '/^(?:(?:+|00)86)?1[3-9]d{9}$/' }],
//     };
//   },
//   props(_, { t }) {
//     return [];
//   },
// };

const InputMobileName = 'input-mobile';
export const InputMobileRule = {
  menu: 'main',
  icon: 'icon-select',
  label: '手机号输入框',
  name: InputMobileName,
  mask: true,
  rule({ t }) {
    return {
      type: InputMobileName,
      field: uniqueId(),
      title: '手机号输入框',
      $required: true,
      effect: {
        componentValidate: true,
      },
      props: {
        disabled: true,
      },
    };
  },
  props(_, { t }) {
    return localeProps(t, InputMobileName + '.props', [{ title: '是否禁止输入', type: 'switch', field: 'disabled', value: true }]);
  },
};
