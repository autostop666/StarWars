import { Col, Row } from "antd/lib";
import CustomInput from "../../../shared/ui/Input/Input";
import styles from "./Application.module.less";
import { Text, TextAlign } from "../../../shared/ui/Text/Text";
import { Button } from "../../../shared/ui/Button/Button";
import { Form,  notification } from "antd";
import { postApplicationService } from "../service/service";

const ApplicationPage = () => {
  const [form] = Form.useForm();

  const postApplication = async() =>{
    const values = await form.validateFields();
    postApplicationService(
      {name: values.name, 
      phone: values.phone, 
      mail: values.mail});
      notification.success({message: 'Успешно отправлено!'});
      form.resetFields();
  };
  return (
    <Row
      align={"middle"}
      justify={"center"}
      className={styles.page}
      gutter={[20, 20]}
    >
      <Col span={24}>
        <Text title={"Заявки"} align={TextAlign.CENTER} />
      </Col>
      <Col span={3}>
        <Form form={form}>
          <Row gutter={[10, 15]} justify={"center"} align={"middle"}>
            <Form.Item
              name={"name"}
              style={{ marginBottom: 0 }}
              rules={[
                { required: true, message: "Обязательно для заполнения" },
              ]}
            >
              <Col span={24}>
                <CustomInput placeholder="Напишите имя" fullWidth={false} />
              </Col>
            </Form.Item>
            <Form.Item
              name={"phone"}
              style={{ marginBottom: 0 }}
              rules={[
                { required: true, message: "Обязательно для заполнения" },
                {
                  pattern: /^[0-9]+$/,
                  message: 'Телефон должен содержать только цифры!',
                },
                {
                  min: 11, message: 'Минимум 11',
                },
                {
                  max: 11, message: 'Максимум 11',
                }
              ]}
            >
              <Col span={24}>
                <CustomInput
                  placeholder="Напишите номер телефона"
                  fullWidth={false}
                />
              </Col>
            </Form.Item>
            <Form.Item
              name={"mail"}
              style={{ marginBottom: 0 }}
              rules={[
                { required: true, message: "Обязательно для заполнения" },
                {type: 'email', message: 'Введите корректный email'},
              ]}
            >
              <Col span={24}>
                <CustomInput placeholder="Напишите email" fullWidth={false} />
              </Col>
            </Form.Item>
            <Col span={24}>
              <Row align={"middle"} justify={"center"}>
                <Col>
                  <Button fullWidth={false} onClick={postApplication}>
                    Отправить
                    </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default ApplicationPage;
