import React, { FC } from "react";
import { Meta, Story } from '@storybook/react';
import {
    Footer, ImageLoginInformation, ImageShifterLogo,
    AuthFormHeader, FormField, FeaturePromotionBlock, PasswordWithConfirmation, Layouts
} from "../../src";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";


const MockTwoColumns: FC = () => (
	<Layouts variant="login" footer={<Footer serviceName="Shifter" />}>
		<div className="mx-auto d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between login-column">
			<div className="login mx-3 px-4 py-4 rounded">
                <form noValidate>
                    <AuthFormHeader
                        logo={<ImageShifterLogo width="36" height="46" alt="Shifter" />}
                        title="Log In"
                        link="/signup"
                        linkText="sign up"
                        variant="login"
                        
                    />
                    <FormField
                        id="username"
                        label="Username or email"
                        icon={<FaUser className="d-block" />}
                        onChange={() => undefined}
                        type="text"
                        value=""
                    />
                    <FormField
                        id="password"
                        label="Password"
                        icon={<FaLock  className="d-block"/>}
                        onChange={() => undefined}
                        type="password"
                        value=""
                    />
                    <div className="form-group form-check d-flex align-items-center colored-check smaller">
                        <input type="checkbox" className="screen-reader-text form-check-input" id="remember"/>
                        <label className="form-check-label" htmlFor="remember">Remember me</label>
                    </div>
                    <button type="submit" className="mt-4 font-weight-bold btn btn-block btn-login" disabled>Log In</button>
                    <div className="forget-password"><a href="#" target="_blank">Forgot Password?</a></div>
                </form>
			</div>
            <FeaturePromotionBlock
                image={<ImageLoginInformation width="153" height="141" alt=""/>}
                title="Faster Build Times"
                description="Customize Shifter settings for up to 70% faster build times."
                link="#"
                linkText="Learn about Shifter Media CDN"
            />
		</div>
	</Layouts>
    
)

const MockOneColumns: FC = () => (
	<Layouts variant="signup" footer={<Footer serviceName="Shifter" />}>
		<form className="signup px-4 py-4 rounded">
            <AuthFormHeader
                logo={<ImageShifterLogo width="36" height="46" alt="Shifter" />}
                title="Get Started"
                link="/"
                linkText="log in"
                variant="signup"
            />
            <FormField
                id="email"
                label="Email"
                icon={<FaEnvelope className="d-block" />}
                onChange={() => undefined}
                type="text"
                value=""
            />
            <FormField
                id="username"
                label="Username"
                icon={<FaUser className="d-block" />}
                onChange={() => undefined}
                type="text"
                value=""
            />
            <FormField
                id="password"
                label="Choose a Password"
                onChange={() => undefined}
                type="password"
                value=""
            />
            <PasswordWithConfirmation
                label="Choose a Password"
                id="password"
                value=""
                confirmValue=""
                placeholder="Password"
                confirmPlaceholder="Re enter Password"
                onChange={() => undefined}
                onChangeConfirm={() => undefined}
            />
			<button type="submit" className="mt-4 font-weight-bold btn btn-block btn-signup" disabled>Create Account</button>
		</form>
	</Layouts>
)

const meta: Meta = {
  title: 'Mockup/Layouts/PublicPageLayout',
  component: MockTwoColumns,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <MockTwoColumns {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const TwoColumns = Template.bind({});
const Template2: Story = args => <MockOneColumns {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const OneColumns = Template2.bind({});