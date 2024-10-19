import Approvals from '@components/approvals/Approvals';

const DefaultLayout = () => {
  return (
    <div>
      <main>
        <Approvals />
        <img src="/public/layout.png" alt="" />
      </main>
    </div>
  );
}

export default DefaultLayout;