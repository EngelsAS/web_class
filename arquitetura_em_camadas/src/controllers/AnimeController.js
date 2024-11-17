const animeService = require("../services/AnimeService");

class AnimeController {
  getAll(req, res) {
    const animes = animeService.getAllAnimes();
    res.json(animes);
  }

  getById(req, res) {
    const id = parseInt(req.params.id);
    const anime = animeService.getAnimeById(id);

    if (anime) {
      res.json(anime);
    } else {
      res.status(404).json({ message: "Anime não encontrado" });
    }
  }

  add(req, res) {
    const newAnime = animeService.addAnime(req.body);
    res.status(201).json(newAnime);
  }

  update(req, res) {
    const id = parseInt(req.params.id);
    const updateAnime = animeService.updateAnime(id, req.body);
    if (updateAnime) {
      res.json(updateAnime);
    } else {
      res.status(404).json({ message: "Anime não encontrado" });
    }
  }

  delete(req, res) {
    const id = parseInt(req.params.id);
    animeService.deleteAnime(id);
    res.json({ message: "Anime removido com sucesso" });
  }
}

module.exports = new AnimeController();
