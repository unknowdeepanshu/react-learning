import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <>
      <div className="h-screen bg-gray-900">
        <div className="text-center text-3xl font-bold mb-4 text-white">
          My Slip
        </div>
        <div className="h-screen flex px-4 p-2  gap-2">
          <div className="flex-1 text-white h-80">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to My Slip from online
            </h1>
            <Spline scene="https://prod.spline.design/YXaawXvAG-uR8SRu/scene.splinecode" />
          </div>
        </div>
      </div>
    </>
  );
}
