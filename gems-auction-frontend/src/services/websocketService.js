import { API_BASE_URL } from "./api";

function toWsBaseUrl(httpBase) {
    // http://localhost:8081 -> ws://localhost:8080
    // https://domain -> wss://domain
    if (httpBase.startsWith("https://")) return httpBase.replace("https://", "wss://");
    if (httpBase.startsWith("http://")) return httpBase.replace("http://", "ws://");
    return httpBase;
}

const WS_BASE_URL = toWsBaseUrl(API_BASE_URL);

const websocketService = {
    connectAuction(auctionId, { onOpen, onClose, onError, onEvent } = {}) {
        const ws = new WebSocket(`${WS_BASE_URL}/ws/auction/${auctionId}`);

        ws.onopen = () => onOpen?.();
        ws.onclose = () => onClose?.();
        ws.onerror = (e) => onError?.(e);

        ws.onmessage = (msg) => {
            try {
                const data = JSON.parse(msg.data);
                onEvent?.(data);
            } catch (e) {
                // ignore invalid json
            }
        };

        return {
            ws,
            close: () => ws.close(),
            sendJSON: (obj) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(obj));
                }
            },
        };
    },
};

export default websocketService;
