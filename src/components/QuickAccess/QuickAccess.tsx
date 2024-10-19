import { ReactSVG } from 'react-svg';

import services from './services';

import './QuickAccess.scss';

const QuickAccess = () => {
  return (
    <div className="quickAccess">
      {services.map((row, rowKey) => 
        <div className="quickAccess__servicesRow" key={rowKey}>
          {
            row.map((service, index) =>
              <div
                key={index}
                className="service"
              >
                <div className='service__icon'>
                  <ReactSVG 
                    style={{ fill: service.color }}
                    src={service.icon} />
                </div>
                <p>{service.name}</p>
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default QuickAccess;
