import React, { Suspense } from "react";

const LazyLoadComponent = React.lazy(() => import("./LazyLoadComponent"));

const Spinner = () => <div>loading</div>;

export default function Supersefallback() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <LazyLoadComponent />
      </Suspense>
    </div>
  );
}
