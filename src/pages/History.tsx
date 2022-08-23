import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";
import { Footer } from "../component/footer.tsx";

const Count = styled.div`
  text-align: center;
  font-size: 5rem;
`;

const Buttons = styled.div`
  text-align: center;
  
  & > button {
    margin: 0 8px;
  }
`;

const Title = styled.div`
  font-size: 30px;
`;

export const History = (): React.ReactElement => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <title>お散歩ぽん 過去の記録</title>

      <div>
        <Title>ルート</Title>
        <p>2022/8/11 1→2</p>
        <p>2022/8/11 2→3</p>
        <p>2022/8/11 西山公園駅 → 展望台</p><br />
      </div>

      <div>
        <Title>ホットスポット</Title><br />
      </div>

      <div>
        <Title>現在のランク</Title>
        <p>次のランクまで後~~</p>
      </div>


    </div>
  );
};