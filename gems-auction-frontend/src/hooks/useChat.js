import chatService from "../services/chatService";
import { useChatStore } from "../store/chatStore";

export default function useChat() {
    const { messages, addMessage, setMessages } = useChatStore();

    const sendMessage = async (auctionId, message) => {
        const msg = await chatService.sendMessage(auctionId, message);
        addMessage(msg);
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
