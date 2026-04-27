const tabs = [
  {
    id: "description",
    label: "상품 설명",
    title: "웨이브폼 프로 맥스",
    content: "장시간 작업과 이동이 많은 사용자를 위한 무선 헤드폰입니다.",
  },
  {
    id: "review",
    label: "리뷰",
    title: "구매자 리뷰",
    content: "착용감이 좋고 배터리가 오래간다는 평가가 많습니다.",
  },
  {
    id: "shipping",
    label: "배송 안내",
    title: "배송 정보",
    content: "평일 오후 2시 이전 주문은 당일 출고됩니다.",
  },
];

export default function TabMenuExercise() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-bold">06. 탭 메뉴</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        탭 버튼을 누르면 선택된 탭의 제목과 내용이 보이도록 구현해보세요.
      </p>

      <TodoList
        items={[
          "선택된 탭 id를 state로 만든다.",
          "처음 선택값은 description으로 시작한다.",
          "버튼 클릭 시 선택된 탭 id를 바꾼다.",
          "tabs.find(...)로 현재 선택된 탭 데이터를 찾는다.",
          "선택된 버튼만 스타일을 다르게 보여준다.",
        ]}
      />

      <div className="mt-5 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <article className="mt-4 rounded-md border border-slate-200 p-4">
        <h3 className="font-bold">아직 구현 전</h3>
        <p className="mt-2 text-sm text-slate-600">
          선택된 탭의 내용이 여기에 표시되어야 합니다.
        </p>
      </article>
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
