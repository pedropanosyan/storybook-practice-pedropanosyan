import {Button} from "antd";
import PropTypes from "prop-types";

export const SiriusButton = ({children, type, disabled, loading, onClick}) =>  {

    return (
        <Button type={type} disabled={disabled} loading={loading} onClick={onClick}>
            {children}
        </Button>
    )
}

SiriusButton.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
}
