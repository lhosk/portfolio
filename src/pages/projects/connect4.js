import React from "react";
import DetailPage, { Card, Prose } from "../../components/DetailPage";
import { colors, fonts } from "../../components/styles";

const files = [
  ['interface.py', 'Game visuals and UI'],
  ['main.py', 'Main game loop and win condition logic'],
  ['solver.py', 'AI implementations (Minimax and Alpha-Beta)'],
  ['textlog.py', 'Move history and performance metrics'],
];

function Connect4() {
  return (
    <DetailPage title="Connect 4: Minimax and Alpha-Beta Pruning"
      stack="Python · Pygame · Minimax Algorithm · Alpha-Beta Pruning · Adversarial Search · Game AI · OOP"
      links={[{ label: "View on GitHub", href: "https://github.com/lhosk/Intro-To-AI/tree/main/Connect-Four-Minimax-And-AB-Pruning" }]}>
      <Card label="Overview">
        <Prose>
          <p>A two-player Connect Four game with interactive visuals, user-selectable AI modes, and real-time logging. The user can choose between Minimax and Alpha-Beta Pruning AIs and decide who plays first. The system records all moves, time per decision, and total nodes searched.</p>
          <p>The Minimax agent can occasionally be beaten, but the Alpha-Beta Pruning version stays challenging and efficient.</p>
        </Prose>
      </Card>
      <Card label="Structure">
        <div style={{ fontFamily: fonts.mono, fontSize: '12.5px', fontWeight: 400 }}>
          {files.map(([name, what], i) => (
            <div key={name} style={{ display: 'flex', flexWrap: 'wrap', gap: '2px 14px', padding: '6px 0', borderTop: i ? `1px solid ${colors.border}` : 'none' }}>
              <span style={{ color: colors.text, fontWeight: 500, minWidth: '110px' }}>{name}</span>
              <span style={{ color: colors.muted }}>{what}</span>
            </div>
          ))}
        </div>
      </Card>
    </DetailPage>
  );
}
export default Connect4;
