const pug = require('pug');
import $ from "jquery";

$(function () {
	$('.js-btnMenu').on('click', function () {
		$(this).toggleClass('is-open')
	})
});

// const compiledFunction = pug.compileFile("/index.pug");
//
// console.log(compiledFunction);

pug.compile('index.pug');