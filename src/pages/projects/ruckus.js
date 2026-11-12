import React from "react";
import DetailPage, { Card, Prose, Figure, FigureGrid, BulletList, StepGrid, BalancedGrid } from "../../components/DetailPage";
import { colors, fonts, fluid } from "../../components/styles";
import myTeam from "../../assets/images/ruckus/my_team.png";
import home from "../../assets/images/ruckus/home.png";
import matchups from "../../assets/images/ruckus/matchups.png";
import table from "../../assets/images/ruckus/table.png";
import players from "../../assets/images/ruckus/players.png";
import clubPopup from "../../assets/images/ruckus/club_popup.png";
import draftRoom from "../../assets/images/ruckus/draft_room.png";
import playoffBracket from "../../assets/images/ruckus/playoff_bracket.png";
import settings from "../../assets/images/ruckus/settings.png";
import phoneMyTeam from "../../assets/images/ruckus/phone_my_team.png";

const parts = [
  { name: "The site", text: "A Next.js 16 and TypeScript app. Inside a league there are pages for Draft, My Team, Matchups, Table, Players, Transfers, Chat and Settings." },
  { name: "Draft styles", text: "Turn-based, live auction, blind auction and salary cap (not finished). Draft order can be snake, straight, random or custom." },
  { name: "Play styles", text: "Total points, head-to-head, categorical head-to-head and all-play, with playoffs, losers brackets, bye weeks and matchups over 2 or 3 gameweeks." },
  { name: "Game engine", text: "Scoring, drafts, lineups, tables, playoffs, trades and waivers, kept apart from the screens. A rule stops the engine from importing any screen code." },
  { name: "Data pipeline", text: "Python that reads one downloaded match file, stores it in SQLite and writes the JSON files the site loads. Standard library only." },
  { name: "Pop-ups", text: "Players, clubs, matches and competitions each open a pop-up with results, coming games and stats." },
  { name: "Demo mode", text: "One link builds a set of made-up leagues, including a 16-team one, so every page has something to show." },
  { name: "Checks", text: "TypeScript and architecture rules in one command, tests for the game's rules in another, and every page checked at 390px wide." },
];

const highlights = [
  { value: "10", label: "Competitions with data, from the Premier League to the Champions League" },
  { value: "6,961", label: "Players across 3,157 matches, with up to 91 stats each" },
  { value: "30,800", label: "Lines of TypeScript in 113 files, plus 1,287 lines of Python" },
  { value: "104", label: "Dated changelog entries from July to November 2026" },
];

const results = [
  "Data for 10 competitions: the Premier League, EFL Championship, La Liga, Serie A, Bundesliga, Ligue 1, Liga Dimayor, and the Champions, Europa and Conference League.",
  "4 draft styles (salary cap is not finished) and 4 play styles, with playoffs, trades and waivers.",
  "14 tests for the game's rules, all passing. The architecture check covers 112 modules with no violations.",
  "About 17,000 lines of CSS on top of the TypeScript, with a phone layout for every page.",
];

const learned = [
  "How to run a project by writing clear requests, checking the result in a real browser and keeping a list of what is done and what is left.",
  "Why the game's rules should sit apart from the screens. It made the rules testable without a browser.",
  "Real football data is messy. Cups restart their round numbers at every stage, so I number a cup's gameweeks by matchday instead.",
  "A site can look finished and still be far from public. Accounts, a server, a data licence and legal pages all come first.",
];

const limitations = [
  "There is no backend. Leagues and accounts are saved in each browser's localStorage, so people can't play together across devices yet.",
  "The match data is scraped from SofaScore and kept off GitHub. The site can't go public until there is a licensed data feed.",
  "There is no live demo. Without the data files, the code in the repo has nothing to show.",
  "Salary cap drafts are not finished.",
  "Most pages are HTML templates written into the page, not React. Moving them over is planned, one page at a time.",
  "The fantasy teams, managers and chat in the screenshots are made-up test data.",
];

const gallery = [
  { src: myTeam, label: "My Team: the starting eleven on the pitch, with the bench beside it" },
  { src: home, label: "Home: the four draft styles, four play styles and ten competitions" },
  { src: matchups, label: "Matchups: a head-to-head game with both lineups side by side" },
  { src: table, label: "Table: league standings and position by gameweek, with the real competition under it" },
  { src: players, label: "Players: everyone in the competition, with filters, sorting and stat views" },
  { src: clubPopup, label: "A club's pop-up: its place in each competition, results, coming games and squad" },
  { src: draftRoom, label: "The draft room during a blind auction" },
  { src: playoffBracket, label: "A competition's play-off bracket, worked out from the table as it stands" },
  { src: settings, label: "League settings: members, teams, gameweeks and a tab for every rule" },
  { src: phoneMyTeam, label: "My Team at phone width (390px)" },
];

function Ruckus() {
  return (
    <DetailPage title="Ruckus Fantasy"
      stack="TypeScript · Next.js · React · CSS · Python · SQLite · Node.js · SofaScore match data">
      <Card label="Overview">
        <Prose>
          <p>A draft fantasy football (soccer) site. A group of friends makes a league, drafts real players, sets a lineup each gameweek and plays each other. The league picks how it drafts, how it wins and how every stat scores.</p>
          <p>This is a personal project. I decide what it does, how it looks and what gets built next, and I build it with Claude Code, which writes most of the code. I test every change in the browser and ask for what I want changed. It isn't public yet: it runs on my own computer, because the match data is scraped and there is no backend.</p>
        </Prose>
      </Card>
      <Card label="What I built">
        <StepGrid steps={parts} />
      </Card>
      <Card label="Key results">
        <BalancedGrid gap="10px" style={{ marginBottom: '14px' }}>
          {highlights.map((h) => (
            <div key={h.value} style={{ background: colors.surface2, borderRadius: '8px', padding: '10px 12px' }}>
              <div style={{ fontFamily: fonts.mono, fontSize: fluid(17, 21), fontWeight: 500, color: colors.accentInk, lineHeight: '1.2', marginBottom: '4px' }}>{h.value}</div>
              <div style={{ fontSize: fluid(12, 13), color: colors.muted, lineHeight: '1.45' }}>{h.label}</div>
            </div>
          ))}
        </BalancedGrid>
        <BulletList items={results} />
      </Card>
      <Card label="Screenshots">
        <FigureGrid min={480}>
          {gallery.map((g) => <Figure key={g.label} src={g.src} alt={g.label} caption={g.label} />)}
        </FigureGrid>
      </Card>
      <Card label="What I learned">
        <BulletList items={learned} />
      </Card>
      <Card label="Limitations">
        <BulletList items={limitations} />
      </Card>
    </DetailPage>
  );
}
export default Ruckus;
