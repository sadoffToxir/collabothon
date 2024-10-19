import React, { useState } from 'react';
import { Button, List, Modal } from 'antd';
import { QRCodeCanvas } from 'qrcode.react';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import './Approvals.scss';

export const Approvals = () => {
  const [selectedApproval, setSelectedApproval] = useState<any>(null);

  const showApprovalDetails = (approval: any) => {
    setSelectedApproval(approval);
  };

  const handleApprove = () => {
    // Handle the approval logic here
    setSelectedApproval(null);
  };

  const handleReject = () => {
    // Handle the rejection logic here
    setSelectedApproval(null);
  };

  const pendingApprovals = [
    // Original 9 approvals
    {
      id: 1,
      title: 'Approval #1001',
      description: 'Request for leave from 2024-11-01 to 2024-11-15',
      amount: null,
      created_at: '2024-10-30 at 09:00',
      deadline: '2024-11-10 at 09:00',
      status: 'pending',
      url: '/approval/1001',
    },
    // ... (other existing approvals)
    {
      id: 9,
      title: 'Approval #1009',
      description: 'Transaction of $1,500 to Client I',
      amount: '$1,500',
      created_at: '2024-10-30 at 09:00',
      deadline: '2024-11-10 at 09:00',
      status: 'pending',
      url: '/approval/1009',
    },
    // Additional approvals to double the list
    {
      id: 10,
      title: 'Approval #1010',
      description: 'New hire approval for Candidate J',
      amount: null,
      created_at: '2024-11-01 at 10:00',
      deadline: '2024-11-15 at 10:00',
      status: 'pending',
      url: '/approval/1010',
    },
    {
      id: 11,
      title: 'Approval #1011',
      description: 'Transaction of $500 to Vendor K',
      amount: '$500',
      created_at: '2024-11-01 at 10:30',
      deadline: '2024-11-15 at 10:30',
      status: 'pending',
      url: '/approval/1011',
    },
    {
      id: 12,
      title: 'Approval #1012',
      description: 'Request for leave from 2024-11-20 to 2024-11-25',
      amount: null,
      created_at: '2024-11-01 at 11:00',
      deadline: '2024-11-15 at 11:00',
      status: 'pending',
      url: '/approval/1012',
    },
    {
      id: 13,
      title: 'Approval #1013',
      description: 'Transaction of $1,200 to Supplier M',
      amount: '$1,200',
      created_at: '2024-11-01 at 11:30',
      deadline: '2024-11-15 at 11:30',
      status: 'pending',
      url: '/approval/1013',
    },
    {
      id: 14,
      title: 'Approval #1014',
      description: 'New hire approval for Candidate N',
      amount: null,
      created_at: '2024-11-01 at 12:00',
      deadline: '2024-11-15 at 12:00',
      status: 'pending',
      url: '/approval/1014',
    },
    {
      id: 15,
      title: 'Approval #1015',
      description: 'Transaction of $1,800 to Partner O',
      amount: '$1,800',
      created_at: '2024-11-01 at 12:30',
      deadline: '2024-11-15 at 12:30',
      status: 'pending',
      url: '/approval/1015',
    },
    {
      id: 16,
      title: 'Approval #1016',
      description: 'Request for leave from 2024-11-25 to 2024-12-05',
      amount: null,
      created_at: '2024-11-01 at 13:00',
      deadline: '2024-11-15 at 13:00',
      status: 'pending',
      url: '/approval/1016',
    },
    {
      id: 17,
      title: 'Approval #1017',
      description: 'Transaction of $1,400 to Client Q',
      amount: '$1,400',
      created_at: '2024-11-01 at 13:30',
      deadline: '2024-11-15 at 13:30',
      status: 'pending',
      url: '/approval/1017',
    },
    {
      id: 18,
      title: 'Approval #1018',
      description: 'New hire approval for Candidate R',
      amount: null,
      created_at: '2024-11-01 at 14:00',
      deadline: '2024-11-15 at 14:00',
      status: 'pending',
      url: '/approval/1018',
    },
  ];

  return (
    <div className="approvals-widget">
      <div className="approvals-widget__header">
        <h2>Approval Queue</h2>
      </div>
      <List
        dataSource={pendingApprovals}
        className="approvals-widget__list"
        renderItem={(approval) => (
          <List.Item
            key={approval.id}
            onClick={() => showApprovalDetails(approval)}
            className="approval-item"
          >
            <List.Item.Meta
              avatar={<ExclamationCircleOutlined style={{ fontSize: 24, color: '#faad14' }} />}
              title={approval.title}
              description={approval.description}
            />
            {approval.amount && (
              <div className="approval-item__amount">{approval.amount}</div>
            )}
          </List.Item>
        )}
      />

      {selectedApproval && (
        <Modal
          className="approval-details-modal"
          visible={!!selectedApproval}
          title={`Approval Details - ${selectedApproval.title}`}
          onCancel={() => setSelectedApproval(null)}
          footer={[
            <Button key="reject" onClick={handleReject}>
              Reject
            </Button>,
            <Button key="approve" type="primary" onClick={handleApprove}>
              Approve
            </Button>,
          ]}
        >
          <div className="approval-details">
            <p>
              <strong>Description:</strong> {selectedApproval.description}
            </p>
            {selectedApproval.amount && (
              <p>
                <strong>Amount:</strong> {selectedApproval.amount}
              </p>
            )}
            <p>
              <strong>Created At:</strong> {selectedApproval.created_at}
            </p>
            <p>
              <strong>Deadline:</strong> {selectedApproval.deadline}
            </p>
            <div className="qr-code">
              <QRCodeCanvas value={selectedApproval.url} size={200} />
              <p>Scan this QR code to proceed with approval.</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Approvals;
