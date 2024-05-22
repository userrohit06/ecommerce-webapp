import React, { useState } from 'react'
import styles from './ProductImages.module.css'

const ProductImages = ({ imgs = [] }) => {
    const [image, setImage] = useState(imgs[0])
    return (
        <>
            <div className={styles.images_list}>
                {
                    imgs.map((currentImage, index) => {
                        return (
                            <img
                                key={index}
                                src={currentImage}
                                alt={`Product Image ${index + 1}`}
                                className={styles.images}
                                onClick={() => setImage(currentImage)}
                            />
                        )
                    })
                }
            </div>
            <div className={styles.main_image_div}>
                {
                    <img
                        src={image}
                        alt='Click on any image to see it'
                        className={styles.main_image}
                    />
                }
            </div>
        </>
    )
}

export default ProductImages