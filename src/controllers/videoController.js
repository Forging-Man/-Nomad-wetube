// 모든 함수를 export 해야하니까 default가 아닌 각각에 export
export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => res.send("See video");
export const edit = (req, res) => res.send("Edit");
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload = (req, res) => res.send("Upload Video");
