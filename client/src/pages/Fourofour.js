import { Result,Button} from "antd";
import React from "react";

function Fourofour() {
  return   <Result
  status="warning"
  title="The Page Not found"
  extra={
    <Button type="primary" key="console">
      Go to Home Page
    </Button>
  }
/>
}

export default Fourofour;
