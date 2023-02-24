import{aL as v,O as h,P as m,Q as c,af as n,a9 as p,S as g,C as s,ad as o}from"./framework-127c80d8.js";const b={name:"",data(){return{show:!1}},mounted(){},methods:{clickEvt(a){this.show=!0,console.log("clickEvt-------",a)}}},f=c("h1",null,"弹窗",-1),_=g(`<h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3><table><thead><tr><th>属性</th><th>类型</th><th>可选值(默认值)</th><th>描述</th></tr></thead><tbody><tr><td>clickOverlayClose</td><td>boolean</td><td>true</td><td>点击遮罩层关闭弹窗</td></tr><tr><td>closeIcon</td><td>boolean</td><td>true</td><td>是否显示 x 关闭图标</td></tr><tr><td>show</td><td>boolean</td><td>false</td><td>控制 dialog 显隐</td></tr><tr><td>showOverlay</td><td>boolean</td><td>false</td><td>是否显示遮罩层</td></tr><tr><td>width</td><td>string</td><td>400px</td><td>弹窗宽度</td></tr></tbody></table><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h3><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>opened</td><td>弹窗打开后的回调</td></tr><tr><td>closed</td><td>弹窗关闭后的回调</td></tr></tbody></table><details class="hint-container details"><summary>查看代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickEvt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>打开弹窗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fDialog</span> <span class="token attr-name">:show.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 弹窗内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fDialog</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">clickEvt</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,5);function w(a,t,y,x,e,l){const i=s("cube"),u=s("pet"),d=s("fButton"),r=s("fDialog");return h(),m("div",null,[c("div",null,[n(i),n(u),f,n(d,{onClick:l.clickEvt},{default:p(()=>[o("打开弹窗")]),_:1},8,["onClick"]),n(r,{show:e.show,"onUpdate:show":t[0]||(t[0]=k=>e.show=k)},{default:p(()=>[o(" 弹窗内容")]),_:1},8,["show"])]),_])}const E=v(b,[["render",w],["__file","dialog.html.vue"]]);export{E as default};
