export const getCurrentPosition = (success, error) => {
  navigator.geolocation.getCurrentPosition(success, error);
};
