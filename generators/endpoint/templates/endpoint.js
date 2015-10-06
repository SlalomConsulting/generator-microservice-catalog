"use strict";

<% if (operations.GET) { %>
function get(req, res) {
    // Replace the below line with your logic
    res.send("Called GET on <%= name %>");
};
<% } %>

<% if (operations.PUT) { %>
function put(req, res) {
    // Replace the below line with your logic
    res.send("Called PUT on <%= name %>");
};
<% } %>

<% if (operations.POST) { %>
function post(req, res) {
    // Replace the below line with your logic
    res.send("Called POST on <%= name %>");
};
<% } %>

<% if (operations.DELETE) { %>
function delete(req, res) {
    // Replace the below line with your logic
    res.send("Called DELETE on <%= name %>");
};
<% } %>

module.exports = {
    <% if (operations.GET) { %>get: get,<% } %>
    <% if (operations.PUT) { %>put: put,<% } %>
    <% if (operations.POST) { %>post: post,<% } %>
    <% if (operations.DELETE) { %>delete: delete<% } %>
};
