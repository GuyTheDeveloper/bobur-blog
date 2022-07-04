import { Spin, Row } from "antd";

export const Loader = () => {
  return (
    <Row align="middle" justify="center" style={{ height: "100%" }}>
      <Spin tip="Loading..." />
    </Row>
  );
};
