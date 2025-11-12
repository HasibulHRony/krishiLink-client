import React from 'react';

const ProductCard = ({ crop }) => {
    const { name, type, pricePerUnit, unit, quantity, description, location, image, owner } = crop;

    console.log(crop)
    return (
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={image} alt={name} className="w-full h-52 object-cover" />
            <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <p className="text-sm text-gray-500">{type} • {location}</p>
                <p className="text-gray-700 text-sm">{description}</p>
                <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="font-medium text-green-700">
                        {pricePerUnit}৳ / {unit}
                    </span>
                    <span className="text-gray-600">Qty: {quantity}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-sm text-gray-500">
                    <span>Owner: <span className="font-medium text-gray-700">{owner.ownerName}</span></span>
                    <span className="truncate">{owner.ownerEmail}</span>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;
