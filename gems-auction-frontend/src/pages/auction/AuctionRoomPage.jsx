import React from "react";
import { useParams } from "react-router-dom";
import useAuction from "../../hooks/useAuction";
import useWebSocket from "../../hooks/useWebSocket";
import useBid from "../../hooks/useBid";
import { useBidStore } from "../../store/bidStore";

import LiveVideoPlayer from "../../components/auction/LiveVideoPlayer";
import AuctionInfo from "../../components/auction/AuctionInfo";
import AuctionTimer from "../../components/auction/AuctionTimer";
import BidPanel from "../../components/auction/BidPanel";
import BidHistory from "../../components/auction/BidHistory";
import ChatBox from "../../components/chat/ChatBox";

export default function AuctionRoomPage() {
    const { id } = useParams();
    const { auction } = useAuction(id);
    const { placeBid } = useBid();
    const { bids } = useBidStore();

    useWebSocket(id);

    if (!auction) return <p>Loading...</p>;

    return (
        <div className="space-y-6">
            <LiveVideoPlayer
                streamUrl={auction.stream_url}
                status={auction.status}
            />

            <AuctionTimer endTime={auction.end_time} />

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <AuctionInfo auction={auction} />
                    <BidHistory bids={bids} />
                </div>

                <div className="space-y-6">
                    <BidPanel
                        auction={auction}
                        onPlaceBid={(amount) => placeBid(id, amount)}
                    />
                    <ChatBox auctionId={id} />
                </div>
            </div>
        </div>
    );
}
