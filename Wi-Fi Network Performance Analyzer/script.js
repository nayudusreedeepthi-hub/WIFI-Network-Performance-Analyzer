function analyzeNetwork() {

    const button = document.getElementById("analyzeBtn");
    const status = document.getElementById("analysisStatus");

    button.disabled = true;
    button.textContent = "⏳ Analyzing...";

    status.textContent = "Checking Wi-Fi performance...";

    setTimeout(function () {

        // Generate sample performance values
        const signal = Math.floor(Math.random() * 20) + 75;
        const download = Math.floor(Math.random() * 40) + 100;
        const upload = Math.floor(Math.random() * 20) + 30;
        const ping = Math.floor(Math.random() * 20) + 15;

        // Update values
        document.getElementById("signal").textContent =
            signal + "%";

        document.getElementById("signalBar").style.width =
            signal + "%";

        document.getElementById("download").textContent =
            download;

        document.getElementById("upload").textContent =
            upload;

        document.getElementById("ping").textContent =
            ping;

        // Calculate quality
        let quality = 0;

        quality += signal * 0.4;
        quality += Math.min(download / 2, 50) * 0.4;
        quality += Math.max(0, 30 - ping) * 0.2;

        quality = Math.round(Math.min(100, quality));

        document.getElementById("qualityScore").textContent =
            quality;

        // Quality message
        const title =
            document.getElementById("qualityTitle");

        const description =
            document.getElementById("qualityDescription");

        if (quality >= 85) {

            title.textContent = "Excellent";
            title.style.color = "#16a34a";

            description.textContent =
                "Your Wi-Fi network is performing very well.";

        } else if (quality >= 70) {

            title.textContent = "Good";
            title.style.color = "#2563eb";

            description.textContent =
                "Your Wi-Fi network performance is good.";

        } else if (quality >= 50) {

            title.textContent = "Average";
            title.style.color = "#ca8a04";

            description.textContent =
                "Your network may need some improvement.";

        } else {

            title.textContent = "Poor";
            title.style.color = "#dc2626";

            description.textContent =
                "Your Wi-Fi connection needs improvement.";
        }

        // Recommendations
        updateRecommendations(signal, download, ping);

        status.textContent =
            "✅ Network analysis completed successfully.";

        button.disabled = false;
        button.textContent = "🔄 Analyze Again";

    }, 2000);
}


// Recommendations

function updateRecommendations(signal, download, ping) {

    const list =
        document.getElementById("recommendations");

    list.innerHTML = "";

    if (signal >= 80) {

        addRecommendation(
            "✅ Signal strength is excellent."
        );

    } else if (signal >= 60) {

        addRecommendation(
            "⚡ Signal strength is moderate. Consider moving closer to the router."
        );

    } else {

        addRecommendation(
            "⚠️ Weak Wi-Fi signal. Move closer to the router."
        );
    }


    if (download >= 100) {

        addRecommendation(
            "✅ Download speed is suitable for streaming and online classes."
        );

    } else {

        addRecommendation(
            "⚠️ Download speed is relatively low."
        );
    }


    if (ping <= 30) {

        addRecommendation(
            "✅ Network latency is low."
        );

    } else {

        addRecommendation(
            "⚠️ High latency detected. Check network traffic."
        );
    }

    addRecommendation(
        "💡 Keep the router in an open and elevated location."
    );
}


// Add recommendation

function addRecommendation(text) {

    const list =
        document.getElementById("recommendations");

    const li = document.createElement("li");

    li.textContent = text;

    list.appendChild(li);
} s