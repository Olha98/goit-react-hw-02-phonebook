(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(e,t,n){e.exports={cat:"Form_cat__u5RDh","mouse-anim":"Form_mouse-anim__1F0TB",formContainer:"Form_formContainer__Utm_9"}},,,,,,,function(e,t,n){},function(e,t,n){e.exports={list:"ListPeople_list__3BJi3"}},function(e,t,n){e.exports={contactsTitle:"FillterForm_contactsTitle__1h6RM"}},function(e,t,n){e.exports={containerUser:"ContactForm_containerUser__dN1Mc"}},,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),r=n.n(o),l=n(2),i=n(5),s=n(6),m=n(7),u=n(13),f=n(12),h=n(1),b=n.n(h),d=n(22),p=n(8),g=n.n(p),C=function(e){var t=e.name,n=e.number,a=e.id,o=e.deliteContact;return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:g.a.listItem},t,": ",n,c.a.createElement("button",{type:"button",onClick:o,name:a},"Delite")))},E=n(9),v=n.n(E),_=function(e){var t=e.contacts,n=e.deliteContact;return console.log("contacts",t),c.a.createElement("ul",{className:v.a.list},t.map((function(e){return c.a.createElement(C,Object.assign({key:Object(d.a)()},e,{deliteContact:n}))})))},y=n(10),S=n.n(y),F=function(e){var t=e.filter,n=e.onChange;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Contacts"),c.a.createElement("label",null,c.a.createElement("p",{className:S.a.contactsTitle},"Find contacts by name"),c.a.createElement("input",{type:"text",name:"filter",value:t,onChange:n})))},O=n(11),N=n.n(O),j=function(e){var t=e.name,n=e.number,a=e.handleChange;return c.a.createElement("div",{className:N.a.containerUser},c.a.createElement("label",null,c.a.createElement("p",null,"Name"),c.a.createElement("input",{type:"text",name:"name",onChange:a,value:t})),c.a.createElement("label",null,c.a.createElement("p",null,"Number"),c.a.createElement("input",{type:"text",name:"number",onChange:a,value:n})),c.a.createElement("button",{type:"submit"},"Add contacts"))},k=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],name:"",number:"",filter:""},e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(i.a)({},n,a))},e.getFilterValue=function(t){e.setState({filter:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number;console.log(e.state),e.addContact({id:Object(d.a)(),name:a,number:c}),e.setState({name:"",number:"",filter:""})},e.addContact=function(t){e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[t])}}))},e.getInfo=function(){var t=e.state,n=t.contacts,a=t.filter;return a?n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})):n},e.deliteContac=function(t){var n=t.target.name,a=e.state.contacts.filter((function(e){return e.id!==n}));e.setState({contacts:Object(l.a)(a)})},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts)),console.log(this.state)}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.filter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:b.a.cat}),c.a.createElement("form",{onSubmit:this.handleSubmit,className:b.a.formContainer},c.a.createElement("h2",null,"Phonebook"),c.a.createElement(j,{handleChange:this.handleChange,name:t,number:n}),c.a.createElement(F,{filter:a,onChange:this.handleChange}),""!==a&&c.a.createElement(_,{contacts:this.getInfo(),deliteContact:this.deliteContac})))}}]),n}(a.Component);n(20);r.a.render(c.a.createElement(k,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.4c0f8e0b.chunk.js.map