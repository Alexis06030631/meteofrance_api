import{_ as a,o as e,c as t,O as n}from"./chunks/framework.f276d7cf.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/meteofrance_api.getnextrain.md","filePath":"api/meteofrance_api.getnextrain.md"}'),s={name:"api/meteofrance_api.getnextrain.md"},o=n('<p><a href="./">Home</a> &gt; <a href="./meteofrance_api.html">meteofrance_api</a> &gt; <a href="./meteofrance_api.getnextrain.html">getNextRain</a></p><h2 id="getnextrain-function" tabindex="-1">getNextRain() function <a class="header-anchor" href="#getnextrain-function" aria-label="Permalink to &quot;getNextRain() function&quot;">​</a></h2><p>Get next rain from place</p><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getNextRain</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">place</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Place</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Nowcast</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>place</td><td><a href="./meteofrance_api.place.html">Place</a> | string</td><td>Place Name or Place object</td></tr></tbody></table><p><strong>Returns:</strong></p><p>Promise&lt;<a href="./meteofrance_api.nowcast.html">Nowcast</a>&gt;</p><p>A nowcast object</p>',10),r=[o];function p(l,c,i,_,h,m){return e(),t("div",null,r)}const y=a(s,[["render",p]]);export{f as __pageData,y as default};