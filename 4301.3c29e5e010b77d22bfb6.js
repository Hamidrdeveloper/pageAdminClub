"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4301],{4301:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(27378),l=a(96740),r=a(33996),c=a(60071),m=a(54801);function u(){const{t:e}=(0,c.$)(),t=new m.Z;return n.createElement(r.Xg,{module:t},n.createElement(r.Xg.Breadcrumb,null),n.createElement(r.Xg.Panel,null,n.createElement(r.s_.Header,{hasSearch:!0}),n.createElement(r.s_.ListView,{hasUpdate:!1,module:t,togglers:[{url:"active",sorter:!0,dataIndex:"is_active",title:e("Global.Active")}]})))}var d=a(38056),o=a(53988),s=a(3487),i=a(20248),p=a(10247);var E=()=>{const e=(0,l.s0)(),{paymentMethodType_id:t}=(0,l.UO)(),[a,c]=(0,n.useState)({}),[u,E]=(0,n.useState)(!1),b=new m.Z,h=b.title[0],f=`${p.AW.replace("*","")}`,g=[...b.breadcrumbItems,{path:"",breadcrumbName:t?`${d.ZP.t("Global.Update")} ${h} - ${t}`:`${d.ZP.t("Global.New")} ${h}`}];(0,n.useEffect)((()=>{t&&(E(!0),b.apiService.getOne(+t).then((e=>{c(e)})).finally((()=>{E(!1)})))}),[]);return n.createElement(r.Xg,{module:b},n.createElement(r.Xg.Breadcrumb,{routes:g}),n.createElement(r.Xg.Panel,null,n.createElement(s.j,null,n.createElement("div",{className:"header"},n.createElement(o.Z,{onClose:()=>e(`/admin${f}`),items:g})),u?n.createElement(r.aN,null):n.createElement(i.default,{singleData:a,onCallback:()=>{e(-1)}}))))};function b(){return n.createElement(l.Z5,null,n.createElement(l.AW,{path:"",element:n.createElement(u,null)}),n.createElement(l.AW,{path:"/upsert",element:n.createElement(E,null)}),n.createElement(l.AW,{path:"/upsert/:paymentMethodType_id",element:n.createElement(E,null)}))}},3487:function(e,t,a){a.d(t,{j:function(){return n}});const n=a(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`}}]);