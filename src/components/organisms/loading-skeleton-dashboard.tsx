import { LoadingSkeleton } from "../atoms/loading-skeleton";

export const LoadingSkeletonDashboard = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <LoadingSkeleton width="16rem" height="2rem" />
        <LoadingSkeleton width="24rem" height="1rem" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between pb-2">
              <LoadingSkeleton width="6rem" height="1rem" />
              <LoadingSkeleton
                width="1rem"
                height="1rem"
                className="rounded-full"
              />
            </div>
            <LoadingSkeleton width="4rem" height="2rem" />
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4">
          <LoadingSkeleton width="8rem" height="1.5rem" />
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <LoadingSkeleton key={i} width="100%" height="3rem" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
