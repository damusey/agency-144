import { redirect } from 'next/navigation';

// Google discovered /solutions/performance-marketing which was never a standalone route.
// Performance Marketing is a sub-service under the "Grow" category.
// This page redirects to the correct location.
export default function PerformanceMarketingRedirect() {
  redirect('/solutions/grow/#performance-marketing');
}
