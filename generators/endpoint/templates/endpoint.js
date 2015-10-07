"use strict";

<% if (operations.GET) { %>
function _get(req, res) {
    // Replace the below line with your logic
    res.send("Called GET on <%= name %>");
};
<% } %>

<% if (operations.PUT) { %>
function _put(req, res) {
    // Replace the below line with your logic
    res.send("Called PUT on <%= name %>");
};
<% } %>

<% if (operations.POST) { %>
function _post(req, res) {
    // Replace the below line with your logic
    res.send("Called POST on <%= name %>");
};
<% } %>

<% if (operations.DELETE) { %>
function _delete(req, res) {
    // Replace the below line with your logic
    res.send("Called DELETE on <%= name %>");
};
<% } %>

module.exports = {
    <% if (operations.GET) { %>get: _get,<% } %>
    <% if (operations.PUT) { %>put: _put,<% } %>
    <% if (operations.POST) { %>post: _post,<% } %>
    <% if (operations.DELETE) { %>delete: _delete<% } %>
};
