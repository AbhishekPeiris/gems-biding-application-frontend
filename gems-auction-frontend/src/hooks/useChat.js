import chatService from "../services/chatService";
import { useChatStore } from "../store/chatStore";

export default function useChat() {
    const { messages, setMessages } = useChatStore();

    const sendMessage = async (auctionId, message) => {
        await chatService.sendMessage(auctionId, message);
        // ❌ DO NOT manually add
        // WebSocket will broadcast and add it
    };

    const loadMessages = async (auctionId) => {
        const res = await chatService.getMessages(auctionId);
        setMessages(res.messages);
    };

    return {
        messages,
        sendMessage,
        loadMessages,
    };
}
