export { PlayerSide } from './scoreboard'

export type MessageMap = {
  timerStart: {};
  timerStop: {};
  timerReset: {};
  types: {};
  ranking: {};
  getPlayerName: { data: { id: number; playerSide: PlayerSide } };
  getParty: { data: { accountId: string; playerSide: PlayerSide } };
};
