import Section from "../components/Section/Section";

const ProductSingle = () => {
  return (
    <div>
      <Section>
        <div className="flex w-full max-w-[1250px]">
          <div className="flex flex-1">
            <div className="w-32 px-4">
              <div className="flex-1">
                <img
                  className="w-full h-full"
                  src="https://st2.myideasoft.com/idea/jq/35/myassets/products/039/d5f6edf8-05ef-40b8-8751-0bf8ac6452ae-1.jpg?revision=1664108829"
                />
              </div>
            </div>
            <div className="flex justify-center items-center flex-1 px-4">
              <div className="">
                <img
                  className="w-full h-full"
                  src="https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div>
              Deniz Kabuklu Bambu Çubuklu Şeffaf Etiketli Gerçek Çiçekli 50 cc
              Mantar Kapaklı Cam Şişede Kolonya Oda kokusu Şişesi Nikah Şekeri
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProductSingle;
