import Video from "../models/Video";

export const home = async (req, res) => {
  // Video.js의 DB에 접근, {}을 기준(빈칸이니까 모든 것을 검색)으로 검색 시작
  // DB의 promise 통신이라 순서대로 실행될 것
  try {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("server-error");
  }
};

export const watch = (req, res) => {
  const id = req.params.id;

  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const id = req.params.id;
  return res.render("edit", { pageTitle: `Editing:` });
};
export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  return res.redirect(`/videos/${id}`);
};

// 추가 연습 get, post
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  // 추가로 올라갈 비디오 obj가 여기 서술됨
  const { title, description, hashtags } = req.body;
  await Video.create({
    title: title,
    description: description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  return res.redirect("/");
};
