import EmbassiesMap from '@/components/consulat/representation/EmbassiesMap';
import ConsulHeader from '@/components/partials/ConsulHeader';
import React from 'react';

const Page = () => {
    return (
        <div className='px-4 py-8'>
        <ConsulHeader nom={"Representation"} /> 
         <EmbassiesMap />   
        </div>
    );
}

export default Page;
