export default function CounterExercise() {
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
        <button className="rounded-md border border-slate-300 px-4 py-2 font-semibold">
          -
        </button>
        <span className="text-xl font-bold">0</span>
        <button className="rounded-md border border-slate-300 px-4 py-2 font-semibold">
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
