import { component$, type Signal } from "@builder.io/qwik";

interface HeaderProps {
  isDark: Signal<boolean>;
}

export const Header = component$<HeaderProps>(({ isDark }) => {
  return (
    <header class="site-header">
      <div class="header-content">
        <h1>
          <span style="color: var(--color-primary)">Qwik</span> Docs Showcase
        </h1>
        <button
          class="theme-toggle"
          onClick$={() => {
            isDark.value = !isDark.value;
          }}
          aria-label="Toggle theme"
        >
          {isDark.value ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
});
