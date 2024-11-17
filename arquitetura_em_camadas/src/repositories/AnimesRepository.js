const Anime = require("../models/Anime");

let animes = [new Anime(1, "Neon Genesis Evangelion", "Ação/Drama", "Gainax")];

class AnimesRepository {
  getAll() {
    return animes;
  }

  getById(id) {
    return animes.find((item) => item.id === id);
  }

  create(anime) {
    anime.id = animes.length + 1;
    animes.push(anime);
    return anime;
  }

  update(id, updatedAnime) {
    const index = animes.findIndex((item) => item.id === id);

    if (index !== -1) {
      animes[index] = { ...animes[index], ...updatedAnime };
      return animes[index];
    }

    return null;
  }

  delete(id) {
    animes = animes.filter((item) => item.id !== id);
    return true;
  }
}

module.exports = new AnimesRepository();
