import Image from 'next/image';
import router from 'next/router';
function Banner() {
  const search = () => {
    router.push({
      pathname: '/search',
    });
  };
  return (
    <div className="relative h-[500px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/banner.jpg" layout="fill" objectFit="cover" />
      <div className="absolute w-full h-full bg-black opacity-40">HELLP</div>
      <div className="absolute w-full text-center top-1/2">
        <button
          onClick={search}
          className="px-10 py-2 my-3 font-bold transition duration-150 bg-white rounded-full shadow-md hover:shadow-xl active:scale-90"
        >
          Getting Started
        </button>
      </div>
    </div>
  );
}

export default Banner;
