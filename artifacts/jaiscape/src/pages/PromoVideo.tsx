import VideoTemplate from '@/components/video/VideoTemplate';

export default function PromoVideo() {
  return (
    <div className="fixed inset-0 bg-[#0d0c0a]">
      <VideoTemplate loop={true} />
    </div>
  );
}
