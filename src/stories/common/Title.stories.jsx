import {SiriusTitle} from "../../components/base/SiriusTitle/SiriusTitle.jsx";

export default {
    title: 'Components/common/Title',
    component: SiriusTitle,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
}

const Template = (args) => <SiriusTitle {...args} />;

export const XLarge = Template.bind({});
XLarge.args = {
    title: 'This is a title',
    level: 2
}

export const Large = Template.bind({});
Large.args = {
    title: 'This is a title',
    level: 3
}

export const Medium = Template.bind({});
Medium.args = {
    title: 'This is a title',
    level: 4
}

export const Small = Template.bind({});
Small.args = {
    title: 'This is a title',
    level: 5
}
