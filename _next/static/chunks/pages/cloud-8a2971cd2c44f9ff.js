(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[408],{4184:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)o.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},7030:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cloud",function(){return n(3090)}])},3090:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var o=n(5893),r=n(7294),a=n(7462),s=n(91),c=n(7089),l=n(3937),i=function(){return r.createElement("svg",{viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",style:{color:"currentcolor"},className:"jsx-418323402"},r.createElement("path",{d:"M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z",className:"jsx-418323402"}),r.createElement(c.ZP,{id:"418323402"},"svg.jsx-418323402{width:calc(var(--snippet-font-size) * 1.69);height:calc(var(--snippet-font-size) * 1.69);}"))};i.displayName="GeistSnippetIcon";var d=r.memo(i),u=n(9950),p={},m=function(e,t){var n=t?" [".concat(t,"]"):" ",o="[Geist UI]".concat(n,": ").concat(e);"undefined"!==typeof console&&(p[o]||(p[o]=!0,console.warn(o)))},b={onError:function(){return m("Failed to copy.","use-clipboard")}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=(0,u.Z)("clipboard"),n=function(t,n){if(t&&n){var o=window.getSelection();if(o){t.style.whiteSpace="pre",t.textContent=n;var r=window.document.createRange();o.removeAllRanges(),r.selectNode(t),o.addRange(r);try{window.document.execCommand("copy")}catch(a){e.onError&&e.onError()}o.removeAllRanges(),t&&(t.textContent="")}}},o=(0,r.useCallback)((function(e){n(t,e)}),[t]);return{copy:o}},g=f,x=n(7822),y=n(1236),h=n(314),v=n(5073),_=["type","filled","children","symbol","toastText","toastType","text","copy","className"],w=function(e){var t=e.type,n=e.filled,o=e.children,i=e.symbol,u=e.toastText,p=e.toastType,m=e.text,b=e.copy,f=e.className,h=(0,s.Z)(e,_),w=(0,l.Z)(),j=(0,y.ZP)().SCALES,k=g().copy,C=(0,x.Z)().setToast,Z=(0,r.useRef)(null),N=m&&Array.isArray(m),E=(0,r.useMemo)((function(){return function(e,t,n){var o={default:{color:t.foreground,border:t.border,bgColor:t.background},success:{color:t.success,border:t.success,bgColor:t.background},warning:{color:t.warning,border:t.warning,bgColor:t.background},error:{color:t.error,border:t.error,bgColor:t.background},secondary:{color:t.secondary,border:t.secondary,bgColor:t.background},lite:{color:t.foreground,border:t.border,bgColor:t.accents_1},dark:{color:t.background,border:t.foreground,bgColor:t.foreground}}[e],r=["success","warning","error","secondary"].includes(e);return n&&r?(0,a.Z)({},o,{color:o.bgColor,bgColor:o.color}):o}(t,w.palette,n)}),[t,w.palette,n]),P=(0,r.useMemo)((function(){return"prevent"!==b}),[b]),z=(0,r.useMemo)((function(){return N?function(e){return e.reduce((function(e,t){return t?e?"".concat(e,"\n").concat(t):t:e}),"")}(m):o?Z.current?Z.current.textContent:"":m}),[Z.current,o,m]),$=(0,r.useMemo)((function(){var e=i.trim();return e?"".concat(e," "):""}),[i]);return r.createElement("div",(0,a.Z)({},h,{className:c.ZP.dynamic([["2394272060",[E.color,E.bgColor,E.border,w.layout.radius,j.font(.8125),j.pt(.667),j.width(1,"initial"),j.height(1,"auto"),j.pt(.667),j.pr(2.667),j.pb(.667),j.pl(.667),j.mt(0),j.mr(0),j.mb(0),j.ml(0),E.color,$,E.bgColor,N?"flex-start":"center",w.layout.radius,N?"var(--snippet-padding-top)":0]]])+" "+(h&&null!=h.className&&h.className||(0,v.Z)("snippet",f)||"")}),N?m.map((function(e,t){return r.createElement("pre",{key:"snippet-".concat(t,"-").concat(e),className:c.ZP.dynamic([["2394272060",[E.color,E.bgColor,E.border,w.layout.radius,j.font(.8125),j.pt(.667),j.width(1,"initial"),j.height(1,"auto"),j.pt(.667),j.pr(2.667),j.pb(.667),j.pl(.667),j.mt(0),j.mr(0),j.mb(0),j.ml(0),E.color,$,E.bgColor,N?"flex-start":"center",w.layout.radius,N?"var(--snippet-padding-top)":0]]])},e)})):r.createElement("pre",{ref:Z,className:c.ZP.dynamic([["2394272060",[E.color,E.bgColor,E.border,w.layout.radius,j.font(.8125),j.pt(.667),j.width(1,"initial"),j.height(1,"auto"),j.pt(.667),j.pr(2.667),j.pb(.667),j.pl(.667),j.mt(0),j.mr(0),j.mb(0),j.ml(0),E.color,$,E.bgColor,N?"flex-start":"center",w.layout.radius,N?"var(--snippet-padding-top)":0]]])},o||m),P&&r.createElement("div",{onClick:function(){z&&P&&(k(z),"silent"!==b&&C({text:u,type:p}))},className:c.ZP.dynamic([["2394272060",[E.color,E.bgColor,E.border,w.layout.radius,j.font(.8125),j.pt(.667),j.width(1,"initial"),j.height(1,"auto"),j.pt(.667),j.pr(2.667),j.pb(.667),j.pl(.667),j.mt(0),j.mr(0),j.mb(0),j.ml(0),E.color,$,E.bgColor,N?"flex-start":"center",w.layout.radius,N?"var(--snippet-padding-top)":0]]])+" copy"},r.createElement(d,null)),r.createElement(c.ZP,{id:"2394272060",dynamic:[E.color,E.bgColor,E.border,w.layout.radius,j.font(.8125),j.pt(.667),j.width(1,"initial"),j.height(1,"auto"),j.pt(.667),j.pr(2.667),j.pb(.667),j.pl(.667),j.mt(0),j.mr(0),j.mb(0),j.ml(0),E.color,$,E.bgColor,N?"flex-start":"center",w.layout.radius,N?"var(--snippet-padding-top)":0]},".snippet.__jsx-style-dynamic-selector{position:relative;max-width:100%;color:".concat(E.color,";background-color:").concat(E.bgColor,";border:1px solid ").concat(E.border,";border-radius:").concat(w.layout.radius,";--snippet-font-size:").concat(j.font(.8125),";--snippet-padding-top:").concat(j.pt(.667),";font-size:var(--snippet-font-size);width:").concat(j.width(1,"initial"),";height:").concat(j.height(1,"auto"),";padding:").concat(j.pt(.667)," ").concat(j.pr(2.667)," ").concat(j.pb(.667)," ").concat(j.pl(.667),";margin:").concat(j.mt(0)," ").concat(j.mr(0)," ").concat(j.mb(0)," ").concat(j.ml(0),";}pre.__jsx-style-dynamic-selector{margin:0;padding:0;border:none;background-color:transparent;color:").concat(E.color,";font-size:inherit;}pre.__jsx-style-dynamic-selector::before{content:'").concat($,"';-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}pre.__jsx-style-dynamic-selector *{margin:0;padding:0;font-size:inherit;color:inherit;}.copy.__jsx-style-dynamic-selector{position:absolute;right:0;top:0;bottom:0;height:calc(100% - 2px);background-color:").concat(E.bgColor,";display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:").concat(N?"flex-start":"center",";-webkit-box-align:").concat(N?"flex-start":"center",";-ms-flex-align:").concat(N?"flex-start":"center",";align-items:").concat(N?"flex-start":"center",";width:calc(3.281 * var(--snippet-font-size));color:inherit;-webkit-transition:opacity 150ms ease 0s;transition:opacity 150ms ease 0s;border-radius:").concat(w.layout.radius,";cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-top:").concat(N?"var(--snippet-padding-top)":0,";opacity:0.65;}.copy.__jsx-style-dynamic-selector:hover{opacity:1;}")))};w.defaultProps={filled:!1,symbol:"$",toastText:"Copied to clipboard!",toastType:"success",copy:"default",type:"default",className:""},w.displayName="GeistSnippet";var j=(0,h.Z)(w),k=n(1881),C=n(5988),Z=n.n(C),N=n(1163),E=n(1518),P=function(){var e=(0,l.Z)(),t=(0,N.useRouter)(),n=(0,r.useState)(!1),a=n[0],s=n[1];return(0,r.useEffect)((function(){var e=function(){return s(document.documentElement.scrollTop>54)};return document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}}),[s]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("nav",{className:Z().dynamic([["66111ecdefa6b88e",[e.palette.background,e.palette.border,e.palette.border,e.palette.background,"dark"===e.type?"inset 0 -1px ".concat(e.palette.border):"rgba(0, 0, 0, 0.1) 0 0 15px 0",e.layout.pageWidthWithMargin,e.layout.pageMargin,e.palette.accents_5,e.palette.foreground,e.palette.foreground]]])+" submenu__wrapper",children:(0,o.jsx)("div",{className:Z().dynamic([["66111ecdefa6b88e",[e.palette.background,e.palette.border,e.palette.border,e.palette.background,"dark"===e.type?"inset 0 -1px ".concat(e.palette.border):"rgba(0, 0, 0, 0.1) 0 0 15px 0",e.layout.pageWidthWithMargin,e.layout.pageMargin,e.palette.accents_5,e.palette.foreground,e.palette.foreground]]])+" "+"submenu ".concat(a?"submenu_sticky":""),children:(0,o.jsx)("div",{className:Z().dynamic([["66111ecdefa6b88e",[e.palette.background,e.palette.border,e.palette.border,e.palette.background,"dark"===e.type?"inset 0 -1px ".concat(e.palette.border):"rgba(0, 0, 0, 0.1) 0 0 15px 0",e.layout.pageWidthWithMargin,e.layout.pageMargin,e.palette.accents_5,e.palette.foreground,e.palette.foreground]]])+" submenu__inner",children:(0,o.jsxs)(E.Z,{value:t.asPath,onChange:function(e){return t.push(e)},children:[(0,o.jsx)(E.Z.Item,{label:"Home",value:"/cloud"}),(0,o.jsx)(E.Z.Item,{label:"Features",value:"/cloud/features"}),(0,o.jsx)(E.Z.Item,{label:"Pricing",value:"/cloud/pricing"})]})})})}),(0,o.jsx)(Z(),{id:"66111ecdefa6b88e",dynamic:[e.palette.background,e.palette.border,e.palette.border,e.palette.background,"dark"===e.type?"inset 0 -1px ".concat(e.palette.border):"rgba(0, 0, 0, 0.1) 0 0 15px 0",e.layout.pageWidthWithMargin,e.layout.pageMargin,e.palette.accents_5,e.palette.foreground,e.palette.foreground],children:".submenu__wrapper.__jsx-style-dynamic-selector{height:48px;\nposition:relative;\noverflow:hidden;\nbackground:".concat(e.palette.background,";\nbox-shadow:inset 0 -1px ").concat(e.palette.border,"}\n.submenu-fade.__jsx-style-dynamic-selector{border-top:1px solid ").concat(e.palette.border,"}\n.submenu_sticky.__jsx-style-dynamic-selector{-webkit-transition:box-shadow 0.2s ease;\ntransition:box-shadow 0.2s ease}\n.submenu_sticky.__jsx-style-dynamic-selector{position:fixed;\nz-index:1100;\ntop:0;\nright:0;\nleft:0;\nbackground:").concat(e.palette.background,";\nbox-shadow:").concat("dark"===e.type?"inset 0 -1px ".concat(e.palette.border):"rgba(0, 0, 0, 0.1) 0 0 15px 0","}\n.submenu__inner.__jsx-style-dynamic-selector{width:").concat(e.layout.pageWidthWithMargin,";\nmax-width:100%;\nmargin:0 auto;\npadding:0 ").concat(e.layout.pageMargin,";\nheight:48px;\nbox-sizing:border-box;\noverflow-y:hidden;\noverflow-x:auto;\noverflow:-moz-scrollbars-none;\n-ms-overflow-style:none;\n-webkit-overflow-scrolling:touch;\nscrollbar-width:none;\nbox-sizing:border-box}\n.submenu__inner.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none}\n.submenu__inner.__jsx-style-dynamic-selector .content{display:none}\n.submenu__inner.__jsx-style-dynamic-selector .tabs, .submenu__inner.__jsx-style-dynamic-selector header{height:100%;\nborder:none}\n.submenu__inner.__jsx-style-dynamic-selector .tab{height:calc(100% - 2px);\npadding-top:0;\npadding-bottom:0;\ncolor:").concat(e.palette.accents_5,";\nfont-size:0.875rem}\n.submenu__inner.__jsx-style-dynamic-selector .tab:hover{color:").concat(e.palette.foreground,"}\n.submenu__inner.__jsx-style-dynamic-selector .active{color:").concat(e.palette.foreground,"}")})]})},z=n(682),$=n(1608),M=n(1555),R=n(3492),W=n(4632),S=n(1761),T=n(4348),A=n(887),I=n(7685);function F(){return(0,o.jsx)(z.Z,{className:"col-xl-10 col-xxl-8 px-4 py-5",children:(0,o.jsxs)($.Z,{className:"align-items-center g-lg-5 py-5",children:[(0,o.jsxs)(M.Z,{className:"col-lg-7 text-center text-lg-start",children:[(0,o.jsx)(R.Z,{h1:!0,className:"lh-1 mb-3",style:{fontSize:90,fontWeight:800,fontStyle:"Bold",fontFamily:"Poppins"},children:"The free Cloud, for everyone."}),(0,o.jsx)("p",{className:"col-lg-10 fs-4",children:"AZ Cloud, the free and open-source cloud infrastructure platform. It provides access to many different platforms and services for free. Aimed to open the cloud to anyone."})]}),(0,o.jsx)(M.Z,{className:"col-md-10 mx-auto col-lg-4",children:(0,o.jsxs)(W.Z,{className:"p-4 p-md-5",shadow:!0,width:"400px",px:"20px",py:"10px",style:{margin:"0 auto",maxWidth:"90%",borderRadius:"20px"},children:[(0,o.jsx)(W.Z.Content,{pb:0,children:(0,o.jsx)(R.Z,{h1:!0,font:"23px",children:"Authentication"})}),(0,o.jsxs)(W.Z.Content,{pt:0,children:[" ",(0,o.jsxs)(S.Z.Container,{gap:2,children:[(0,o.jsx)(S.Z,{xs:24,mt:"22px",children:(0,o.jsx)(T.Z,{icon:(0,o.jsx)(I.n5m,{}),clearable:!0,width:"100%",title:"username",autoFocus:!0,placeholder:"Username"})}),(0,o.jsx)(S.Z,{xs:24,children:(0,o.jsx)(T.Z.Password,{icon:(0,o.jsx)(I.srI,{}),width:"100%",title:"password",placeholder:"Password",autoFocus:!0,clearable:!0})}),(0,o.jsx)(S.Z,{py:0,xs:24,children:(0,o.jsx)(R.Z,{b:!0,font:"13px",my:0,type:"error",children:"Invalid username"})}),(0,o.jsx)(S.Z,{xs:24,mt:"25px",children:(0,o.jsx)(A.Z,{htmlType:"submit",width:"100%",title:"Enter to login",children:"Login"})})]})]})]})})]})})}var L=function(){(0,l.Z)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{}),(0,o.jsx)(F,{}),(0,o.jsx)(k.Z.Browser,{style:{marginBottom:50},url:"https://cloud.azsoftware.org/?from=banner",children:(0,o.jsx)(j,{text:"npm install azc",style:{borderRadius:0},type:"lite",width:"300px"})})]})}},1555:function(e,t,n){"use strict";var o=n(4184),r=n.n(o),a=n(7294),s=n(6792),c=n(5893);const l=a.forwardRef(((e,t)=>{const[{className:n,...o},{as:a="div",bsPrefix:l,spans:i}]=function({as:e,bsPrefix:t,className:n,...o}){t=(0,s.vE)(t,"col");const a=(0,s.pi)(),c=[],l=[];return a.forEach((e=>{const n=o[e];let r,a,s;delete o[e],"object"===typeof n&&null!=n?({span:r,offset:a,order:s}=n):r=n;const i="xs"!==e?`-${e}`:"";r&&c.push(!0===r?`${t}${i}`:`${t}${i}-${r}`),null!=s&&l.push(`order${i}-${s}`),null!=a&&l.push(`offset${i}-${a}`)})),[{...o,className:r()(n,...c,...l)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,c.jsx)(a,{...o,ref:t,className:r()(n,!i.length&&l)})}));l.displayName="Col",t.Z=l},682:function(e,t,n){"use strict";var o=n(4184),r=n.n(o),a=n(7294),s=n(6792),c=n(5893);const l=a.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:o,...a},l)=>{const i=(0,s.vE)(e,"container"),d="string"===typeof t?`-${t}`:"-fluid";return(0,c.jsx)(n,{ref:l,...a,className:r()(o,t?`${i}${d}`:i)})}));l.displayName="Container",l.defaultProps={fluid:!1},t.Z=l},1608:function(e,t,n){"use strict";var o=n(4184),r=n.n(o),a=n(7294),s=n(6792),c=n(5893);const l=a.forwardRef((({bsPrefix:e,className:t,as:n="div",...o},a)=>{const l=(0,s.vE)(e,"row"),i=(0,s.pi)(),d=`${l}-cols`,u=[];return i.forEach((e=>{const t=o[e];let n;delete o[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const r="xs"!==e?`-${e}`:"";null!=n&&u.push(`${d}${r}-${n}`)})),(0,c.jsx)(n,{ref:a,...o,className:r()(t,l,...u)})}));l.displayName="Row",t.Z=l},6792:function(e,t,n){"use strict";n.d(t,{vE:function(){return l},pi:function(){return i}});var o=n(7294);n(5893);const r=["xxl","xl","lg","md","sm","xs"],a=o.createContext({prefixes:{},breakpoints:r}),{Consumer:s,Provider:c}=a;function l(e,t){const{prefixes:n}=(0,o.useContext)(a);return e||n[t]||t}function i(){const{breakpoints:e}=(0,o.useContext)(a);return e}}},function(e){e.O(0,[310,712,774,888,179],(function(){return t=7030,e(e.s=t);var t}));var t=e.O();_N_E=t}]);