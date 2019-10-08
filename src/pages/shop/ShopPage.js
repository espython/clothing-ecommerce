import React, { Component } from 'react';
import CollectionsPreview from '../../components/collection-preview';
import SHOP_DATA from './shop.data';

export default class ShopPage extends Component {
  // set the default state
  state = { collections: SHOP_DATA };

  // Render Method
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionsPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}
