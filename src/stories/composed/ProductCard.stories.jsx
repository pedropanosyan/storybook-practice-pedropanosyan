import {SiriusProductCard} from "../../components/feature/SiriusProductCard/SiriusProductCard.jsx";

export default {
    title: "Components/composed/ProductCard",
    component: SiriusProductCard
}

const Template = (args) => <SiriusProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
}

export const WithImage = Template.bind({});
WithImage.args = {
    imageUrl: 'https://via.placeholder.com/300x100',
    title: 'Product title',
    description: 'Product description',
}

export const WithProductUrl = Template.bind({});
WithProductUrl.args = {
    imageUrl: 'https://via.placeholder.com/300x100',
    title: 'Product title',
    description: 'Product description',
    productUrl: 'https://www.google.com'
}
