(function(){"use strict";var __webpack_modules__={4725:function(__unused_webpack_module,__webpack_exports__){__webpack_exports__["Z"]={props:["toggle","cart","inventory"],methods:{deleteItem(e){delete this.cart[e]},sum(arr){return eval(arr.join("+"))?eval(arr.join("+")):0},getPrice(e){const t=this.inventory.find((t=>t.name===e));return t.price},totalBill(){const e=Object.entries(this.cart).reduce(((e,t,r)=>e+t[1]*this.getPrice(t[0])),0);return e}}}},7343:function(e,t,r){var n=r(9242),i=r(3396),o=r.p+"img/home.2afb6345.svg",a=r.p+"img/product.cc48a919.svg",c=r.p+"img/order.7ef0c7e4.svg",s=r.p+"img/cart.af4b2f11.svg";const l={class:"flex flex-col items-center justify-start bg-zinc-800"},_={role:"banner",class:"flex items-center justify-center mb-16 bg-white rounded-b-xl"},u={class:"flex space-x-4"},d=(0,i._)("img",{src:o,alt:"",class:"h-8"},null,-1),p=(0,i._)("img",{src:a,alt:"",class:"h-10 relative -top-1"},null,-1),b=(0,i._)("img",{src:c,alt:"",class:"h-8"},null,-1),f=(0,i._)("img",{src:s,alt:"",class:"h-8"},null,-1),m=[f];function g(e,t,r,n,o,a){const c=(0,i.up)("router-link"),s=(0,i.up)("router-view"),f=(0,i.up)("Sidebar");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",l,[(0,i._)("header",_,[(0,i._)("nav",u,[(0,i.Wm)(c,{to:"/",title:"Home",class:"p-6 py-4 hover:bg-zinc-300 duration-200 rounded-b-xl"},{default:(0,i.w5)((()=>[d])),_:1}),(0,i.Wm)(c,{to:"/products",title:"Products",class:"px-6 py-4 hover:bg-zinc-300 duration-200 rounded-b-xl"},{default:(0,i.w5)((()=>[p])),_:1}),(0,i.Wm)(c,{to:"/orders",title:"Orders",class:"px-6 py-4 hover:bg-zinc-300 duration-200 rounded-b-xl"},{default:(0,i.w5)((()=>[b])),_:1}),(0,i._)("a",{class:"px-6 py-4 hover:bg-zinc-300 duration-200 rounded-b-xl",onClick:t[0]||(t[0]=(...e)=>a.toggleSidebar&&a.toggleSidebar(...e)),title:"Cart"},m)])])]),(0,i.Wm)(s,{inventory:o.inventory,addToCart:a.addToCart},null,8,["inventory","addToCart"]),o.isVisible?((0,i.wg)(),(0,i.j4)(f,{key:0,toggle:a.toggleSidebar,cart:o.cart,inventory:o.inventory},null,8,["toggle","cart","inventory"])):(0,i.kq)("",!0)],64)}var h=JSON.parse('[{"id":1,"name":"Black Cape","stock":79,"quantity":1,"price":799,"type":"Accesories"},{"id":2,"name":"Union Jack Bow Tie","stock":110,"quantity":1,"price":23,"type":"Bow Ties"},{"id":3,"name":"Belt Black Leather","stock":25,"quantity":1,"price":150,"type":"Belts"},{"id":4,"name":"Brown Brogue Shoe","stock":50,"quantity":1,"price":290,"type":"Brogue Shoes"},{"id":5,"name":"Pink Braces","stock":46,"quantity":1,"price":115,"type":"Braces"},{"id":6,"name":"Dress Black","stock":10,"quantity":1,"price":300,"type":"Dresses"},{"id":7,"name":"Baseball Cap","stock":203,"quantity":1,"price":12,"type":"Caps"},{"id":8,"name":"Rasta Winter Hat","stock":110,"quantity":1,"price":27,"type":"Jamaican Style Hats"},{"id":9,"name":"Green and Blue Clogs","stock":77,"quantity":1,"price":54,"type":"Crocs"}]'),v=r(7139),w=r.p+"img/delete.307ca095.svg",x=r.p+"img/dash.66ab7c87.svg";const k={class:"fixed right-0 top-0 bottom-0 w-96 bg-gray-200 rounded-l-xl text-xl font-mono overflow-hidden"},y={class:"flex items-center justify-between p-4"},q={class:"text-3xl"},j=(0,i._)("img",{src:w,alt:"",class:"h-8"},null,-1),C=[j],O={key:0,class:"text-sm italic text-center my-4 text-gray-400"},z={class:"flex mt-8"},B=["onClick"],T=(0,i._)("img",{src:x,alt:"",class:"h-4"},null,-1),S=[T],P={class:"font-bold"},D={class:"flex items-center justify-between p-4 mt-4"},A={class:"text-2xl"},E=(0,i.Uk)("Total:"),H={class:"text-3xl font-bold text-red-400"},N=(0,i._)("button",{class:"shadow-2xl px-4 py-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-600"}," Checkout ",-1);function J(e,t,r,n,o,a){return(0,i.wg)(),(0,i.iD)("aside",k,[(0,i._)("div",y,[(0,i._)("h2",q,"Your Cart ("+(0,v.zw)(a.sum(Object.values(r.cart)))+")",1),(0,i._)("div",{class:"hover:scale-110",onClick:t[0]||(t[0]=(...e)=>r.toggle&&r.toggle(...e))},C)]),Object.entries(r.cart).length?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("h3",O," No items in cart now ")),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.cart,((e,t)=>((0,i.wg)(),(0,i.iD)("div",z,[(0,i._)("button",{class:"flex items-center justify-center h-8 w-8 hover:bg-red-300 rounded-full mx-4 flex-shrink-0",onClick:e=>a.deleteItem(t)},S,8,B),(0,i._)("p",null,[(0,i.Uk)((0,v.zw)(t)+" ~~~ ",1),(0,i._)("span",P,(0,v.zw)(e)+" pcs",1)])])))),256)),(0,i._)("div",D,[(0,i._)("h2",A,[E,(0,i._)("span",H,"$"+(0,v.zw)(a.totalBill()),1)]),N])])}var V=r(4725),W=r(89);const Z=(0,W.Z)(V.Z,[["render",J]]);var M=Z,L={components:{Sidebar:M},data(){return{isVisible:!1,inventory:h,cart:{}}},methods:{toggleSidebar(){this.isVisible=!this.isVisible},addToCart(e,t){this.cart[e]||(this.cart[e]=0),this.cart[e]+=this.inventory[t].quantity,this.inventory[t].quantity=1}}};const U=(0,W.Z)(L,[["render",g]]);var Y=U,$=r(2483),F=r.p+"img/banner-2.6d3fb0a2.jpg",G=r(2702);const I={class:"flex flex-col items-center justify-start min-h-screen bg-zinc-800"},K={role:"main",class:"flex flex-col bg-zinc-700 p-4 m-3 space-y-10 shadow-2xl rounded-3xl md:flex-row md:space-x-10 md:space-y-0"},R=(0,i.uE)('<section class="flex flex-col items-center justify-center space-y-3"><div class="relative"><img src="'+F+'" alt="" class="h-96 object-cover rounded-xl duration-200 md:h-96"><h2 class="absolute top-1/2 left-0 text-5xl bg-white p-6 font-light rounded-r-full"> G<span class="text-zinc-800 font-bold mx-2">∞</span>d Tingz </h2></div></section>',1),Q={class:"flex flex-col items-center md:items-start"},X=(0,i._)("h2",{class:"text-2xl mb-2 font-light text-white"},"On Sale Now",-1),ee={class:"flex flex-col p-8 space-y-10 bg-zinc-50 rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 font-mono"},te=(0,i._)("img",{src:G,alt:"",class:"object-fit mx-auto duration-200 hover:scale-105 h-96 md:h-60"},null,-1),re={class:"flex flex-col space-y-6"},ne={class:"flex-flex-col mb-4 space-y-3 text-center md:text-left"},ie=(0,i._)("div",{class:""},[(0,i._)("div",{class:"inline-block px-3 py-1 text-sm bg-red-400 text-white rounded-full font-sans"}," 40% Off !!! ")],-1),oe=(0,i._)("div",{class:"max-w-full text-3xl font-medium"}," Black Cape ",-1),ae={class:"flex flex-col mb-4 space-y-3 text-center md:text-left"},ce=(0,i._)("p",{class:"text-xl font-light line-through"},"$1299",-1),se=(0,i._)("p",{class:"text-5xl font-bold"},"$799",-1),le=(0,i._)("button",{class:"w-full bg-blue-700 transition-all duration-150 text-white border-b-4 border-b-blue-700 rounded-lg group-hover:border-t-4 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg"},[(0,i._)("div",{class:"px-4 py-2 font-sans rounded-lg duration-150"}," Add to cart ")],-1),_e=[le],ue=(0,i._)("div",{class:"flex items-center space-x-3 group"},[(0,i._)("div",{class:"w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"}),(0,i._)("div",{class:"text-sm"},"50+ pcs in stock")],-1),de=(0,i._)("footer",{class:"text-gray-400 text-center w-full font-light mt-8"}," © 2022 JeromeJoh. All rights reserved. ",-1);function pe(e,t,r,n,o,a){return(0,i.wg)(),(0,i.iD)("div",I,[(0,i._)("main",K,[R,(0,i._)("section",Q,[X,(0,i._)("div",ee,[te,(0,i._)("div",re,[(0,i._)("div",ne,[ie,oe,(0,i._)("div",ae,[ce,se,(0,i._)("div",{class:"group",onClick:t[0]||(t[0]=e=>r.addToCart("Black Cape",0))},_e),ue])])])])])]),de])}var be={name:"HomeView",props:["inventory","addToCart"]};const fe=(0,W.Z)(be,[["render",pe]]);var me=fe;const ge=[{path:"/",name:"home",component:me},{path:"/products",name:"Products",component:()=>r.e(443).then(r.bind(r,8860))},{path:"/orders",name:"Orders",component:()=>r.e(443).then(r.bind(r,7619))}],he=(0,$.p7)({history:(0,$.r5)(),routes:ge});var ve=he,we=r(65),xe=(0,we.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(Y).use(xe).use(ve).mount("#app")},2702:function(e,t,r){e.exports=r.p+"img/black-cape.b5d13a9c.png"}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(t,r,n,i){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<o&&(o=i));if(a){e.splice(l--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,n,i]}}(),function(){__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(t,{a:t}),t}}(),function(){__webpack_require__.d=function(e,t){for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(t,r){return __webpack_require__.f[r](e,t),t}),[]))}}(),function(){__webpack_require__.u=function(e){return"js/about.d87d1ffd.js"}}(),function(){__webpack_require__.miniCssF=function(e){}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="good-tingz:";__webpack_require__.l=function(r,n,i,o){if(e[r])e[r].push(n);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var _=s[l];if(_.getAttribute("src")==r||_.getAttribute("data-webpack")==t+i){a=_;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[n];var u=function(t,n){a.onerror=a.onload=null,clearTimeout(d);var i=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){__webpack_require__.p=""}(),function(){var e={143:0};__webpack_require__.f.j=function(t,r){var n=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise((function(r,i){n=e[t]=[r,i]}));r.push(n[2]=i);var o=__webpack_require__.p+__webpack_require__.u(t),a=new Error,c=function(r){if(__webpack_require__.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",a.name="ChunkLoadError",a.type=i,a.request=o,n[1](a)}};__webpack_require__.l(o,c,"chunk-"+t,t)}},__webpack_require__.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,i,o=r[0],a=r[1],c=r[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)__webpack_require__.o(a,n)&&(__webpack_require__.m[n]=a[n]);if(c)var l=c(__webpack_require__)}for(t&&t(r);s<o.length;s++)i=o[s],__webpack_require__.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return __webpack_require__.O(l)},r=self["webpackChunkgood_tingz"]=self["webpackChunkgood_tingz"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(7343)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.cbfd1a31.js.map