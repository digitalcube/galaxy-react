import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  FaAngleDown,
  FaExclamationTriangle,
  FaPlus,
  FaTimes,
} from 'react-icons/fa';
import { Modal, ModalButtons } from '../../src/components/Modals';

const MockDeleteWebhookModal: FC = () => {
  return (
    <>
      <Modal
        id="delete-webhook-modal"
        className="webhook"
        dismiss
        rounded
        size="small"
        open={true}
        title="Delete Webhook?"
      >
        <p className="mb-4 modal-description text-center">
          This cannot be undone
        </p>

        <ModalButtons>
          <button className="font-weight-bold btn btn-block btn-bordered btn-caution">
            Delete
          </button>
        </ModalButtons>
      </Modal>
    </>
  );
};

const MockEditWebhookModal: FC = () => {
  return (
    <Modal
      id="edit-webhook-modal"
      className="webhook"
      dismiss
      rounded
      open={true}
      title="Edit Headers"
    >
      <div className="modal-webhooks">
        <div className="px-3 py-3 rounded modal-webhook-item saved">
          <div
            className="remove-add-header text-right js-remove-add-header"
            title="remove"
          >
            <i aria-hidden="true">
              <FaTimes className="d-inline-block" />
            </i>
          </div>
          <div className="form-group mb-0">
            <label className="mb-2 font-weight-bold" htmlFor="key-01">
              Key
            </label>
            <div className="input-group">
              <input
                type="text"
                id="key-01"
                className="form-control"
                value="asfasdfsdfsdfasdlfhasd;glhasg609384102974adfas;dl9"
              />
            </div>
          </div>
          <div className="form-group mt-4 mb-0">
            <label className="mb-2 font-weight-bold" htmlFor="value-01">
              Value
            </label>
            <div className="input-group">
              <input
                type="text"
                id="value-01"
                className="form-control"
                value="asfasdfsdfsdfasdlfhasd;glhasg609384102974adfas;dl9"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 add-new">
          <button
            type="button"
            className="btn btn-bordered border-0 d-flex align-items-center font-weight-bold js-add-new-header"
          >
            Add new header
            <i className="ml-2 larger-icon" aria-hidden="true">
              <FaPlus className="d-block" />
            </i>
          </button>
        </div>
      </div>

      <ModalButtons>
        <button className="font-weight-bold btn btn-block btn-colored">
          Update
        </button>
      </ModalButtons>
    </Modal>
  );
};

const MockAddWebhookModal: FC = () => {
  return (
    <Modal
      id="add-webhook-modal"
      className="webhook"
      dismiss
      rounded
      open={true}
      title="Add a new webhook"
    >
      <div className="modal-webhooks">
        <div className="form-group mt-0 mb-4">
          <label className="mb-2 font-weight-bold" htmlFor="event-type">
            Event type
          </label>
          <div className="position-relative select-wrapper">
            <select className="position-relative form-control" id="event-type">
              <option>Artifact Created</option>
              <option>Foo</option>
              <option>Bar</option>
              <option>Foo Bar</option>
            </select>
            <i className="position-absolute" aria-hidden="true">
              <FaAngleDown className="d-block" />
            </i>
          </div>
        </div>
        <div className="form-group mt-0 mb-4">
          <label className="mb-2 font-weight-bold" htmlFor="select-method">
            Method
          </label>
          <div className="position-relative select-wrapper">
            <select
              className="position-relative form-control"
              id="select-method"
            >
              <option>POST</option>
              <option>GET</option>
            </select>
            <i className="position-absolute" aria-hidden="true">
              <FaAngleDown className="d-block" />
            </i>
          </div>
        </div>
        <div className="form-group mt-0 mb-4">
          <label className="mb-2 font-weight-bold" htmlFor="url">
            URL
          </label>
          <div className="input-group">
            <input
              type="text"
              id="url"
              className="form-control px-3 py-0"
              placeholder="URL"
              value="examplevalue.com"
            />
          </div>
        </div>

        <div className="modal-webhooks-title py-4 font-weight-bold">
          Headers
        </div>
        <div className="px-3 py-3 rounded modal-webhook-item saved">
          <div
            className="remove-add-header text-right js-remove-add-header"
            title="remove"
          >
            <i aria-hidden="true">
              <FaTimes className="d-inline-block" />
            </i>
          </div>
          <div className="form-group mb-0">
            <label className="mb-2 font-weight-bold" htmlFor="key-01">
              Key
            </label>
            <div className="input-group">
              <input
                type="text"
                id="key-01"
                className="form-control px-3 py-0"
                value="asfasdfsdfsdfasdlfhasd;glhasg609384102974adfas;dl9"
              />
            </div>
          </div>
          <div className="form-group mt-4 mb-0">
            <label className="mb-2 font-weight-bold" htmlFor="value-01">
              Value
            </label>
            <div className="input-group">
              <input
                type="text"
                id="value-01"
                className="form-control px-3 py-0"
                value="asfasdfsdfsdfasdlfhasd;glhasg609384102974adfas;dl9"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 add-new">
          <button
            type="button"
            className="btn btn-bordered border-0 d-flex align-items-center font-weight-bold js-add-new-header"
          >
            Add new header
            <i className="ml-2 larger-icon" aria-hidden="true">
              <FaPlus className="d-block" />
            </i>
          </button>
        </div>
      </div>

      <ModalButtons>
        <button className="font-weight-bold btn btn-block btn-colored">
          Add webhook
        </button>
      </ModalButtons>
    </Modal>
  );
};

const MockMediaCDNModal: FC = () => {
  return (
    <Modal
      id="cdn-setting-modal"
      dismiss
      rounded
      size="small"
      open={true}
      title="Are you sure?"
    >
      <div
        className="alert alert-warning mb-4 p-0 border-0 d-flex c-alert"
        role="alert"
      >
        <div className="alert-icon px-1 d-flex align-items-center">
          <i aria-hidden="true">
            <FaExclamationTriangle className="d-block" />
          </i>
        </div>
        <div className="alert-body px-3 py-2 flex-grow-1">
          <p className="mb-0">
            Turning off the Media CDN will remove all of your media files from
            storage and cannot be undone Please back up all media files before
            turning the Media CDN off.
          </p>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="delete-form">
          Type <b className="c-caution-color">media</b> to confirm
        </label>
        <input
          type="text"
          className="form-control"
          id="delete-form"
          placeholder="media"
        />
      </div>

      <ModalButtons className="pt-4">
        <button
          type="button"
          className="font-weight-bold btn btn-block btn-colored btn-caution"
        >
          Turn off Media CDN
        </button>
      </ModalButtons>
    </Modal>
  );
};

const meta: Meta = {
  title: 'Mockup/Layouts/Modal',
  component: Modal,
  argTypes: {
    type: {
      options: [
        'mediaCDN',
        'addWebhook',
        'deleteWebhook',
        'editWebhook',
        'modal',
      ],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
export default meta;

const ModalTemplate: Story<{
  type: string;
}> = (args) => {
  switch (args.type) {
    case 'mediaCDN':
      return <MockMediaCDNModal />;
    case 'addWebhook':
      return <MockAddWebhookModal />;
    case 'deleteWebhook':
      return <MockDeleteWebhookModal />;
    case 'editWebhook':
      return <MockEditWebhookModal />;
    default: {
      return (
        <Modal
          {...{
            open: true,
            title: 'Hello',
            dismiss: true,
          }}
        >
          <h1>content</h1>
          <ModalButtons></ModalButtons>
        </Modal>
      );
    }
  }
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ExamplesModal = ModalTemplate.bind({});
ExamplesModal.args = {
  type: 'modal',
};
