export { PlayerSide } from './scoreboard'

export type MessageMap = {
  timerStart: {};
  timerStop: {};
  timerReset: {};
  types: {};
  calcTopcutKPs: {};
  getPlayerName: { data: { id: number; playerSide: PlayerSide } };
  getParty: { data: { accountId: string; playerSide: PlayerSide; partyNum?: number } };
};
