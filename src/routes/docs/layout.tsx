import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { DocsSidebar } from "../../components/docs/sidebar";
import { Breadcrumbs } from "../../components/docs/breadcrumbs";

export default component$(() => {
  const location = useLocation();

  return (
    <div class="docs-layout">
      <DocsSidebar currentPath={location.url.pathname} />
      <div class="docs-content">
        <Breadcrumbs currentPath={location.url.pathname} />
        <article class="docs-article">
          <Slot />
        </article>
      </div>
    </div>
  );
});
