!function(t,i,n){"use strict";t.fn.employersForm=function(i){return t(this).each(function(i,e){function a(t,i){i&&i.submittedAnalytics||""!==c.val()&&(t.preventDefault(),r(),s())}function r(){var t=JSON.stringify(u());n.localStorage.setItem("employerAnalyticsProperties",t)}function s(){o.trigger("submit",{submittedAnalytics:!0})}function u(){var i=o.find("#name").val().split(" "),n={firstName:i.shift(),lastName:i.join(" ")};return t.each(o.serializeArray(),function(t,i){n[i.name]=i.value}),n}var o=t(e),c=o.find("input[type=email]");o.on("submit",a)})}}(jQuery,analytics,window);