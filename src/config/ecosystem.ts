export const ECOSYSTEM = {
  web: "https://yuristim.pp.ua",
  info: "https://info.yuristim.pp.ua",
  miniApp: "https://miniapp.yuristim.pp.ua",
  bot: "https://t.me/Yuristim_bot",
  lawyers: "https://yuristlar.yuristim.pp.ua",
  literature: "https://adabiyot.yuristim.pp.ua",
  samples: "https://namunalar.yuristim.pp.ua",
  documentBeta: "https://beta.hujjat.yuristim.pp.ua",
  publicOffer: "https://yuristim.pp.ua/ommaviyofferta",
  firstAdmission: "https://yuristim.pp.ua/birinchiqabul",
} as const;

export type EcosystemKey = keyof typeof ECOSYSTEM;

export const ECOSYSTEM_NODES = [
  { key: "web", label: "Web", short: "WEB" },
  { key: "miniApp", label: "Mini App", short: "MINI" },
  { key: "bot", label: "Telegram Bot", short: "BOT" },
  { key: "lawyers", label: "Yuristlar", short: "YURIST" },
  { key: "literature", label: "Adabiyot", short: "BILIM" },
  { key: "samples", label: "Namunalar", short: "NAMUNA" },
  { key: "documentBeta", label: "Hujjat Beta", short: "HUJJAT" },
] as const;
