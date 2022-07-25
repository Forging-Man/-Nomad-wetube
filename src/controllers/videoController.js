import Video from "../models/Video";

// 모든 함수를 export 해야하니까 default가 아닌 각각에 export
export const home = (req, res) => {
  Video.find({});
  return res.render("home", { pageTitle: "Home" });
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

export const postUpload = (req, res) => {
  // 추가로 올라갈 비디오 obj가 여기 서술됨
  const { title } = req.body;
  return res.redirect("/");
};
