// generated by scripts/icon.js

<% icons.forEach(function(t, i) { %>export { default as <%= t.componentName %> } from './<%= t.type %>'
<% }); %>
// end
