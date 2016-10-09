var selectProjects = {
	go: function() {
		var _this = this;

		$('#all').click(function(e) {
			_this.show(e, this.id);
		});

		$('#css').click(function(e) {
			_this.show(e, this.id);
		});

		$('#javascript').click(function(e) {
			_this.show(e, this.id);
		});

		$('#utility').click(function(e) {
			_this.show(e, this.id);
		});

		$('#wordpress').click(function(e) {
			_this.show(e, this.id);
		});
	},

	show: function(e, id) {
		e.preventDefault();

		if (id == 'all') {
			$('#tools article').removeClass('hide');
		} else {
			$('#tools article').addClass('hide');
			$('#tools article.' + id).removeClass('hide');
		}

		$('.selector a').removeClass('selected');
		$('#' + id).addClass('selected');
	}
};

$(document).ready(function() {
	selectProjects.go();
});