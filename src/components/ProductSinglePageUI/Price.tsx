const Price = () => {
  return (
    <div className="flex items-center my-4">
      <span className="bg-green-500 rounded-full px-2 py-1 text-white font-bold mx-1">
        %50
      </span>
      <span className="line-through mx-1">₺249,99</span>
      <span className="text-2xl font-bold mx-1">₺125,99</span>
    </div>
  );
};

export default Price;
