modulex.add("event-base",["modulex-util"],function(t,r,n){var e,o,i,a,u,s=t("modulex-util");e=function(t){function r(t){if(t.indexOf(".")<0)return[t,""];var r=t.match(/([^.]+)?(\..+)?$/),n=r[1],e=[n],o=r[2];return o?(o=o.split(".").sort(),e.push(o.join("."))):e.push(""),e}t={};var n,e,o=s;return t={splitAndRun:n=function(t,r){return o.isArray(t)?(o.each(t,r),void 0):(t=o.trim(t),-1===t.indexOf(" ")?r(t):o.each(t.split(/\s+/),r),void 0)},normalizeParam:function(t,n,e){var i=n||{};i="function"==typeof n?{fn:n,context:e}:o.merge(i);var a=r(t);return t=a[0],i.groups=a[1],i.type=t,i},batchForType:function(t,r){var e=o.makeArray(arguments),i=e[2+r];i&&o.isObject(i)?o.each(i,function(n,o){var i=[].concat(e);i.splice(0,2),i[r]=o,i[r+1]=n,t.apply(null,i)}):n(i,function(n){var o=[].concat(e);o.splice(0,2),o[r]=n,t.apply(null,o)})},fillGroupsForEvent:function(t,n){var o=r(t),i=o[1];i&&(i=e(i),n._ksGroups=i),n.type=o[0]},getGroupsRe:e=function(t){return new RegExp(t.split(".").join(".*\\.")+"(?:\\.|$)")}}}(),o=function(t){function r(t){this.config=t||{}}t={};var n,e=s;return r.prototype={constructor:r,equals:function(t){var r=this;return!!e.reduce(r.keys,function(n,e){return n&&r.config[e]===t.config[e]},1)},simpleNotify:function(t,r){var n,e=this,o=e.config;return n=o.fn.call(o.context||r.currentTarget,t,o.data),o.once&&r.removeObserver(e),n},notifyInternal:function(t,r){var n=this.simpleNotify(t,r);return n===!1&&t.halt(),n},notify:function(t,r){var e=this,o=e.config,i=t._ksGroups;return!i||o.groups&&o.groups.match(i)?e.notifyInternal(t,r):n}},t=r}(),i=function(t){function r(t){var r=this;r.currentTarget=null,n.mix(r,t),r.reset()}t={};var n=s;return r.prototype={constructor:r,hasObserver:function(){return!!this.observers.length},reset:function(){var t=this;t.observers=[]},removeObserver:function(t){var r,n=this,e=n.observers,o=e.length;for(r=0;o>r;r++)if(e[r]===t){e.splice(r,1);break}n.checkMemory()},checkMemory:function(){},findObserver:function(t){var r,n=this.observers;for(r=n.length-1;r>=0;--r)if(t.equals(n[r]))return r;return-1}},t=r}(),a=function(t){function r(){var t=this;t.timeStamp=i.now(),t.target=n,t.currentTarget=n}t={};var n,e=function(){return!1},o=function(){return!0},i=s;return r.prototype={isEventObject:1,constructor:r,isDefaultPrevented:e,isPropagationStopped:e,isImmediatePropagationStopped:e,preventDefault:function(){this.isDefaultPrevented=o},stopPropagation:function(){this.isPropagationStopped=o},stopImmediatePropagation:function(){var t=this;t.isImmediatePropagationStopped=o,t.stopPropagation()},halt:function(t){var r=this;t?r.stopImmediatePropagation():r.stopPropagation(),r.preventDefault()}},t=r}(),u=function(t){t={};var r=e,n=o,u=i;return t={version:"1.0.0",Utils:r,Object:a,Observer:n,Observable:u}}(),n.exports=u});