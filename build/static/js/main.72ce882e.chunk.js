(this.webpackJsonppnl=this.webpackJsonppnl||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c,s=n(0),r=n(1),a=n.n(r),i=n(6),o=n.n(i),u=(n(21),n(22),n(23),n(4)),l=n(2),p=n(3),d=n.n(p),j=n(5),b=n(14),h=function e(){var t=this;Object(b.a)(this,e),this.url="https://pokeapi.co/api/v2/",this.getResult=function(){var e=Object(j.a)(d.a.mark((function e(n,c){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t.url).concat(n).concat(c));case 2:if((s=e.sent).ok){e.next=5;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u044b\u043f\u043e\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430: ".concat(t.url," \n \u0441\u0442\u0430\u0442\u0443\u0441: ").concat(s.status));case 5:return e.next=7,s.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.getList=function(){var e=Object(j.a)(d.a.mark((function e(n,c){var s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="?offset=".concat(n,"&limit=").concat(c),e.next=3,t.getResult("pokemon",s);case 3:return r=e.sent,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.getPokemon=function(){var e=Object(j.a)(d.a.mark((function e(n){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="/".concat(n),e.next=3,t.getResult("pokemon",c);case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPokemonSpecies=function(){var e=Object(j.a)(d.a.mark((function e(n){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="/".concat(n),e.next=3,t.getResult("pokemon-species",c);case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=n(15),m=n.n(f),O=(n(31),function(e){var t=e.item,n=Object(l.b)();return Object(s.jsxs)("div",{tabIndex:t.index,className:"card",onClick:function(){n({type:"ID_SET",payload:{index:t.index,showPokemon:!0}})},children:[Object(s.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(t.index,".svg"),alt:"Pokemon",className:"card__image"}),Object(s.jsx)("div",{className:"card__info",children:Object(s.jsx)("h2",{className:"card__info-title",children:t.name})})]})}),x=(n(32),function(){var e=Object(l.b)(),t=Object(r.useRef)(new h),n=Object(r.useState)([]),c=Object(u.a)(n,2),a=c[0],i=c[1],o=Object(r.useState)(40),p=Object(u.a)(o,2),d=p[0],j=p[1],b=Object(r.useState)(!1),f=Object(u.a)(b,2),x=f[0],v=f[1],g=Object(l.c)((function(e){return e})).searchText;Object(r.useEffect)((function(){e({type:"PS_SET",payload:new h}),t.current.getList(0,649).then((function(e){e.map((function(e,t){return e.index=t+1})),i(e),v(!0)})).catch((function(){console.log("\u041e\u0448\u0438\u0431\u043a\u0430")}))}),[e]),Object(r.useEffect)((function(){j(40),v(!0)}),[g]);var _=function(e){return isNaN(parseInt(g))?e.name.includes(g):e.index===parseInt(g)};return Object(s.jsx)(m.a,{className:"list",pageStart:0,loadMore:function(){console.log(d),a.filter((function(e){return _(e)})).length<=40||d>=649?v(!1):j((function(e){return e+40}))},hasMore:x,children:a.filter((function(e){return _(e)})).slice(0,d).map((function(e,t){return Object(s.jsx)(O,{item:e},t)}))})});n(33);!function(e){e[e.hp=0]="hp",e[e.atk=1]="atk",e[e.def=2]="def",e[e["s.atk"]=3]="s.atk",e[e["s.def"]=4]="s.def",e[e.spd=5]="spd"}(c||(c={}));var v=function(e){var t=e.count,n=e.idName;return Object(s.jsxs)("div",{className:"progress-bar",children:[Object(s.jsx)("p",{className:"progress-bar__title",children:c[n]+":"+t}),Object(s.jsx)("div",{className:"progress-bar__number",style:{width:t/200*100+"%"}})]})},g=function(){return Object(s.jsx)("div",{className:"popup__panel",children:Object(s.jsx)("h3",{children:"Loading..."})})},_=function(){return Object(s.jsx)("div",{className:"popup__panel",children:Object(s.jsx)("h3",{children:"Error!"})})},k=function(e){var t=e.pokemon,n=e.dispatch,c=e.setLoading;return Object(s.jsxs)("div",{className:"popup",onClick:function(e){e.stopPropagation()},children:[Object(s.jsxs)("div",{className:"popup__panel",children:[Object(s.jsxs)("h3",{children:["#",null===t||void 0===t?void 0:t.id," ",null===t||void 0===t?void 0:t.name]}),Object(s.jsx)("button",{className:"popup__panel-close",onClick:function(){n({type:"SHOW_SET",payload:!1}),c(!0)},children:"X"})]}),Object(s.jsxs)("div",{className:"popup__content",children:[Object(s.jsxs)("div",{className:"popup__main",children:[Object(s.jsxs)("div",{className:"popup__first-coloum",children:[Object(s.jsxs)("fieldset",{className:"popup__img-cover",children:[Object(s.jsx)("legend",{children:"image"}),Object(s.jsx)("img",{className:"popup__img",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(null===t||void 0===t?void 0:t.id,".svg"),alt:"Pokemon"})]}),Object(s.jsxs)("fieldset",{className:"popup__types",children:[Object(s.jsx)("legend",{children:"types"}),null===t||void 0===t?void 0:t.types.map((function(e,t){return Object(s.jsx)("span",{className:"types-color-"+e.type.name,children:e.type.name},t)}))]})]}),Object(s.jsxs)("div",{className:"popup__second-coloum",children:[Object(s.jsxs)("fieldset",{children:[Object(s.jsx)("legend",{children:"general"}),Object(s.jsxs)("ul",{className:"popup__general",children:[Object(s.jsxs)("li",{children:["Base exp: ",null===t||void 0===t?void 0:t.base_experience]}),Object(s.jsxs)("li",{children:["Height: ",t.height/10,"m"]}),Object(s.jsxs)("li",{children:["Weight: ",t.weight/10,"kg"]})]})]}),Object(s.jsxs)("fieldset",{children:[Object(s.jsx)("legend",{children:"stats"}),Object(s.jsx)("div",{className:"popup__stats",children:null===t||void 0===t?void 0:t.stats.map((function(e,t){return Object(s.jsx)(v,{count:e.base_stat,idName:t},t)}))})]})]})]}),Object(s.jsxs)("fieldset",{className:"popup__description",children:[Object(s.jsx)("legend",{children:"description"}),null===t||void 0===t?void 0:t.species]})]})]})},y=function(){var e=Object(l.c)((function(e){return e})),t=e.ps,n=e.index,c=e.showPokemon,a=Object(r.useState)(),i=Object(u.a)(a,2),o=i[0],p=i[1],d=Object(r.useState)(!0),j=Object(u.a)(d,2),b=j[0],h=j[1],f=Object(r.useState)(!1),m=Object(u.a)(f,2),O=m[0],x=m[1],v=Object(l.b)(),y=function(e,t){var n=t.flavor_text_entries.filter((function(e){return"en"===e.language.name&&"white"===e.version.name}))[0];e.species=n.flavor_text||"Not discription",p(e),h(!1),x(!1)};return Object(r.useEffect)((function(){c?(h(!0),document.body.setAttribute("style","overflow: hidden;"),null===t||void 0===t||t.getPokemon(n).then((function(e){null===t||void 0===t||t.getPokemonSpecies(n).then((function(t){y(e,t)})).catch((function(e){console.log(e),x(!0)}))})).catch((function(e){console.log(e),x(!0)}))):document.body.setAttribute("style","overflow: auto;")}),[c]),Object(s.jsx)("div",{className:"popup__back",style:{display:c?"":"none"},onClick:function(){v({type:"SHOW_SET",payload:!1}),h(!0),x(!1)},children:O?Object(s.jsx)(_,{}):b?Object(s.jsx)(g,{}):Object(s.jsx)(k,{pokemon:o,dispatch:v,setLoading:h})})},N=function(){var e=Object(l.c)((function(e){return e})).searchText,t=Object(l.b)();return Object(s.jsx)("input",{className:"panel__find-input",maxLength:20,value:e,onChange:function(e){t({type:"SEARCH_SET",payload:e.currentTarget.value.toLowerCase()})},placeholder:"search (name or id)",type:"text"})},w=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("header",{children:Object(s.jsxs)("div",{className:"panel",children:[Object(s.jsx)("h1",{className:"panel__title",children:"Pokemon Lib"}),Object(s.jsx)(N,{})]})}),Object(s.jsxs)("section",{className:"container-fluid",children:[Object(s.jsx)(x,{}),Object(s.jsx)(y,{})]})]})},S=n(7),P={ps:null,index:0,showPokemon:!1,searchText:""},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PS_SET":return Object.assign({},e,{ps:t.payload});case"ID_SET":return Object.assign({},e,t.payload);case"SHOW_SET":return Object.assign({},e,{showPokemon:t.payload});case"SEARCH_SET":return Object.assign({},e,{searchText:t.payload});default:return e}},T=Object(S.b)(E);o.a.render(Object(s.jsx)(l.a,{store:T,children:Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(w,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.72ce882e.chunk.js.map