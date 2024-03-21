import {Typography} from "antd";
import PropTypes from "prop-types";

const { Text, Link } = Typography;

export const SiriusText = ({children, type, href, target, variant}) => {

    return (
        type === 'link' ?
            <Link href={href} target={target}>{children}</Link> :
            <Text type={variant}>{children}</Text>
    )
}

SiriusText.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    target: PropTypes.string,
    type: PropTypes.oneOf(['link', 'text']),
    variant: PropTypes.oneOf(['default', 'secondary', 'warning', 'danger']),
}

SiriusText.defaultProps = {
    type: 'text',
    target: '_blank',
}
