import React from 'react';
import { PropsFromRedux } from './index';
import './styles.scss';

export default function DogsRecipesList({ dogsRecipes }: PropsFromRedux): JSX.Element {
  return (
    <div className="c-dogs-recipes-list">
      <div className="o-container c-dogs-recipes-list__cards u-margin--bottom-md">
        {dogsRecipes.map((item, index) => (
          <div className="c-dogs-recipes-list__card t-bg--white" key={index}>
            <div className="c-dogs-recipes-list__image">
              <img src={item.thumbnail} alt={item.title} height="80" />
            </div>
            <div className="u-padding--top-sm u-padding--bottom-sm">
              <p className="u-font-bold u-padding--left u-padding--right">{item.ingredients}</p>
              <p className=" u-padding--left u-padding--right">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
