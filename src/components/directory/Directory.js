import React, { Component } from 'react';

import { MenuItems } from '../menu-items';
import { sections } from './directory.data';

import './DirectoryStyles.scss';

export default class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: sections
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => {
          return (
            <MenuItems title={title} key={id} imageUrl={imageUrl} size={size} />
          );
        })}
      </div>
    );
  }
}
