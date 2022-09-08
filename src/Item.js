import React from "react";
import { Card, Divider, Alert } from "antd";

function Item({ quote, context }) {
  return (
    <div>
      <Card style={{ width: 300 }}>
        <Card.Grid style={{ width: "100%" }}>
          <Alert message={quote} type="info" />
          <Divider orientation="left" plain>
            出自
          </Divider>
          {context}
        </Card.Grid>
      </Card>
    </div>
  );
}

export default Item;
