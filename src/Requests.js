const key = 'ef31f585d0f3facd7853190e4ada418c'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=ef31f585d0f3facd7853190e4ada418c&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=ef31f585d0f3facd7853190e4ada418c&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=ef31f585d0f3facd7853190e4ada418c&language=en-US&page=2  `,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=ef31f585d0f3facd7853190e4ada418c&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=ef31f585d0f3facd7853190e4ada418c&language=en-US&page=1 `,
  };

  export default requests