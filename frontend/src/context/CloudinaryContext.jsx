import React, { createContext, useContext } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

const CloudinaryContext = createContext();

export const CloudinaryProvider = ({ children }) => {
    const cld = new Cloudinary({ cloud: { cloudName: 'dwrzvigiz' } });

    const getImage = (imageId) => {
        return cld
        .image(imageId)
        .format('auto')
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500));
    };

    return (
        <CloudinaryContext.Provider value={{ cld, getImage }}>
            {children}
        </CloudinaryContext.Provider>
    );
};

export const useCloudinary = () => {
    return useContext(CloudinaryContext);
};
