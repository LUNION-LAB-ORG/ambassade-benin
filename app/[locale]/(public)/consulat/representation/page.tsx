import BeninConsulates from '@/components/consulat/representation/BeninConsulates';
import BeninEmbassies from '@/components/consulat/representation/BeninEmbassies';
import EmbassiesMap from '@/components/consulat/representation/EmbassiesMap';
import ConsulHeader from '@/components/partials/ConsulHeader';
import React from 'react';

const Page = () => {
    return (
        <div className='px-4 py-8'>
        <ConsulHeader nom={"Representation"} /> 
         <EmbassiesMap />  
         <BeninEmbassies/>
         <BeninConsulates />
        </div>
    );
}

export default Page;
