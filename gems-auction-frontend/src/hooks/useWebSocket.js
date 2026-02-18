import { useEffect, useRef } from "react";
import { useAuctionStore } from "../store/auctionStore";
import { useChatStore } from "../store/chatStore";

export default function useWebSocket(auctionId) {
    const socketRef = useRef(null);
    const { updateCurrentPrice } = useAuctionStore();
    const { addMessage } = useChatStore();

    useEffect(() => {
        if (!auctionId) return;

        // 🔥 Prevent duplicate connection
        if (socketRef.current) {
            socketRef.current.close();
        }

        const socket = new WebSocket(
            `ws://localhost:8081/ws/auction/${auctionId}`
        );

        socket.onopen = () => {
            console.log("✅ WebSocket connected");
        };

        socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);

                if (!data?.type) return;

                // 🔥 Handle bid update
                if (data.type === "BID_PLACED") {
                    updateCurrentPrice(data.payload.new_high_bid);
                }

                // 🔥 Handle chat message safely
                if (data.type === "CHAT_MESSAGE") {
                    if (!data.payload?.id) return; // prevent invalid
                    addMessage(data.payload); // duplicate protection handled in store
                }

            } catch (err) {
                console.error("WebSocket parse error:", err);
            }
        };

        socket.onerror = (err) => {
            console.error("WebSocket error:", err);
        };

        socket.onclose = () => {
            console.log("❌ WebSocket disconnected");
        };

        socketRef.current = socket;

        return () => {
            socket.close();
        };
    }, [auctionId, updateCurrentPrice, addMessage]);

    return socketRef;
}
