export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center gradient-soft">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-blue-100 border-t-accent-blue" />
          <div className="absolute inset-2 rounded-full bg-white/80 backdrop-blur-sm" />
        </div>
        <p className="text-sm font-medium text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}
