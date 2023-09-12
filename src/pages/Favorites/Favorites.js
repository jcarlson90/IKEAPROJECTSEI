import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuListItem from '../../components/MenuListItem/MenuListItem';
import * as ItemsAPI from '../../utilities/items-api'
import FavoriteList from '../../components/FavoriteList/FavoriteList'
export default function FavoritesPage({ user, setUser, handleLikeButton}) {
    console.log(user)
    /*--- State --- */
    const [favorites, setFavorites] = useState([]);
    /*--- Side Effects --- */
    useEffect(function () {
        // Load favorites (Boolean === true)
        async function fetchFavoriteItems() {
            const favorites = await ItemsAPI.getFavorites();
            setFavorites(favorites);
        }
        fetchFavoriteItems();
    }, []);
    console.log(favorites)
    /*--- Event Handlers --- */
    function handleSelectFavorite(favorite) {
        setActiveFavorites(favorite);
    }
    /*--- Rendered UI --- */
    return (
        <main>
            <div>
                <FavoriteList user={user} setUser={setUser} handleLikeButton={handleLikeButton} />
            </div>
        </main>
    );
}