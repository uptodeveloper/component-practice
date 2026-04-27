import { useState } from "react";
import AccordionExercise from "./exercises/07-AccordionExercise.jsx";
import CategorySelectExercise from "./exercises/04-CategorySelectExercise.jsx";
import CounterExercise from "./exercises/02-CounterExercise.jsx";
import DropdownExercise from "./exercises/03-DropdownExercise.jsx";
import LikeToggleExercise from "./exercises/01-LikeToggleExercise.jsx";
import LoginFormExercise from "./exercises/05-LoginFormExercise.jsx";
import TabMenuExercise from "./exercises/06-TabMenuExercise.jsx";
import TodoListExercise from "./exercises/08-TodoListExercise.jsx";

const exercises = [
  {
    id: "01-like-toggle",
    level: "01",
    label: "좋아요 토글",
    description: "boolean state와 조건부 텍스트",
    component: <LikeToggleExercise />,
  },
  {
    id: "02-counter",
    level: "02",
    label: "카운터",
    description: "숫자 state와 증가 / 감소",
    component: <CounterExercise />,
  },
  {
    id: "03-dropdown",
    level: "03",
    label: "드롭다운",
    description: "열림 / 닫힘 상태",
    component: <DropdownExercise />,
  },
  {
    id: "04-category-select",
    level: "04",
    label: "카테고리 선택",
    description: "선택 / 다시 클릭하면 해제",
    component: <CategorySelectExercise />,
  },
  {
    id: "05-login-form",
    level: "05",
    label: "로그인 폼",
    description: "입력값, 버튼 활성화, 제출 후 표시",
    component: <LoginFormExercise />,
  },
  {
    id: "06-tab-menu",
    level: "06",
    label: "탭 메뉴",
    description: "선택 id와 현재 데이터 찾기",
    component: <TabMenuExercise />,
  },
  {
    id: "07-accordion",
    level: "07",
    label: "FAQ 아코디언",
    description: "하나만 열고, 다시 클릭하면 닫기",
    component: <AccordionExercise />,
  },
  {
    id: "08-todo-list",
    level: "08",
    label: "투두 리스트",
    description: "배열 state 추가 / 삭제 / 토글",
    component: <TodoListExercise />,
  },
];

export default function App() {
  const [selectedExerciseId, setSelectedExerciseId] =
    useState("01-like-toggle");

  const selectedExercise = exercises.find(
    (exercise) => exercise.id === selectedExerciseId,
  );

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6">
          <p className="text-sm font-semibold text-slate-500">
            Component Practice
          </p>
          <h1 className="mt-2 text-3xl font-bold">난이도별 구현 연습장</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            작은 컴포넌트부터 리스트를 다루는 컴포넌트까지 순서대로
            연습합니다. 각 문제는 정답 없이 뼈대와 TODO만 제공합니다.
          </p>
        </header>

        <nav className="mb-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {exercises.map((exercise) => {
            const isSelected = exercise.id === selectedExerciseId;

            return (
              <button
                key={exercise.id}
                onClick={() => setSelectedExerciseId(exercise.id)}
                className={`rounded-md border px-4 py-3 text-left text-sm transition ${
                  isSelected
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                <span className="text-xs font-semibold opacity-70">
                  {exercise.level}
                </span>
                <span className="mt-1 block font-semibold">
                  {exercise.label}
                </span>
                <span className="mt-1 block text-xs opacity-75">
                  {exercise.description}
                </span>
              </button>
            );
          })}
        </nav>

        {selectedExercise.component}
      </div>
    </main>
  );
}
