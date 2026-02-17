import bidService from "../services/bidService";

export default function useBid() {
    const placeBid = async (auctionId, amount) => {
        await bidService.placeBid(auctionId, amount);
    };

    return { placeBid };
}
