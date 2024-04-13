import {SiriusTextInput} from "../../components/base/SiriusTextInput/SiriusTextInput.jsx";

export default {
    title: 'Components/common/Input',
    component: SiriusTextInput,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
}

const Template = (args) => <SiriusTextInput {...args} />;

export const TypeText = Template.bind({});
TypeText.args = {
    type: 'text',
    placeholder: 'Type your text here'
}

export const TypePassword = Template.bind({});
TypePassword.args = {
    type: 'password',
    placeholder: 'Type your password here'
}
