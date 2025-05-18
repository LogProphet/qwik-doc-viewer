import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const count = useSignal(0);

  return (
    <div>
      <h1>Counter Example</h1>
      <p>This demonstrates Qwik's reactivity in action!</p>

      <div style="margin: 2rem 0; padding: 2rem; border: 1px solid var(--color-border); border-radius: 0.5rem;">
        <h2>Count: {count.value}</h2>
        <div style="margin-top: 1rem;">
          <button
            class="btn btn-primary"
            onClick$={() => count.value++}
            style="margin-right: 1rem;"
          >
            Increment
          </button>
          <button
            class="btn"
            onClick$={() => count.value--}
          >
            Decrement
          </button>
        </div>
      </div>

      <h3>What's happening here?</h3>
      <ul style="margin-left: 2rem; margin-top: 1rem;">
        <li>The count is stored in a Qwik signal</li>
        <li>When you click buttons, only the count updates</li>
        <li>No full re-render of the entire component</li>
        <li>This is Qwik's fine-grained reactivity!</li>
      </ul>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Counter Example - Qwik Showcase",
  meta: [
    {
      name: "description",
      content: "Interactive counter demonstrating Qwik's fine-grained reactivity",
    },
  ],
};
