"use client";
import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(
  () => import("@/components/properties/PropertyMap"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[400px] w-full" />,
  }
);
export default DynamicMap

/* Notes
Lazy Loading: Components wrapped with dynamic are lazy loaded. This means that the component code is not loaded until it is needed. For example, if you have a component that is only visible when a user clicks a button, you could use dynamic to ensure that the code for that component is not loaded until the button is clicked.

Server Side Rendering (SSR) Control: By default, Next.js pre-renders every page. This means that it generates HTML for each page in advance, instead of doing it all on the client-side. However, with dynamic, you can control this behavior. You can choose to disable SSR for specific modules, which can be useful for modules that have client-side dependencies. */