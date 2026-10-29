import React from "react";
import DetailPage, { Card, Prose, Video } from "../../components/DetailPage";
import rl1 from "../../assets/videos/rl1.mp4";
import rl2 from "../../assets/videos/rl2.mp4";

function Rl() {
  return (
    <DetailPage title="Reinforcement Learning"
      stack="Python · Stable-Baselines3 · A2C · Atari Learning Environment · Reinforcement Learning · Policy Gradients"
      links={[{ label: "View on GitHub", href: "https://github.com/lhosk/Intro-To-AI/tree/main/Reinforcement-Learning" }]}>
      <Card label="Overview">
        <Prose>
          <p>RL agents trained on classic Atari games using the Advantage Actor-Critic algorithm from Stable-Baselines3. My first step into reinforcement learning and policy-based optimization.</p>
          <p>Training used 12 parallel instances to accelerate learning through batch updates and increased exploration diversity. Pong required about 2.5 million steps to hit human-level performance. Freeway converged in only 100,000 steps due to its simpler state-action mapping.</p>
        </Prose>
      </Card>
      <Card label="Videos">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Video src={rl1} />
          <Video src={rl2} />
        </div>
      </Card>
    </DetailPage>
  );
}
export default Rl;
