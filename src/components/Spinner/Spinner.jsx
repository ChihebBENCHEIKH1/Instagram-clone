export const Spinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="inline-block relative">
      <div className="h-12 w-12 rounded-full bg-red-600 opacity-40 animate-ping"></div>
      <div className="h-12 w-12 rounded-full bg-red-600 opacity-60 absolute top-0 animate-ping"></div>
      <div className="h-12 w-12 rounded-full bg-red-600 opacity-40 absolute top-0 animate-ping"></div>
    </div>
  </div>
);
