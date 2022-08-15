import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../../redux/features/cocktailSlice";
import { Link } from "react-router-dom";

export default function CocktailList() {
  const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedCocktails, setModifiedCocktails] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktails(newCocktails);
    } else {
      setModifiedCocktails([]);
    }
  }, [cocktails]);

  if (loading) {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if(!cocktails) {
    return <h2>No Cocktails Matched Your Search Criteria.</h2>
  }
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {modifiedCocktails.map((item) => {
          const { id, name, image, glass, info } = item;
          return (
            <div className="col" key={id}>
              <div className="card h-2">
                <img src={image} alt={name} className="card-img-top" />
                <div className="card-body" style={{ textAlign: "left" }}>
                  <h5 className="card-title">{name}</h5>
                  <h4 className="card-title">{glass}</h4>
                  <p className="card-text">{info}</p>
                  <Link to={`cocktail/${id}`}>
                    <button className="btn btn-info">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}