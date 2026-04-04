import { memo } from "react";

const blobs = [
  {
    left: "-14%",
    top: "-10%",
    width: "46vw",
    height: "46vw",
    opacity: 0.36,
    animation: "blobDriftA 42s ease-in-out infinite alternate",
    background:
      "radial-gradient(circle, rgba(157, 112, 255, 0.86) 0%, rgba(157, 112, 255, 0.42) 32%, rgba(157, 112, 255, 0) 72%)",
  },
  {
    left: "48%",
    top: "-8%",
    width: "38vw",
    height: "38vw",
    opacity: 0.34,
    animation: "blobDriftB 36s ease-in-out infinite alternate",
    background:
      "radial-gradient(circle, rgba(120, 101, 255, 0.78) 0%, rgba(120, 101, 255, 0.36) 31%, rgba(120, 101, 255, 0) 70%)",
  },
  {
    left: "12%",
    top: "30%",
    width: "34vw",
    height: "34vw",
    opacity: 0.24,
    animation: "blobDriftC 54s ease-in-out infinite alternate",
    background:
      "radial-gradient(circle, rgba(134, 104, 255, 0.68) 0%, rgba(134, 104, 255, 0.24) 30%, rgba(134, 104, 255, 0) 72%)",
  },
  {
    left: "62%",
    top: "34%",
    width: "30vw",
    height: "30vw",
    opacity: 0.2,
    animation: "blobDriftD 48s ease-in-out infinite alternate",
    background:
      "radial-gradient(circle, rgba(156, 118, 255, 0.7) 0%, rgba(156, 118, 255, 0.26) 30%, rgba(156, 118, 255, 0) 70%)",
  },
  {
    left: "-10%",
    top: "58%",
    width: "36vw",
    height: "36vw",
    opacity: 0.2,
    animation: "blobDriftA 34s ease-in-out infinite alternate",
    background:
      "radial-gradient(circle, rgba(174, 122, 255, 0.62) 0%, rgba(174, 122, 255, 0.24) 33%, rgba(174, 122, 255, 0) 72%)",
  },
  {
    left: "20%",
    top: "48%",
    width: "24vw",
    height: "24vw",
    opacity: 0.14,
    animation: "blobDriftA 24s ease-in-out infinite alternate",
    background:
      "radial-gradient(circle, rgba(193, 132, 255, 0.56) 0%, rgba(193, 132, 255, 0.22) 34%, rgba(193, 132, 255, 0) 72%)",
  },
  {
    left: "72%",
    top: "54%",
    width: "22vw",
    height: "22vw",
    opacity: 0.15,
    animation: "blobDriftB 22s ease-in-out infinite alternate",
    background:
      "radial-gradient(circle, rgba(152, 122, 255, 0.58) 0%, rgba(152, 122, 255, 0.22) 34%, rgba(152, 122, 255, 0) 72%)",
  },
] as const;

const BiolumBlobs = memo(function BiolumBlobs() {
  return (
    <div
      className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
      style={{ filter: "brightness(1.3) saturate(1.2)" }}
      aria-hidden="true"
    >
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="biolum-blob absolute rounded-full mix-blend-screen will-change-transform"
          style={{
            left: blob.left,
            top: blob.top,
            width: blob.width,
            height: blob.height,
            opacity: Math.min(blob.opacity * 1.36, 0.68),
            animation: blob.animation,
            background: blob.background,
          }}
        />
      ))}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6, 18, 54, 0.04) 0%, rgba(3, 10, 30, 0.06) 30%, rgba(1, 4, 14, 0.08) 70%, rgba(0, 0, 6, 0.1) 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 24% 88%, rgba(104, 132, 232, 0.08) 0%, rgba(92, 118, 220, 0.06) 24%, rgba(92, 118, 220, 0) 62%), \
             radial-gradient(ellipse at 80% 86%, rgba(96, 124, 226, 0.07) 0%, rgba(82, 108, 212, 0.05) 22%, rgba(82, 108, 212, 0) 58%)",
        }}
      />
    </div>
  );
});

export default BiolumBlobs;
