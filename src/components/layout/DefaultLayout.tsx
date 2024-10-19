import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Approvals from '@components/approvals/Approvals';
import { Kittens } from '@components/Kittens/Kittens';
import QuickAccess from '@components/QuickAccess/QuickAccess';

const DefaultLayout = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/quick-access" element={<QuickAccess />} />
            <Route path="/kittens" element={<Kittens />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default DefaultLayout;
