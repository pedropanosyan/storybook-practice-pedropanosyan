import {SiriusSignUp} from "../../components/feature/SiriusSignUp/SiriusSignUp.jsx";
import { userEvent, within } from '@storybook/test';

export default {
    title: "Components/composed/SignUp",
    component: SiriusSignUp,

}

const Template = (args) => <SiriusSignUp {...args} />;

export const Default = Template.bind({});
Default.args = {
}

export const SuccessfulSignUpPlay = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Simulate typing into the full name input field
        await userEvent.type(canvas.getByPlaceholderText('Full name'), 'John Doe');

        await userEvent.type(canvas.getByPlaceholderText('Email'), 'john.doe@example.com');

        await userEvent.type(canvas.getByPlaceholderText('Password'), 'password123');

        await userEvent.type(canvas.getByPlaceholderText('Confirm password'), 'password123');

        await userEvent.click(canvas.getByText('Sign up'));
    },
};

export const UnsuccessfulSignUpPlay = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await userEvent.type(canvas.getByPlaceholderText('Full name'), 'John Doe');

        await userEvent.type(canvas.getByPlaceholderText('Email'), 'Error');

        await userEvent.type(canvas.getByPlaceholderText('Password'), 'password123');

        await userEvent.type(canvas.getByPlaceholderText('Confirm password'), 'password123');

        await userEvent.click(canvas.getByText('Sign up'));
    },
}