import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ReactSVG } from 'react-svg';

import { initialServices } from './initialServices';
import { ServiceType } from './ServiceType';

import './QuickAccess.scss';

const colors = [
  '#FFB6C1', // Light Pink
  '#ADD8E6', // Light Blue
  '#90EE90', // Light Green
  '#FFD700', // Gold
  '#FF69B4', // Hot Pink
  '#87CEFA', // Light Sky Blue
  '#FFA07A', // Light Salmon
  '#20B2AA', // Light Sea Green
];

// Sample service data
const initialServicesLeft: ServiceType[] = [
  { name: initialServices[0].name, icon: initialServices[0].icon, color: colors[0] },
  { name: initialServices[1].name, icon: initialServices[1].icon, color: colors[1] },
  { name: initialServices[2].name, icon: initialServices[2].icon, color: colors[2] },
  { name: initialServices[3].name, icon: initialServices[3].icon, color: colors[3] },
];

const initialServicesRight: ServiceType[] = [
  { name: initialServices[4].name, icon: initialServices[4].icon, color: colors[4] },
  { name: initialServices[5].name, icon: initialServices[5].icon, color: colors[5] },
  { name: initialServices[6].name, icon: initialServices[6].icon, color: colors[6] },
];

const ITEM_TYPE = 'SERVICE_ITEM';

interface ServiceProps {
  service: ServiceType;
  index: number;
  moveService: (
    fromIndex: number,
    toIndex: number,
    sourceQuickAccess: number
  ) => void;
  removeService: (index: number, quickAccessId: number) => void;
  quickAccessId: number;
}

const Service = ({
  service,
  index,
  moveService,
  removeService,
  quickAccessId,
}: ServiceProps) => {
  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { index, quickAccessId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (item: { index: number; quickAccessId: number }) => {
      if (item.quickAccessId !== quickAccessId || item.index !== index) {
        moveService(item.index, index, item.quickAccessId);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`service ${isDragging ? 'dragging' : ''}`}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isOver ? '#f0f0f0' : 'transparent',
      }}
    >
      <div className="service__icon">
        <ReactSVG style={{ fill: service.color }} src={service.icon} />
      </div>
      <p>{service.name}</p>
      {quickAccessId === 0 && (
        <button
          className="remove-button"
          onClick={() => removeService(index, quickAccessId)}
          style={{ marginLeft: '10px', color: 'red', cursor: 'pointer' }}
        >
          x
        </button>
      )}
    </div>
  );
};

const QuickAccess = ({ services, setServices, quickAccessId }: any) => {
  const moveService = (
    fromIndex: number,
    toIndex: number,
    sourceQuickAccess: number
  ) => {
    setServices((prevServices: any) => {
      const newServices = [...prevServices];

      if (quickAccessId === sourceQuickAccess) {
        const [movedService] = newServices.splice(fromIndex, 1);
        newServices.splice(toIndex, 0, movedService);
      } else {
        const sourceService = newServices[sourceQuickAccess].splice(
          fromIndex,
          1
        )[0];
        newServices[quickAccessId].splice(toIndex, 0, sourceService);
      }

      return newServices;
    });
  };

  const removeService = (index: number, quickAccessId: number) => {
    if (quickAccessId !== 0) return;

    setServices((prevServices: any) => {
      const newServices = [...prevServices];
      const [removedService] = newServices[quickAccessId].splice(index, 1); // Remove from left
      newServices[1].push(removedService); // Add to right

      return newServices;
    });
  };

  return (
    <div className="quickAccess max-w-[500px]">
      {services.map((service: ServiceType, index: number) => (
        <Service
          key={service.name}
          service={service}
          index={index}
          moveService={moveService}
          removeService={removeService}
          quickAccessId={quickAccessId}
        />
      ))}
    </div>
  );
};

const QuickAccessContainer = () => {
  const [servicesGroup, setServicesGroup] = useState<any[]>([
    initialServicesLeft,
    initialServicesRight,
  ]);
  const [showRightQuickAccess, setShowRightQuickAccess] = useState(false); // Toggle right QuickAccess

  const toggleShowRightQuickAccess = () => {
    setShowRightQuickAccess(!showRightQuickAccess); // Toggle the state
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="quickAccessContainer">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <div
            className="quickAccessHeader"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            {/* Show All Services Button */}
            <button
              className="showAllServicesButton"
              onClick={toggleShowRightQuickAccess}
              style={{
                marginBottom: '10px',
                padding: '5px 10px',
                cursor: 'pointer',
                backgroundColor: '#4CAF50',
                color: 'white',
                borderRadius: '4px',
              }}
            >
              {showRightQuickAccess ? 'Hide All Services' : 'Show All Services'}
            </button>
          </div>
          <div style={{ display: 'flex', position: 'relative' }}>
            <QuickAccess
              services={servicesGroup[0]}
              setServices={setServicesGroup}
              quickAccessId={0}
            />
            {showRightQuickAccess && (
              <div
                style={{
                  position: 'absolute',
                  right: '-400px', // Adjust this value to move it further right
                  top: '0',
                  zIndex: 1,
                }}
              >
                <QuickAccess
                  services={servicesGroup[1]}
                  setServices={setServicesGroup}
                  quickAccessId={1}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default QuickAccessContainer;
