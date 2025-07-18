import SkeletonBlock from "../skeletonBlock";

export default function GridSkeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-3 mt-[2.5rem] p-2">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col justify-between text-center items-center p-4 rounded-lg h-full border"
        >
          <SkeletonBlock height="48px" className="w-12 rounded-full mb-4" />
          <SkeletonBlock height="20px" className="w-3/4 mb-2" />
          <SkeletonBlock height="40px" className="w-full" />
        </div>
      ))}
    </div>
  );
}
