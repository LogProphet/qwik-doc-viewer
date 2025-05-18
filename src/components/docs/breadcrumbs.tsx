import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface BreadcrumbsProps {
  currentPath: string;
}

export const Breadcrumbs = component$<BreadcrumbsProps>(({ currentPath }) => {
  // Generate breadcrumbs from the current path
  const generateBreadcrumbs = (path: string) => {
    const segments = path.split('/').filter(Boolean);
    const breadcrumbs = [{ title: 'Home', href: '/' }];

    let currentHref = '';
    segments.forEach((segment, index) => {
      currentHref += `/${segment}`;

      // Convert URL segments to readable titles
      const title = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbs.push({
        title,
        href: currentHref,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(currentPath);

  return (
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <ol class="breadcrumb-list">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} class="breadcrumb-item">
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link
                  href={crumb.href}
                  class="breadcrumb-link"
                >
                  {crumb.title}
                </Link>
                <span class="breadcrumb-separator" aria-hidden="true">
                  /
                </span>
              </>
            ) : (
              <span class="breadcrumb-current" aria-current="page">
                {crumb.title}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
});
