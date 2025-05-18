import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const count = useSignal(0);
  const message = useSignal("No JavaScript loaded yet!");
  const isVisible = useSignal(false);

  // This function will only be sent to the client when the button is clicked
  const expensiveCalculation = $(() => {
    console.log("🚀 JavaScript is now running on the client!");
    // Simulate a complex calculation
    const result = Array.from({ length: 1000 }, (_, i) => i).reduce((a, b) => a + b, 0);
    message.value = `JavaScript loaded! Calculated: ${result}`;
    return result;
  });

  // Another function that loads only when needed
  const toggleVisibility = $(() => {
    isVisible.value = !isVisible.value;
    console.log("🎯 Toggle function executed on client!");
  });

  return (
    <div>
      <h1>Progressive Loading Demo</h1>

      <div style="background: var(--color-bg-secondary); padding: 2rem; border-radius: 0.5rem; margin: 2rem 0;">
        <h2>Instructions:</h2>
        <ol style="margin-left: 2rem; line-height: 1.8;">
          <li><strong>Open your browser's Developer Tools (F12)</strong></li>
          <li><strong>Go to the Network tab</strong></li>
          <li><strong>Filter by JS files</strong> (click "JS" filter)</li>
          <li><strong>Clear the network log</strong> (trash icon)</li>
          <li><strong>Refresh this page</strong></li>
          <li><strong>Notice: ZERO JavaScript files are downloaded!</strong></li>
          <li><strong>Now click the buttons below</strong> and watch JavaScript load on-demand</li>
        </ol>
      </div>

      <div style="border: 2px solid var(--color-primary); padding: 2rem; border-radius: 0.5rem; margin: 2rem 0;">
        <h3>Interactive Elements</h3>
        <p><strong>Current message:</strong> {message.value}</p>
        <p><strong>Current count:</strong> {count.value}</p>

        <div style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
          <button
            class="btn btn-primary"
            onClick$={expensiveCalculation}
          >
            🧮 Run Calculation (loads JS)
          </button>

          <button
            class="btn"
            onClick$={() => count.value++}
          >
            ➕ Increment Counter (loads JS)
          </button>

          <button
            class="btn"
            onClick$={toggleVisibility}
          >
            👁️ Toggle Section (loads JS)
          </button>
        </div>

        {isVisible.value && (
          <div style="margin-top: 1.5rem; padding: 1rem; background: var(--color-bg-elevated); border-radius: 0.375rem;">
            <h4>🎉 This content appeared dynamically!</h4>
            <p>This section is conditionally rendered based on the signal state.</p>
            <p>Even this rendering doesn't require JavaScript download until the button is clicked!</p>
          </div>
        )}
      </div>

      <div style="background: #f0f9ff; border: 1px solid #0284c7; padding: 1.5rem; border-radius: 0.5rem; margin: 2rem 0;">
        <h3>🔍 What You Should Observe:</h3>
        <ul style="margin-left: 2rem; line-height: 1.8;">
          <li><strong>Initial Load:</strong> Only HTML, CSS, and minimal framework code</li>
          <li><strong>First Click:</strong> JavaScript chunk downloads for that specific interaction</li>
          <li><strong>Subsequent Clicks:</strong> No additional JavaScript (it's cached)</li>
          <li><strong>Different Buttons:</strong> May download different chunks as needed</li>
          <li><strong>Console Logs:</strong> See messages when JS actually executes</li>
        </ul>
      </div>

      <div style="background: #fef3c7; border: 1px solid #d97706; padding: 1.5rem; border-radius: 0.5rem; margin: 2rem 0;">
        <h3>⚡ Why This Matters:</h3>
        <ul style="margin-left: 2rem; line-height: 1.8;">
          <li><strong>Faster Initial Load:</strong> Page appears instantly - no JavaScript to download/parse</li>
          <li><strong>Better Performance:</strong> Only download what you actually use</li>
          <li><strong>Improved SEO:</strong> Search engines see a fully rendered page immediately</li>
          <li><strong>Better UX:</strong> Page is interactive immediately, even on slow networks</li>
        </ul>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Progressive Loading Demo - Qwik Showcase",
  meta: [
    {
      name: "description",
      content: "See how Qwik loads zero JavaScript until interaction",
    },
  ],
};
