import React from 'react';
import { PropsFromRedux } from './CocktailsList';
import './styles.scss';

export default function CocktailsList({ cocktails }: PropsFromRedux): JSX.Element {
  return (
    <div className="c-cocktails-list">
      <div className="o-container c-cocktails-list__cards u-margin--bottom-md">
        {cocktails.map((item, index) => (
          <div className="c-cocktails-list__card u-bg--white-smoke" key={index}>
            <div className="c-cocktails-list__image">
              {item.ingredients.match(/milk|cheese/i) ? (
                <div className="c-cocktails-list__ribbon">Has lactose</div>
              ) : null}
              <img src={item.thumbnail} alt={item.title} width="100%" />
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
