export const search = (searchTerm) => {
  debugger
  return $.ajax({
    method: "GET",
    url: "/api/search",
    data: {searchTerm},
  });
};