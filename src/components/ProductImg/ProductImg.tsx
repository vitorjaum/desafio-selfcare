import { useEffect, useState } from "react";
import "./ProductImg.css";
type ProductImgProps = {
  prodName: string;
};

export const ProductImg: React.FC<ProductImgProps> = ({ prodName }) => {
  const [imgSrc, setImgSrc] = useState();

  useEffect(() => {
    const mount = async () => {
      const result = await import(`assets/${prodName}.jpg`);
      setImgSrc(result.default);
    };
    mount();
  }, [prodName]);

  return (
    <>
      <img src={imgSrc} alt="Imagem de produto" className="product-image" />
    </>
  );
};
