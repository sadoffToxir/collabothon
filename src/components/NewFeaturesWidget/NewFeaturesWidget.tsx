import serviceIcon from '@assets/new_widget.svg';

import './NewFeaturesWidget.scss'

const NewFeaturesWidget = () => {
  return (
    <div className="newFeatures">
      <div className="newFeatures__leftContent">
        <img src={serviceIcon} alt="Service Icon" className="newFeatures__icon" />
      </div>
      <div className="newFeatures__rightContent">
        <p className="newFeatures__title">How to make your qweqwe work smarter</p>
        <p className="newFeatures__description">
          Learn how to use these simple tips and tricks to enhance your productivity and get the most out of your Mac. Discover shortcuts, useful features, and more to make your experience seamless. <a href='' className='text-blue-600 underline'>Read More.</a>
        </p>
      </div>
    </div>
  );
};

export default NewFeaturesWidget;