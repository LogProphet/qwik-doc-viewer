import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Examples = component$(() => {

  return (
    <>
      <h1>Examples</h1>
      <p>Qwik has a rich set of examples to help you get started with Qwik.</p>
      <p>These examples demonstrate how to use Qwik to build a variety of applications.</p>
      <Link href="/docs/examples/counter">Counter</Link>
    </>
  );
});
