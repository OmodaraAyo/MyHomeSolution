export default function SkeletonBlock({ height = '200px', className = '' }) {
  return (
    <div
      className={`bg-[#f3f3f3] animate-pulse rounded-md ${className}`}
      style={{ height }}
    />
  );
}
