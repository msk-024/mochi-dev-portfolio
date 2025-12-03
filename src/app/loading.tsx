// loading
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        {/* ぷよぷよ本体 */}
        <div className="w-20 h-20 bg-blue-400/90 animate-blob shadow-lg" />

        {/* うっすらオーラ */}
        <div className="mt-3 w-16 h-3 rounded-full bg-blue-200/60 blur-[2px]" />

        <p className="mt-4 text-xs text-gray-500 tracking-wide">Loading...</p>
      </div>
    </div>
  );
}
