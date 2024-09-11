import uniqueId from '@form-create/utils/lib/unique';

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

export const InputMobileRule = {
  menu: 'main',
  icon: 'icon-select',
  label: '手机号输入框',
  name: 'input-mobile',
  mask: true,
  rule({ t }) {
    return {
      type: 'input-mobile',
      title: '手机号输入框',
      effect: {
        componentValidate: true,
      },
    };
  },
  props(_, { t }) {
    return [];
  },
};
