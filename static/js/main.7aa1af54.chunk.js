(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{42:function(e,t,n){},50:function(e,t,n){},68:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(33),r=n.n(c),s=n(9),o=n(2),l=(n(42),n(1));var j=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(s.b,{to:"/",children:"Home"}),Object(l.jsx)(s.b,{to:"/about/:id",children:"About"})]})},d=n(20),u=n.n(d),m=n(35),b=n(12),v=n(13),h=n(15),O=n(14),x=(n(50),n(36)),p=n.n(x);n(68);var g=function(e){var t=e.id,n=e.title,i=e.year,a=e.summary,c=e.rating,r=e.cover,o=e.genres;return Object(l.jsx)(s.b,{to:{pathname:"/movie_detail/".concat(t),state:{title:n,year:i,summary:a,rating:c,cover:r,genres:o}},children:Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("h3",{className:"title",children:n}),Object(l.jsxs)("div",{className:"movie_",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:r,alt:n}),Object(l.jsx)("pre",{children:i}),Object(l.jsx)("ul",{className:"genres",children:o.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))})]}),Object(l.jsxs)("div",{className:"summary",children:[a.slice(0,300),"..."]})]})]})})},f=n.p+"static/media/logo.73b70a30.png",y=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(e){var i;return Object(b.a)(this,n),(i=t.call(this,e)).state={loading:!0,movies:[]},i}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,this.setState({movies:n,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){console.log("now rendering");var e=this.state,t=e.movies,n=e.loading;return Object(l.jsx)("div",{className:"container",children:n?Object(l.jsxs)("div",{className:"load_container",children:[Object(l.jsx)("img",{className:"logo",src:f,alt:"Loading..."}),Object(l.jsx)("h3",{children:"Now Loading"})]}):Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(g,{id:e.id,title:e.title,year:e.year,summary:e.summary,rating:e.rating,cover:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(i.Component);var _=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Hi there!"})})},N=n(37),k=n.n(N),w=(n(79),function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(e){var i;Object(b.a)(this,n),(i=t.call(this,e)).SearchTrailer=function(e){e+=" trailer",k()({key:"AIzaSyB2aVQcLHEhqND2x_bQhnj4sWBQN84MiJ8",term:e},(function(e){console.log(e[0].snippet.title),i.setState({movie_trailer:e[0].id.videoId})}))},console.log(e.location.state.title),i.state={movie_trailer:null};var a=e.location.state.title;return i.SearchTrailer(a),i}return Object(v.a)(n,[{key:"componentDidMount",value:function(){console.log("did it!")}},{key:"render",value:function(){var e="https://youtube.com/embed/".concat(this.state.movie_trailer);return Object(l.jsxs)("div",{className:"detail_container",children:[Object(l.jsx)("div",{className:"trailer_",children:Object(l.jsx)("iframe",{className:"video__",title:this.state.movie_trailer,src:e})}),Object(l.jsx)("input",{type:"button"})]})}}]),n}(i.Component));n(80);var S=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(l.jsx)(o.a,{path:"/about",component:_}),Object(l.jsx)(o.a,{path:"/movie_detail",component:w})]})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.7aa1af54.chunk.js.map