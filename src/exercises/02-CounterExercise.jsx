import { useState } from "react";

export default function CounterExercise() {
  // 초기값 0
  const [count, setCount] = useState(0);
  // count === 0 일때, 아래로 x
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (count === 0) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-bold">02. 카운터</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        숫자를 증가 / 감소시키고, 0 아래로 내려가지 않게 만들어보세요.
      </p>

      <TodoList
        items={[
          "count state를 만든다.",
          "+ 버튼 클릭 시 1 증가시킨다.",
          "- 버튼 클릭 시 1 감소시킨다.",
          "count가 0 아래로 내려가지 않게 막는다.",
        ]}
      />

      <div className="mt-5 flex items-center gap-3 rounded-md border border-slate-200 p-4">
        <button
          onClick={handleDecrement}
          className="rounded-md border border-slate-300 px-4 py-2 font-semibold"
        >
          -
        </button>
        <span className="text-xl font-bold">{count}</span>
        <button
          onClick={handleIncrement}
          className="rounded-md border border-slate-300 px-4 py-2 font-semibold"
        >
          +
        </button>
      </div>
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
