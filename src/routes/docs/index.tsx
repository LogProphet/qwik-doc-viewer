import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Qwik Documentation</h1>
      <p class="mt-4">
        Welcome to the Qwik documentation! This showcases Qwik's powerful features
        through interactive examples and detailed explanations.
      </p>

      <div class="mt-8">
        <h2>What you'll learn:</h2>
        <ul class="mt-4" style="margin-left: 2rem;">
          <li>Qwik's resumability model</li>
          <li>Fine-grained reactivity</li>
          <li>Progressive loading</li>
          <li>Server-side rendering benefits</li>
        </ul>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Documentation - Qwik Showcase",
  meta: [
    {
      name: "description",
      content: "Learn about Qwik's powerful features through interactive documentation",
    },
  ],
};
