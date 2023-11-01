const e=JSON.parse('{"key":"v-d9810f96","path":"/zh/guide/rules/rules.html","title":"表单校验规则","lang":"zh-CN","frontmatter":{"description":"演示 常规案例 特殊案例 注:校验函数参数 格式为一下两种 1. 特殊规则 param(特殊参数)，message，trigger(如几位小数精度，大/小于 1) 2. 普通规则 message，trigger (如邮箱，手机号) message 默认值为多语言提示，位于 src/i18n/page/validator 下， trigger 默认[\\"c...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://github.com/1211428762/doc-v2/guide/rules/rules.html"}],["meta",{"property":"og:url","content":"https://github.com/1211428762/doc-v2/zh/guide/rules/rules.html"}],["meta",{"property":"og:site_name","content":"Flow-UI"}],["meta",{"property":"og:title","content":"表单校验规则"}],["meta",{"property":"og:description","content":"演示 常规案例 特殊案例 注:校验函数参数 格式为一下两种 1. 特殊规则 param(特殊参数)，message，trigger(如几位小数精度，大/小于 1) 2. 普通规则 message，trigger (如邮箱，手机号) message 默认值为多语言提示，位于 src/i18n/page/validator 下， trigger 默认[\\"c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-31T10:08:18.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-31T10:08:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"表单校验规则\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-31T10:08:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"演示","slug":"演示","link":"#演示","children":[{"level":3,"title":"常规案例","slug":"常规案例","link":"#常规案例","children":[]},{"level":3,"title":"特殊案例","slug":"特殊案例","link":"#特殊案例","children":[]}]},{"level":2,"title":"常规规则校验","slug":"常规规则校验","link":"#常规规则校验","children":[{"level":3,"title":"正整数校验(int)","slug":"正整数校验-int","link":"#正整数校验-int","children":[]},{"level":3,"title":"正数校验(plusNumber)","slug":"正数校验-plusnumber","link":"#正数校验-plusnumber","children":[]},{"level":3,"title":"非零校验(nonzero)","slug":"非零校验-nonzero","link":"#非零校验-nonzero","children":[]},{"level":3,"title":"数字校验(number)","slug":"数字校验-number","link":"#数字校验-number","children":[]},{"level":3,"title":"小数/只能输入小数 校验(float)","slug":"小数-只能输入小数-校验-float","link":"#小数-只能输入小数-校验-float","children":[]},{"level":3,"title":"url 校验(url)","slug":"url-校验-url","link":"#url-校验-url","children":[]},{"level":3,"title":"ip 校验(ip)","slug":"ip-校验-ip","link":"#ip-校验-ip","children":[]},{"level":3,"title":"身份证号校验(identity)","slug":"身份证号校验-identity","link":"#身份证号校验-identity","children":[]},{"level":3,"title":"邮政编码校验(postal)","slug":"邮政编码校验-postal","link":"#邮政编码校验-postal","children":[]},{"level":3,"title":"邮箱校验(email)","slug":"邮箱校验-email","link":"#邮箱校验-email","children":[]},{"level":3,"title":"手机号 校验(mobile)","slug":"手机号-校验-mobile","link":"#手机号-校验-mobile","children":[]},{"level":3,"title":"座机号 校验(phone)","slug":"座机号-校验-phone","link":"#座机号-校验-phone","children":[]},{"level":3,"title":"手机座机号 校验(phoneAll)","slug":"手机座机号-校验-phoneall","link":"#手机座机号-校验-phoneall","children":[]}]},{"level":2,"title":"特殊规则校验","slug":"特殊规则校验","link":"#特殊规则校验","children":[{"level":3,"title":"空校验(required)","slug":"空校验-required","link":"#空校验-required","children":[]},{"level":3,"title":"字符串最大长度(maxlength)","slug":"字符串最大长度-maxlength","link":"#字符串最大长度-maxlength","children":[]},{"level":3,"title":"字符串最小长度(minlength)","slug":"字符串最小长度-minlength","link":"#字符串最小长度-minlength","children":[]},{"level":3,"title":"数字精度校验 (precision(number))","slug":"数字精度校验-precision-number","link":"#数字精度校验-precision-number","children":[]},{"level":3,"title":"数字范围校验(numCompare(\\"gt/gte/lt/lte\\"+number))","slug":"数字范围校验-numcompare-gt-gte-lt-lte-number","link":"#数字范围校验-numcompare-gt-gte-lt-lte-number","children":[]},{"level":3,"title":"数值大小校验 (numCompare(\\"gt/gte/lt/lte\\"+number,message=\\"如果是两个值比较,message 必传\\")),该场景必须搭配数字校验","slug":"数值大小校验-numcompare-gt-gte-lt-lte-number-message-如果是两个值比较-message-必传-该场景必须搭配数字校验","link":"#数值大小校验-numcompare-gt-gte-lt-lte-number-message-如果是两个值比较-message-必传-该场景必须搭配数字校验","children":[]},{"level":3,"title":"英文标题校验,建议搭配语言长度校验(enRequired)","slug":"英文标题校验-建议搭配语言长度校验-enrequired","link":"#英文标题校验-建议搭配语言长度校验-enrequired","children":[]},{"level":3,"title":"未来时间校验 future(hours)","slug":"未来时间校验-future-hours","link":"#未来时间校验-future-hours","children":[]}]}],"git":{"createdTime":1698746898000,"updatedTime":1698746898000,"contributors":[{"name":"yanzw","email":"yanzw@hithium.cn","commits":1}]},"readingTime":{"minutes":4.29,"words":1286},"filePathRelative":"zh/guide/rules/rules.md","localizedDate":"2023年10月31日","autoDesc":true}');export{e as data};
