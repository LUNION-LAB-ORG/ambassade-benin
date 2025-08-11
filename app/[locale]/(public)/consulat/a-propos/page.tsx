import ConsularBrochure from '@/components/consulat/apropos/ConsularBrochure';
import ConsulHeader from '@/components/partials/ConsulHeader';
import MotDuConsul from '@/components/consulat/apropos/MotDuConsul';
import React from 'react';

const Page = () => {
    return (
        <div>
           <div className="sm:mt-16 mx-auto  py-8">
             <ConsulHeader nom={"A propos du Consul Honoraire"}/>
             <MotDuConsul />
           <ConsularBrochure />
           </div>

        </div>
    );
}

export default Page;
