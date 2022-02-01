export const isEmail = function (val) {
  const emailPattern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val) || false;
};

export const isPhone = function (val) {
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(val) || false;
};

// ref: https://andrewwoods.net/blog/2018/name-validation-regex/
export const isHumanName = function (val) {
  // const nameUnicodePattern = '/^[A-Za-z\x{00C0}-\x{00FF}][A-Za-z\x{00C0}-\x{00FF}\'\-]+([\ A-Za-z\x{00C0}-\x{00FF}][A-Za-z\x{00C0}-\x{00FF}\'\-]+)*/u';
  const namePattern = "/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*/g";
  return namePattern.test(val) || false;
};
