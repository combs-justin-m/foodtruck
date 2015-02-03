define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["client/scripts/admin/auth/auth.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "has-error";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title text-center\">Admin Login</h3>\n  </div>\n  <div class=\"panel-body\">\n\n    <div class=\"form-group password-input ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n      <div class=\"input-group \">\n        <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-default btn-login\" type=\"button\">Login</button>\n        </span>\n      </div>\n      <div class=\"help-block\">"
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "</div>\n    </div>\n\n    <br>\n\n    <a class=\"pull-right\" href=\"#\">Forgot Password</a>\n  </div>\n</div>";
},"useData":true});

return this["JST"];

});