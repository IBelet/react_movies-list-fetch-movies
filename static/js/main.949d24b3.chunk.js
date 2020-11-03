(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(5),l=a.n(i),s=(a(13),a(7)),m=a(1),r=(a(14),a(15),a(16),function(e){var t=e.Title,a=e.Plot,n=e.Poster,i=e.imdbID;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("figure",{className:"image is-4by3"},c.a.createElement("img",{src:n,alt:"Film logo"}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("figure",{className:"image is-48x48"},c.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),c.a.createElement("div",{className:"media-content"},c.a.createElement("p",{className:"title is-8"},t))),c.a.createElement("div",{className:"content"},a,c.a.createElement("br",null),c.a.createElement("a",{href:"https://www.imdb.com/title/".concat(i,"/")},"IMDB"))))});r.defaultProps={Title:"",Plot:"",Poster:"",imdbID:""};var o=function(e){var t=e.movies,a=void 0===t?[]:t;return c.a.createElement("div",{className:"movies"},a.map((function(e){return c.a.createElement(r,Object.assign({key:e.imdbID},e))})))},d=a(6),u=a.n(d);a(17);function v(e){return t=e,fetch("".concat("https://www.omdbapi.com/?apikey=87aae092&t=").concat(t)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}));var t}var E=function(e){var t=e.addMovie,a=e.movies,i=Object(n.useState)(""),l=Object(m.a)(i,2),s=l[0],o=l[1],d=Object(n.useState)(!1),E=Object(m.a)(d,2),b=E[0],f=E[1],p=Object(n.useState)({}),N=Object(m.a)(p,2),h=N[0],g=N[1],j=Object(n.useState)(""),O=Object(m.a)(j,2),w=O[0],y=O[1],I=Object(n.useState)(!0),k=Object(m.a)(I,2),D=k[0],P=k[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"find-movie"},c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:u()({input:!0,"is-danger":w}),value:s,onChange:function(e){o(e.target.value),y("")}})),w&&c.a.createElement("p",{className:"help is-danger"},w)),c.a.createElement("div",{className:"field is-grouped"},c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"button",className:"button is-light",onClick:function(){v(s).then((function(e){"False"!==e.Response?(g(e),f(!0),P(!1)):y(e.Error)}))}},"Find a movie")),c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"button",className:"button is-primary",onClick:function(){o(""),f(!1),P(!0),a.some((function(e){return h.imdbID===e.imdbID}))?y("You have already added this movie"):t(h)},disabled:D},"Add to the list")))),b&&c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"title"},"Preview"),c.a.createElement(r,h)))},b=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],i=t[1];return c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page-content"},0===a.length?c.a.createElement("h1",null,"It's empty, so add your favourite movies! "):c.a.createElement(o,{movies:a})),c.a.createElement("div",{className:"sidebar"},c.a.createElement(E,{addMovie:function(e){i([].concat(Object(s.a)(a),[e]))},movies:a})))};l.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.949d24b3.chunk.js.map