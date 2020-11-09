exports.timedPromise = (f, ms) => new Promise((resolve, reject) => {
  f(resolve, reject);
  setTimeout(reject, ms);
});
