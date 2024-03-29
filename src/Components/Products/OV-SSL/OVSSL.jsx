import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import Allproducts from '../../../Requests/Allproducts'
import OV1 from './OV1';

export default function OVSSL() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function products() {
        setLoading(true)
        const currentProducts = await Allproducts.getProducts()
        setProductList(currentProducts)
        setLoading(false)
    }

    useEffect(() => {
        document.title = 'SSL-сертификаты с проверкой бизнеса'
        products()
    }, []);
    return (
        <div className='certificates'>
            {
                        loading ? (
                            <div className="loader">
                                <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                            </div>
                        ) : (
                            <OV1 productList={productList} />
                        )
                    }
        </div>
    )
}