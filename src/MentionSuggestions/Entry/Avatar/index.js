import React from 'react';

const Avatar = ({ mention, theme = {} }) => {
  if (mention.has('avatar')) {
    let style = theme.mentionSuggestionsEntryAvatar;
    if (mention.has('userType')) {
      style = `${mention.get('userType')} ${style}`;
    }

    return (
      <img
        src={ mention.get('avatar') }
        className={ style }
        role="presentation"
      />
    );
  }

  return <noscript />;
};

export default Avatar;
