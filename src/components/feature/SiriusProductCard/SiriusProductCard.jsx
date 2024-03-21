import {SiriusCard} from "../../base/SiriusCard/SiriusCard.jsx";
import {SiriusTitle} from "../../base/SiriusTitle/SiriusTitle.jsx";
import {SiriusImage} from "../../base/SiriusImage/SiriusImage.jsx";
import {SiriusText} from "../../base/SiriusText/SiriusText.jsx";
import {SiriusButton} from "../../base/SiriusButton/SiriusButton.jsx";
import PropTypes from "prop-types";

export const SiriusProductCard = ({imageUrl, title, description, productUrl}) => {

    return (
        <SiriusCard style={{width: 400}} title={title}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <SiriusImage src={imageUrl} height={100} width={300} />
                <SiriusTitle level={5} title={'Description'} />
                <SiriusText>{description}</SiriusText>
                <SiriusText type={"link"} href={productUrl}>View product</SiriusText>
                <SiriusButton type={'primary'}>Buy now</SiriusButton>
            </div>
        </SiriusCard>
    )
}

SiriusProductCard.propTypes = {
    imageUrl: PropTypes.string,
    productUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}
