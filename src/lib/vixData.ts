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
  },
  {
    date: "2025-01-16",
    open: 15.87,
    high: 16.6,
    low: 15.64,
    close: 16.6,
    adjClose: 16.6
  },
  {
    date: "2025-01-15",
    open: 19.08,
    high: 19.14,
    low: 15.96,
    close: 16.12,
    adjClose: 16.12
  },
  {
    date: "2025-01-14",
    open: 18.79,
    high: 19.66,
    low: 18.24,
    close: 18.71,
    adjClose: 18.71
  },
  {
    date: "2025-01-13",
    open: 21.18,
    high: 22.04,
    low: 19.15,
    close: 19.19,
    adjClose: 19.19
  },
  {
    date: "2025-01-10",
    open: 18.29,
    high: 20.31,
    low: 18.05,
    close: 19.54,
    adjClose: 19.54
  },
  {
    date: "2025-01-08",
    open: 17.91,
    high: 19.5,
    low: 17.37,
    close: 17.7,
    adjClose: 17.7
  },
  {
    date: "2025-01-07",
    open: 16.48,
    high: 18.9,
    low: 15.79,
    close: 17.82,
    adjClose: 17.82
  },
  {
    date: "2025-01-06",
    open: 16.77,
    high: 16.87,
    low: 15.71,
    close: 16.04,
    adjClose: 16.04
  },
  {
    date: "2025-01-03",
    open: 17.66,
    high: 17.94,
    low: 16.11,
    close: 16.13,
    adjClose: 16.13
  },
  {
    date: "2025-01-02",
    open: 17.21,
    high: 19.5,
    low: 16.96,
    close: 17.93,
    adjClose: 17.93
  },
  {
    date: "2024-12-31",
    open: 17.39,
    high: 17.81,
    low: 16.68,
    close: 17.35,
    adjClose: 17.35
  },
  {
    date: "2024-12-30",
    open: 17.21,
    high: 19.22,
    low: 16.44,
    close: 17.4,
    adjClose: 17.4
  },
  {
    date: "2024-12-27",
    open: 15.38,
    high: 18.45,
    low: 15.29,
    close: 15.95,
    adjClose: 15.95
  },
  {
    date: "2024-12-26",
    open: 14.99,
    high: 15.93,
    low: 14.55,
    close: 14.73,
    adjClose: 14.73
  },
  {
    date: "2024-12-24",
    open: 16.97,
    high: 17.04,
    low: 14.27,
    close: 14.27,
    adjClose: 14.27
  },
  {
    date: "2024-12-23",
    open: 18.09,
    high: 20.02,
    low: 16.74,
    close: 16.78,
    adjClose: 16.78
  },
  {
    date: "2024-12-20",
    open: 24.14,
    high: 26.51,
    low: 17.82,
    close: 18.36,
    adjClose: 18.36
  },
  {
    date: "2024-12-19",
    open: 21.61,
    high: 24.12,
    low: 20.16,
    close: 24.09,
    adjClose: 24.09
  },
  {
    date: "2024-12-18",
    open: 15.57,
    high: 28.32,
    low: 14.82,
    close: 27.62,
    adjClose: 27.62
  },
  {
    date: "2024-12-17",
    open: 14.98,
    high: 15.94,
    low: 14.78,
    close: 15.87,
    adjClose: 15.87
  },
  {
    date: "2024-12-16",
    open: 14.37,
    high: 14.69,
    low: 13.99,
    close: 14.69,
    adjClose: 14.69
  },
  {
    date: "2024-12-13",
    open: 13.57,
    high: 14.25,
    low: 13.24,
    close: 13.81,
    adjClose: 13.81
  },
  {
    date: "2024-12-12",
    open: 13.73,
    high: 13.95,
    low: 13.39,
    close: 13.92,
    adjClose: 13.92
  },
  {
    date: "2024-12-11",
    open: 14.42,
    high: 14.43,
    low: 13.52,
    close: 13.58,
    adjClose: 13.58
  },
  {
    date: "2024-12-10",
    open: 14.3,
    high: 14.54,
    low: 13.86,
    close: 14.18,
    adjClose: 14.18
  },
  {
    date: "2024-12-09",
    open: 13.36,
    high: 14.23,
    low: 13.35,
    close: 14.19,
    adjClose: 14.19
  },
  {
    date: "2024-12-06",
    open: 13.62,
    high: 13.74,
    low: 12.7,
    close: 12.77,
    adjClose: 12.77
  },
  {
    date: "2024-12-05",
    open: 13.46,
    high: 13.7,
    low: 13.26,
    close: 13.54,
    adjClose: 13.54
  },
  {
    date: "2024-12-04",
    open: 13.16,
    high: 13.61,
    low: 12.89,
    close: 13.45,
    adjClose: 13.45
  },
  {
    date: "2024-12-03",
    open: 13.38,
    high: 13.77,
    low: 13.19,
    close: 13.3,
    adjClose: 13.3
  },
  {
    date: "2024-12-02",
    open: 14.08,
    high: 14.1,
    low: 13.3,
    close: 13.34,
    adjClose: 13.34
  },
  {
    date: "2024-11-29",
    open: 14,
    high: 14.15,
    low: 13.49,
    close: 13.51,
    adjClose: 13.51
  },
  {
    date: "2024-11-27",
    open: 14.28,
    high: 15.13,
    low: 13.96,
    close: 14.1,
    adjClose: 14.1
  },
  {
    date: "2024-11-26",
    open: 14.95,
    high: 15.03,
    low: 13.88,
    close: 14.1,
    adjClose: 14.1
  },
  {
    date: "2024-11-25",
    open: 15.23,
    high: 15.72,
    low: 14.54,
    close: 14.6,
    adjClose: 14.6
  },
  {
    date: "2024-11-22",
    open: 16.67,
    high: 17.56,
    low: 15.24,
    close: 15.24,
    adjClose: 15.24
  },
  {
    date: "2024-11-21",
    open: 17.1,
    high: 17.99,
    low: 15.73,
    close: 16.87,
    adjClose: 16.87
  },
  {
    date: "2024-11-20",
    open: 16.19,
    high: 18.79,
    low: 16.04,
    close: 17.16,
    adjClose: 17.16
  },
  {
    date: "2024-11-19",
    open: 15.44,
    high: 17.93,
    low: 15.37,
    close: 16.35,
    adjClose: 16.35
  },
  {
    date: "2024-11-18",
    open: 16.6,
    high: 17,
    low: 15.35,
    close: 15.58,
    adjClose: 15.58
  },
  {
    date: "2024-11-15",
    open: 15.02,
    high: 17.55,
    low: 14.56,
    close: 16.14,
    adjClose: 16.14
  },
  {
    date: "2024-11-14",
    open: 14.17,
    high: 14.32,
    low: 13.59,
    close: 14.31,
    adjClose: 14.31
  },
  {
    date: "2024-11-13",
    open: 15.09,
    high: 15.26,
    low: 13.77,
    close: 14.02,
    adjClose: 14.02
  },
  {
    date: "2024-11-12",
    open: 15.09,
    high: 15.37,
    low: 14.69,
    close: 14.71,
    adjClose: 14.71
  },
  {
    date: "2024-11-11",
    open: 15.33,
    high: 15.56,
    low: 14.89,
    close: 14.97,
    adjClose: 14.97
  },
  {
    date: "2024-11-08",
    open: 15.13,
    high: 15.33,
    low: 14.66,
    close: 14.94,
    adjClose: 14.94
  },
  {
    date: "2024-11-07",
    open: 15.86,
    high: 15.86,
    low: 15.13,
    close: 15.2,
    adjClose: 15.2
  },
  {
    date: "2024-11-06",
    open: 16.06,
    high: 16.82,
    low: 15.44,
    close: 16.27,
    adjClose: 16.27
  },
  {
    date: "2024-11-05",
    open: 21.98,
    high: 22.06,
    low: 20.2,
    close: 20.49,
    adjClose: 20.49
  },
  {
    date: "2024-11-04",
    open: 22.5,
    high: 23.07,
    low: 21.73,
    close: 21.98,
    adjClose: 21.98
  },
  {
    date: "2024-11-01",
    open: 22.96,
    high: 23.09,
    low: 21.16,
    close: 21.88,
    adjClose: 21.88
  },
  {
    date: "2024-10-31",
    open: 21.44,
    high: 23.42,
    low: 21.12,
    close: 23.16,
    adjClose: 23.16
  },
  {
    date: "2024-10-30",
    open: 19.33,
    high: 20.44,
    low: 19.3,
    close: 20.35,
    adjClose: 20.35
  },
  {
    date: "2024-10-29",
    open: 19.75,
    high: 20.53,
    low: 19.06,
    close: 19.34,
    adjClose: 19.34
  },
  {
    date: "2024-10-28",
    open: 19.11,
    high: 19.88,
    low: 18.91,
    close: 19.8,
    adjClose: 19.8
  }
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