export const search = (searchTerm) => {
  
  return $.ajax({
    method: "GET",
    url: "/api/search",
    data: {searchTerm},
  });
};