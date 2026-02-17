import { useEffect } from "react";
import { useAuctionStore } from "../store/auctionStore";
import auctionService from "../services/auctionService";

export default function useAuction(auctionId) {
    const { auction, setAuction } = useAuctionStore();

    useEffect(() => {
        if (!auctionId) return;

        const loadAuction = async () => {
            const data = await auctionService.getAuction(auctionId);
            setAuction(data);
        };

        loadAuction();
    }, [auctionId, setAuction]);

    return { auction };
}
