import { ThreeDots } from "react-loader-spinner";

function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh_-_96px)] w-full mt-24">
      <ThreeDots
        visible={true}
        height="200"
        width="200"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: "center" }}
        wrapperClass=""
      />
    </div>
  );
}
export default LoadingPage;
