import { PropsFromRedux } from './container';

import './component.scss';

export default function List({ cocktails, loading, error }: PropsFromRedux) {
  if (cocktails === null) {
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-center">Error</div>;
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
              <img src={item.thumbnail} alt={item.title} width="100%" />
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
