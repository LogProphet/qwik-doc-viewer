import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { docsNavigation, type NavItem } from "~/data/navigation";

interface SidebarProps {
  currentPath: string;
}

export const DocsSidebar = component$<SidebarProps>(({ currentPath }) => {
  return (
    <aside class="docs-sidebar">
      <div class="sidebar-content">
        <Link href="/docs" class="sidebar-title">
          Documentation
        </Link>
        <nav class="sidebar-nav">
          {docsNavigation.map((item) => (
            <NavItemComponent
              key={item.href}
              item={item}
              currentPath={currentPath}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
});

interface NavItemProps {
  item: NavItem;
  currentPath: string;
}

const NavItemComponent = component$<NavItemProps>(({ item, currentPath }) => {
  const isActive = currentPath === item.href;
  const isExpanded = currentPath.startsWith(item.href);

  return (
    <div class="nav-item">
      <Link
        href={item.href}
        class={`nav-link ${isActive ? 'active' : ''}`}
      >
        {item.title}
      </Link>
      {item.children && isExpanded && (
        <div class="nav-children">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              class={`nav-child-link ${currentPath === child.href ? 'active' : ''}`}
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
});
