
export default function VideoPlayer() {
  return (
    <>
      <div className="video-part flex justify-center lg:my-[120px] mt-[30px]">
        <iframe
        title='title-track'
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fofficialnitex%2Fvideos%2F166978526192640%2F&show_text=false&width=267&t=0"
        width="267"
        height="476"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
      </div>
    </>
  );
}
