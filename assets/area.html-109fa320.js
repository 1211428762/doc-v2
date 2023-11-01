import{aL as i,O as p,P as r,Q as a,af as t,S as u,C as s}from"./framework-127c80d8.js";const h={name:"",data(){return{province:"Guangdong",city:"Shenzhen",area:"Nanshan District",resetBtn:{word:"Reset"},placeholders:{province:"-- Please select province --",city:"-- Please select city --",area:"-- Please select area --"}}},methods:{citySelected(l){console.log("Selected Region--->",l)}}},v=a("h1",null,"Region Selection",-1),k=a("h3",null,"Default",-1),m=a("h3",null,"Hidden Region",-1),b=a("h3",null,"Only Show Province",-1),y=a("h3",null,"Grayed Out - provinceDisabled/cityDisabled/areaDisabled",-1),g=a("h3",null,"Custom Placeholder",-1),_=a("h3",null,"Initial Values",-1),q=u(`<h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Optional Values</th><th>Default</th></tr></thead><tbody><tr><td>province</td><td>Province</td><td>String, Number</td><td>10000, Beijing</td><td></td></tr><tr><td>city</td><td>City</td><td>String, Number</td><td></td><td></td></tr><tr><td>area</td><td>Area</td><td>String, Number</td><td></td><td></td></tr><tr><td>hideArea</td><td>Hide Area</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>onlyProvince</td><td>Only Show Province</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>provinceDisabled</td><td>Disable Province</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>cityDisabled</td><td>Disable City</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>areaDisabled</td><td>Disable Area</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>placeholders</td><td>Custom Placeholders</td><td>Object</td><td></td><td></td></tr></tbody></table><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>reset</td><td>Component data reset method, requires getting the component instance</td></tr><tr><td>city-selected</td><td>Selected component data, returned in the format &#39;{province:&quot;xx&quot;,city:&quot;xx&quot;,area:&quot;&quot;}&#39;</td></tr></tbody></table><details class="hint-container details"><summary>View Code</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>areaSelect</span> <span class="token punctuation">/&gt;</span></span>
  // Default
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>areaSelect</span> <span class="token attr-name">hideArea</span> <span class="token punctuation">/&gt;</span></span>
  // Hidden Region
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>areaSelect</span> <span class="token attr-name">onlyProvince</span> <span class="token punctuation">/&gt;</span></span>
  // Only Show Province
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>areaSelect</span> <span class="token attr-name">provinceDisabled</span> <span class="token attr-name">cityDisabled</span> <span class="token attr-name">areaDisabled</span> <span class="token punctuation">/&gt;</span></span>
  // Disable Province, City, and Area
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>areaSelect</span> <span class="token attr-name">:placeholders</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>placeholders<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  //placeholders: { // province: &quot;-- Please select province --&quot;, // city: &quot;-- Please select city --&quot;, // area: &quot;-- Please select area --&quot;, // }
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>areaSelect</span> <span class="token attr-name">@city-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>citySelected<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:province.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>province<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:city.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:area.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>area<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  // Initial values and selected values, check the console
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,5);function S(l,D,f,P,n,o){const c=s("cube"),d=s("pet"),e=s("areaSelect");return p(),r("div",null,[a("div",null,[t(c),t(d),v,k,t(e),m,t(e,{hideArea:""}),b,t(e,{onlyProvince:""}),y,t(e,{provinceDisabled:"",cityDisabled:"",areaDisabled:""}),g,t(e,{placeholders:n.placeholders},null,8,["placeholders"]),_,t(e,{onCitySelected:o.citySelected,province:n.province,city:n.city,area:n.area},null,8,["onCitySelected","province","city","area"])]),q])}const x=i(h,[["render",S],["__file","area.html.vue"]]);export{x as default};
