import { useEffect, useState } from 'react';

import { PropsFromRedux } from './list.container';

import './list.component.scss';

export default function List({ cocktails, loading, error }: PropsFromRedux) {
  const [hasImageLoaded, setHasImageLoaded] = useState(false);

  useEffect(() => {
    if (loading) {
      setHasImageLoaded(false);
    }
  }, [loading]);

  if (cocktails === null) {
    return null;
  }

  if (error) {
    return (
      <div className="c-cocktails-list">
        <div className="u-text-align--center">Error requesting cocktails</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="c-cocktails-list">
        <div className="o-container c-cocktails-list__cards u-margin--bottom-md">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="c-cocktails-list__card u-bg--white-smoke">
              <div className="c-cocktails-list__shimmer-effect" style={{ width: '100%', height: '366px' }} />
              <div className="u-padding-md">
                <div
                  className="c-cocktails-list__shimmer-effect u-margin--bottom-sm u-margin--top-sm"
                  style={{ width: '100px', height: '25px' }}
                />
                <div className="c-cocktails-list__shimmer-effect" style={{ width: '100%', height: '35px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="c-cocktails-list">
      <div className="o-container c-cocktails-list__cards u-margin--bottom-md">
        {cocktails.map((item, index) => (
          <div className="c-cocktails-list__card u-bg--white-smoke" key={index}>
            <div className="c-cocktails-list__image">
              {item.ingredients.match(/milk|cheese/i) ? (
                <div className="c-cocktails-list__ribbon">Has lactose</div>
              ) : null}
              <img
                hidden={!hasImageLoaded}
                src={item.thumbnail}
                onLoad={() => setHasImageLoaded(true)}
                alt={item.title}
                height={366}
                width="100%"
              />
              <div
                hidden={hasImageLoaded}
                className="c-cocktails-list__shimmer-effect"
                style={{ width: '100%', height: '366px' }}
              />
            </div>
            <div className="u-padding--top-sm u-padding--bottom-sm">
              <p className="u-font-bold u-padding--left u-padding--right">{item.title}</p>
              <p className="u-padding--left u-padding--right">{item.ingredients}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
