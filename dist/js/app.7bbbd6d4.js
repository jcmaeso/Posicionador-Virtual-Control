(function(e){function t(t){for(var i,r,a=t[0],c=t[1],l=t[2],u=0,d=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},s={app:0},o=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var m=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5681:function(e,t,n){"use strict";var i=n("74ac"),s=n.n(i);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("TopMenu"),n("v-main",{staticClass:"my-4 mx-4"},[n("router-view")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",color:"#6A76AB",dark:""},scopedSlots:e._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":""}},[n("v-tab",{attrs:{to:{name:"Offsets"}}},[e._v("Offsets")]),n("v-tab",{attrs:{to:{name:"Movement"}}},[e._v("Mover")]),n("v-tab",{attrs:{to:{name:"Limits"}}},[e._v("Limites")])],1)]},proxy:!0}])},[n("v-toolbar-title",[e._v("Posicionador Virtual")]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:e.connect}},[n("v-icon",[e._v("mdi-lan-connect")])],1)],1)},a=[],c={methods:{connect:function(){alert("Trying to Connect"),pywebview.api.PyConnect(),alert("Connected")}}},l=c,m=n("2877"),u=n("6544"),d=n.n(u),v=n("40dc"),f=n("8336"),p=n("132d"),b=n("2fa4"),x=n("71a3"),h=n("fe57"),y=n("2a7f"),w=Object(m["a"])(l,r,a,!1,null,null,null),g=w.exports;d()(w,{VAppBar:v["a"],VBtn:f["a"],VIcon:p["a"],VSpacer:b["a"],VTab:x["a"],VTabs:h["a"],VToolbarTitle:y["a"]});var k={name:"App",components:{TopMenu:g},data:function(){return{}}},S=k,L=n("7496"),P=n("f6c4"),O=Object(m["a"])(S,s,o,!1,null,null,null),C=O.exports;d()(O,{VApp:L["a"],VMain:P["a"]});var M=n("f309");i["a"].use(M["a"]);var _=new M["a"]({}),j=n("8c4f"),R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("WaitDialog",{attrs:{dialog:e.lockButtons,msg:e.displayMsg}}),n("v-row",{staticClass:"offsets-header container",attrs:{dense:"",justify:"space-around"}},[n("v-col",{attrs:{sm:"2"}},[n("p",[e._v("Eje")])]),n("v-col",{attrs:{sm:"2"}},[n("p",[e._v("Offset Actual (º)")])]),n("v-col",{attrs:{sm:"2"}},[n("p",[e._v("Offset Deseado (º)")])]),n("v-col",{attrs:{sm:"2"}},[n("p",[e._v("Posición Actual(º)")])]),n("v-col",{attrs:{sm:"2"}},[n("p",[e._v("Posición Deseada(º)")])])],1),e._l(e.axes,(function(t,i){return n("v-row",{key:i,staticClass:"offset",attrs:{dense:"",justify:"space-around"}},[n("v-col",{attrs:{sm:"2"}},[n("v-text-field",{staticClass:"input-centered",attrs:{type:"number","single-line":"",disabled:"",outlined:""},model:{value:t.number,callback:function(n){e.$set(t,"number",n)},expression:"axis.number"}})],1),n("v-col",{attrs:{sm:"2"}},[n("v-text-field",{staticClass:"input-centered",attrs:{type:"number","single-line":"",disabled:"",outlined:""},model:{value:t.currentOffset,callback:function(n){e.$set(t,"currentOffset",n)},expression:"axis.currentOffset"}})],1),n("v-col",{attrs:{sm:"2"}},[n("v-text-field",{staticClass:"input-centered",attrs:{"single-line":"",outlined:""},on:{blur:e.updateOffset},model:{value:t.desiredOffset,callback:function(n){e.$set(t,"desiredOffset",n)},expression:"axis.desiredOffset"}})],1),n("v-col",{attrs:{sm:"2"}},[n("v-text-field",{staticClass:"input-centered",attrs:{type:"number",disabled:"","single-line":"",outlined:""},model:{value:t.currentPosition,callback:function(n){e.$set(t,"currentPosition",n)},expression:"axis.currentPosition"}})],1),n("v-col",{attrs:{sm:"2"}},[n("v-text-field",{staticClass:"input-centered",attrs:{type:"number","single-line":"",outlined:""},on:{blur:e.calcOffsets},model:{value:t.desiredPosition,callback:function(n){e.$set(t,"desiredPosition",n)},expression:"axis.desiredPosition"}})],1)],1)})),n("v-row",{attrs:{dense:"",justify:"space-around"}},[n("v-col",[n("v-btn",{attrs:{disabled:e.lockButtons},on:{click:e.readOffsetsPositions}},[e._v("Leer Offsets y Posiciones")])],1),n("v-col",[n("v-btn",{attrs:{disabled:e.lockButtons},on:{click:e.calcOffsets}},[e._v("Calcular Offsets")])],1),n("v-col",[n("v-btn",{attrs:{disabled:e.lockButtons},on:{click:e.sendOffsets}},[e._v("Escribir Offsets")])],1)],1)],2)},E=[],V=(n("4160"),n("a9e3"),n("35b3"),n("b680"),n("159b"),n("96cf"),n("1da1")),B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-text",[e._v(" "+e._s(e.msg)+" "),n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)},F=[],T={name:"WaitDialog",props:{dialog:Boolean,msg:String}},D=T,I=n("b0af"),N=n("99d9"),$=n("169a"),A=n("8e36"),W=Object(m["a"])(D,B,F,!1,null,null,null),q=W.exports;d()(W,{VCard:I["a"],VCardText:N["a"],VDialog:$["a"],VProgressLinear:A["a"]});var J={name:"Offsets",components:{WaitDialog:q},data:function(){return{axes:[],filename:"",lockButtons:!1,displayMsg:""}},methods:{updateOffset:function(e){console.log("Entro tmb"),console.log(this.axes);for(var t=0;t<this.axes.length;t++)if(this.axes[t].number==e.axis){if(isNaN(e.desiredOffset))return void(this.axes[t].desiredOffset=0);this.axes[t].desiredOffset=Math.round(100*(parseFloat(e.desiredOffset)%360+Number.EPSILON))/100}console.log(this.axes)},sendOffsets:function(){this.displayMsg="Escribiendo Offsets",this.lockButtons=!0,"undefined"!==typeof pywebview&&this.axes.forEach(function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.currentOffset===t.desiredOffset){e.next=8;break}return e.next=3,pywebview.api.PyWriteOffset(t.number,t.desiredOffset);case 3:if(n=e.sent,n){e.next=7;break}return alert("Error escribiendo El offset de ".concat(t.number)),e.abrupt("return");case 7:t.currentOffset=parseFloat(n).toFixed(2);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.lockButtons=!1},readOffsetsPositions:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.displayMsg="Leyendo Offsets y Posiciones",e.lockButtons=!0,"undefined"===typeof pywebview){t.next=8;break}return t.next=5,pywebview.api.PyReadPositionsAndOffsets();case 5:n=t.sent,n||alert("Error leyendo los offsets y las posiciones"),e.axes=n;case 8:e.lockButtons=!1;case 9:case"end":return t.stop()}}),t)})))()},calcOffsets:function(){this.displayMsg="Calculando Offsets",this.lockButtons=!0;var e=function(e){return e>=0?e%360:360+e%360};console.log(this.axes),this.axes.forEach((function(t){t.desiredOffset=e((parseFloat(t.currentOffset)+(parseFloat(t.desiredPosition)-parseFloat(t.currentPosition))).toFixed(2))})),this.lockButtons=!1}},created:function(){"undefined"===typeof pywebview&&this.axes.push({number:0,currentOffset:161.8,desiredOffset:161.8,currentPosition:79.94,desiredPosition:79.94})}},z=J,H=(n("997b"),n("62ad")),G=n("a523"),K=n("0fd9"),Q=n("8654"),U=Object(m["a"])(z,R,E,!1,null,null,null),X=U.exports;d()(U,{VBtn:f["a"],VCol:H["a"],VContainer:G["a"],VRow:K["a"],VTextField:Q["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("WaitDialog",{attrs:{dialog:e.lockButtons,msg:e.displayMsg}}),n("v-row",{attrs:{dense:"",justify:"space-around"}},[n("v-col",{attrs:{sm:"3"}},[n("v-combobox",{staticClass:"py-3",attrs:{label:"Sistema",dense:"","item-text":"name","return-object":"",items:e.systems},model:{value:e.systemSelected,callback:function(t){e.systemSelected=t},expression:"systemSelected"}}),n("v-combobox",{staticClass:"py-3",attrs:{label:"Modo de movimiento",dense:"","item-text":"name","return-object":"",items:e.movementModes},model:{value:e.movementModeSelected,callback:function(t){e.movementModeSelected=t},expression:"movementModeSelected"}}),n("v-btn",{attrs:{disabled:e.lockButtons},on:{click:e.moveAxis}},[e._v("Mover Eje")])],1),n("v-col",{attrs:{sm:"8"}},["MT"===e.movementModeSelected.mode?n("v-card",[n("v-row",{attrs:{justify:"space-around",dense:""}},[n("v-col",{attrs:{sm:"4"}},[n("v-combobox",{staticClass:"input-centered",attrs:{"item-text":"number",label:"Eje",items:e.systemSelected.axes},model:{value:e.axisSelected,callback:function(t){e.axisSelected=t},expression:"axisSelected"}}),n("v-text-field",{staticClass:"input-centered",attrs:{label:"Velocidad",outlined:"",type:"number",rules:[e.speedRule]},on:{blur:e.movementSpeedCorrect},model:{value:e.movementSpeed,callback:function(t){e.movementSpeed=t},expression:"movementSpeed"}})],1),n("v-col",{attrs:{sm:"4"}},[n("v-combobox",{staticClass:"input-centered",attrs:{label:"Dirección","item-text":"name","return-object":"",items:e.movementDirection},model:{value:e.movementDirectionSelected,callback:function(t){e.movementDirectionSelected=t},expression:"movementDirectionSelected"}}),n("v-text-field",{staticClass:"input-centered",attrs:{label:"Posición Objetivo",type:"number",outlined:"",rules:[e.positionRule("movementTargetPosition")]},on:{blur:function(t){return e.movementTargetPositionCorrect("movementTargetPosition")}},model:{value:e.movementTargetPosition,callback:function(t){e.movementTargetPosition=t},expression:"movementTargetPosition"}})],1)],1)],1):"MR"===e.movementModeSelected.mode?n("v-card",[n("v-row",{attrs:{justify:"space-around",dense:""}},[n("v-col",{attrs:{sm:"4"}},[n("v-combobox",{staticClass:"input-centered",attrs:{"item-text":"number",label:"Eje",items:e.systemSelected.axes},model:{value:e.axisSelected,callback:function(t){e.axisSelected=t},expression:"axisSelected"}}),n("v-text-field",{staticClass:"input-centered",attrs:{label:"Velocidad",outlined:"",type:"number",rules:[e.speedRule]},on:{blur:e.movementSpeedCorrect},model:{value:e.movementSpeed,callback:function(t){e.movementSpeed=t},expression:"movementSpeed"}}),n("v-combobox",{staticClass:"input-centered",attrs:{label:"Dirección","item-text":"name","return-object":"",items:e.movementDirection},model:{value:e.movementDirectionSelected,callback:function(t){e.movementDirectionSelected=t},expression:"movementDirectionSelected"}})],1),n("v-col",{attrs:{sm:"4"}},[n("v-text-field",{staticClass:"input-centered",attrs:{label:"Posición Inicial",type:"number",outlined:"",rules:[e.positionRule("movementStartPosition")]},on:{blur:function(t){return e.movementTargetPositionCorrect("movementStartPosition")}},model:{value:e.movementStartPosition,callback:function(t){e.movementStartPosition=t},expression:"movementStartPosition"}}),n("v-text-field",{staticClass:"input-centered",attrs:{label:"Posición Final",type:"number",outlined:"",rules:[e.positionRule("movementEndPosition")]},on:{blur:function(t){return e.movementTargetPositionCorrect("movementEndPosition")}},model:{value:e.movementEndPosition,callback:function(t){e.movementEndPosition=t},expression:"movementEndPosition"}}),n("v-text-field",{staticClass:"input-centered",attrs:{label:"Incremento Angular",type:"number",outlined:"",rules:[e.incrementRule]},on:{blur:e.movementIncrementCorrect},model:{value:e.movementIncrement,callback:function(t){e.movementIncrement=t},expression:"movementIncrement"}})],1)],1)],1):e._e(),n("v-card",{staticClass:"my-4 py-2"},[n("v-row",{attrs:{justify:"space-around",dense:""}},[n("v-col",{attrs:{sm:"4"}},[n("p",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[e._v("Position: "+e._s(e.currentPosition))])]),n("v-col",{attrs:{sm:"4"}},[n("v-btn",{attrs:{disabled:e.lockButtons},on:{click:e.readPosition}},[e._v("Read Position")])],1)],1)],1)],1)],1)],1)},Z=[],ee=(n("99af"),{name:"Mover",components:{WaitDialog:q},data:function(){return{systems:[{system:"spheric",name:"Esférico",axes:[{number:1,min:0,max:360},{number:3,min:0,max:360},{number:4,min:0,max:360},{number:5,min:0,max:240}]},{system:"compact-range",name:"Rango compacto",axes:[{number:1,min:0,max:359.99},{number:2,min:15,max:260,inv:!0},{number:3,min:0,max:359.99},{number:4,min:0,max:240},{number:6,min:0,max:155}]}],systemSelected:{},movementModes:[{mode:"MT",name:"Modo Track"},{mode:"MR",name:"Modo Registro"}],movementModeSelected:{},axisSelected:{},movementDirection:[{mode:"d",name:"Auto"},{mode:"f",name:"Directa"},{mode:"r",name:"Inversa"}],movementDirectionSelected:{},movementSpeed:"90.0",movementTargetPosition:"0.00",currentPosition:"0.00",movementStartPosition:"0.00",movementEndPosition:"0.00",movementIncrement:"0.100",lockButtons:!1,displayMsg:""}},methods:{speedRule:function(e){return isNaN(e)?"La velocidad no es un numero":(e=parseFloat(e),e>92?"La velocidad no puede ser superior a 92%":!(e<=0)||"La velocidad no puede ser inferior a 0%")},positionRule:function(e){var t=this[e];if(isNaN(t))return"La posición no es un numero";if(t=parseFloat(t),void 0!==this.axisSelected.inv){if(t>this.axisSelected.min&&t<this.axisSelected.max)return"Posición fuera de limites (".concat(this.axisSelected.max,",").concat(this.axisSelected.min,")")}else if(t<this.axisSelected.min||t>this.axisSelected.max)return"Posición fuera de limites (".concat(this.axisSelected.min,",").concat(this.axisSelected.max,")");return!0},incrementRule:function(e){return isNaN(e)?"El incremento no es un número":(e=parseFloat(e).toFixed(3),e<.005?"El incremento no puede ser menor que 0.005º":e>49.999?"El incremento no puede ser mayor que 49.999º":1e3*(parseFloat(this.movementEndPosition)-parseFloat(this.movementStartPosition))%(1e3*e)===0||"Las posiciones no son multiplo del incremento")},movementIncrementCorrect:function(){!0===this.incrementRule(this.movementIncrement)?this.movementIncrement=parseFloat(this.movementIncrement).toFixed(3):this.movementIncrement=.005},movementSpeedCorrect:function(){!0===this.speedRule(this.movementSpeed)?this.movementSpeed=parseFloat(this.movementSpeed).toFixed(1):this.movementSpeed=90},movementTargetPositionCorrect:function(e){console.log(this[e]),!0===this.positionRule(e)?this[e]=parseFloat(this[e]).toFixed(2):this[e]=this.axisSelected.min},moveAxis:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.displayMsg="Moviendo el eje",e.lockButtons=!0,"undefined"===typeof pywebview){t.next=16;break}t.t0=e.movementModeSelected.mode,t.next="MT"===t.t0?6:"MR"===t.t0?10:14;break;case 6:return t.next=8,pywebview.api.PyMoveTrack(e.movementDirectionSelected.mode,e.movementSpeed,e.movementTargetPosition,e.axisSelected.number);case 8:return n=t.sent,t.abrupt("break",14);case 10:return t.next=12,pywebview.api.PyMoveRegister(e.movementDirectionSelected.mode,e.movementSpeed,e.movementStartPosition,e.movementEndPosition,e.movementIncrement,e.axisSelected.number);case 12:return n=t.sent,t.abrupt("break",14);case 14:n||alert("Error moviendo el eje"),e.currentPosition=n;case 16:e.lockButtons=!1;case 17:case"end":return t.stop()}}),t)})))()},readPosition:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.displayMsg="Leyendo la posición",e.lockButtons=!0,"undefined"===typeof pywebview){t.next=10;break}return t.next=5,pywebview.api.PyReadPosition(e.axisSelected.number);case 5:if(n=t.sent,n||0==n){t.next=9;break}return alert("Error leyendo la posición"),t.abrupt("return");case 9:e.currentPosition=n;case 10:e.lockButtons=!1;case 11:case"end":return t.stop()}}),t)})))()}},watch:{systemSelected:function(e){this.systemSelected=e},axisSelected:function(e){this.axisSelected=e,this.readPosition()}},created:function(){this.systemSelected=this.systems[0],this.movementModeSelected=this.movementModes[0],this.axisSelected=this.systemSelected.axes[0],this.movementDirectionSelected=this.movementDirection[0]}}),te=ee,ne=n("2b5d"),ie=Object(m["a"])(te,Y,Z,!1,null,null,null),se=ie.exports;d()(ie,{VBtn:f["a"],VCard:I["a"],VCol:H["a"],VCombobox:ne["a"],VContainer:G["a"],VRow:K["a"],VTextField:Q["a"]});var oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","fill-content":""}},[n("WaitDialog",{attrs:{dialog:e.lockButtons,msg:e.displayMsg}}),n("v-row",{staticClass:"offsets-header container",attrs:{dense:"",align:"center",justify:"space-around"}},[n("v-col",{attrs:{sm:"3"}},[n("p",[e._v("Eje")])]),n("v-col",{attrs:{sm:"3"}},[n("p",[e._v("Limite Directa")])]),n("v-col",{attrs:{sm:"3"}},[n("p",[e._v("Limite Inversa")])])],1),e._l(e.axes,(function(e,t){return n("div",{key:t},[n("Limit",{attrs:{axis:e}})],1)})),n("v-row",{attrs:{"justify-space-around":"","align-center":""}},[n("v-col",{attrs:{sm:"5"}},[n("v-btn",{attrs:{disabled:e.lockButtons},on:{click:e.readLimits}},[e._v("Leer Limites")])],1),n("v-col",{attrs:{sm:"5"}},[n("v-btn",{attrs:{disabled:e.lockButtons},on:{click:e.writeLimits}},[e._v("Escribir Limites")])],1)],1)],2)},re=[],ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{dense:"",justify:"space-around",align:"center"}},[n("v-col",{attrs:{sm:"3"}},[n("v-text-field",{staticClass:"input-centered",attrs:{type:"number","single-line":"",disabled:"",outlined:""},model:{value:e.axis.number,callback:function(t){e.$set(e.axis,"number",t)},expression:"axis.number"}})],1),n("v-col",{attrs:{sm:"3"}},[n("v-text-field",{staticClass:"input-centered",attrs:{type:"number","single-line":"",outlined:"","background-color":e.forwardLimitColor},on:{blur:e.updateLimit},model:{value:e.axis.forwardLimit,callback:function(t){e.$set(e.axis,"forwardLimit",t)},expression:"axis.forwardLimit"}})],1),n("v-col",{attrs:{sm:"3"}},[n("v-text-field",{staticClass:"input-centered",attrs:{type:"number","single-line":"",outlined:"","background-color":e.reverseLimitColor},on:{blur:e.updateLimit},model:{value:e.axis.reverseLimit,callback:function(t){e.$set(e.axis,"reverseLimit",t)},expression:"axis.reverseLimit"}})],1)],1)},ce=[],le={name:"Limite",data:function(){return{forwardLimitColor:"white",reverseLimitColor:"white"}},props:["axis"],watch:{"axis.forwardLimit":function(e){console.log("Cambio Color"),e==this.axis.lastForwardLimit?this.forwardLimitColor="white":this.forwardLimitColor="red"},"axis.reverseLimit":function(e){console.log("Cambio Color 2"),e==this.axis.lastReverseLimit?this.reverseLimitColor="white":this.reverseLimitColor="red"}},methods:{updateLimit:function(){var e=!1;isNaN(this.axis.forwardLimit)&&(this.axis.forwardLimit=0,e=!0),isNaN(this.axis.reverseLimit)&&(this.axis.reverseLimit=0,e=!0),e||(this.axis.forwardLimit=Math.round(100*(parseFloat(this.axis.forwardLimit)%360+Number.EPSILON))/100)}}},me=le,ue=(n("8d35"),Object(m["a"])(me,ae,ce,!1,null,"4dde352a",null)),de=ue.exports;d()(ue,{VCol:H["a"],VRow:K["a"],VTextField:Q["a"]});var ve={name:"Limites",components:{Limit:de,WaitDialog:q},data:function(){return{axes:[],lockButtons:!1,displayMsg:""}},created:function(){this.axes.push({number:0,lastForwardLimit:161.8,forwardLimit:161.8,reverseLimit:161.9,lastReverseLimit:161.9}),this.axes.push({number:1,lastForwardLimit:161.8,forwardLimit:161.8,reverseLimit:161.9,lastReverseLimit:161.9})},methods:{readLimits:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.displayMsg="Leyendo Limites",e.lockButtons=!0,"undefined"===typeof pywebview){t.next=9;break}return t.next=5,pywebview.api.PyReadLimits();case 5:n=t.sent,n||alert("Error leyendo los limites"),e.axes=n,e.axes.forEach((function(e){e.lastReverseLimit=e.reverseLimit,e.lastForwardLimit=e.forwardLimit}));case 9:e.lockButtons=!1;case 10:case"end":return t.stop()}}),t)})))()},writeLimits:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.displayMsg="Escribiendo Limites",e.lockButtons=!0,"undefined"===typeof pywebview){t.next=19;break}n=0;case 4:if(!(n<e.axes.length)){t.next=19;break}if(e.axes[n].forwardLimit===e.axes[n].lastForwardLimit&&e.axes[n].reverseLimit===e.axes[n].lastReverseLimit){t.next=16;break}return t.next=8,pywebview.api.PyWriteLimit(e.axes[n].number,e.axes[n].forwardLimit,e.axes[n].reverseLimit);case 8:if(i=t.sent,i){t.next=12;break}return alert("Error escribiendo el limite de ".concat(e.axes[n].number)),t.abrupt("return");case 12:e.axes[n].reverseLimit=i.reverseLimit,e.axes[n].lastReverseLimit=i.reverseLimit,e.axes[n].forwardLimit=i.forwardLimit,e.axes[n].lastForwardLimit=i.forwardLimit;case 16:n++,t.next=4;break;case 19:console.log(e.axes),console.log("He terminado"),e.lockButtons=!1;case 22:case"end":return t.stop()}}),t)})))()}}},fe=ve,pe=(n("5681"),Object(m["a"])(fe,oe,re,!1,null,null,null)),be=pe.exports;d()(pe,{VBtn:f["a"],VCol:H["a"],VContainer:G["a"],VRow:K["a"]}),i["a"].use(j["a"]);var xe=[{path:"/",name:"Offsets",component:X},{path:"/movement",name:"Movement",component:se},{path:"/limits",name:"Limits",component:be}],he=new j["a"]({routes:xe}),ye=he;i["a"].config.productionTip=!1,new i["a"]({vuetify:_,router:ye,render:function(e){return e(C)}}).$mount("#app")},"5ad7":function(e,t,n){},"60b6":function(e,t,n){},"74ac":function(e,t,n){},"8d35":function(e,t,n){"use strict";var i=n("60b6"),s=n.n(i);s.a},"997b":function(e,t,n){"use strict";var i=n("5ad7"),s=n.n(i);s.a}});
//# sourceMappingURL=app.7bbbd6d4.js.map