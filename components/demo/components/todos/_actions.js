export const ACTION = {
	ADD: "TODOS_ADD",
	DELETE: "TODOS_DELETE",
	LOAD: "TODOS_LOAD",
	TOGGLE: "TODOS_TOGGLE",
	UPDATE: "TODOS_UPDATE",
};

export function addTodo(
	id,
	label,
	description
) {
	return {
		id: id,
		type: ACTION.ADD,
		label: label,
		description: description,
	};
};

export function deleteTodo(
	index
) {
	return {
		type: ACTION.DELETE,
		index: index
	};
};

export function loadTodos(
	todos
) {
	return {
		type: ACTION.LOAD,
		todos: todos
	};
}

export function toggleTodo(
	index
) {
	return {
		type: ACTION.TOGGLE
	};
};

export function updateTodo(
	index,
	label,
	description
) {
	return {
		type: ACTION.UPDATE,
		index: index,
		label: label,
		description: description
	};
};