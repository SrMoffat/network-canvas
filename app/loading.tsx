export default function Loading() {
  console.log('Loading...');
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex justify-center items-center space-x-1 text-sm">
        <span className="loading loading-spinner text-success" />
        <div>Loading ...</div>
      </div>
    </div>
  );
}
