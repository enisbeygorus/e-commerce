import { categoryData } from "./data";

const CategoryProduct = () => {
  const content = categoryData.map((data) => {
    return (
      <div key={data.id} className="flex w-1/4">
        <div className="flex-1 p-3  aspect-square relative">
          <div
            style={{ backgroundColor: "#ffa861" }}
            className="cursor-pointer font-bold text-white w-32 rounded-md p-1 absolute uppercase bottom-4 left-1/2 -translate-x-1/2"
          >
            {data.name}
          </div>
          <div className="w-full h-full bg-black overflow-hidden cursor-pointer">
            <img
              alt="category_image"
              className="w-full h-full bg-cover"
              src={data.imageUrl}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full">
      <div className="content flex flex-wrap">{content}</div>
    </div>
  );
};

export default CategoryProduct;
