"use client";

import TopLoadingBar from "react-top-loading-bar";
import { useRouter } from "next/navigation";
import React, { useRef, useEffect, useState } from "react";

export default function LoadingBarManager() {
  const loadingBarRef = useRef<any>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let progressTimer: NodeJS.Timeout | null = null;
    let routeChanging = false; // Flag to track whether a route is changing

    const handleStart = () => {
      if (!routeChanging) {
        routeChanging = true;
        setIsLoading(true);
        loadingBarRef.current?.continuousStart(30); // Start at 30%
        progressTimer = setInterval(() => {
          if (
            loadingBarRef.current &&
            loadingBarRef.current.state.progress < 80
          ) {
            loadingBarRef.current.state.progress += 5; // Gradually increase progress
          }
        }, 500); // Update every 300ms
      }
    };

    const handleComplete = () => {
      if (routeChanging) {
        routeChanging = false;
        if (progressTimer) clearInterval(progressTimer); // Clear the interval
        setTimeout(() => {
          loadingBarRef.current?.complete(); // Complete after a short delay
          setIsLoading(false);
        }, 500); // 500ms artificial delay to simulate final loading
      }
    };

    // Intercept the push and replace methods of the router
    const originalPush = router.push;
    const originalReplace = router.replace;

    router.push = async (...args) => {
      handleStart();
      await originalPush(...args); // Wait for route change
      handleComplete();
    };

    router.replace = async (...args) => {
      handleStart();
      await originalReplace(...args); // Wait for route change
      handleComplete();
    };

    // Cleanup intervals and reset when the component unmounts
    return () => {
      if (progressTimer) clearInterval(progressTimer);
      router.push = originalPush;
      router.replace = originalReplace;
    };
  }, [router]);

  return <TopLoadingBar color="#C95C5C" ref={loadingBarRef} height={4} />;
}
