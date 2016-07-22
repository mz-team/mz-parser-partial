# mz-parser-partial
## 1、使用方法


```javascript
fis.match('*.tpl', {
    parser: [
      fis.plugin('partial',{type:'ssi'}),
      function (content, file, settings) {
        return content.replace(/\{\{(?:(\w+)\:)?([\.\w]+)\}\}/g, function(str, func, arg ){
          if(func){
            return fis[func](arg);
          }else{
            return fis.get(arg);
          }
        });
    }]
});
```

## 2、实现原理

默认输出
```
<{ssi file="{{namespace}}/page/_partial/header.tpl"}>
```

配置为 ssi 后输出
```
<!--#include virtual="{{urlprefix}}/_partial/header.html"-->
```