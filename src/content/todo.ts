/**
 * Explicit marker for content that is missing and must be supplied by the owner.
 *
 * - In development (or when NEXT_PUBLIC_SHOW_TODOS=true) a visible dashed "TODO" chip is rendered.
 * - In production the field is simply omitted, so visitors never see placeholder text.
 * - `npm run content:todos` lists every marker in src/content.
 *
 * Never replace a todo() with invented dates, metrics or links — only with confirmed facts.
 */
export type Todo = { readonly __todo: true; readonly note: string };

export const todo = (note: string): Todo => ({ __todo: true, note });

export const isTodo = (value: unknown): value is Todo =>
  typeof value === "object" && value !== null && (value as Todo).__todo === true;

/** A value that is either known or explicitly marked as missing. */
export type Maybe<T> = T | Todo;

export const showTodos =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_TODOS === "true";
