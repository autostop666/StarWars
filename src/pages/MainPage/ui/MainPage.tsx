import { useEffect, useState } from "react";
import styles from "./MainPage.module.less";
import { getPeopleList } from "../service/service";
import { PeopleListType } from "../types/types";
import { Card, Col, Pagination, Row, Spin } from "antd";
import { Text, TextAlign, TextSize } from "../../../shared/ui/Text/Text";
import { DEFAULT_PAGE_SIZE } from "../../../shared/const/const";

const MainPage = () => {
  const [people, setPeople] = useState<PeopleListType | null>(null);
  const [page, setPage] = useState<number>(DEFAULT_PAGE_SIZE);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    getPeopleList(page)
      .then((res) => setPeople(res.data))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <Row className={styles.MainPage} gutter={[20, 0]}>
      <Col span={24}>
        <Text title={"People"} align={TextAlign.CENTER} />
      </Col>
      <Col span={24}>
        <Row gutter={[50, 10]} justify={"center"}>
          {loading === true ? (
            <Spin size="large" />
          ) : (
            people &&
            people.results.map((card) => (
              <Col span={9} key={card.url}>
                <Card className={styles.card}>
                  <Text
                    text={card.name}
                    align={TextAlign.CENTER}
                    size={TextSize.L}
                  />
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Col>
      <Col span={24}>
        <Pagination
          align="center"
          defaultCurrent={1}
          showSizeChanger={false}
          total={people?.count}
          onChange={(page: number) => {
            setPage(page);
          }}
        />
      </Col>
    </Row>
  );
};
export default MainPage;
