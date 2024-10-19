import { ReactSVG } from 'react-svg';

import services from './services';

import './QuickAccess.scss';

const QuickAccess = () => {
  return (
    <div className="grid">
      {services.map((service, index) => 
        <div
          key={index}
          className="grid-item flex flex-col"
          style={{ backgroundColor: service.color }}
        >
          <ReactSVG className="w-10 h-10 mb-2 fill-[#255540]" src={service.icon} />
          <p className='text-center w-full truncate text-[#255540] font-bold'>{service.name}</p>
        </div>
      )}
    </div>
  );
};

export default QuickAccess;