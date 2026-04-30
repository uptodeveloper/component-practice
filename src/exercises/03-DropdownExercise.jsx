import { useState } from "react";

const menuItems = ["마이페이지", "주문내역", "로그아웃"];

export default function DropdownExercise() {
  // 메뉴 열기 였을 때, 보여야 되고
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuHandle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const buttonText = isOpen ? "메뉴 닫기" : "메뉴 열기";
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-bold">03. 드롭다운</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        버튼을 누르면 메뉴가 열리고, 다시 누르면 닫히도록 구현해보세요.
      </p>

      <TodoList
        items={[
          "열림 여부를 boolean state로 만든다.",
          "버튼 클릭 시 열림 / 닫힘을 반대로 바꾼다.",
          "열려 있을 때만 메뉴 목록을 보여준다.",
          "버튼 텍스트도 상태에 따라 바꾼다.",
        ]}
      />

      <div className="mt-5 rounded-md border border-slate-200 p-4">
        <button
          onClick={toggleMenuHandle}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold"
        >
          {buttonText}
        </button>
        {isOpen && (
          <ul className="mt-3 rounded-md border border-slate-200">
            {menuItems.map((item) => (
              <li key={item} className="px-4 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
        )}
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
