import React, {FC} from 'react';
import { Meta, Story } from '@storybook/react';
import { FaEllipsisH, FaTrash } from 'react-icons/fa';
import { StatusBadge } from '../../../src/components/Badge/StatusBadge';
import {
    DomainListRow,
    DomainRow,
    DomainListItem,
    DomainDropdownMenu,
    DomainDropdownMenuItem,
} from '../../../src/components/Domains'


type MockDomainListsProps = {
    status: 'attached' |
    'deployed' |
    'enabled' |
    'failed' |
    'verified' |
    'pending' |
    'disabled'
}
const MockDomainLists: FC<MockDomainListsProps> =({status}) => {
    return (
        <DomainRow>
            <DomainListRow>
                <DomainListItem domainName="example.com">
                    <StatusBadge status={status} />
                    <DomainDropdownMenu right>
                        <DomainDropdownMenuItem className="make-primary">Make Primary</DomainDropdownMenuItem>
                        <DomainDropdownMenuItem className="view-dns-record" data-toggle="modal" data-target="#dns-record-modal">View DNS Records</DomainDropdownMenuItem>
                        <DomainDropdownMenuItem className="delete" data-toggle="modal" data-target="#delete-modal" icon={<FaTrash className="d-block"/>}>
                            Delete
                        </DomainDropdownMenuItem>

                    </DomainDropdownMenu>                    
                </DomainListItem>
                <DomainListItem domainName="example.com">
                    <StatusBadge status={status} />
                    <div className="ml-3 domain-action">
                        <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i aria-hidden="true"><FaEllipsisH className="d-block"/></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item make-primary px-3 py-2 d-flex align-items-center justify-content-between" href="#">Make Primary</a>
                            <a className="dropdown-item view-dns-record px-3 py-2 d-flex align-items-center justify-content-between" href="#" data-toggle="modal" data-target="#dns-record-modal">View DNS Records</a>
                            <a className="dropdown-item delete px-3 py-2 d-flex align-items-center justify-content-between" href="#" data-toggle="modal" data-target="#delete-modal">
                                Delete<i aria-hidden="true"><FaTrash className="d-block"/></i>
                            </a>
                        </div>
                    </div>
                    
                </DomainListItem>
                <div className="domain-list-item mt-2 px-3 py-3 rounded d-flex align-items-center justify-content-between">
                    <div className="domain-name font-weight-bold">testdomaintwo.com</div>
                    <div className="domain-misc d-flex align-items-center">
                        <div className="domain-status">
                            <div className="rounded font-weight-bold c-site-status c-is-pending">Verification Pending</div>
                        </div>
                        <div className="ml-3 domain-action">
                            <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i aria-hidden="true"><FaEllipsisH className="d-block"/></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item make-primary px-3 py-2 d-flex align-items-center justify-content-between" href="#">Make Primary</a>
                                <a className="dropdown-item view-dns-record px-3 py-2 d-flex align-items-center justify-content-between" href="#" data-toggle="modal" data-target="#dns-record-modal">View DNS Records</a>
                                <a className="dropdown-item delete px-3 py-2 d-flex align-items-center justify-content-between" href="#" data-toggle="modal" data-target="#delete-modal">
                                    Delete<i aria-hidden="true"><FaTrash className="d-block"/></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </DomainListRow>
        </DomainRow>
    )
}

const meta: Meta = {
  title: 'MockUP/Pages/Admin/Domain',
  component: MockDomainLists,
  parameters: {
    controles: {
      expanded: true,
    },
  },
  argTypes: {
    status: {
      options: [
        'attached',
        'deployed',
        'enabled',
        'failed',
        'verified',
        'pending',
        'disabled',
      ],
      control: { type: 'select' },
    },
  },
};
export default meta;
const Template: Story<MockDomainListsProps> = (args) => (
  <MockDomainLists {...args} />
);

export const Default = Template.bind({});
Default.args = {
  status: 'attached',
};
