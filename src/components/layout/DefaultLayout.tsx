import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './DefaultLayout.scss';

import Approvals from '@components/approvals/Approvals';
import QuickAccess from '@components/QuickAccess/QuickAccess';
import NewFeaturesWidget from '@components/NewFeaturesWidget/NewFeaturesWidget';
import BalanceDashboard from '@components/balanceDashboard/balanceDashboard';
import ExchangeRates from '@components/exchangeRates/exchangeRates';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const accounts = [
    'Private Customer',
    'Enterprise Customer',
    'Corporate Customer',
  ];

  const navigation = [
    'Accounts & Payments',
    'Financing & Foreign Trade',
    'Investment & Risk Management',
    'Services',
    'My data',
    'Help',
  ];

  const activeNavItem = 'Services';

  return (
    <div className="defaultLayout">
      <header className="header">
        <div className="header__wrapper">
          <div className="header__topRow">
            <SearchOutlined />
          </div>
          <div className="header__middleRow">
            <div className="header__logo">
              <span>Commerzbank</span>
              <div>
                <img src="/public/logo.png" alt="Logo" />
              </div>
            </div>
            <div className="header__accounts">
              {accounts.map((account, index) => (
                <div key={index} className="header__account">
                  {account}
                </div>
              ))}
            </div>
          </div>
          <div className="header__bottomRow">
            {navigation.map((nav, index) => (
              <div
                key={index}
                className={`header__navItem ${
                  activeNavItem === nav && 'header__navItem--active'
                }`}
              >
                {nav}
              </div>
            ))}
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
