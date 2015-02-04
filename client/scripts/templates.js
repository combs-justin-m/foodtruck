define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["client/scripts/components/auth/auth.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "panel-primary";
  },"3":function(depth0,helpers,partials,data) {
  return "panel-danger";
  },"5":function(depth0,helpers,partials,data) {
  return "Admin Login";
  },"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)));
  },"9":function(depth0,helpers,partials,data) {
  return "has-error";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"panel ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title text-center\">";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"unless","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h3>\n  </div>\n  <div class=\"panel-body\">\n\n    <form>\n      <div class=\"form-group ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <label class=\"sr-only\" for=\"auth-username\">Username</label>\n        <input id=\"auth-username\" type=\"text\" class=\"form-control\" \n               name=\"username\" value=\""
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Username\">\n      </div>\n      <div class=\"form-group ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n        <label class=\"sr-only\" for=\"auth-password\">Password</label>\n        <input id=\"auth-password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n      </div>\n      <button class=\"btn btn-success btn-block btn-login\" type=\"button\">Login</button>\n    </form\n\n    <br>\n    <br>\n\n    <a class=\"pull-right\" href=\"#\">Forgot Password</a>\n  </div>\n</div>";
},"useData":true});

return this["JST"];

});