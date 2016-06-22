import React, {
  Component,
} from 'react';
import Avatar from './Avatar';

export default class Entry extends Component {

  constructor(props) {
    super(props);
    this.mouseDown = false;
  }

  componentDidUpdate() {
    this.mouseDown = false;
  }

  onMouseUp = () => {
    if (this.mouseDown) {
      this.mouseDown = false;
      this.props.onMentionSelect(this.props.mention);
    }
  };

  onMouseDown = (event) => {
    // Note: important to avoid a content edit change
    event.preventDefault();

    this.mouseDown = true;
  };

  onMouseEnter = () => {
    this.props.onMentionFocus(this.props.index);
  };

  render() {
    const { theme = {} } = this.props;
    const className = this.props.isFocused ? theme.mentionSuggestionsEntryFocused : theme.mentionSuggestionsEntry;
    const mention = this.props.mention;

    return (
      <div
        className={ className }
        onMouseDown={ this.onMouseDown }
        onMouseUp={ this.onMouseUp }
        onMouseEnter={ this.onMouseEnter }
        role="option"
      >
        <Avatar mention={ mention } theme={ theme } />
        <span className={ theme.mentionSuggestionsEntryText }>
          { mention.get('name') }
          <div className="job">{ mention.get('job') }</div>
        </span>
      </div>
    );
  }
}
