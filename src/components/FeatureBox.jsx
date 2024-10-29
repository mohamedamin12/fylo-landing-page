/* eslint-disable react/prop-types */
const FeatureBox = ({ title, icon, desc }) => {
  return (
    <div className="text-white element-center flex-col text-center">
      <img
        className="w-[80px] h-[80px] object-contain"
        src={`/src/assets/images/${icon}`}
        alt="icon-img"
      />
      <h2 className="text-xl font-semibold my-[15px]">{title}</h2>
      <p className="font-normal text-sm">{desc}</p>
    </div>
  );
};

export default FeatureBox;
