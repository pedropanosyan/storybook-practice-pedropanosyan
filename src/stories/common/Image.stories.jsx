import {SiriusImage} from "../../components/base/SiriusImage/SiriusImage.jsx";
import monkey from '../../assets/monkey.png';

export default {
    title: 'Components/common/Image',
    component: SiriusImage,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
}

const Template = (args) => <SiriusImage {...args} />;

export const Large = Template.bind({});
Large.args = {
    src: monkey,
    width: 300,
    height: 300,
}

export const Medium = Template.bind({});
Medium.args = {
    src: monkey,
    width: 200,
    height: 200,
}

export const Small = Template.bind({});
Small.args = {
    src: monkey,
    width: 100,
    height: 100,
}