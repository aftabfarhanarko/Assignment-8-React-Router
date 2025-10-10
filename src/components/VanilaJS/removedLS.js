

const removed = (data) => {
  const findes = JSON.parse(localStorage.getItem("items"));
  const ubdeatValue = findes.filter((app) => app.id !== data.id);
  localStorage.setItem("items", JSON.stringify(ubdeatValue));
};
export { removed };
