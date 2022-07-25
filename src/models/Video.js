import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  // 각 항목의 타입만을 정의 (디테일을 적는게 아니라)
  title: String,
  descriptione: String,
  CreatedAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

// 모델 작성 후 익스포트
const Video = mongoose.model("Video", videoSchema);
export default Video;
