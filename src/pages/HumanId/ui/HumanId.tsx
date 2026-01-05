import { Col, Row } from "antd"
import { Text, TextAlign, TextSize } from "../../../shared/ui/Text/Text"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getHumanForId } from "../service/service"
import { HumanType } from "../types/types"
import styles from './HumanId.module.less'

const HumanId = () =>{
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')
    const [human, setHuman] = useState<HumanType | null>(null)
    useEffect(() =>{
        if(id)
        getHumanForId(id).then((res)=> setHuman(res.data));

        })
        , [id];

    
    return(
        <Row className={styles.HumanPage}>
            <Col span={24}>
                <Text title={human?.result.properties.name ?? "-" } align={TextAlign.CENTER}/>
            </Col>
            <Col span={18}>
                <Row align={'middle'} gutter={[10,10]}>
                    <Col span={24}>
                        <Text text={`gender ${human?.result.properties.gender ?? "-"}`} size={TextSize.L}/>
                    </Col>
                    <Col span={24}>
                        <Text text={`skin color ${human?.result.properties.skin_color ?? "-"}`}size={TextSize.L}/>
                    </Col>
                    <Col span={24}>
                        <Text text={`hair color ${human?.result.properties.hair_color ?? "-"}`} size={TextSize.L}/>
                    </Col>
                    <Col span={24}>
                        <Text text={`height ${human?.result.properties.height ?? "-"} cm`} size={TextSize.L}/>
                    </Col>
                    <Col span={24}>
                        <Text text={`eye color ${human?.result.properties.eye_color ?? "-"} `} size={TextSize.L}/>
                    </Col>
                    <Col span={24}>
                        <Text text={`mass ${human?.result.properties.mass ?? "-"} kg`} size={TextSize.L}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default HumanId


