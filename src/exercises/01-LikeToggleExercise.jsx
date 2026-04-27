export default function LikeToggleExercise() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-bold">01. 좋아요 토글</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        버튼을 누르면 좋아요 상태가 켜지고, 다시 누르면 꺼지도록
        구현해보세요.
      </p>

      <TodoList
        items={[
          "boolean state를 만든다.",
          "버튼 클릭 시 true / false를 반대로 바꾼다.",
          "현재 상태 텍스트를 보여준다.",
          "버튼 텍스트도 상태에 따라 바꾼다.",
        ]}
      />

      <div className="mt-5 rounded-md border border-slate-200 p-4">
        <p className="text-sm text-slate-600">현재 상태: 좋아요 취소</p>
        <button className="mt-3 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold">
          좋아요
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
