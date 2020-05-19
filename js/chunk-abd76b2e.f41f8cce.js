(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abd76b2e"],{"34f2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"srdf-container"},[a("div",{staticClass:"browse-data-container"},[a("Row",{staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"title"},[e._v("\n               Omics Sample to Data Annotation Tool\n            ")]),a("div",{staticClass:"upload"},[a("a",{staticClass:"file",attrs:{href:"javascript:;"}},[a("i",{staticClass:"ivu-icon ivu-icon-ios-cloud-upload-outline"}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("Upload SRDF File")]),a("input",{attrs:{type:"file",name:"",id:"file"},on:{change:e.readFile}})])])]),a("Row",[a("selfTable",{attrs:{name:e.name,height:e.tableHeight,loading:e.loading,columns:e.sampleCol,addedCol:e.addedCol,data:e.sampleData}}),a("div",{staticClass:"button-wrapper"},[a("div",{staticClass:"search-button"},[a("Button",{attrs:{type:"primary"},on:{click:e.back}},[e._v("Back")])],1),e.sampleCol.length>0&&e.sampleData.length>0?a("div",{staticClass:"search-button right"},[a("Button",{attrs:{type:"primary"},on:{click:e.annotationSave}},[e._v("Save")]),a("Button",{attrs:{type:"primary"},on:{click:e.annotationConfirm}},[e._v("Confirm")])],1):e._e()])],1)],1)])},o=[],i=(a("4917"),a("ac6a"),a("7f7f"),a("a481"),a("28a5"),a("96cf"),a("3b8d")),s=a("1ea4"),r=(a("3e8f"),{name:"srdf",data:function(){return{name:"Omics SDRF Reader",loading:!1,sampleCol:[],sampleData:[],keyList:[],addedCol:[],screenHeight:document.documentElement.clientHeight,getTableDataAPI:this.$store.state.baseApiURL+"/properties/getPropertiesFromText",getAddedColAPI:this.$store.state.baseApiURL+"/properties/getProperties"}},beforeRouteUpdate:function(e,t,a){},components:{selfTable:s["a"]},methods:{readFile:function(e){var t=this,a=e.target.files||e.dataTransfer.files;if(a.length){var n=new FileReader;n.readAsText(a[0],"UTF-8"),this.loading=!0,console.log("重置数据"),this.sampleCol=[],this.sampleData=[],this.keyList=[],this.addedCol=[],n.onload=function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(n){var o,i,s,r,l,c,d,u,m,p,f,h,g,b,y;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:o=n.currentTarget.result.split("\n"),a.t0=regeneratorRuntime.keys(o);case 2:if((a.t1=a.t0()).done){a.next=23;break}if(i=a.t1.value,0!=i){a.next=17;break}for(l in s=o[i].split("\t"),r="",s)r+=s[l]+", ";return c=r.slice(0,r.length-2),d={sdrf_properties:c},a.next=12,t.$http.get(t.getTableDataAPI,{params:d});case 12:for(m in u=a.sent,t.sampleCol.push({name:"#",key:"index",required:!0}),u.body)p={name:u.body[m].freeTextColumn,key:u.body[m].freeTextColumn.replace(/\s+/g,"")+Math.floor(1e5+9e5*Math.random()),required:!1,typeNode:u.body[m].templateColumn.typeNode?u.body[m].templateColumn.typeNode:"",ontologyTerm:u.body[m].templateColumn.ontologyTerm?u.body[m].templateColumn.ontologyTerm:null,searchable:u.body[m].templateColumn.searchable},t.keyList.push(p),t.sampleCol.push(p);a.next=21;break;case 17:for(g in f=o[i].split("\t"),h={},f)h.index=parseInt(i),h[t.keyList[g].key]={value:f[g],checked:!0,active:!1,required:t.keyList[g].required};t.sampleData.push(h);case 21:a.next=2;break;case 23:return console.log("重新赋值sampleDaTA"),a.next=26,t.$http.get(t.getAddedColAPI);case 26:for(y in b=a.sent,b.body)b.body[y].key=b.body[y].name.replace(/\s+/g,"")+Math.floor(1e5+9e5*Math.random()),b.body[y].required=!1;t.addedCol=b.body,t.loading=!1,e.target.value="";case 31:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},setClassName:function(e){return e.match("sourcename")||e.match("characteristics")?"blue":e.match("assayname")||e.match("comment")?"green":"red"},back:function(){var e=this,t=localStorage.getItem("projectAccession");t?this.$Modal.confirm({title:"Uncompleted Annotaion",content:"<p>Do you want to delete the uncompleted annotation?</p>",onOk:function(){localStorage.clear(),e.$router.push({name:"index"})},onCancel:function(){}}):this.$router.push({name:"index"})},annotationConfirm:function(){var e=this;this.$Modal.confirm({title:"Finish Annotation",content:"<p>Do you want to submit this annotation?</p>",onOk:function(){e.$bus.$emit("annotation-confirm")},onCancel:function(){}})},annotationSave:function(){this.$bus.$emit("annotation-save")},getTableData:function(){console.log("getTableData sampleCol",this.sampleCol);var e={sdrf_properties:"characteristics[organism], characteristics[organism part]"};this.$http.get(this.getTableDataAPI,{params:e}).then((function(e){console.log(e.body)}),(function(e){this.fileListLoading=!1}))}},watch:{},computed:{tableHeight:function(){var e=300;return this.screenHeight-180-138-20-55-32>e?this.screenHeight-180-138-20-55-32:e}},mounted:function(){var e=this;window.onresize=function(){e.screenHeight=document.documentElement.clientHeight}},created:function(){},beforeDestroy:function(){}}),l=r,c=(a("79a3"),a("7e7f"),a("2877")),d=Object(c["a"])(l,n,o,!1,null,"105e36cf",null);t["default"]=d.exports},"3e8f":function(e,t){},"79a3":function(e,t,a){"use strict";var n=a("a8d5"),o=a.n(n);o.a},"7e7f":function(e,t,a){"use strict";var n=a("da2a"),o=a.n(n);o.a},a8d5:function(e,t,a){},da2a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-abd76b2e.f41f8cce.js.map