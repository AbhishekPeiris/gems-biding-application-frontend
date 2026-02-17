import { useEffect, useRef } from "react";
import { useAuctionStore } from "../store/auctionStore";
import { useChatStore } from "../store/chatStore";

export default function useWebSocket(auctionId) {
    const socketRef = useRef(null);
    const { updateCurrentPrice } = useAuctionStore();
    const { addMessage } = useChatStore();

    useEffect(() => {
        if (!auctionId) return;

        const socket = new WebSocket(
            `ws://localhost:8081/ws/auction/${auctionId}`
        );

        socket.onopen = () => {
            console.log("WebSocket connected");
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.type === "BID_PLACED") {
                updateCurrentPrice(data.payload.new_high_bid);
            }

            if (data.type === "CHAT_MESSAGE") {
                addMessage(data.payload);
            }
        };

        socket.onclose = () => {
            console.log("WebSocket disconnected");
        };

        socketRef.current = socket;

        return () => {
            socket.close();
        };
    }, [auctionId]);

    return socketRef;
}
