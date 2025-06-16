interface LoadingSkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

export const LoadingSkeleton = ({
  width,
  height,
  className = "",
}: LoadingSkeletonProps) => {
  return (
    <div
      className={`bg-gray-200 rounded animate-pulse ${className}`}
      style={{ width, height }}
    ></div>
  );
};
