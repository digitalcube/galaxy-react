import React from "react";
import { Meta, Story } from '@storybook/react';
import { SettingCard, SettingCardProps} from './SettingCard'
import { SettingCardButtons } from "./SettingCardButton";

const meta: Meta = {
  title: 'Components/SettingCard/SettingCard',
  component: SettingCard,
  parameters: {
    controles: {
      expanded: true,
    },
  },
};
export default meta;
const Template: Story<SettingCardProps> = (args) => (
  <SettingCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    title: 'Title',
    description: 'Description',
    children: 'Content'
};

const ButtonTemplate: Story<SettingCardProps> = (args) => (
    <SettingCard {...args}>
        <SettingCardButtons>
            <button onClick={e => e.preventDefault()}>Button 1</button>
        </SettingCardButtons>
    </SettingCard>
  );
  
export const Button = ButtonTemplate.bind({});
Button.args = {
    title: 'Title',
    description: 'Description'
};

const ButtonsTemplate: Story<SettingCardProps> = (args) => (
    <SettingCard {...args}>
        <SettingCardButtons>
            <button onClick={e => e.preventDefault()}>Button 1</button>
            <button onClick={e => e.preventDefault()}>Button 2</button>
        </SettingCardButtons>
    </SettingCard>
  );
  
export const Buttons = ButtonsTemplate.bind({});
Button.args = {
    title: 'Title',
    description: 'Description'
};
