import './NewFeaturesWidget.css';
import serviceIcon from '../../assets/new_widget.svg';

const NewFeaturesWidget = () => {
  return (
    <div className="new-features-widget">
      <div className="widget-half">
        <h2 className="widget-title">How to make your Mac work smarter</h2>
        <p className="widget-intro">Learn how to use these simple tips and tricks to enhance your productivity and get the most out of your Mac. Discover shortcuts, useful features, and more to make your experience seamless.</p>
        <button className="read-more-button">Read More</button>
      </div>
      <div className="widget-half">
        <img src={serviceIcon} alt="Service Icon" className="service-icon" />
      </div>
    </div>
  );
};

export default NewFeaturesWidget;