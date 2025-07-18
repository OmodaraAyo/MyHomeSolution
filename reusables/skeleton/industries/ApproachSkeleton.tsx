import SkeletonBlock from "../skeletonBlock";

export default function ApproachSkeleton() {
  return (
    <div className="mt-[2.5rem] px-6 py-8 lg:p-13 shadow-lg rounded-2xl bg-[#e5e5e5]">
      <SkeletonBlock height="32px" className="w-48 mb-6" />
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex items-start gap-3 mb-6">
          <SkeletonBlock height="20px" className="w-4 h-4 mt-1" />
          <div className="flex flex-col gap-2 w-full">
            <SkeletonBlock height="18px" className="w-1/2" />
            <SkeletonBlock height="14px" className="w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}
