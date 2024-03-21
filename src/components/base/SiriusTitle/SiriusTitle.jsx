import {Typography} from "antd";
import PropTypes from "prop-types";

const { Title } = Typography;

export const SiriusTitle = ({title, level}) => {

    return (
        <Title level={level}>
            {title}
        </Title>
    )
}

SiriusTitle.propTypes = {
    title: PropTypes.string,
    level: PropTypes.oneOf([2, 3, 4, 5]),
}
