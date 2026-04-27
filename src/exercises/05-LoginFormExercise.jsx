export default function LoginFormExercise() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-bold">05. 로그인 폼</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        이메일과 비밀번호를 입력해야 로그인 버튼이 활성화되도록
        구현해보세요.
      </p>

      <TodoList
        items={[
          "form state를 만든다.",
          "두 input의 value와 onChange를 연결한다.",
          "이메일과 비밀번호가 모두 있을 때만 버튼을 활성화한다.",
          "로그인 버튼 클릭 후 입력값을 보여준다.",
          "조건 이름을 읽기 좋게 붙인다.",
        ]}
      />

      <div className="mt-5 grid gap-3">
        <input
          placeholder="이메일"
          className="rounded-md border border-slate-300 px-3 py-2"
        />
        <input
          placeholder="비밀번호"
          type="password"
          className="rounded-md border border-slate-300 px-3 py-2"
        />
        <button className="rounded-md border border-slate-900 bg-slate-900 px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-200 disabled:text-slate-500">
          로그인
        </button>
      </div>

      <p className="mt-4 text-sm text-slate-700">아직 제출 전</p>
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
