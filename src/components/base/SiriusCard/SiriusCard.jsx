import {Card} from "antd";
import PropTypes from "prop-types";

export const SiriusCard = ({children, title, bordered, style}) => {

    return (
        <Card title={title} bordered={bordered} style={style}>
            {children}
        </Card>
    )
}

SiriusCard.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    bordered: PropTypes.bool,
    style: PropTypes.object
}
