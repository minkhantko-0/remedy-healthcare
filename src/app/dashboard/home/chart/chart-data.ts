export var single = [12, 19, 3, 5, 20, 12, 32, 58];

export const pastWeekDays = [...Array(7).keys()].map((days) =>
    new Date(Date.now() - 86400000 * days).getDay()
);

export const pastWeekISO = [...Array(7).keys()].map((days) =>
    new Date(Date.now() - 86400000 * days).toISOString()
);
