export const ROLES = {
    ADMIN: "ADMIN",
    SELLER: "SELLER",
    BUYER: "BUYER",
};

export const AUCTION_STATUS = {
    SCHEDULED: "SCHEDULED",
    LIVE: "LIVE",
    ENDED: "ENDED",
};

export const GEM_STATUS = {
    AVAILABLE: "AVAILABLE",
    AUCTION: "AUCTION",
    SOLD: "SOLD",
};

// Event types from your Go WebSocket
export const WS_EVENTS = {
    WS_CONNECTED: "WS_CONNECTED",
    BID_PLACED: "BID_PLACED",
    CHAT_MESSAGE: "CHAT_MESSAGE",
};
