import {SiriusButton} from "../../components/base/SiriusButton/SiriusButton.jsx";

export default {
    title: 'Components/common/Button',
    component: SiriusButton,
    argTypes: { onClick: { action: "onClick" } },
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
}

const Template = (args) => <SiriusButton {...args} />

export const Disabled = Template.bind({})
Disabled.args = {
    disabled: true,
    children: 'Press me',
    type: 'primary'
}

export const Primary = Template.bind({})
Primary.args = {
    children: 'Press me',
    type: 'primary'
}

export const Default = Template.bind({})
Default.args = {
    children: 'Press me',
    type: 'default'
}

export const Dashed = Template.bind({})
Dashed.args = {
    children: 'Press me',
    type: 'dashed'
}

export const Text = Template.bind({})
Text.args = {
    children: 'Press me',
    type: 'text'
}

export const Link = Template.bind({})
Link.args = {
    children: 'Press me',
    type: 'link'
}

export const Loading = Template.bind({})
Loading.args = {
    children: 'Press me',
    loading: true
}