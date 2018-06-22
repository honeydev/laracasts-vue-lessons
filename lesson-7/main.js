Vue.component('task', {
	template: '<li><slot>Foobar</slot></li>',
});

new Vue({
	el: "#root"
});