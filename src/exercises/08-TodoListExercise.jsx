import { useState } from "react";

export default function TodoListExercise() {
  //입력값 저장할 상태
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  //입력 값 가져올 핸들러
  const handleOnChangeTodoInputValue = (e) => {
    setTodo(e.target.value);
  };
  // 입렵 값 추가시 배열로 모으는 핸들러 (빈값 방지)
  const handleOnClickAddTodo = () => {
    if (todo.trim() === "") return;
    const newTodo = { id: Date.now(), content: todo, isComplete: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodo("");
  };
  // 완료/ 미완료 토글
  const handleToggleIsComplete = (todoSelectedId) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === todoSelectedId
          ? { ...prevTodo, isComplete: !prevTodo.isComplete }
          : prevTodo,
      ),
    );
  };

  // 삭제
  const handleOnclickDeleteTodo = (todoSelectedId) => {
    return setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todoSelectedId),
    );
  };

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-bold">08. 투두 리스트</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        입력값을 배열 state에 추가하고, 완료 토글과 삭제까지 구현해보세요.
      </p>

      <TodoList
        items={[
          "input value state를 만든다.",
          "todos 배열 state를 만든다.",
          "추가 버튼 클릭 시 새 todo를 배열에 추가한다.",
          "todo를 클릭하면 완료 상태를 토글한다.",
          "삭제 버튼 클릭 시 해당 todo를 제거한다.",
          "빈 값은 추가되지 않게 막는다.",
        ]}
      />

      <div className="mt-5 flex gap-2">
        <input
          value={todo}
          onChange={handleOnChangeTodoInputValue}
          placeholder="할 일 입력"
          className="min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-2"
        />
        <button
          onClick={handleOnClickAddTodo}
          className="rounded-md border border-slate-900 bg-slate-900 px-4 py-2 font-semibold text-white"
        >
          추가
        </button>
      </div>

      <ul className="mt-4 rounded-md border border-slate-200 p-4 text-sm text-slate-600">
        {todos.map((i) => {
          return (
            <li key={i.id}>
              {i.content}
              <button onClick={() => handleToggleIsComplete(i.id)}>
                {i.isComplete ? "완료" : "미완료"}
              </button>
              <button onClick={() => handleOnclickDeleteTodo(i.id)}>
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function TodoList({ items }) {
  return (
    <div className="mt-5 rounded-md border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm font-semibold text-slate-700">TODO</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
