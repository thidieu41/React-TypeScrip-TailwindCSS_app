import banner from '../../assets/images/banner.jpeg'

const BannerCompoent = () => {
  return (
    <div className="grid grid-cols-2 py-20 gap-[20px]">
      <div className='max-w-[80%]'>
        <p className="font-bold text-5xl leading-tight">
          Find The Best <br></br>Fashion Style <br></br> For You.
        </p>
        <p className='mt-6 text-sm leading-7'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className="border-[1px] border-black border-solid py-[5px] px-[20px] bg-black text-white max-w-[200px] mt-6">
          SHOPPING NOW
        </button>
      </div>
      <div>
        <img  src={banner} alt='banner' className='rounded-bl-[100px] max-h-[400px] w-full'/>
      </div>
    </div>
  );
};

export default BannerCompoent;
