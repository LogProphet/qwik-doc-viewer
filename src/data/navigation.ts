export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const docsNavigation: NavItem[] = [
  {
    title: "Getting Started",
    href: "/docs/getting-started"
  },
  {
    title: "Core Concepts",
    href: "/docs/concepts",
    children: [
      {
        title: "Reactivity",
        href: "/docs/concepts/reactivity"
      },
      {
        title: "Resumability",
        href: "/docs/concepts/resumability"
      },
      {
        title: "Progressive Loading", // <-- Add this
        href: "/docs/concepts/progressive-loading"
      }
    ]
  },
  {
    title: "Examples",
    href: "/docs/examples",
    children: [
      {
        title: "Counter",
        href: "/docs/examples/counter"
      }
    ]
  }
];
