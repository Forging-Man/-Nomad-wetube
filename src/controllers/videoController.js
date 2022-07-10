// 모든 함수를 export 해야하니까 default가 아닌 각각에 export
export const trending = (req, res) => res.send("Home Page Videos");
export const watch = (req, res) => res.send("Watch");
export const edit = (req, res) => res.send("Edit");
