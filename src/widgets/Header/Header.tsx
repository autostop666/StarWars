import { Col, Row } from "antd/lib";
import { NavLink } from "react-router-dom";
import styles from './Header.module.less'
import { Text, TextWeight } from "../../shared/ui/Text/Text";

const Header = () => {
    return(
        <Row className={styles.Header} justify={"center"} align={'middle'}>
            <Col span={24}>
                <Row gutter={[20, 20]} justify={"center"} align={'middle'}>
                    <Col>
                        <NavLink to={'/'}><Text text={'Главная'} weight={TextWeight.SEMIBOLD}/></NavLink>
                    </Col>
                    <Col>
                        <NavLink to={'/applications'}><Text text={'Заявки'} weight={TextWeight.SEMIBOLD}/></NavLink>
                    </Col>
                    <Col>
                        <NavLink to={'/wehicles'}><Text text={'Корабли'} weight={TextWeight.SEMIBOLD}/></NavLink>
                    </Col>
                    <Col>
                        <NavLink to={'/place'}><Text text={'Место проживания'} weight={TextWeight.SEMIBOLD}/></NavLink>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Header;