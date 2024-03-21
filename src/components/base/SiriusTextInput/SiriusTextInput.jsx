import {Input} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import PropTypes from "prop-types";

export const SiriusTextInput = ({type, onChange, placeholder}) => {

    return (
        type === 'password' ?
            <Input.Password
                onChange={onChange}
                placeholder={placeholder}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            /> :
            <Input onChange={onChange} placeholder={placeholder} />
    )
}

SiriusTextInput.propTypes = {
    type: PropTypes.oneOf(['password', 'text']),
    onChange: PropTypes.func,
    placeholder: PropTypes.string
}

SiriusTextInput.defaultProps = {
    type: 'text'
}
