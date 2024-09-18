import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { useCloudinary } from '../context/CloudinaryContext';

const ImageComponent = ({ imageId }) => {
    const { getImage } = useCloudinary();
    const img = getImage(imageId);
    return <AdvancedImage cldImg={img} />;
};

export default ImageComponent;