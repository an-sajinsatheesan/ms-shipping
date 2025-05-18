import Layout from "@/components/layout/layout";
import { NextPageWithLayout } from "@/types/page"; 
import { PageHeading } from "@/components/common/page-heading";
import ProductsServices from "./service-product";
import { useEffect } from "react";



const Product: NextPageWithLayout = () => {
    useEffect(() => {
        document.title = 'Products & Services';
    }, []);

    return (
        <>
            <PageHeading Title={'Products & Services'} />
            <ProductsServices /> 
        </>
    );
};

Product.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Product;