import { useState } from "react";

const categories = ["audio", "device", "keyboard"];

export default function CategorySelectExercise() {
  //카테고리 선택 해제
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectedCategoryText = selectedCategory ?? "선택 없음";

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevSelectedCategory) =>
      prevSelectedCategory === category ? null : category,
    );
  };
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-bold">04. 카테고리 선택 / 해제</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        하나의 카테고리만 선택하고, 같은 카테고리를 다시 클릭하면 선택을
        해제하도록 구현해보세요.
      </p>

      <TodoList
        items={[
          "선택된 카테고리 state를 만든다.",
          "버튼 클릭 시 해당 카테고리를 선택한다.",
          "같은 카테고리를 다시 클릭하면 선택을 해제한다.",
          "선택된 버튼만 스타일을 다르게 보여준다.",
          "선택된 값이 없으면 '선택 없음'을 보여준다.",
        ]}
      />

      <div className="mt-5 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 ${selectedCategory === category ? "bg-blue-500" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-700">
        현재 선택:{selectedCategoryText}
      </p>
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
