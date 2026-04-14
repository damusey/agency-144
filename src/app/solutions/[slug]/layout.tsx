import { solutionCategories } from '@/data/solutions';

export function generateStaticParams() {
  return solutionCategories.map((category) => ({
    slug: category.key,
  }));
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
