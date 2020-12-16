import React from 'react';
import Card from './Card';
import CardSection from './CardSection';
import ProductCaption from './ProductCaption';
import ClassicCollection from './ClassicCollection';
import SampleProduct from './SampleProduct';



const CardDetail = () => {
    return (
        <Card>
            <CardSection>
                <ProductCaption />
            </CardSection>
            <CardSection>
                <ClassicCollection />
            </CardSection>
            <CardSection>
                <SampleProduct />
            </CardSection>
        </Card>
    )
}



export default CardDetail