import React from 'react'

const ImageHolder = ({src}) => {
    return (

        <div className="flex justify-center items-center order-1 lg:order-2">
            <div
                className="image-holder flex justify-center items-center p-5 md:p-10 opacity-0 translate-x-3 anim-view relative"
                style={{ animationDelay: "0.7s" }}
            >
                <img
                    className="img-fluid glass p-5 sm:p-10 max-w-[80%] w-[550px] "
                    src={src}
                    alt="not found"
                />
            </div>
        </div>
    )
}

export default ImageHolder