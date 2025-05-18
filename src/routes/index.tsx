import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container py-4">
      <h1>Welcome to Qwik Documentation Showcase</h1>
      <p class="mt-4">
        This site demonstrates Qwik's powerful features through an interactive documentation experience.
      </p>
      <div class="mt-4">
        <Link href="/docs" class="btn btn-primary">Get Started</Link>
        <Link href="/docs/examples/counter" class="btn" style="margin-left: 1rem;">See Counter Example</Link>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Documentation Showcase",
  meta: [
    {
      name: "description",
      content: "A comprehensive showcase of Qwik's capabilities through documentation",
    },
  ],
};
