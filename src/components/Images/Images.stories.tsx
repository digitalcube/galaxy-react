import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
    ImageCreated,
    ImageDigitalcubeLogo,
    ImageShifterLogo,
    ImageLoginInformation,
    ImageNoDeploy,
    ImageNoMembers,
    ImageNoSiteManage,
    ImageNoTeams,
    ImageNoThumbnail,
    ImageNoWebhook,
    ImagePlanFree,
    ImagePlanTier1,
    ImagePlanTier2,
    ImagePlanTier3,
    ImageSendEmail,
    ImageSuccessCreateTeam,
} from './index'
import { ImageProps } from './interfaces'
type ImageStory = Story<ImageProps>

const meta: Meta = {
  title: 'Components/Images',
  component: ImageCreated,
};

export default meta;


// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
const DefaultTemplate: ImageStory = props => (
        <>
            <ImageCreated {...props} />
            <ImageDigitalcubeLogo {...props} />
            <ImageShifterLogo {...props} />
            <ImageLoginInformation {...props} />
            <ImageNoDeploy {...props} />
            <ImageNoMembers {...props} />
            <ImageNoSiteManage {...props} />
            <ImageNoTeams {...props} />
            <ImageNoThumbnail {...props} />
            <ImageNoWebhook {...props} />
            <ImagePlanFree {...props} />
            <ImagePlanTier1 {...props} />
            <ImagePlanTier2 {...props} />
            <ImagePlanTier3 {...props} />
            <ImageSendEmail {...props} />
            <ImageSuccessCreateTeam {...props} />
        </>
);
export const Default = DefaultTemplate.bind({});
Default.args = {
    width: '250px',
    style: {
        margin: '10px'
    }
}