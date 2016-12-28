const FAV_KEY = "ayy-favs";

const FavService = {
  setFav(routeId, stopId) {
    let favs = this.getFavs();

    const newFav = {routeId: routeId, stopId: stopId};

    favs.push(newFav);

    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  },

  getFav(routeId, stopId) {
    let favs = this.getFavs();

    if (!favs) {
      return null
    }

    const fav = favs.filter((filterFav) => {
      return filterFav.routeId === routeId && filterFav.stopId === stopId;
    })[0];

    return fav;
  },

  getFavs() {
    return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
  },

  removeFav(routeId, stopId) {
    let favs = this.getFavs();

    favs.splice(favs.findIndex((fav) => {
      return fav.routeId !== routeId && fav.stopId !== stopId;
    }, 1))

    if (!favs) {
      favs = []
    }

    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  },
}

export default FavService;
