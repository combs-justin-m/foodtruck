define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["client/scripts/components/auth/auth.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " panel-success ";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  return " panel-danger  ";
  },"6":function(depth0,helpers,partials,data) {
  return "\n                          panel-primary ";
  },"8":function(depth0,helpers,partials,data) {
  return " Success! ";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.program(13, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"11":function(depth0,helpers,partials,data) {
  return " error ";
  },"13":function(depth0,helpers,partials,data) {
  return " Admin Login ";
  },"15":function(depth0,helpers,partials,data) {
  return "has-error";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"panel \n            ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.success : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title text-center\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.success : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    </h3>\n  </div>\n  <div class=\"panel-body\">\n\n    <form>\n      <div class=\"form-group ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <label class=\"sr-only\" for=\"auth-username\">Username</label>\n        <input id=\"auth-username\" type=\"text\" class=\"form-control\" \n               name=\"username\" value=\""
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Username\">\n      </div>\n      <div class=\"form-group ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n        <label class=\"sr-only\" for=\"auth-password\">Password</label>\n        <input id=\"auth-password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n      </div>\n      <button class=\"btn btn-success btn-block btn-login\" type=\"button\">Login</button>\n    </form\n\n    <br>\n    <br>\n\n    <a class=\"pull-right\" href=\"#\">Forgot Password</a>\n  </div>\n</div>";
},"useData":true});

return this["JST"];

});