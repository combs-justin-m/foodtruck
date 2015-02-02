define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["client/scripts/admin/login.html"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title text-center\">Admin Login</h3>\n  </div>\n  <div class=\"panel-body\">\n\n    <div class=\"input-group\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"button\">Login</button>\n      </span>\n    </div>\n\n    <br>\n\n    <a class=\"pull-right\" href=\"#\">Forgot Password</a>\n  </div>\n</div>";
  },"useData":true});

return this["JST"];

});