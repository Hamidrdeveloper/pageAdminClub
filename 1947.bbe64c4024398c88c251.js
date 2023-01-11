"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1947],{8531:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(38056),l=a(33996),i=(a(95171),a(34234)),r=a(27378),c=(a(56762),a(54370));class m{constructor(){this.entity="http://88.198.95.174:2020/ClubAdmin/GetAllChant_Audio",this.title=[n.ZP.t("Country.Title"),n.ZP.t("Country.Title",{count:2})],this.apiService=new i.Vx(this.entity,this.title[0]),this.UpsertComponent=(0,r.lazy)((()=>Promise.resolve().then(a.bind(a,89425)))),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${c.AW.replace("*","")}`}],this.detailColumns=[{key:"color",label:n.ZP.t("Flag.Field.Color")},{key:"icon",label:n.ZP.t("Flag.Field.Icon")}],this.tableColumns=[{key:"name",width:120,dataIndex:"name",className:"hasTile",title:n.ZP.t("Global.Name")},{key:"icon",dataIndex:"icon",className:"hasTile",title:n.ZP.t("Flag.Field.Icon"),render:(e,t)=>l.f[e]?l.f[e]({color:t.color}):"-"}],this.icons=[{key:1,icon:"FaBell"},{key:2,icon:"FaStar"},{key:3,icon:"FaLock"},{key:4,icon:"FaExclamationCircle"},{key:5,icon:"FaExclamationTriangle"},{key:6,icon:"FaBomb"},{key:7,icon:"FaCloudShowersHeavy"},{key:8,icon:"FaCloudMoonRain"},{key:9,icon:"FaCloudMeatball"},{key:10,icon:"FaSun"},{key:11,icon:"FaFlag"}]}}},89425:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});a(95171);var n=a(34234),l=a(27378),i=a(56552),r=a(33996),c=a(3288),m=a(35062),o=a(10374),s=a(97851),u=a(1269),d=a(48158),h=a(60071),p=a(26761),E=a(8531);a(56762);function f({onSubmit:e,isPending:t,initialValues:a}){const[n]=c.Z.useForm(),{t:i}=(0,h.$)();new E.Z;return(0,l.useEffect)((()=>{a&&n.setFieldsValue(a)}),[a]),l.createElement(c.Z,{form:n,layout:"vertical",onFinish:e,name:"flag-form",initialValues:{}},l.createElement(m.Z,{gutter:[16,0]},l.createElement(o.Z,{xs:12},l.createElement(c.Z.Item,{name:"title",label:"Title",rules:[{required:!0}]},l.createElement(s.Z,{placeholder:"Title"}))),l.createElement(o.Z,{xs:12},l.createElement(c.Z.Item,{name:"startTime_ms",label:"Start Time ms",rules:[{required:!0}],valuePropName:"date"},l.createElement(u.Z,{format:"mm:ss",placeholder:"Start Time"}))),l.createElement(o.Z,{xs:12},l.createElement(c.Z.Item,{name:"duration_ms",label:"Duration_ms",rules:[{required:!0}],valuePropName:"date"},l.createElement(u.Z,{format:"mm:ss",placeholder:"Duration_ms"}))),l.createElement(o.Z,{xs:12,style:{alignSelf:"end"}},l.createElement(c.Z.Item,{name:"isActive",valuePropName:"checked"},l.createElement(d.Z,null,"Is Active"))),l.createElement(o.Z,{xs:12,style:{alignSelf:"end"}},l.createElement(c.Z.Item,{name:"file",fieldKey:"file",label:i("Availability.Field.File")},l.createElement(r.gq,{form:n,idName:"file_id"})),l.createElement(c.Z.Item,{name:"file_id",hidden:!0},l.createElement(l.Fragment,null)))),l.createElement(r.Ow,{isPending:t}))}p.ZP.div`
  display: flex;
  align-items: center;

  & .icon {
    font-size: 1rem;
    margin-top: 4px;
    margin-right: 8px;
  }
`;var g=a(38056);var b=({chantId:e,onCallback:t,singleData:a})=>{const r=new E.Z,c=[g.ZP.t("ShippingProfile.Title"),g.ZP.t("ShippingProfile.Title",{count:2})],m=new n.Vx("http://88.198.95.174:2020/ClubAdmin/AddChant_Audio",c[0]),{mutate:o,isLoading:s}=(0,i.useMutation)((({id:e,values:t})=>e?r.apiService.updateOne(e,t):m.createOne(t)));return l.createElement(f,{initialValues:a,onSubmit:n=>{const l=new Date(n.duration_MSC),i=new Date(n.startTime_ms),r=6e4*parseInt(i.getMinutes()+"")+1e3*parseInt(i.getSeconds()+""),c=6e4*parseInt(l.getMinutes()+"")+1e3*parseInt(l.getSeconds()+""),m=Object.assign(Object.assign({},n),{clubId:1,adminId:12,chantId:e,duration_MSC:c,startTime_ms:r});o({id:a?a.id:void 0,values:m},{onSuccess:t})},isPending:s})}},91947:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(27378),l=a(96740),i=a(33996),r=a(8531);a(56762);function c(){const e=new r.Z;return n.createElement(i.Xg,{module:e},n.createElement(i.Xg.Breadcrumb,null),n.createElement(i.Xg.Panel,null,n.createElement(i.s_.Header,{hasNew:!0,hasSearch:!0}),n.createElement(i.s_.ListView,{module:e,tableScroll:{x:2e3,y:475}})))}var m=a(38056),o=a(53988),s=a(3487),u=a(89425),d=a(54370);var h=()=>{const e=(0,l.s0)(),{flag_id:t}=(0,l.UO)(),[a,c]=(0,n.useState)({}),h=new r.Z,p=h.title[0],E=`${d.AW.replace("*","")}`,f=[...h.breadcrumbItems,{path:"",breadcrumbName:t?`${m.ZP.t("Global.Update")} ${p} - ${t}`:`${m.ZP.t("Global.New")} ${p}`}];(0,n.useEffect)((()=>{t&&h.apiService.getOne(+t).then((e=>{c(e)}))}),[]);return n.createElement(i.Xg,{module:h},n.createElement(i.Xg.Breadcrumb,{routes:f}),n.createElement(i.Xg.Panel,null,n.createElement(s.j,null,n.createElement("div",{className:"header"},n.createElement(o.Z,{onClose:()=>e(`/admin${E}`),items:f})),n.createElement(u.default,{singleData:a,onCallback:()=>{e(-1)}}))))};function p(){return n.createElement(l.Z5,null,n.createElement(l.AW,{path:"",element:n.createElement(c,null)}),n.createElement(l.AW,{path:"/upsert",element:n.createElement(h,null)}),n.createElement(l.AW,{path:"/upsert/:flag_id",element:n.createElement(h,null)}))}},3487:function(e,t,a){a.d(t,{j:function(){return n}});const n=a(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`},54370:function(e){e.exports=JSON.parse('{"AW":"/Chants/Audio/*"}')}}]);