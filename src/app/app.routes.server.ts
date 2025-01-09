import { RenderMode, ServerRoute } from '@angular/ssr';

// Simulate fetching dynamic route parameters (e.g., product IDs)
async function fetchProductIds(): Promise<string[]> {
  // Replace with your actual logic, e.g., API call or database query
  return []; // Example product IDs
}

// Define the `getPrerenderParams` function
export async function getPrerenderParams(): Promise<{ id: string }[]> {
  const productIds = await fetchProductIds(); // Get product IDs
  return productIds.map(id => ({ id })); // Map them to route parameters
}

// Define server routes with prerendering
export const serverRoutes: ServerRoute[] = [
  {
    path: 'productdetails/:id', // Dynamic route
    renderMode: RenderMode.Prerender,
    getPrerenderParams, // Attach the `getPrerenderParams` function
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender, // Default fallback route handled by SSR
  }
];
