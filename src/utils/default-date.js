export const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
  .toISOString()
  .split("T")[0];

export const toDate = new Date().toISOString().split("T")[0];
