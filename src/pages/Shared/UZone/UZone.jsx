import React from 'react';
import qzone1 from '../../../assets/assets/qZone1.png'
import qzone2 from '../../../assets/assets/qZone2.png'
import qzone3 from '../../../assets/assets/qZone3.png'
const UZone = () => {
    return (
        <div className='bg-secondary text-center py-4 my-4'>
            <h4>Q-Zone</h4>
            <div>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default UZone;