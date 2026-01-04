import { useEffect, useState } from "react";
import { PeopleListType } from "../types/types";
import { getPeopleList } from "../service/service";
import styles from "./MainPage.module.less";
import { Card, Col, Pagination, Row, Spin } from "antd/lib";
import { Text, TextAlign, TextSize } from "../../../shared/ui/Text/Text";
import { DEFAULT_ELEMENT_SIZE, DEFAULT_PAGE_SIZE } from "../../../shared/const/const";

const MainPage = () => {
  const [people, setPeople] = useState<PeopleListType | null>(null);
  const [page, setPage] = useState<number>(DEFAULT_PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  console.log(loading);
  const getData = () => {
    setLoading(true);
    getPeopleList(page, DEFAULT_ELEMENT_SIZE)
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
        <Row gutter={[50, 10]} justify={"space-between"} align={"middle"}>
          {loading === true ? (
            <Col span={24}>
              <Row align={"middle"} justify={"center"}>
                <Spin size="large" />
              </Row>
            </Col>
          ) : (
            people &&
            people.results.map((card) => (
              <Col span={10}>
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
          showSizeChanger={false}
          defaultCurrent={1}
          total={people?.total_records}
          onChange={(page: number) => {
            setPage(page);
          }}
        />
      </Col>
    </Row>
  );
};

export default MainPage;

// import styles from "./MainPage.module.less";
// import { getPeopleList } from "../service/service";
// import { PeopleListType } from "../types/types";
// import { Card, Col, Pagination, Row, Spin } from "antd";
// import { Text, TextAlign, TextSize } from "../../../shared/ui/Text/Text";
// import { DEFAULT_PAGE_SIZE } from "../../../shared/const/const";

// const MainPage = () => {
//   const [people, setPeople] = useState<PeopleListType | null>(null);
//   const [loading, setLoading] = useState(false);

//   const getData = () => {
//     setLoading(true);
//     getPeopleList(1)
//       .then((res) => setPeople(res.data))
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <Row className={styles.MainPage} gutter={[20, 0]}>
//       <Col span={24}>
//         <Text title={"People"} align={TextAlign.CENTER} />
//       </Col>
//       <Col span={24}>
//         <Row gutter={[50, 10]} justify={"center"}>
//           {loading === true ? (
//             <Spin size="large" />
//           ) : (
//             people &&
//             people.results.map((card) => (
//               <Col span={9} key={card.url}>
//                 <Card className={styles.card}>
//                   <Text
//                     text={card.name}
//                     align={TextAlign.CENTER}
//                     size={TextSize.L}
//                   />
//                 </Card>
//               </Col>
//             ))
//           )}
//         </Row>
//       </Col>
//       <Col span={24}>

//       </Col>
//     </Row>
// );
// };
// export default MainPage;
