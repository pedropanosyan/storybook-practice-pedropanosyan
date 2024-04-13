import {SiriusCard} from "../../components/base/SiriusCard/SiriusCard.jsx";

export default {
    title: 'Components/common/Card',
    component: SiriusCard,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
}

const Template = (args) => <SiriusCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Card title',
    children: 'Card content'
}

export const NotBordered = Template.bind({});
NotBordered.args = {
    children: 'Card content',
    title: 'Card title',
    bordered: false,
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
    children: 'Card content',
    title: 'Card title',
    style: { backgroundColor: 'lightblue', color: 'black', border: '2px solid black' },
};

export const NoTitle = Template.bind({});
NoTitle.args = {
    children: 'Card content',
};