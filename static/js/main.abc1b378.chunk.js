(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s(2),a=s.n(i),c=s(13),o=s.n(c),r=s(4),l=s.n(r),m=s(14),d=s(15),u=s(16),j=s(19),v=s(18),h=s(17),f=s.n(h);s(44);var p=function(e){var t=e.year,s=e.title,i=e.summary,a=e.poster,c=e.genres;return Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:a,alt:s,title:s}),Object(n.jsxs)("div",{className:"movie_data",children:[Object(n.jsx)("h3",{className:"movie_title",children:s}),Object(n.jsx)("h5",{className:"movie_year",children:t}),Object(n.jsx)("ul",{className:"movie_genres",children:c.map((function(e,t){return Object(n.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(n.jsxs)("p",{className:"movie_summary",children:[i.slice(0,180),"..."]})]})]})},b=(s(45),function(e){Object(j.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[],limit:4,offset:1},e._infiniteScroll=function(){var t=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);Math.max(document.documentElement.scrollTop,document.body.scrollTop)+document.documentElement.clientHeight===t&&(setTimeout((function(){e.setState({offset:e.state.offset+1})}),500),e.getMovies())},e.getMovies=Object(m.a)(l.a.mark((function t(){var s,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getMovies(),window.addEventListener("scroll",this._infiniteScroll,!0)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies,i=e.limit,a=e.offset;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(n.jsx)("div",{className:"movies",children:s.slice(0,i+2*a).map((function(e){return Object(n.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.abc1b378.chunk.js.map