// VIX OHLC data structure
export interface VixDataPoint {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  adjClose: number;
}

// Parse the CSV data into a structured format
export const vixData: VixDataPoint[] = [
  {
    date: "2025-01-31",
    open: 15.45,
    high: 17.09,
    low: 14.9,
    close: 16.43,
    adjClose: 16.43
  },
  {
    date: "2025-01-30",
    open: 15.93,
    high: 16.42,
    low: 15.32,
    close: 15.84,
    adjClose: 15.84
  },
  {
    date: "2025-01-29",
    open: 16.42,
    high: 18.08,
    low: 16.17,
    close: 16.56,
    adjClose: 16.56
  },
  {
    date: "2025-01-28",
    open: 18.29,
    high: 18.39,
    low: 16.25,
    close: 16.41,
    adjClose: 16.41
  },
  {
    date: "2025-01-27",
    open: 18.83,
    high: 22.51,
    low: 17.57,
    close: 17.9,
    adjClose: 17.9
  },
  {
    date: "2025-01-24",
    open: 15.02,
    high: 15.16,
    low: 14.58,
    close: 14.85,
    adjClose: 14.85
  },
  {
    date: "2025-01-23",
    open: 15.28,
    high: 15.39,
    low: 14.59,
    close: 15.02,
    adjClose: 15.02
  },
  {
    date: "2025-01-22",
    open: 14.89,
    high: 15.29,
    low: 14.59,
    close: 15.1,
    adjClose: 15.1
  },
  {
    date: "2025-01-21",
    open: 16.29,
    high: 16.29,
    low: 14.93,
    close: 15.06,
    adjClose: 15.06
  },
  {
    date: "2025-01-17",
    open: 16.19,
    high: 16.23,
    low: 15.53,
    close: 15.97,
    adjClose: 15.97
  }
  // ... Add all the remaining data points
];

export function getFormattedDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function findDataByDate(date: string): VixDataPoint | undefined {
  return vixData.find(point => point.date === date);
}

export function findPreviousDay(date: string): VixDataPoint | undefined {
  const index = vixData.findIndex(point => point.date === date);
  if (index === -1) return undefined;
  return vixData[index + 1]; // Data is in reverse chronological order
}