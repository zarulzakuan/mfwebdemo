(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"1sqi":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class o{}var i=e("pMnS"),u=e("MKJQ"),a=e("sZkV"),s=e("TSSN"),r=e("s7LF"),b=e("mrSG"),g=e("ej43");class d{constructor(n,l,e,t,o){this.router=n,this.navCtrl=l,this.authService=e,this.loadingController=t,this.alertController=o}ngOnInit(){}register(){return b.__awaiter(this,void 0,void 0,(function*(){let n={displayName:this.name};return yield this.loadingController.create({message:"Please wait ...",spinner:"circles"}).then(l=>{l.present().then(()=>{this.authService.RegisterUser(this.email,this.password).then(e=>{this.authService.updateProfile(n).then(n=>{this.authService.addInfoDetail({alamat:this.alamat,email:this.email,maxpesakit:this.maxpesakit,nama:this.name,phone:"0"+this.phone}).subscribe(n=>{l.dismiss(),1==n.success&&this.presentAlertSuccess("Successfully created user!")},n=>{l.dismiss(),this.presentAlert(n.message)})})},n=>{l.dismiss(),this.presentAlert(n.message)})})})}))}presentAlertSuccess(n){return b.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alertController.create({header:"",subHeader:"",message:n,buttons:[{text:"OK",handler:()=>{this.navCtrl.navigateRoot("/login")}}]});yield l.present()}))}presentAlert(n){return b.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alertController.create({header:"Oops!",subHeader:"",message:n,buttons:["OK"]});yield l.present()}))}login(){this.navCtrl.navigateRoot("/login")}}var c=e("iInd"),p=t.ob({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#ffffff;--padding-start:2rem;--padding-end:2rem;--padding-top:2rem;--padding-bottom:2rem}ion-button[_ngcontent-%COMP%]{margin-top:1.5rem}.welcome[_ngcontent-%COMP%]{color:var(--ion-color-primary);line-height:4pt}.welcome[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:700}.welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:11pt;color:#8b939e;text-align:center}.main-container[_ngcontent-%COMP%]{-webkit-box-pack:center;justify-content:center;height:100%;-webkit-box-pack:space-evenly;justify-content:space-evenly}.icon[_ngcontent-%COMP%]{width:12rem;margin:auto;display:block}ion-title[_ngcontent-%COMP%]{font-weight:600;text-align:end;margin:2em .5em 0 0}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:700;color:var(--ion-color-title);margin-bottom:1rem}ion-item[_ngcontent-%COMP%]{--inner-padding-end:0}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{box-shadow:none!important;border-radius:6pt!important;--padding-top:0.7rem;--padding-bottom:0.7rem;--padding-start:1rem;--padding-end:1rem;--icon-color:#508eff;--placeholder-color:rgba(0, 0, 0, 0.6);--background:#e5edfa}.input-help[_ngcontent-%COMP%]{font-size:10pt;font-weight:700;margin-bottom:2rem;text-align:right;color:var(--ion-color-text)}.text[_ngcontent-%COMP%]{font-size:11pt;margin-top:1rem;margin-bottom:1rem;color:var(--ion-color-text)}.text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-weight:700;padding-left:.2rem}.mt2[_ngcontent-%COMP%]{margin-top:2rem}.item-interactive.ion-valid[_ngcontent-%COMP%]{--highlight-background:var(--ion-color-primary)}@media (max-device-height:568px),handheld and (orientation:portrait){.img-container[_ngcontent-%COMP%]{margin-bottom:2rem}ion-item[_ngcontent-%COMP%]{margin-bottom:.5rem;--inner-padding-end:0}ion-button[_ngcontent-%COMP%]{margin-top:2rem!important}input[_ngcontent-%COMP%]{font-size:11pt!important}.input-help[_ngcontent-%COMP%]{margin-bottom:1rem}.text[_ngcontent-%COMP%]{font-size:10pt;margin-bottom:.5rem}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:10pt}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--padding-top:0.5rem;--padding-bottom:0.5rem;--padding-start:1rem;--padding-end:1rem}.welcome[_ngcontent-%COMP%]{line-height:2pt}.welcome[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3rem}.welcome[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:11pt;margin-top:.5rem}.welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:9pt}}"]],data:{}});function m(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,84,"ion-content",[],null,null,null,u.Y,u.m)),t.pb(1,49152,null,0,a.w,[t.h,t.k,t.x],null,null),(n()(),t.qb(2,0,null,0,82,"div",[["class","main-container"]],null,null,null,null,null)),(n()(),t.qb(3,0,null,null,4,"div",[["class","welcome"]],null,null,null,null,null)),(n()(),t.qb(4,0,null,null,0,"img",[["class","icon"],["src","assets/icon/logo.jpg"]],null,null,null,null,null)),(n()(),t.qb(5,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),t.Jb(6,null,["",""])),t.Db(131072,s.j,[s.k,t.h]),(n()(),t.qb(8,0,null,null,69,"div",[["class","ion-text-center"]],null,null,null,null,null)),(n()(),t.qb(9,0,null,null,12,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,u.hb,u.s)),t.pb(10,49152,null,0,a.J,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(11,0,null,0,3,"ion-label",[["mode","ios"],["position","stacked"]],null,null,null,u.ib,u.w)),t.pb(12,49152,null,0,a.P,[t.h,t.k,t.x],{mode:[0,"mode"],position:[1,"position"]},null),(n()(),t.Jb(13,0,["",""])),t.Db(131072,s.j,[s.k,t.h]),(n()(),t.qb(15,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==t.Cb(n,16)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t.Cb(n,16)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(i.name=e)&&o),o}),u.db,u.r)),t.pb(16,16384,null,0,a.Nb,[t.k],null,null),t.Gb(1024,null,r.b,(function(n){return[n]}),[a.Nb]),t.pb(18,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.c,null,[r.e]),t.pb(20,16384,null,0,r.d,[[4,r.c]],null,null),t.pb(21,49152,null,0,a.I,[t.h,t.k,t.x],{type:[0,"type"]},null),(n()(),t.qb(22,0,null,null,12,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,u.hb,u.s)),t.pb(23,49152,null,0,a.J,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(24,0,null,0,3,"ion-label",[["mode","ios"],["position","stacked"]],null,null,null,u.ib,u.w)),t.pb(25,49152,null,0,a.P,[t.h,t.k,t.x],{mode:[0,"mode"],position:[1,"position"]},null),(n()(),t.Jb(26,0,["",""])),t.Db(131072,s.j,[s.k,t.h]),(n()(),t.qb(28,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==t.Cb(n,29)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t.Cb(n,29)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(i.alamat=e)&&o),o}),u.db,u.r)),t.pb(29,16384,null,0,a.Nb,[t.k],null,null),t.Gb(1024,null,r.b,(function(n){return[n]}),[a.Nb]),t.pb(31,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.c,null,[r.e]),t.pb(33,16384,null,0,r.d,[[4,r.c]],null,null),t.pb(34,49152,null,0,a.I,[t.h,t.k,t.x],{type:[0,"type"]},null),(n()(),t.qb(35,0,null,null,12,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,u.hb,u.s)),t.pb(36,49152,null,0,a.J,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(37,0,null,0,3,"ion-label",[["mode","ios"],["position","stacked"]],null,null,null,u.ib,u.w)),t.pb(38,49152,null,0,a.P,[t.h,t.k,t.x],{mode:[0,"mode"],position:[1,"position"]},null),(n()(),t.Jb(39,0,["",""])),t.Db(131072,s.j,[s.k,t.h]),(n()(),t.qb(41,0,null,0,6,"ion-input",[["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==t.Cb(n,42)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t.Cb(n,42)._handleIonChange(e.target)&&o),"ngModelChange"===l&&(o=!1!==(i.phone=e)&&o),o}),u.db,u.r)),t.pb(42,16384,null,0,a.Ib,[t.k],null,null),t.Gb(1024,null,r.b,(function(n){return[n]}),[a.Ib]),t.pb(44,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.c,null,[r.e]),t.pb(46,16384,null,0,r.d,[[4,r.c]],null,null),t.pb(47,49152,null,0,a.I,[t.h,t.k,t.x],{type:[0,"type"]},null),(n()(),t.qb(48,0,null,null,12,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,u.hb,u.s)),t.pb(49,49152,null,0,a.J,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(50,0,null,0,3,"ion-label",[["mode","ios"],["position","stacked"]],null,null,null,u.ib,u.w)),t.pb(51,49152,null,0,a.P,[t.h,t.k,t.x],{mode:[0,"mode"],position:[1,"position"]},null),(n()(),t.Jb(52,0,["",""])),t.Db(131072,s.j,[s.k,t.h]),(n()(),t.qb(54,0,null,0,6,"ion-input",[["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==t.Cb(n,55)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t.Cb(n,55)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(i.email=e)&&o),o}),u.db,u.r)),t.pb(55,16384,null,0,a.Nb,[t.k],null,null),t.Gb(1024,null,r.b,(function(n){return[n]}),[a.Nb]),t.pb(57,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.c,null,[r.e]),t.pb(59,16384,null,0,r.d,[[4,r.c]],null,null),t.pb(60,49152,null,0,a.I,[t.h,t.k,t.x],{type:[0,"type"]},null),(n()(),t.qb(61,0,null,null,12,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,u.hb,u.s)),t.pb(62,49152,null,0,a.J,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(63,0,null,0,3,"ion-label",[["mode","ios"],["position","stacked"]],null,null,null,u.ib,u.w)),t.pb(64,49152,null,0,a.P,[t.h,t.k,t.x],{mode:[0,"mode"],position:[1,"position"]},null),(n()(),t.Jb(65,0,["",""])),t.Db(131072,s.j,[s.k,t.h]),(n()(),t.qb(67,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==t.Cb(n,68)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t.Cb(n,68)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(i.password=e)&&o),o}),u.db,u.r)),t.pb(68,16384,null,0,a.Nb,[t.k],null,null),t.Gb(1024,null,r.b,(function(n){return[n]}),[a.Nb]),t.pb(70,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.c,null,[r.e]),t.pb(72,16384,null,0,r.d,[[4,r.c]],null,null),t.pb(73,49152,null,0,a.I,[t.h,t.k,t.x],{type:[0,"type"]},null),(n()(),t.qb(74,0,null,null,3,"ion-button",[["class","apply-button"],["expand","block"],["mode","ios"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.register()&&t),t}),u.P,u.d)),t.pb(75,49152,null,0,a.m,[t.h,t.k,t.x],{disabled:[0,"disabled"],expand:[1,"expand"],mode:[2,"mode"]},null),(n()(),t.Jb(76,0,[" "," "])),t.Db(131072,s.j,[s.k,t.h]),(n()(),t.qb(78,0,null,null,6,"div",[["class","text ion-text-center"]],null,null,null,null,null)),(n()(),t.qb(79,0,null,null,5,"span",[],null,null,null,null,null)),(n()(),t.Jb(80,null,[""," "])),t.Db(131072,s.j,[s.k,t.h]),(n()(),t.qb(82,0,null,null,2,"a",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.login()&&t),t}),null,null)),(n()(),t.Jb(83,null,[""," "])),t.Db(131072,s.j,[s.k,t.h])],(function(n,l){var e=l.component;n(l,10,0,"none"),n(l,12,0,"ios","stacked"),n(l,18,0,e.name),n(l,21,0,"text"),n(l,23,0,"none"),n(l,25,0,"ios","stacked"),n(l,31,0,e.alamat),n(l,34,0,"text"),n(l,36,0,"none"),n(l,38,0,"ios","stacked"),n(l,44,0,e.phone),n(l,47,0,"number"),n(l,49,0,"none"),n(l,51,0,"ios","stacked"),n(l,57,0,e.email),n(l,60,0,"email"),n(l,62,0,"none"),n(l,64,0,"ios","stacked"),n(l,70,0,e.password),n(l,73,0,"password"),n(l,75,0,""==e.name||""==e.email||""==e.password,"block","ios")}),(function(n,l){n(l,6,0,t.Kb(l,6,0,t.Cb(l,7).transform("sign_up_text"))),n(l,13,0,t.Kb(l,13,0,t.Cb(l,14).transform("fullname"))),n(l,15,0,t.Cb(l,20).ngClassUntouched,t.Cb(l,20).ngClassTouched,t.Cb(l,20).ngClassPristine,t.Cb(l,20).ngClassDirty,t.Cb(l,20).ngClassValid,t.Cb(l,20).ngClassInvalid,t.Cb(l,20).ngClassPending),n(l,26,0,t.Kb(l,26,0,t.Cb(l,27).transform("address"))),n(l,28,0,t.Cb(l,33).ngClassUntouched,t.Cb(l,33).ngClassTouched,t.Cb(l,33).ngClassPristine,t.Cb(l,33).ngClassDirty,t.Cb(l,33).ngClassValid,t.Cb(l,33).ngClassInvalid,t.Cb(l,33).ngClassPending),n(l,39,0,t.Kb(l,39,0,t.Cb(l,40).transform("phone"))),n(l,41,0,t.Cb(l,46).ngClassUntouched,t.Cb(l,46).ngClassTouched,t.Cb(l,46).ngClassPristine,t.Cb(l,46).ngClassDirty,t.Cb(l,46).ngClassValid,t.Cb(l,46).ngClassInvalid,t.Cb(l,46).ngClassPending),n(l,52,0,t.Kb(l,52,0,t.Cb(l,53).transform("email_address"))),n(l,54,0,t.Cb(l,59).ngClassUntouched,t.Cb(l,59).ngClassTouched,t.Cb(l,59).ngClassPristine,t.Cb(l,59).ngClassDirty,t.Cb(l,59).ngClassValid,t.Cb(l,59).ngClassInvalid,t.Cb(l,59).ngClassPending),n(l,65,0,t.Kb(l,65,0,t.Cb(l,66).transform("password"))),n(l,67,0,t.Cb(l,72).ngClassUntouched,t.Cb(l,72).ngClassTouched,t.Cb(l,72).ngClassPristine,t.Cb(l,72).ngClassDirty,t.Cb(l,72).ngClassValid,t.Cb(l,72).ngClassInvalid,t.Cb(l,72).ngClassPending),n(l,76,0,t.Kb(l,76,0,t.Cb(l,77).transform("sign_up"))),n(l,80,0,t.Kb(l,80,0,t.Cb(l,81).transform("have_acc"))),n(l,83,0,t.Kb(l,83,0,t.Cb(l,84).transform("sign_in")))}))}function h(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"app-register",[],null,null,null,m,p)),t.pb(1,114688,null,0,d,[c.m,a.Hb,g.a,a.Fb,a.b],null,null)],(function(n,l){n(l,1,0)}),null)}var C=t.mb("app-register",d,h,{},{},[]),v=e("SVse");class f{}e.d(l,"RegisterPageModuleNgFactory",(function(){return k}));var k=t.nb(o,[],(function(n){return t.zb([t.Ab(512,t.j,t.Y,[[8,[i.a,C]],[3,t.j],t.v]),t.Ab(4608,v.m,v.l,[t.s,[2,v.A]]),t.Ab(4608,r.g,r.g,[]),t.Ab(4608,a.c,a.c,[t.x,t.g]),t.Ab(4608,a.Gb,a.Gb,[a.c,t.j,t.p]),t.Ab(4608,a.Kb,a.Kb,[a.c,t.j,t.p]),t.Ab(1073742336,v.b,v.b,[]),t.Ab(1073742336,s.h,s.h,[]),t.Ab(1073742336,r.f,r.f,[]),t.Ab(1073742336,r.a,r.a,[]),t.Ab(1073742336,a.Db,a.Db,[]),t.Ab(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t.Ab(1073742336,f,f,[]),t.Ab(1073742336,o,o,[]),t.Ab(1024,c.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);