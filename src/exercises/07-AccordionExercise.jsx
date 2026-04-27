const faqs = [
  {
    id: 1,
    question: "배송은 얼마나 걸리나요?",
    answer: "평일 기준 2~3일 걸립니다.",
  },
  {
    id: 2,
    question: "교환은 가능한가요?",
    answer: "수령 후 7일 이내 가능합니다.",
  },
  {
    id: 3,
    question: "해외 배송 되나요?",
    answer: "일부 지역만 가능합니다.",
  },
];

export default function AccordionExercise() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-bold">07. FAQ 아코디언</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        질문을 클릭하면 답변이 열리고, 다시 클릭하면 닫히도록
        구현해보세요. 한 번에 하나의 답변만 열려야 합니다.
      </p>

      <TodoList
        items={[
          "열려 있는 FAQ id를 state로 만든다.",
          "질문 버튼 클릭 시 해당 id를 state에 넣는다.",
          "같은 질문을 다시 클릭하면 닫는다.",
          "현재 FAQ가 열려 있는지 판단하는 조건에 이름을 붙인다.",
          "열려 있는 질문만 답변을 보여준다.",
        ]}
      />

      <div className="mt-5 divide-y divide-slate-200 rounded-md border border-slate-200">
        {faqs.map((faq) => (
          <div key={faq.id}>
            <button className="w-full bg-white px-4 py-3 text-left font-semibold text-slate-900">
              {faq.question}
            </button>
          </div>
        ))}
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
