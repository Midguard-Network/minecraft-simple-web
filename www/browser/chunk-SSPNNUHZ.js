import{a as X,b as Z,c as ee,d as te,e as ne}from"./chunk-GU4C5A66.js";import"./chunk-XAJVX2A3.js";import"./chunk-QORVXZN2.js";import"./chunk-QNSUH6NR.js";import"./chunk-4PGTP63H.js";import"./chunk-OSWVMQST.js";import"./chunk-HC6MZPB3.js";import"./chunk-UOYVAZDW.js";import"./chunk-FERD25SW.js";import"./chunk-CBQJGW6X.js";import"./chunk-U75BUNB3.js";import"./chunk-MM5QLNJM.js";import"./chunk-72KDLSWN.js";import"./chunk-5OMUW5VI.js";import"./chunk-OBXDPQ3V.js";import"./chunk-OKKM2FCO.js";import"./chunk-MCRJI3T3.js";import"./chunk-QL4XLWS4.js";import"./chunk-DNVHY64Q.js";import{$a as U,C as f,D as u,F,G as $,H as i,I as o,J as c,P as h,Ua as I,Va as S,W as l,Wa as z,Xa as j,Y as m,Ya as W,Za as H,_ as k,_a as _,a as T,ab as A,bb as L,cb as B,db as R,e as P,eb as Y,fb as G,gb as C,h as p,ha as b,hb as J,ib as x,lb as N,nb as V,ob as q,r as s,rb as K,sb as Q,ub as y,v,vb as w,z as g}from"./chunk-DX3DUNKU.js";import"./chunk-MCCWSKCU.js";import"./chunk-AQKELFVF.js";import"./chunk-O7EUVMJ2.js";import"./chunk-RSW4QUPJ.js";import"./chunk-F7XBNY6P.js";import"./chunk-VK3YEIQT.js";import"./chunk-OONLZD66.js";import"./chunk-2M7HLUHN.js";import"./chunk-4U6PRYVA.js";import"./chunk-46RS7FHX.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import{g as O}from"./chunk-AHMUXBFN.js";var E=(()=>{let t=class t{constructor(){this.http=p(b),this.configService=p(w),this.API_URL="https://api.mcstatus.io/v2/status/java",this.serverStatus$=new T(null),this.configService.getConfigObservable().subscribe(r=>{var a,e;(a=r==null?void 0:r.server_info)!=null&&a.ip&&((e=r==null?void 0:r.server_info)!=null&&e.port)&&(console.log("starting server status ping"),this.startServerStatusPing(r.server_info.ip,r.server_info.port))})}pingServerOnce(r,a){return O(this,null,function*(){try{let e=a?`${this.API_URL}/${r}:${a}`:`${this.API_URL}/${r}`,D=yield this.http.get(e).toPromise();return this.serverStatus$.next(D),console.log("ping server status ping",D),D}catch(e){return console.error("Erreur lors du ping du serveur:",e),this.serverStatus$.next(null),null}})}startServerStatusPing(r,a,e=3e4){this.pingInterval&&this.stopServerStatusPing(),this.pingInterval=setInterval(()=>O(this,null,function*(){yield this.pingServerOnce(r,a)}),e),this.pingServerOnce(r,a).then()}stopServerStatusPing(){this.pingInterval&&(clearInterval(this.pingInterval),this.pingInterval=null)}getServerStatusObservable(){return this.serverStatus$.asObservable()}getServerStatus(){return this.serverStatus$.getValue()}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();function le(n,t){n&1&&(i(0,"ion-chip",0),c(1,"ion-icon",2),i(2,"ion-label"),l(3," Online "),o()())}function ae(n,t){n&1&&(i(0,"ion-chip",1),c(1,"ion-icon",3),i(2,"ion-label"),l(3," Offline "),o()())}function se(n,t){if(n&1&&g(0,le,4,0,"ion-chip",0)(1,ae,4,0,"ion-chip",1),n&2){let d=h();u(d.serverInfos.online?0:-1),s(),u(d.serverInfos.online?-1:1)}}var ie=(()=>{let t=class t{constructor(){this.mcUtils=p(E),this.serverInfos={}}ngOnInit(){this.mcUtils.getServerStatusObservable().subscribe(r=>{this.serverInfos=r})}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=v({type:t,selectors:[["app-header-server-status"]],decls:1,vars:1,consts:[["color","success",2,"background","var(--ion-color-secondary)"],["color","danger"],["name","ellipse","color","success",2,"margin-right","5px"],["name","ellipse","color","danger",2,"margin-right","5px"]],template:function(a,e){a&1&&g(0,se,2,2),a&2&&u(e.serverInfos?0:-1)},dependencies:[te,X,Z,ee],encapsulation:2});let n=t;return n})();var ce=(n,t)=>t.id;function de(n,t){n&1&&c(0,"div",5)}function me(n,t){n&1&&c(0,"div",6)}function pe(n,t){n&1&&c(0,"div",7)}function ue(n,t){if(n&1&&(i(0,"p"),l(1),o()),n&2){let d=h().$implicit;s(),m(" ",d.game.name," ")}}function fe(n,t){n&1&&c(0,"ion-icon",9)}function ge(n,t){if(n&1&&(i(0,"ion-item",2)(1,"ion-avatar",4),g(2,de,1,0,"div",5)(3,me,1,0,"div",6)(4,pe,1,0,"div",7),c(5,"ion-img",8),o(),i(6,"ion-label"),l(7),g(8,ue,2,1,"p"),o(),g(9,fe,1,0,"ion-icon",9),o()),n&2){let d=t.$implicit;s(2),u(d.status==="idle"?2:-1),s(),u(d.status==="online"?3:-1),s(),u(d.status==="dnd"?4:-1),s(),f("src",d.avatar_url),s(2),m(" ",d.username.slice(0,15)," "),s(),u(d.game?8:-1),s(),u(d.game?9:-1)}}var oe=(()=>{let t=class t{constructor(){this.http=p(b)}ngOnInit(){this.getDiscordData()}getDiscordData(){this.http.get(`https://discord.com/api/guilds/${this.discordId}/widget.json`).subscribe(r=>{this.discordInfos=r})}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=v({type:t,selectors:[["app-discord-widget"]],inputs:{discordId:"discordId"},decls:15,vars:1,consts:[["name","logo-discord",2,"color","#5662f4"],[2,"overflow-y","scroll","max-height","30vh"],["lines","none"],["fill","outline","expand","block"],["slot","start"],[2,"height","10px","width","10px","border-radius","50%","background","orange","position","absolute","top","10%","left","5%"],[2,"height","10px","width","10px","border-radius","50%","background","#6aff00","position","absolute","top","10%","left","5%"],[2,"height","10px","width","10px","border-radius","50%","background","#ff2600","position","absolute","top","10%","left","5%"],[3,"src"],["name","game-controller"]],template:function(a,e){a&1&&(i(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),c(3,"ion-icon",0),i(4,"b"),l(5," DISCORD "),o()(),i(6,"ion-card-subtitle")(7,"b"),l(8),o(),l(9," members online "),o()(),i(10,"ion-card-content",1),F(11,ge,10,7,"ion-item",2,ce),o(),i(13,"ion-button",3),l(14,"Join the discord"),o()()),a&2&&(s(8),m(" ",e.discordInfos==null?null:e.discordInfos.presence_count," "),s(3),$(e.discordInfos==null?null:e.discordInfos.members))},dependencies:[j,H,U,y,_,W,J,I,C,x,S],styles:["*[_ngcontent-%COMP%]::-webkit-scrollbar{height:10px;width:10px}*[_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:5px;background-color:#dfe9eb1a}*[_ngcontent-%COMP%]::-webkit-scrollbar-track:hover{background-color:#b8c0c21a}*[_ngcontent-%COMP%]::-webkit-scrollbar-track:active{background-color:#b8c0c21a}*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:5px;background-color:var(--ion-color-primary)}*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--ion-color-primary)}*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background-color:var(--ion-color-primary)}"]});let n=t;return n})();var re=()=>[],Ge=(()=>{let t=class t{constructor(){this.configService=p(w),this.mcUtils=p(E),this.serverInfos={}}ngOnInit(){this.mcUtils.getServerStatusObservable().subscribe(r=>{this.serverInfos=r}),this.configService.getConfigObservable().subscribe(r=>{this.config=r})}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=v({type:t,selectors:[["app-welcome"]],decls:60,vars:15,consts:[["slot","start"],["color","secondary","auto-hide","false"],["alt","",3,"src"],["color","secondary"],["slot","end"],["fullscreen","true"],["id","logo"],["alt","",2,"height","20vh",3,"src"],["id","container"],[1,"ion-justify-content-center"],["size-xl","4","size-md","8","size-xs","12"],["color","primary"],[3,"iconSize","socials"],["color","danger",1,"ion-padding"],["name","warning","size","large"],[1,"ion-hide-lg-down",2,"position","fixed","top","20%","right","1%","width","20vw",3,"discordId"],["size-xs","12","size-md","6","size-xl","4",1,"ion-text-center"],["size-xs","12","size-md","6","size-xl","4"],[1,"ion-text-center"]],template:function(a,e){a&1&&(i(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),c(3,"ion-menu-button",1),o(),i(4,"ion-avatar",0),c(5,"ion-img",2),o(),i(6,"ion-title",3)(7,"b"),l(8),o()(),i(9,"ion-buttons",4),c(10,"app-header-server-status"),o()()(),i(11,"ion-content",5)(12,"div",6),c(13,"ion-img",7),o(),i(14,"div",8)(15,"ion-grid")(16,"ion-row",9)(17,"ion-col",10)(18,"h1"),l(19),o(),i(20,"ion-card-subtitle")(21,"b"),l(22),o(),l(23," players currently playing "),o(),i(24,"p"),l(25),o(),i(26,"ion-button",11),l(27),o(),i(28,"p"),c(29,"app-socials-display",12),o(),i(30,"ion-chip",13),c(31,"ion-icon",14),i(32,"ion-label")(33,"h5")(34,"strong"),l(35,"Warning:"),o(),l(36," This website is "),i(37,"b"),l(38,"not an official"),o(),l(39," Mojang or Microsoft product. We are "),i(40,"b"),l(41,"not affiliated"),o(),l(42," with them in any way. "),o()(),c(43,"ion-icon",14),o()()()()(),c(44,"app-discord-widget",15),o(),i(45,"ion-footer")(46,"ion-grid")(47,"ion-row")(48,"ion-col",16)(49,"ion-note"),l(50," \xA9\uFE0F All right reserved to "),i(51,"b"),l(52),o()()(),i(53,"ion-col",17)(54,"ion-card-subtitle",18),l(55," Created with \u{1F497} by "),i(56,"b"),l(57," 3DE Team "),o()()(),i(58,"ion-col",16),c(59,"app-socials-display",12),o()()()()),a&2&&(s(5),f("src",e.config==null||e.config.images==null?null:e.config.images.logo),s(3),m(" ",e.config==null||e.config.app_info==null?null:e.config.app_info.name," "),s(5),f("src",e.config==null||e.config.images==null?null:e.config.images.logo),s(6),m(" Welcome to ",e.config==null||e.config.app_info==null?null:e.config.app_info.name," "),s(3),m(" ",e.serverInfos==null||e.serverInfos.players==null?null:e.serverInfos.players.online," "),s(3),m(" ",e.config==null||e.config.text==null?null:e.config.text.welcomeMessage," "),s(2),m(" ",e.config==null||e.config.server_info==null?null:e.config.server_info.ip," "),s(2),f("iconSize","large")("socials",(e.config==null?null:e.config.socials)||k(13,re)),s(15),f("discordId",e.config==null||e.config.discord_module==null?null:e.config.discord_module.discordID),s(8),m(" ",e.config==null||e.config.app_info==null?null:e.config.app_info.name," "),s(7),f("iconSize","small")("socials",(e.config==null?null:e.config.socials)||k(14,re)))},dependencies:[B,G,Q,z,N,K,C,L,q,Y,S,R,_,ie,ne,V,A,I,x,y,oe],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#logo[_ngcontent-%COMP%]{text-align:center;position:relative;left:0;right:0;top:20%;transform:translateY(-50%)}"]});let n=t;return n})();export{Ge as WelcomePage};