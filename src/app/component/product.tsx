import Image from "next/image";
import React from "react";
import StarRating from "./ui/utility";

interface ProductProps {
  product: {
    image: string;
    alt: string;
    rating: number;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="max-w-sm border rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.alt}
          width={240}
          height={320}
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-2 right-2 text-red-500 bg-white p-1 rounded-full shadow">
          {/* todo add 
           <FaHeart /> */}
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">BEEF CHUCK ROAST</h3>
        <span className="inline-block text-xs px-2 py-1 bg-gray-200 rounded font-medium mb-2">
          USDA CHOICE
        </span>

        <div className="flex items-center text-yellow-500 text-sm mb-2">
          <StarRating rating={product.rating} />

          <span className="text-gray-600 ml-2">(577)</span>
        </div>

        <p className="text-sm text-gray-600">1 Piece | approx 2.25 LB</p>
        <p className="text-xs text-gray-400 mb-2">Final price by weight</p>

        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold">$6.48 / LB</span>
          <span className="text-base font-bold">approx $14.58</span>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700">
          <span className="text-xl">+</span> ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
