import { AviatorProgress as TAviatorProgress } from "../api/aviatorProgress/AviatorProgress";

export const AVIATORPROGRESS_TITLE_FIELD = "id";

export const AviatorProgressTitle = (record: TAviatorProgress): string => {
  return record.id?.toString() || String(record.id);
};
