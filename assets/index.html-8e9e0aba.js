import{aL as d,O as v,P as m,af as n,Q as t,a9 as b,S as p,ad as o,C as a}from"./framework-127c80d8.js";const g={data(){return{input:[{type:"input",label:"输入框",rules:[{required:!0}]}],select:[{type:"select",label:"下拉框",list:[{label:"选项一",value:1},{label:"选项二",value:2}],multiple:!0}],radio:[{type:"radio",list:[{value:0,label:"选项一"},{value:1,label:"选项二"}]}],totalCount:4,curPage:1,pageSize:3,loading:!0,tableHead:[{prop:"first",label:"测试第一列",width:150,class:"text-center test"},{prop:"second",label:"测试第二列",width:150,class:"text-center"}],tableData:[{first:"程序猿",second:"程序猿女装"},{first:"格子衫",second:"百褶裙"},{first:"五年单身,三年当狗",second:"草中✿,万人捧"},{first:"地中海",second:"假发片"}],addBtnList:{property:{width:200,label:"操作",class:"text-center test"},button:[{info:"编辑",method:"edit",icon:"el-icon-edit",type:"primary",iconColor:"#e4f9f5",fontColor:"#e4f9f5"},{info:"删除",method:"delete"}]}}},methods:{delete(l,c){console.log(l,c)}}},y=p('<h1 id="el-form-业务表单-表格组件" tabindex="-1"><a class="header-anchor" href="#el-form-业务表单-表格组件" aria-hidden="true">#</a> el-form 业务表单,表格组件</h1><h2 id="写在前面" tabindex="-1"><a class="header-anchor" href="#写在前面" aria-hidden="true">#</a> <strong>写在前面</strong></h2><p>​ 　鉴于一直 clr cv, 让代码变得冗杂不堪,再次维护代码又是一年黑线,适当造一些轻小的轮子,让我们&quot;搬砖&quot;更开心.该组件完全基于 ele + vue 2.x</p><p>将 重复的<code>&lt;el-form&gt;　&lt;el-form-item&gt; &lt;el-table&gt; &lt;el-table-column&gt;</code>标签送走. 由此诞生了 FormList,TableList</p><p><br>　　适用场景：中级以下的业务场景</p>',5),f=t("h1",{id:"常用示例",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#常用示例","aria-hidden":"true"},"#"),o(" 常用示例")],-1),h=t("h3",{id:"input-案例",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#input-案例","aria-hidden":"true"},"#"),o(" input 案例")],-1),_=p(`<details class="hint-container details"><summary>代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormList</span> <span class="token attr-name">:fieldList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formItem<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:footer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormList</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">formItem</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;输入框&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="select-案例" tabindex="-1"><a class="header-anchor" href="#select-案例" aria-hidden="true">#</a> select 案例</h3>`,2),q=p(`<details class="hint-container details"><summary>代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormList</span> <span class="token attr-name">:fieldList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formItem<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:footer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormList</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">formItem</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;select&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;下拉框&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;选项一&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;选项二&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">multiple</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 多选,select组件 其他属性也可以,详情见ele</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="radio-案例" tabindex="-1"><a class="header-anchor" href="#radio-案例" aria-hidden="true">#</a> radio 案例</h3>`,2),L=p(`<details class="hint-container details"><summary>代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormList</span> <span class="token attr-name">:fieldList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formItem<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:footer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormList</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">formItem</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;radio&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;选项一&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;选项二&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="基础-table-案例" tabindex="-1"><a class="header-anchor" href="#基础-table-案例" aria-hidden="true">#</a> 基础 table 案例</h3><br>`,3),x=p(`<details class="hint-container details"><summary>查看代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableList</span>
      <span class="token attr-name">:tableData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:tableHead</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableHead<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:addBtnList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addBtnList<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">showCheckbox</span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableList</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">totalCount</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token literal-property property">curPage</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tableHead</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 字段名</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;测试第一列&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token comment">// 列宽</span>
          <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;text-center test&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 为列添加类名</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;second&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;测试第二列&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
          <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;text-center&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">&#39;程序猿&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">second</span><span class="token operator">:</span> <span class="token string">&#39;程序猿女装&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">&#39;格子衫&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">second</span><span class="token operator">:</span> <span class="token string">&#39;百褶裙&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">&#39;五年单身,三年当狗&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">second</span><span class="token operator">:</span> <span class="token string">&#39;草中✿,万人捧&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">&#39;地中海&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">second</span><span class="token operator">:</span> <span class="token string">&#39;假发片&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">addBtnList</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">property</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">// 列宽</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;操作&#39;</span><span class="token punctuation">,</span>
          <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;text-center test&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 为列添加类名</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">button</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&#39;编辑&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 文字</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;edit&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 方法名</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;el-icon-edit&#39;</span><span class="token punctuation">,</span> <span class="token comment">// icon，支持element-ui icon</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;primary&#39;</span><span class="token punctuation">,</span> <span class="token comment">// element-ui button type属性</span>
            <span class="token literal-property property">iconColor</span><span class="token operator">:</span> <span class="token string">&#39;#e4f9f5&#39;</span><span class="token punctuation">,</span> <span class="token comment">// icon颜色</span>
            <span class="token literal-property property">fontColor</span><span class="token operator">:</span> <span class="token string">&#39;#e4f9f5&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 字体颜色</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&#39;删除&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function w(l,c,C,B,s,F){const i=a("cube"),r=a("pet"),e=a("FormList"),u=a("TableList"),k=a("RouterLink");return v(),m("div",null,[y,n(i),n(r),f,h,n(e,{fieldList:s.input,footer:!1},null,8,["fieldList"]),_,n(e,{fieldList:s.select,footer:!1},null,8,["fieldList"]),q,n(e,{fieldList:s.radio,footer:!1},null,8,["fieldList"]),L,n(u,{tableData:s.tableData,tableHead:s.tableHead,addBtnList:s.addBtnList,loading:!1,showCheckbox:""},null,8,["tableData","tableHead","addBtnList"]),x,t("p",null,[n(k,{to:"/zh/guide/complete/"},{default:b(()=>[o("查看完整示例")]),_:1})])])}const H=d(g,[["render",w],["__file","index.html.vue"]]);export{H as default};