import axios from './BaseURL';

const MovieList = async () => {
  try {
        const { data } = await axios
            // .get('list_movies.json');
            .get('?results=10');
        return data.results;
    } catch (err) {
        console.log('err', err);
        return err;
    }
};

export default MovieList;