export const createBacking= backing =>{
    // debugger
    return $.ajax({
        method: 'POST',
        url: `api/backings`,
        data: {backing}
      })
  }
  