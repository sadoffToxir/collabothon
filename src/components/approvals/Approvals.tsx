import type { CollapseProps } from 'antd';
import { Button, Collapse } from 'antd';

import './Approvals.scss';

export const Approvals = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const genExtra = (url: string) => (
    <Button
      size="small"
      color="default"
      variant="solid"
      href={url}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      View
    </Button>
  );
  const pendingApprovals = [
    {
      id: 1,
      title: 'Approve request for leave',
      description: 'Request for leave from 2024-11-01 to 2021-11-15',
      created_at: '2024-10-30 at 09:00',
      deadline: '2024-10-10 at 09:00',
      status: 'pending',
      url: '/leave-request/1',
    },
    {
      id: 2,
      title: 'Approve request for transaction',
      description: 'Request for transaction of $1000 to John Doe',
      created_at: '2024-10-30 at 09:00',
      deadline: '2024-10-10 at 09:00',
      status: 'pending',
      url: '/transaction-request/2',
    },
    {
      id: 3,
      title: 'Approve request for new hire',
      description: 'Request for new hire of John Doe',
      created_at: '2024-10-30 at 09:00',
      deadline: '2024-10-10 at 09:00',
      status: 'pending',
      url: '/new-hire-request/3'
    },
    {
      id: 4,
      title: 'Approve request for leave',
      description: 'Request for leave from 2024-11-01 to 2021-11-15',
      created_at: '2024-10-30 at 09:00',
      deadline: '2024-10-10 at 09:00',
      status: 'pending',
      url: '/leave-request/1'
    },
    {
      id: 5,
      title: 'Approve request for transaction',
      description: 'Request for transaction of $1000 to John Doe',
      created_at: '2024-10-30 at 09:00',
      deadline: '2024-10-10 at 09:00',
      status: 'pending',
      url: '/transaction-request/2'
    },
    {
      id: 6,
      title: 'Approve request for new hire',
      description: 'Request for new hire of John Doe',
      created_at: '2024-10-30 at 09:00',
      deadline: '2024-10-10 at 09:00',
      status: 'pending',
      url: '/new-hire-request/3'
    },
    {
      id: 7,
      title: 'Approve request for leave',
      description: 'Request for leave from 2024-11-01 to 2021-11-15',
      created_at: '2024-10-30 at 09:00',
      deadline: '2024-10-10 at 09:00',
      status: 'pending',
      url: '/leave-request/1'
    },
    {
      id: 8,
      title: 'Approve request for transaction',
      description: 'Request for transaction of $1000 to John Doe',
      created_at: '2024-10-30 at 09:00',
      deadline: '2024-10-10 at 09:00',
      status: 'pending',
      url: '/transaction-request/2'
    },
    {
      id: 9,
      title: 'Approve request for new hire',
      description: 'Request for new hire of John Doe',
      created_at: '2024-10-30 at 09:00',
      deadline: '2024-10-10 at 09:00',
      status: 'pending',
      url: '/new-hire-request/3'
    }
  ]

  const items: CollapseProps['items'] = pendingApprovals.map((approval) => {
    return {
      key: approval.id,
      label: approval.title,
      children: (
        <div className="text-left">
          <div>
            <b>Description:</b> {approval.description}
          </div>
          <div>
            <b>Created:</b> {approval.created_at}
          </div>
          <div>
            <b>Deadline:</b> {approval.deadline}
          </div>
        </div>
      ),
      extra: genExtra(approval.url),
    }
	
  })
  return <div className='approvals'>

    <h2 className='approvals__heading'>Pending requests</h2>
    <div className='approvals__items'>

      <Collapse
        onChange={onChange}
        expandIconPosition='end'
        items={items}
      />
    </div>
  );
};

export default Approvals;
