(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(29),l=a.n(r),o=a(48),c=a(22);var s=function(){return i.a.createElement("h2",{id:"output"}," Home Page")},m=a(9),u=a(10),d=a(12),h=a(11),g=a(13),p=(a(58),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),f=(a(59),function(e){return i.a.createElement("div",{class:"container-fluid"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-sm-3"},i.a.createElement("img",{class:"card-img-top img-responsive",alt:e.name,src:e.image}),i.a.createElement("h5",null,e.name),i.a.createElement("ul",null,i.a.createElement("li",null,e.address),i.a.createElement("li",null,e.phone),i.a.createElement("li",null,i.a.createElement("a",{href:e.url,class:"btn btn-primary"},"Website")))))))}),v=a(40),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={cards:v},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(p,null,this.state.cards.map(function(e){return i.a.createElement(f,{key:e.id,id:e.id,image:e.image,name:e.name,address:e.address,phone:e.phone,url:e.url})})))}}]),t}(n.Component),w=a(17);function y(e){return i.a.createElement("div",{className:"card",style:{width:"10rem",height:"10rem"}},i.a.createElement("img",{src:e.image,className:"card-img-top",alt:"RestauurantImage"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("p",{className:"card-text"},e.text)))}var b=a(25),k=a.n(b),C=function(e,t,a){return console.log("Exec API"),k.a.get("/maps/api/place/nearbysearch/json?location="+e+","+t+"&radius=5000&type=restaurant&keyword="+a+"&key=AIzaSyB-Yiy5ruk26yFaZWv6RyR5CqZ5W7z1Pjk")},N=function(e,t){return k.a.get("/maps/api/place/nearbysearch/json?location="+e+","+t+"&radius=5000&type=local_government_office&key=AIzaSyB-Yiy5ruk26yFaZWv6RyR5CqZ5W7z1Pjk")},S=(i.a.Component,function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={selectedRadioButton:"",restaurantApiData:[],mapMode:"currentLocationMarker"},a.handleRestaurantRadioClick=a.handleRestaurantRadioClick.bind(Object(w.a)(a)),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"handleRestaurantRadioClick",value:function(e){this.setState({selectedRadioButton:e.target.value}),console.log("inside event radiovalue"+this.state.selectedRadioButton)}},{key:"componentDidUpdate",value:function(){C(47.84039612005699,-122.17650237833391,this.state.selectedRadioButton).then(function(e){return console.log("api data",e.data)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;this.state.selectedRadioButton,this.state.mapMode,this.state.mapMode;console.log("radiovalue"+this.state.selectedRadioButton);console.log("restaurant type executing");var t=["Asian","Barbecue","Breakfast","Cafe","Chinese","European","Fast food","Hamburger","Ice cream","Indian","Indonesian","Irish","italian","Jamaican","Japanese","Korean","Mediterranean","Mexican","Philippine","Portuguese","Sausage","Seafood","Soul food","Spanish Cuisine","Steak","Street food","Sushi","Tapas","Thai","Turkish","Vegetarian","Vietnamese"].map(function(t){return i.a.createElement("div",null,i.a.createElement("input",{type:"radio",id:t,name:t,value:t,checked:e.state.selectedRadioButton===t,onClick:e.handleRestaurantRadioClick}),t)});return i.a.createElement("div",null,i.a.createElement("div",null,t),";")}}]),t}(i.a.Component)),O=a(41),I=a.n(O),j=a(42),x=a.n(j),R=a(43),A=a.n(R),M=a(44),W=a.n(M),B=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={RestaurnatIcon:I.a,GroceryIcon:x.a,ImmigrationIcon:A.a,HealthCareIcon:W.a,text:"Select a category you need",mode:"categoryOptions"},e.handleRestaurantClick=e.handleRestaurantClick.bind(Object(w.a)(e)),e.handleImmigrationOfficeClick=e.handleImmigrationOfficeClick.bind(Object(w.a)(e)),e.handleHealthCareClick=e.handleHealthCareClick.bind(Object(w.a)(e)),e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"handleRestaurantClick",value:function(){this.setState({mode:"Restaurant",text:"Choose Restaurant Type"})}},{key:"handleImmigrationOfficeClick",value:function(){this.setState({mode:"ImmigrationOffices",text:"Click on the markers for nearby immigration office details"}),this.props.onClick("immigrationOffices")}},{key:"handleHealthCareClick",value:function(){this.setState({mode:"HealthCare",text:"Click on the markers for nearby HealthCare details"}),this.props.onClick("HealthCare")}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e="categoryOptions"===this.state.mode,t="Restaurant"===this.state.mode,a="ImmigrationOffices"===this.state.mode,n="HealthCare"===this.state.mode;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},this.state.text),e&&i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("a",{href:"#",onClick:this.handleRestaurantClick},i.a.createElement(y,{text:"Restaurants nearby",image:this.state.RestaurnatIcon}))),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("a",{href:"#"},i.a.createElement(y,{text:"Grocery nearby",image:this.state.GroceryIcon})))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("a",{href:"#",onClick:this.handleImmigrationOfficeClick},i.a.createElement(y,{text:"Immigration offices nearby",image:this.state.ImmigrationIcon}))),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("a",{href:"#",onClick:this.handleHealthCareClick},i.a.createElement(y,{text:"HealthCare nearby",image:this.state.HealthCareIcon}))))),t&&i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("form",null,i.a.createElement(S,null)))),a&&i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("h1",null," "))),n&&i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("h1",null," "))))}}]),t}(n.Component);a(79);var H=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).getLocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e.showPosition):document.getElementById("map").innerHTML="Geolocation is not supported by this browser."},e.showPosition=function(t){var a=t.coords.latitude,n=t.coords.longitude;e.setState({lat:a,long:n});var i=new window.google.maps.Map(document.getElementById("map"),{center:{lat:e.state.lat,lng:e.state.long},zoom:13,mapTypeId:"roadmap"});console.log("lat"+e.state.lat),console.log("long"+e.state.long);new window.google.maps.Marker({map:i,position:{lat:e.state.lat,lng:e.state.long}})},e.state={lat:0,long:0,categorySelectionMode:"",immigrationOfficesApiData:[],healthCareApiData:[]},e.changecategorySelectionMode=e.changecategorySelectionMode.bind(Object(w.a)(e)),e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;console.log("exec immigration event",this.state.immigrationOfficesApiData);var t=new window.google.maps.Map(document.getElementById("map"),{center:{lat:this.state.lat,lng:this.state.long},zoom:13,mapTypeId:"roadmap"}),a=!0,n=!1,i=void 0;try{for(var r,l=this.state.immigrationOfficesApiData[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var o=r.value;new window.google.maps.Marker({map:t,position:{lat:o.geometry.location.lat,lng:o.geometry.location.lng}}).addListener("click",function(a){e.createInfoWindow(a,t)})}}catch(c){n=!0,i=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw i}}}},{key:"createInfoWindow",value:function(e,t){console.log("inside infowindow"),new window.google.maps.InfoWindow({content:'<div id="content"><div id="siteNotice"></div><div id="bodyContent"><div> <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">View Details</a> </div><div> <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">Get Directions</a> </div></div></div>',position:{lat:e.latLng.lat(),lng:e.latLng.lng()}}).open(t)}},{key:"changecategorySelectionMode",value:function(e){var t=this;console.log("inside changecategorySelectionMode"),N(this.state.lat,this.state.long).then(function(e){return t.setState({immigrationOfficesApiData:e.data.results})}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.getLocation()}},{key:"render",value:function(){return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-4"},i.a.createElement(B,{onClick:this.changecategorySelectionMode})),i.a.createElement("div",{className:"col-sm-8"},i.a.createElement("div",{className:"card",id:"map"}))))}}]),t}(n.Component),P=(a(80),function(e){return i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement("div",null),i.a.createElement("h2",null,"Imerge"),i.a.createElement("div",null,i.a.createElement("ul",null,i.a.createElement("li",null," ",i.a.createElement("a",{href:"/"},"Home")),i.a.createElement("li",null," ",i.a.createElement("a",{href:"/Agencies"},"Agencies")),i.a.createElement("li",null," ",i.a.createElement("a",{href:"/Maps"},"Maps")),i.a.createElement("li",null," ",i.a.createElement("a",{href:"/News"},"News")),i.a.createElement("li",null," ",i.a.createElement("a",{href:"/Translator"},"Translator"))))))}),D=a(45),T=a.n(D);var z=function(e){var t=e.icon,a=e.title,n=e.children;return i.a.createElement("div",{className:"card mt-4"},i.a.createElement("div",{className:"card-header"},i.a.createElement("h3",null,i.a.createElement("strong",null,i.a.createElement("i",{className:"fa fa-".concat(t),"aria-hidden":"true"})," ",a))),i.a.createElement("div",{className:"card-body"},n))},L=(a(81),function(e){var t=e.children;return i.a.createElement("ul",{className:"list-group"},t)});function G(e){var t=e.children;return i.a.createElement("li",{className:"list-group-item"},t)}function _(e){var t=e.fluid,a=e.children;return i.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function J(e){var t=e.fluid,a=e.children;return i.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function U(e){var t=e.size,a=e.children;return i.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(82);var F=function(e){var t=e.author,a=e.title,n=e.description,r=e.url;return i.a.createElement(G,null,i.a.createElement(J,{className:"flex-wrap-reverse"},i.a.createElement(U,{size:"md-8"},i.a.createElement("h4",{className:"font-italic"},a),t&&i.a.createElement("h6",{className:"font-italic"},t)),i.a.createElement(U,{size:"md-4"},i.a.createElement("div",{className:"btn-container"},i.a.createElement("a",{className:"btn btn-light",target:"_blank",rel:"noopener noreferrer",href:r},"View")))),i.a.createElement(J,null,i.a.createElement(U,{size:"md-12"},i.a.createElement("p",{className:"font-italic small"},"Description: ",n))))},V=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={news:["stuff"]},a.valueOf=function(e){return e&&null!==e?e:"unknown"},a.getNews=function(){T.a.getNews({q:"immigration",sources:"",domains:"",from:"2019-04-20",to:"2019-05-13",language:"en",sortBy:"relevancy",page:2}).then(function(e){a.setState({news:e.articles}),console.log("this is headline news: ",e)}).catch(function(){return a.setState({news:[],message:"No new headlines"})})},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getNews()}},{key:"render",value:function(){return i.a.createElement(_,null,i.a.createElement(J,null,i.a.createElement(U,{size:"md-12"},i.a.createElement("h1",{className:"text-center"},i.a.createElement("strong",null,"News Headlines"))),i.a.createElement(U,{size:"md-12"})),i.a.createElement(J,null,i.a.createElement(U,{size:"md-12"},i.a.createElement(z,{title:"Results"},this.state.news.length?i.a.createElement(L,null,this.state.news.map(function(e,t){return i.a.createElement(F,{key:t,author:e.author,title:e.title,description:e.description,url:e.url,source:e.source})})):i.a.createElement("h2",{className:"text-center"},this.state.message)," "))))}}]),t}(n.Component);a(83);var Y=function(e){return i.a.createElement("iframe",{src:e.translateSrc})};var q=function(e){return i.a.createElement("div",null,i.a.createElement("h2",null,"Translator Page"),i.a.createElement(Y,{translateSrc:"https://translate.google.com/"}))},K=a(51),Z=a(31);K.a.use(Z.a).init({resources:{en:{translation:{"Welcome to Imerge":"Bienvenido a Imerge"}}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});var X=function(){var e=Object(Z.b)().t;return console.log(e("Welcome to Imerge")),i.a.createElement(o.a,null,i.a.createElement("div",null,i.a.createElement(P,null),i.a.createElement(c.c,null,i.a.createElement(c.a,{exact:!0,path:"/",component:s}),i.a.createElement(c.a,{exact:!0,path:"/Agencies",component:E}),i.a.createElement(c.a,{exact:!0,path:"/Maps",component:H}),i.a.createElement(c.a,{exact:!0,path:"/News",component:V}),i.a.createElement(c.a,{exact:!0,path:"/Translator",component:q}))))};l.a.render(i.a.createElement(X,null),document.getElementById("root"))},40:function(e){e.exports=[{id:1,name:"US Citizenship and Immigration Services",address:"2506, 12500 Tukwila International Blvd, Seattle, WA 98168",phone:"(800) 375-52830",url:"https://egov.uscis.gov/office-locator/#/",image:"https://www.uscis.gov/sites/default/files/ocomm/en/images/hp/socialmed_icons/facebook_image.jpg"},{id:2,name:"International Rescue Committee",address:"1200 S 192nd St, SeaTac, WA 98148",phone:"(206) 623-2105",url:"https://www.rescue.org/",image:"https://help.rescue.org/files/irc/irc-logo.png"},{id:3,name:"Center for MultiCulture Health",address:"1120 East Terrace St., Suite 200, Seattle, WA 98122",phone:"206-461-6910",url:"http://cschc.org/",image:"http://cschc.org/images/home/logo_lg.gif"},{id:4,name:"Immigration Resources Portal",address:"Office of the Lt. Governor, 220 Legislative Building, 416 Sid Snyder Ave. S.W. Olympia, Washington",phone:"Phone: (360) 786-7700",url:"http://www.ltgov.wa.gov/immigration-resources-portal/",image:"http://vannw.org/wp-content/uploads/2017/01/washington-state-symbol.png"},{id:5,name:"International Families Justice Coalition",address:"1001 Fourth Avenue, Suite 4400, Seattle, WA 98154",phone:"206-849-6885",url:"https://www.ifjc-us.org/news-and-events/",image:"https://www.ifjc-us.org/wp-content/uploads/2018/08/ifjc-log.png"},{id:6,name:"Leadership without Borders",address:"3931 Brooklyn Avenue NE, Box 355650, Seattle, Washington 98105",phone:"Phone:(206)-685-6301",url:"http://depts.washington.edu/ecc/lwb/for-parents-families/immigrantion-rights-information/",image:"https://www.logolynx.com/images/logolynx/75/752320f624c1ad692848ae92c48de838.gif"},{id:7,name:"One America",address:"1225 S. Weller Street, Suite 430, Seattle, WA 98144",phone:"206-723-2203",url:"https://weareoneamerica.org/",image:"http://oneamerica2.wpengine.com//wp-content/uploads/2017/07/navbar-logo.svg"},{id:8,name:"Migration Policy Institute",address:"1400 16th Street NW, Suite 300, Washington, DC  20036",phone:"202-266-1940",url:"https://www.migrationpolicy.org/",image:"https://www.migrationpolicy.org/sites/all/themes/MPI/logo.png"},{id:9,name:"Northwest Immigrant Rights Project",address:"615 2nd Avenue, Suite 400, Seattle, WA 98104",phone:"206-587-4009",url:"https://www.nwirp.org/get-help/",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSayd2AToYW0mYJvnKaOYH1XE-XKRPM7r-3ynBcwolQAKSur2gA"},{id:10,name:"Neighborhood House",address:"1225 South Weller Street, Suite 510, Seattle, WA 98144",phone:"206-461-8430",url:"https://nhwa.org/contactus/index.php",image:"https://nhwa.org/images/logo_neighborhoodhouse.gif"}]},41:function(e,t,a){e.exports=a.p+"static/media/Restaurant.e61807dc.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/grocery-icon.193ff50a.png"},43:function(e,t,a){e.exports=a.p+"static/media/immigration-icon.b3bb92e4.png"},44:function(e,t,a){e.exports=a.p+"static/media/hospital-icon.72e3e78e.png"},45:function(e,t){},52:function(e,t,a){e.exports=a(105)},58:function(e,t,a){},59:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.09d1b104.chunk.js.map