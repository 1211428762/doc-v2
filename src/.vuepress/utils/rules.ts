export default {
  // 正整数
  int: (message = '请输入正整数', trigger = ['blur', 'change']) => {
    const reg = /^[0-9]\d*$/
    const va = (rule, value, callback) => {
      if (value === '' || value === undefined) {
        callback()
      } else if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger,
    }
  },
  // 正数
  plusNumber: (message = '请输入正数', trigger = ['blur', 'change']) => {
    const reg = /^(0|[1-9][0-9]*)(\.\d+)?$/
    const va = (rule, value, callback) => {
      if (value === '' || value === undefined) {
        return callback()
      } else if (reg.test(value)) {
        return callback()
      } else {
        return callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger,
    }
  },
  // 不包含零
  nonzero: (message = '请输入不含零的数', trigger = ['blur', 'change']) => {
    const va = (rule, value, callback) => {
      if (value === '' || value === undefined) {
        callback()
      } else if (!isNaN(value) && value != 0) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger,
    }
  },
  // 数字校验
  number: (message = '请输入数字', trigger = ['blur', 'change']) => {
    const va = (rule, value, callback) => {
      if (value === '' || value === undefined) {
        callback()
      } else if (!isNaN(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger,
    }
  },
  // 小数
  float: (message = '请输入小数', trigger = ['blur', 'change']) => {
    const reg = /^[0-9]+([.]{1}[0-9]+){0,1}$/
    const va = (rule, value, callback) => {
      if (value === undefined || value === '') {
        callback()
      }
      if (reg.test(value) && parseInt(value) !== parseFloat(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger,
    }
  },
  // 网址
  url: (message = '请输入正确的url', trigger = ['blur', 'change']) => {
    const reg =
      /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*$/
    const va = (rule, value, callback) => {
      if (value === '' || value === undefined) {
        callback()
      }
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger,
    }
  },
  // ip地址
  ip: (message = '请输入正确ip', trigger = ['blur', 'change']) => {
    const reg =
      /^(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))*$/
    const va = (rule, value, callback) => {
      if (value === '' || value === undefined) {
        callback()
      }
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger,
    }
  },
  // 身份证号
  identity: (message = '请输入正确的身份证号', trigger = ['blur', 'change']) => {
    const reg =
      /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/
    // ^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$
    const va = (rule, value, callback) => {
      if (value === '' || value === undefined) {
        callback()
      }
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger,
    }
  },
  // 邮政编码
  postal: (message = '请输入正确的邮编', trigger = ['blur', 'change']) => {
    const reg = /^\d{6}$/
    const va = (rule, value, callback) => {
      if (value === '' || value === undefined) {
        callback()
      }
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger,
    }
  },
  // 邮箱
  email: (message = '请输入正确的邮箱', trigger = ['blur', 'change']) => {
    // eslint-disable-next-line no-useless-escape
    const reg = /^[a-zA-Z0-9][a-zA-Z0-9 . _-]+(@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)$/
    const validator = (rule, value, callback) => {
      if (value === '' || value === undefined || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger,
    }
  },
  // 手机号
  mobile: (message = '请输入正确的手机号', trigger = ['blur', 'change']) => {
    // 手机号码验证
    const reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(16[2|6|7])|(18[0-9])|(17([0-1]|[3]|[5-8]))|(19[1|8|9]))\d{8}$/
    const validator = (rule, value, callback) => {
      if (value === '' || value === undefined || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger,
    }
  },
  // 座机
  phone: (message = '请输入正确的座机号', trigger = ['blur', 'change']) => {
    const reg =
      /^((\d{3,4}-\d{7,8})|(\d{7}-\d{1,12})|(\d{8}-\d{1,11})|(\d{11}-\d{1,8})|(\d{7,8})|(\d{11,20})|(\d{3}-\d{8}-\d{1,7})|(\d{3}-\d{7}-\d{1,8})|(\d{4}-\d{7}-\d{1,7})|(\d{4}-\d{8}-\d{1,6}))$/
    const validator = (rule, value, callback) => {
      if (value === '' || value === undefined || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger,
    }
  },
  // 手机或座机
  phoneAll: (message = '请输入正确的号码', trigger = ['blur', 'change']) => {
    const reg =
      /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(16[2|6|7])|(18[0-9])|(17([0-1]|[3]|[5-8]))|(19[1|8|9]))\d{8}$|^((\d{3,4}-\d{7,8})|(\d{7}-\d{1,12})|(\d{8}-\d{1,11})|(\d{11}-\d{1,8})|(\d{7,8})|(\d{11,20})|(\d{3}-\d{8}-\d{1,7})|(\d{3}-\d{7}-\d{1,8})|(\d{4}-\d{7}-\d{1,7})|(\d{4}-\d{8}-\d{1,6}))$/
    const validator = (rule, value, callback) => {
      if (value === '' || value === undefined || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger,
    }
  },
  // 英文数字
  enNum: (message = '请输入英文、数字', trigger = ['blur', 'change']) => {
    const reg = /^[A-Za-z0-9]+$/
    const validator = (rule, value, callback) => {
      if (value === '' || value === undefined || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger,
    }
  },
  /********以上为普通规则校验 *********************************/
  /********以下为特殊规则校验(第一个参数为特殊规则参数) ********/
  // 必填
  required: (required = true, message = '此项为必填项', trigger = ['blur', 'change']) => {
    return {
      required,
      message,
      trigger,
    }
  },
  // 最小长度
  minlength: (min = 1, message = `最小长度为${min}`, trigger = ['blur', 'change']) => {
    return {
      min: min,
      message: message,
      trigger: trigger,
    }
  },
  // 最大长度
  maxlength: (max = 255, message = `最大长度为${max}`, trigger = ['blur', 'change']) => {
    return {
      max: max,
      message: message,
      trigger: trigger,
    }
  },
  // 数字精度校验, 默认为2位小数位
  precision: (precision = 2, message = `小数位不能超过${precision}`, trigger = ['blur', 'change']) => {
    const reg = new RegExp(`^([0-9]*)+(.[0-9]{1,${precision}})?$`)
    const va = (rule, value, callback) => {
      if (value === undefined || value === '') {
        callback()
      }
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger,
    }
  },
  // 边界 函数, 整合 小于(等于) ,大于(等于),四个函数体,
  bound: (reference, string, message, trigger = ['blur', 'change']) => {
    let result
    switch (string) {
      case 'gt':
        result = (val) => val > reference
        break
      case 'gte':
        result = (val) => val >= reference
        break
      case 'lt':
        result = (val) => val < reference
        break
      case 'lte':
        result = (val) => val <= reference
        break
    }
    const validator = (rule, value, callback) => {
      if (value === '' || value === undefined || result(Number(value))) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      message: message,
      trigger: trigger,
      validator,
    }
  },

  // 数值范围  函数后缀0 代表不包含边界, 1表示含, 11表示大于等于,且小于等于,   01标识大于, 且小于等于
  rangeNum11: (
    nums = ['gte1', 'lte100'],
    message = `请输入大于等于${nums[0].replace('gte', '')},且小于等于${nums[1].replace('lte', '')}`,
    trigger = ['blur', 'change'],
  ) => {
    const newNums = [Number(nums[0].replace('gte', '')), Number(nums[1].replace('lte', ''))]
    const validator = (rule, value: any, callback) => {
      if (value === '' || value === undefined || (Number(value) >= newNums[0] && Number(value) <= newNums[1])) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger,
    }
  },
  rangeNum10: (
    nums = ['gte1', 'lt100'],
    message = `请输入大于等于${nums[0].replace('gte', '')},且小于${nums[1].replace('lt', '')}`,
    trigger = ['blur', 'change'],
  ) => {
    const newNums = [Number(nums[0].replace('gte', '')), Number(nums[1].replace('lt', ''))]
    const validator = (rule, value, callback) => {
      if (value === '' || value === undefined || (Number(value) >= newNums[0] && Number(value) < newNums[1])) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger,
    }
  },
  rangeNum01: (
    nums = ['gt1', 'lte100'],
    message = `请输入大于${nums[0].replace('gt', '')},且小于等于${nums[1].replace('lte', '')}`,
    trigger = ['blur', 'change'],
  ) => {
    const newNums = [Number(nums[0].replace('gt', '')), Number(nums[1].replace('lte', ''))]
    const validator = (rule, value, callback) => {
      if (value === '' || value === undefined || (Number(value) > newNums[0] && Number(value) <= newNums[1])) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger,
    }
  },
  rangeNum00: (
    nums = ['gt1', 'lt100'],
    message = `请输入大于${nums[0].replace('gt', '')},且小于${nums[1].replace('lt', '')}`,
    trigger = ['blur', 'change'],
  ) => {
    const newNums = [Number(nums[0].replace('gt', '')), Number(nums[1].replace('lt', ''))]
    const validator = (rule, value, callback) => {
      if (value === '' || value === undefined || (Number(value) > newNums[0] && Number(value) < newNums[1])) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger,
    }
  },
  // 数值大小校验,如果是两个值比较必须搭配数字校验(number)
  numCompare: function (nums: any, message, trigger = ['blur', 'change']) {
    //  单数字限制
    const isArray = Array.isArray(nums)
    if (!isArray) {
      if (!isNaN(nums.replace('gt', ''))) {
        const min = Number(nums.replace('gt', ''))
        return this.bound(min, 'gt', message, trigger)
      } else if (!isNaN(nums.replace('gte', ''))) {
        const min = Number(nums.replace('gte', ''))
        return this.bound(min, 'gte', message, trigger)
        // return this.gteNum(Number(nums.replace('gte', '')));
      } else if (!isNaN(nums.replace('lt', ''))) {
        const max = Number(nums.replace('lt', ''))
        return this.bound(max, 'lt', message, trigger)
        // return this.ltNum(Number(nums.replace('lt', '')), 'lt');
      } else if (!isNaN(nums.replace('lte', ''))) {
        const max = Number(nums.replace('lte', ''))
        return this.bound(max, 'lte', message, trigger)
        // return this.lteNum(Number(nums.replace('lte', '')), 'lte');
      } else {
        console.error("请输入'gt/gte/lt/lte + number' 格式的字符串")
        return
      }
    } else {
      if (!isNaN(nums[0].replace('gte', '')) && !isNaN(nums[1].replace('lte', ''))) {
        return this.rangeNum11(nums)
      } else if (!isNaN(nums[0].replace('gte', '')) && !isNaN(nums[1].replace('lt', ''))) {
        return this.rangeNum10(nums)
      } else if (!isNaN(nums[0].replace('gt', '')) && !isNaN(nums[1].replace('lte', ''))) {
        return this.rangeNum01(nums)
      } else if (!isNaN(nums[0].replace('gt', '')) && !isNaN(nums[1].replace('lt', ''))) {
        return this.rangeNum00(nums)
      } else {
        console.error('请输入[gt/gte+ number,lt/lte + number] 格式的数组')
        return {}
      }
    }
  },
  // 英文标题兜底校验
  enRequired: (message = '英文为必填项', trigger = ['blur', 'change']) => {
    const validator = (rule, value, callback) => {
      if (!value['en-US']) {
        return callback(new Error(message))
      } else {
        return callback()
      }
    }
    return {
      validator: validator,
      trigger: trigger,
    }
  },
  // 搭配英文标题, 校验标题长度不能超过24
  languageLength: (length = 24, message = `英文长度不能超过${length}`, trigger = ['blur', 'change']) => {
    const va = (rule, value, callback) => {
      const result = Object.keys(value).some((key) => value[key].length > length)
      if (result) {
        return callback(new Error(message))
      } else {
        return callback()
      }
    }
    return {
      validator: va,
      trigger: trigger,
    }
  },
  // 未来时间校验, 选择时间默认必须比当前时间大一小时, 传24 为选择时间为一天后, 若时间gap是数组,则校验数组第一项
  future: (gap = 1, message = '开始时间必需大于当前时间', trigger = ['blur', 'change']) => {
    const validator = (rule, value, callback) => {
      const paramDate = Array.isArray(value) ? value[0] : value
      const isDate = !isNaN(new Date(paramDate).getTime())
      if (isDate) {
        // 选择时间要比当前大一小时(默认),才通过校验
        const isFuture = new Date(paramDate).getTime() - new Date().getTime() >= 60 * 60 * 1000 * gap
        if (isFuture) {
          callback()
        } else {
          callback(new Error(message))
        }
      } else {
        console.error('请输入时间戳,或时间对象')
      }
    }
    return {
      validator,
      trigger: trigger,
    }
  },
  /******************分割线 **************************/
  // ***以下内容为后期迭代内容
  // // 对象属性必填
  // requiredObject: (attr, mes = 'rule.required', param, trigger = ['blur', 'change']) => {
  //   const validator = (rule, value, callback) => {
  //     if (value && value[attr]) {
  //       callback();
  //     } else {
  //       callback(new Error(initI18n.global.t(mes, param)));
  //     }
  //   };
  //   return {
  //     validator,
  //     trigger: trigger,
  //   };
  // },
  // // 必选
  // requiredSelect: (mes = '此项必选', trigger = ['blur', 'change']) => {
  //   return {
  //     required: true,
  //     message: mes,
  //     trigger: trigger,
  //   };
  // },
  // // 固定长度
  // $length: (len = 1, message = `长度必须为${len}`, trigger = ['blur', 'change']) => {
  //   return {
  //     len: len,
  //     message: message,
  //     trigger: trigger,
  //   };
  // },
  // // 长度验证
  // len: (min = 1, max = 255, message = `长度为${min}-${max}`, trigger = ['blur', 'change']) => {
  //   return {
  //     min: min,
  //     max: max,
  //     message: message,
  //     trigger: trigger,
  //   };
  // },

  // // 数组必填
  // requiredArray: (mes = 'rule.required', param, trigger = ['blur', 'change']) => {
  //   const validator = (rule, value, callback) => {
  //     if (value instanceof Array && value.length) {
  //       callback();
  //     } else {
  //       callback(new Error(initI18n.global.t(mes, param)));
  //     }
  //   };
  //   return {
  //     validator,
  //     type: 'array',
  //     trigger: trigger,
  //   };
  // },
  // // 类型
  // type: (type = 'string', message = `输入的类型必须为${type}`, trigger = ['blur', 'change']) => {
  //   return {
  //     type: type,
  //     message: message,
  //     trigger: trigger,
  //   };
  // },

  // password: (callback) => {
  //   return {
  //     validator: callback,
  //     trigger: 'change',
  //   };
  // },

  // // 大写字母
  // upperCase: (message = '请输入大写字母', trigger = ['blur', 'change']) => {
  //   const reg = /^[A-Z]+$/;
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || reg.test(value)) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     validator,
  //     trigger,
  //   };
  // },
  // // 小写字母
  // lowerCase: (message = '请输入小写字母', trigger = ['blur', 'change']) => {
  //   const reg = /^[A-Z]+$/;
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || reg.test(value)) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     validator,
  //     trigger,
  //   };
  // },
  // // 大小写字母
  // english: (message = '请输入英文', trigger = ['blur', 'change']) => {
  //   const reg = /^[A-Za-z]+$/;
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || reg.test(value)) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     validator,
  //     trigger,
  //   };
  // },
  // // 只能输中文
  // chinese: (message = '请输入中文', trigger = ['blur', 'change']) => {
  //   const reg = /^[\u4e00-\u9fa5]+$/;
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || reg.test(value)) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     validator,
  //     trigger,
  //   };
  // },
  // // 不能输中文
  // noChinese: (message = '不能包含中文', trigger = ['blur', 'change']) => {
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || escape(value).indexOf('%u') >= 0) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     validator,
  //     trigger,
  //   };
  // },
  // // 中文英文数字
  // cnEnNum: (message = '请输入中文、大小写英文、数字', trigger = ['blur', 'change']) => {
  //   const reg = /^[\u4e00-\u9fa5|A-Za-z0-9]+$/;
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || reg.test(value)) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     validator,
  //     trigger,
  //   };
  // },
  // // 路径
  // path: (message = '请输入英文、数字、划线、斜线', trigger = ['blur', 'change']) => {
  //   const reg = /^[-|_|/|A-Za-z0-9]+$/;
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || reg.test(value)) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     validator,
  //     trigger,
  //   };
  // },
  // // 英文数字下划线
  // enNumLine: (message = '请输入英文、数字、下划线', trigger = ['blur', 'change']) => {
  //   const reg = /^[_|A-Za-z0-9]+$/;
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || reg.test(value)) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     validator,
  //     trigger,
  //   };
  // },
  // // 英文数字
  // enNum: (message = '请输入英文、数字', trigger = ['blur', 'change']) => {
  //   const reg = /^[A-Za-z0-9]+$/;
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || reg.test(value)) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     validator,
  //     trigger,
  //   };
  // },
  // // 必须包含英文数字
  // haveCnEnNum: (message = '必须包含英文和数字', trigger = ['blur', 'change']) => {
  //   const reg = /^(?=.*[a-zA-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]+$/;
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || reg.test(value)) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     validator,
  //     trigger,
  //   };
  // },
  /*判断大小于函数本体,已优化为bound分发,原函数保留*/
  // // 大于等于
  // gteNum: (
  //   min = 1,
  //   message = initI18n.global.t('tip_gte', { min }),
  //   trigger = ['blur', 'change'],
  // ) => {
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || Number(value) >= min) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     message: message,
  //     trigger: trigger,
  //     validator,
  //   };
  // },
  // // 大于
  // gtNum: (min, message = initI18n.global.t('tip_gt', { min }), trigger = ['blur', 'change']) => {
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || Number(value) > min) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     message: message,
  //     trigger: trigger,
  //     validator,
  //   };
  // },
  // // 小于
  // ltNum: (max, message = initI18n.global.t('tip_lt', { max }), trigger = ['blur', 'change']) => {
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || Number(value) < max) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     message: message,
  //     trigger: trigger,
  //     validator,
  //   };
  // },
  // // 小于等于
  // lteNum: (
  //   max = 100,
  //   message = initI18n.global.t('tip_lte', { max }),
  //   trigger = ['blur', 'change'],
  // ) => {
  //   const validator = (rule, value, callback) => {
  //     if (value === '' || value === undefined || Number(value) <= max) {
  //       callback();
  //     } else {
  //       callback(new Error(message));
  //     }
  //   };
  //   return {
  //     message: message,
  //     trigger: trigger,
  //     validator,
  //   };
  // },
}
