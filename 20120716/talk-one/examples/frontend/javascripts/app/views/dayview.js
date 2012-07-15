define([
	'backbone'
  , 'text!views/dayview.html'
  , 'models/calory'
  , 'brokers/calory'
],
function (Backbone
	    , html
	    , Calory
	    , CaloryBroker) {

	var DayView = Backbone.View.extend({

		events: {
			'click .add'  : 'add',
			'submit form' : 'save'
		},

		initialize : function () {
			this.collection.on('add', this.render, this);
			this.collection.on('reset', this.render, this);
		},

		render : function () {
			var amount = 0;

			this.collection.each(function (calory) {
				amount = amount + parseInt(calory.get('count'));
			});

			this.$el.html(_.template(html, {
				calories: this.collection.toJSON(),
				amount: amount
			}));
		},

		add : function (e) {
			e.preventDefault();

			var $link = $(e.target)
			  , $form = $('form', this.$el);

			if ($form.is(':visible')) {
				$form.slideUp();
			} else {
				$form.slideDown();
			}
		},

		save : function (e) {
			e.preventDefault();

			var that = this
			  , $form = this.$el.find('form')
			  , $inputProduct = $('input[name="product"]', $form)
			  , $inputCount = $('input[name="count"]', $form)
			  , data
			  , calory;

			calory = new Calory({
				product: $inputProduct.val(),
				count: $inputCount.val()
			});

			CaloryBroker.save(calory)
			    .done(function () {
			    	that.collection.add(calory);
			    });
		}

	});

	return DayView;
});