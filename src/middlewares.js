export const localsMiddleware = (req, res, next) => {
  // 로그인을 위한 정보를 res.locals에 추가
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user;
  next();
};
