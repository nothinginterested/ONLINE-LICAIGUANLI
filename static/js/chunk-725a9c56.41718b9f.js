(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-725a9c56"],{ab7e:function(e,t,n){"use strict";var o=n("fd7e"),l=n.n(o);l.a},b201:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,multiple:"",limit:1,"on-exceed":e.handleExceed,"file-list":e.fileList}},[n("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传excel文件，且不超过500kb")])],1)},l=[],a=(n("7f7f"),{data:function(){return{fileList:[]}},methods:{handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))}}}),i=a,c=(n("ab7e"),n("2877")),s=Object(c["a"])(i,o,l,!1,null,null,null);t["default"]=s.exports},fd7e:function(e,t,n){}}]);