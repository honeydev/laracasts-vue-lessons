Vue.component('task-list', {
	template: `
		<div>
			<task v-for="task in tasks">{{ task.task }}</task>
		</div>
		`,	
	data() {
		return {
			tasks: [
				{task: "go to the store", completed: true},
                {task: "Finish screencast", completed: false},
                {task: "Clear inbox", completed: false}
			]
		};
	}
});

Vue.component('task', {
	template: "<li><slot></slot></li>"
});

let vue = new Vue({
	el: "#root"
});