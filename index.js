/**
 * Parser 阶段插件接口
 * @param  {string} content     文件内容
 * @param  {File}   file        fis 的 File 对象 [fis3/lib/file.js]
 * @param  {object} settings    插件配置属性
 * @return {string}             处理后的文件内容
 */
module.exports = function (content, file, settings) {
  var type = settings.type;
  return content.replace(/\{\{(?:(\w+)\:)?([\.\w]+)\}\}/g, function (str, func, arg) {
    if (func !== 'partial') return str;

    if (type === 'ssi') {
      return '<!--#include virtual="{{urlprefix}}/_partial/' + arg + '.html"-->';
    } else {
      return '<{ssi file="{{namespace}}/page/_partial/' + arg + '.tpl"}>';
    }
  });
}