export interface Analysis {
  id: string;
  count: number;
  date: string;
  type: AnalysisTypeEnum;
  time: string;
}

export enum AnalysisTypeEnum {
  USER = 1,
  ARTICLE = 2,
  POINT = 3,
}