EmployeeManager.Views.Employee = Backbone.View.extend({
  tagName: "li",

  className: "media col-md-6 col-lg-6",

  template: _.template($("#tpl-contact").html()),

  events: { "click .delete-employee": "onClickDelete" },

  initialize: function() {
    this.listenTo(this.model, "remove", this.remove);
  },

  render: function() {
    var html = this.template(this.model.toJSON());    
    this.$el.html(html);
    return this;
  },

  onClickDelete: function(e) {
    e.preventDefault();
    this.model.collection.remove(this.model);
  }
});
