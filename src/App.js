import { Layout, Menu, Button, Row, Col } from "antd";
import React, { useState } from "react";
import "./App.css";
import Item from "./Item";
import { quotes } from "./quotes";

const { Header, Content } = Layout;
function App() {
  const [create, setCreate] = useState(false);
  const [randomQuote, setRandomQuote] = useState("");

  return (
    <div style={{ height: "100vh" }}>
      <Layout>
        <Header className="header">
          <div style={{ color: "#f0f2f5", fontSize: "24px" }}>K的语录</div>
          <Menu theme="light" mode="inline" />
        </Header>
        <Layout>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div>
                <div style={{margin: '12px 0'}}> 自08-30-2022, 记录K的日常语录</div>
                <Button
                  onClick={() => {
                    const random = Math.floor(Math.random() * quotes.length);
                    setRandomQuote(quotes[random]);
                    setCreate(true);
                  }}
                >
                  {!create ? '接受K的洗礼' : '再来一条'}
                </Button>
                <Row>
                  <Col span={12}></Col>
                  <Col span={12}>
                    {create && (
                      <Item quote={randomQuote[0]} context={randomQuote[1]} />
                    )}
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
