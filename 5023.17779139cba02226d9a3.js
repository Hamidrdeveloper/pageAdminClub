"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5023],{25023:function(e,l,t){t.r(l),t.d(l,{default:function(){return C}});var n=t(38056),r=(t(95171),t(34234)),a=t(6110),i=t(27378),m=t(56552),c=t(33996),s=t(3288),o=t(35062),u=t(10374),d=t(72961),b=t(48158),p=t(61320),E=t.n(p),g=t(60071),y=(t(52190),t(21244)),Z=t(99386),f=t(46226),v=t(31675),S=t(56591),h=t(25724),O=t(97851),_=t(28681),N=t(85273);var x={NumberSeriesContainer:t(26761).ZP.div`
  gap: 8px;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 20px;
  &:not(:last-child) {
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px dashed #ccc;
  }
`},P=function(e,l){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t};function j({name:e}){const{t:l}=(0,g.$)();return i.createElement("div",null,i.createElement(s.Z.List,{name:e},((e,{add:t,remove:n})=>i.createElement(i.Fragment,null,0===e.length?i.createElement(S.Z,{block:!0,type:"dashed",onClick:()=>t()},l("Global.CreateTitle",{title:"Number Series"})):e.map(((r,a)=>{var{key:m,name:c,fieldKey:d}=r,b=P(r,["key","name","fieldKey"]);return i.createElement(x.NumberSeriesContainer,{key:m},i.createElement("div",{style:{flex:"1"}},i.createElement(o.Z,{gutter:[16,0],style:{width:"100%"}},i.createElement(u.Z,{xl:12},i.createElement(s.Z.Item,Object.assign({rules:[{required:!0}]},b,{name:[c,"starting_number"],fieldKey:[d,"starting_number"],label:l("NumberSeries.Field.StartingNo")}),i.createElement(h.Z,{placeholder:l("Global.InputPlaceholder",{title:l("NumberSeries.Field.StartingNo")})}))),i.createElement(u.Z,{xl:12},i.createElement(s.Z.Item,Object.assign({rules:[{required:!0}]},b,{name:[c,"ending_number"],fieldKey:[d,"ending_number"],label:l("NumberSeries.Field.EndingNo")}),i.createElement(h.Z,{placeholder:l("Global.InputPlaceholder",{title:l("NumberSeries.Field.EndingNo")})}))),i.createElement(u.Z,{xl:12},i.createElement(s.Z.Item,Object.assign({rules:[{required:!0}]},b,{name:[c,"increment_by_number"],fieldKey:[d,"increment_by_no"],label:l("NumberSeries.Field.IncrementByNo")}),i.createElement(h.Z,{placeholder:l("Global.InputPlaceholder",{title:l("NumberSeries.Field.IncrementByNo")})}))),i.createElement(u.Z,{xl:12},i.createElement(s.Z.Item,Object.assign({rules:[{required:!0}]},b,{name:[c,"warning_number"],fieldKey:[d,"warning_number"],label:l("NumberSeries.Field.WarningNo")}),i.createElement(O.Z,{placeholder:l("Global.InputPlaceholder",{title:l("NumberSeries.Field.WarningNo")})}))),i.createElement(u.Z,{xl:12},i.createElement(s.Z.Item,Object.assign({rules:[{required:!0}]},b,{name:[c,"available_from"],fieldKey:[d,"available_from"],label:l("NumberSeries.Field.AvailableFrom")}),i.createElement(_.Z,{format:(0,v._A)(),mode:"date",placeholder:l("Global.SelectPlaceholder",{title:l("NumberSeries.Field.AvailableFrom")})}))),i.createElement(u.Z,{xl:12},i.createElement(s.Z.Item,Object.assign({rules:[{required:!0}]},b,{name:[c,"last_number"],fieldKey:[d,"last_number"],label:l("NumberSeries.Field.LastNumber")}),i.createElement(h.Z,{placeholder:l("Global.InputPlaceholder",{title:l("NumberSeries.Field.LastNumber")})}))),i.createElement(u.Z,{xl:12},i.createElement(s.Z.Item,Object.assign({rules:[{required:!0}]},b,{name:[c,"prefix"],fieldKey:[d,"prefix"],label:l("NumberSeries.Field.Prefix")}),i.createElement(O.Z,{placeholder:l("Global.InputPlaceholder",{title:l("NumberSeries.Field.Prefix")})}))),i.createElement(u.Z,{xl:12},i.createElement(s.Z.Item,Object.assign({},b,{name:[c,"company"],fieldKey:[d,"company"],label:l("NumberSeries.Field.Company")}),i.createElement(f.Z,null))),i.createElement(u.Z,{xl:12},i.createElement(o.Z,{style:{marginTop:"30px"}},i.createElement(u.Z,{xl:8},i.createElement(s.Z.Item,Object.assign({},b,{name:[c,"allow_gaps"],fieldKey:[d,"allow_gaps"],valuePropName:"checked",initialValue:!1}),i.createElement(N.default,null,l("NumberSeries.Field.AllowGaps")))),i.createElement(u.Z,{xl:8},i.createElement(s.Z.Item,Object.assign({},b,{name:[c,"is_default"],fieldKey:[d,"is_default"],valuePropName:"checked",initialValue:!1}),i.createElement(N.default,null,l("Global.IsDefault")))))))),i.createElement(o.Z,{align:"bottom"},a<1?i.createElement(o.Z,{justify:"end",gutter:8},i.createElement(u.Z,null,i.createElement(S.Z,{ghost:!0,type:"primary",icon:i.createElement(y.Z,null),onClick:()=>t(null,0)})),e.length>1&&i.createElement(u.Z,null,i.createElement(S.Z,{ghost:!0,danger:!0,type:"primary",icon:i.createElement(Z.Z,null),onClick:()=>n(c)}))):i.createElement(S.Z,{ghost:!0,danger:!0,type:"primary",icon:i.createElement(Z.Z,null),onClick:()=>n(c)})))}))))))}var I=t(79213);var F=function({value:e,onChange:l}){return i.createElement(c.LE,{module:new I.b,optionSelector:{label:"slug",value:"id"},hasNew:!1,value:e,onChange:l})};function w({onSubmit:e,isPending:l,initialValues:t}){const[n]=s.Z.useForm(),{t:r}=(0,g.$)();(0,i.useEffect)((()=>{var e,l;(null===(e=null==t?void 0:t.numberSeriesPositions)||void 0===e?void 0:e.length)&&t.numberSeriesPositions.length>0?n.setFieldsValue(Object.assign(Object.assign({},t),{numberSeriesPositions:null===(l=t.numberSeriesPositions)||void 0===l?void 0:l.map((e=>Object.assign(Object.assign({},e),{available_from:E()(e.available_from)})))})):n.setFieldsValue({numberSeriesPositions:[{prefix:"",allow_gaps:!1,is_default:!1,last_number:null,ending_number:null,warning_number:null,starting_number:null,available_from:E()(),increment_by_number:null}]})}),[t]);return i.createElement(s.Z,{form:n,layout:"vertical",onFinish:e,name:"number-series-form",initialValues:{active_manual:!1,date_order:!1,translate:[{locale:void 0,description:""}]}},i.createElement(o.Z,{gutter:[16,15]},i.createElement(u.Z,{xs:12},i.createElement(s.Z.Item,{rules:[{required:!0}],name:"numberSeriesType",label:r("Global.Type")},i.createElement(F,{onChange:e=>{n.setFieldsValue({numberSeriesType:e})}}))),i.createElement(u.Z,{xs:12},i.createElement(d.Z,{style:{marginTop:"30px"},align:"center"},i.createElement(s.Z.Item,{name:"active_manual",valuePropName:"checked"},i.createElement(b.Z,null,r("NumberSeries.Field.ActiveManual"))),i.createElement(s.Z.Item,{name:"date_order",valuePropName:"checked"},i.createElement(b.Z,null,r("NumberSeries.Field.DateOrder")))))),i.createElement(o.Z,null,i.createElement(u.Z,{xs:24},i.createElement(s.Z.Item,null,i.createElement(c.jh,null))),i.createElement(u.Z,{xs:24},i.createElement(s.Z.Item,null,i.createElement(j,{name:"numberSeriesPositions"})))),i.createElement(c.Ow,{isPending:l}))}var k=function(e,l){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t};var C=({onCallback:e,singleData:l})=>{const t=new I.Z,{mutate:c,isLoading:s}=(0,m.useMutation)((({id:e,values:l})=>e?t.apiService.updateOne(e,l):t.apiService.createOne(l)));return i.createElement(w,{initialValues:l,onSubmit:t=>{const{translate:i,numberSeriesType:m,numberSeriesPositions:s}=t,o=k(t,["translate","numberSeriesType","numberSeriesPositions"]);if(null==s?void 0:s.find((e=>e.increment_by_number>e.ending_number)))return void a.ZP.error(n.ZP.t("NumberSeries.IncOnEndingNumberError"));const u=null==s?void 0:s.map((e=>{var l;return Object.assign(Object.assign({},e),{company_id:null===(l=null==e?void 0:e.company)||void 0===l?void 0:l.id})})),d=Object.assign(Object.assign({},o),{type_id:null==m?void 0:m.id,translate:(0,r.mj)(i),numberSeriesPositions:u});c({id:l?l.id:void 0,values:d},{onSuccess:e})},isPending:s})}}}]);