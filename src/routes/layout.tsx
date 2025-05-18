import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";

export default component$(() => {
  const isDark = useSignal(false);

  useVisibleTask$(({ track }) => {
    track(() => isDark.value);
    document.documentElement.setAttribute(
      'data-theme',
      isDark.value ? 'dark' : 'light'
    );
  });

  return (
    <>
      <Header isDark={isDark} />
      <main class="main-content">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
