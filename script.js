const reelLink = document.getElementById("reelLink");
const btn = document.getElementById("btn");

btn.addEventListener("click", async (e) => {
  const inputVal = reelLink.value;
  console.log(inputVal);

  const apiEndpoint = `https://instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com/get-info-rapidapi?url=${encodeURIComponent(
    inputVal
  )}`;

  async function getReelData() {
    try {
      const response = await fetch(apiEndpoint, {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com",
          "x-rapidapi-key":
            "818547371emsh837b62b916a0a22p1e39eajsn16b55e18d806",
          useQueryString: true,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }

      const data = await response.json();
      console.log(data);

      const downloadUrl = data.download_url;
      console.log("Download URL:", downloadUrl);

      if (downloadUrl) {
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = data.caption;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error("Error fetching the data:", error);
    }
  }

  await getReelData();
});
