const openMediaDevices = async (videoElement) => {
    const options = {video: true, audio: true}
    return await navigator.mediaDevices.getDisplayMedia(options);
}

async function updateVideoSource(videoId) {
    let videoElement = document.getElementById(videoId);
    
    try {
        const stream = await openMediaDevices(videoElement)
        videoElement.srcObject = stream;

    } catch (error) {
      console.error("Error accessing media devices.", error)
    }


}