import { isTodo, showTodos, type Todo } from "@/content/todo";

/** Renders a dashed TODO chip in development; renders nothing in production. */
export function TodoMark({ value, className }: { value: unknown; className?: string }) {
  if (!showTodos || !isTodo(value)) return null;
  return (
    <span className={`todo-mark ${className ?? ""}`} title={(value as Todo).note}>
      TODO · {(value as Todo).note}
    </span>
  );
}
