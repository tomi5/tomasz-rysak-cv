import React from 'react';

const Header = (props) => {
  const { headerAbout, headerPhotoSrc, headerPhotoDescr } = props;

  return (
    <header>
      <h1>Tomasz Rysak</h1>
      <h2>{'</ front-end developer />'}</h2>
      <p>{headerAbout}</p>

      <div className="picture-container">
        <img
          src={headerPhotoSrc}
          alt={headerPhotoDescr}
        />
      </div>
    </header>
  );
};

export default Header;
