import {SiriusText} from "../../components/base/SiriusText/SiriusText.jsx";

export default {
    title: 'Components/common/Text',
    component: SiriusText
}

const Template = (args) => <SiriusText {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'This is a default text'
}

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'This is a secondary text',
    variant: 'secondary'
}

export const Warning = Template.bind({});
Warning.args = {
    children: 'This is a warning text',
    variant: 'warning'
}

export const Danger = Template.bind({});
Danger.args = {
    children: 'This is a danger text',
    variant: 'danger'
}

export const Link = Template.bind({});
Link.args = {
    children: 'This is a link',
    type: 'link',
    href: 'https://www.google.com'
}

