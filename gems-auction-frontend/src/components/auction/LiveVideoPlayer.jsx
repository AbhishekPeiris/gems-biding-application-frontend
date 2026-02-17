import React from "react";
import Badge from "../common/Badge";

export default function LiveVideoPlayer({
    title = "Live Stream",
    streamUrl,
    status = "LIVE", // LIVE | OFFLINE
    className = "",
}) {
    const isYouTube =
        streamUrl && (streamUrl.includes("youtube.com") || streamUrl.includes("youtu.be"));

    return (
        <div className={["rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden", className].join(" ")}>
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
                <div className="font-semibold text-slate-200">{title}</div>
                <Badge variant={status === "LIVE" ? "live" : "neutral"}>
                    {status === "LIVE" ? "LIVE" : "OFFLINE"}
                </Badge>
            </div>

            <div className="aspect-video bg-slate-900">
                {streamUrl ? (
                    isYouTube ? (
                        <iframe
                            className="h-full w-full"
                            src={toYouTubeEmbed(streamUrl)}
                            title="YouTube stream"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    ) : (
                        // Simple video tag (works if browser supports the stream)
                        <video className="h-full w-full" controls autoPlay muted>
                            <source src={streamUrl} />
                            Your browser does not support video playback.
                        </video>
                    )
                ) : (
                    <div className="flex h-full items-center justify-center text-slate-500">
                        Stream URL not provided (Demo placeholder)
                    </div>
                )}
            </div>
        </div>
    );
}

function toYouTubeEmbed(url) {
    // Supports youtu.be/xxxx or youtube.com/watch?v=xxxx
    try {
        if (url.includes("youtu.be/")) {
            const id = url.split("youtu.be/")[1].split("?")[0];
            return `https://www.youtube.com/embed/${id}`;
        }
        if (url.includes("watch?v=")) {
            const id = url.split("watch?v=")[1].split("&")[0];
            return `https://www.youtube.com/embed/${id}`;
        }
    } catch { }
    return url;
}
