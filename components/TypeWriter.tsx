import React, { Component } from 'react';

interface TypeWriterProps {
  staticText: string[];
  words: string[];
}

interface TypeWriterState {
  text: string;
  wordIndex: number;
  isDeleting: boolean;
  isWaiting: boolean;
}

class TypeWriter extends Component<TypeWriterProps, TypeWriterState> {
  timeout: NodeJS.Timeout | undefined;

  constructor(props: TypeWriterProps) {
    super(props);

    this.state = {
      text: '',
      wordIndex: 0,
      isDeleting: false,
      isWaiting: false,
    };
  }

  componentDidMount() {
    this.type();
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  type = () => {
    const { wordIndex, isDeleting, text } = this.state;
    const currentIndex = wordIndex % this.props.words.length;
    const currentWord = this.props.words[currentIndex];

    this.setState({ isWaiting: false });

    if (isDeleting) {
      this.setState({
        text: currentWord.substring(0, text.length - 1),
      });
    } else {
      this.setState({
        text: currentWord.substring(0, text.length + 1),
      });
    }

    let typeSpeed = 100;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    if (!isDeleting && text === currentWord) {
      typeSpeed = (Math.random() * Math.floor(3)) * 1000;

      this.setState({
        isWaiting: true,
        isDeleting: true,
      });
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        wordIndex: this.state.wordIndex + 1,
      });
      typeSpeed = 400;
    }

    this.timeout = setTimeout(this.type, typeSpeed);
  };

  render() {
    const { staticText } = this.props;
    const { text, isWaiting } = this.state;

    const splitText = text.split('\n');

    return (
      <div className="typewriter left-aligned">
        {staticText.map((sentence, index) => (
          <span key={index} className={`sentence ${index === staticText.length - 1 ? 'last-sentence' : ''}`}>
            {sentence}&nbsp;
          </span>
        ))}
        <span className={`dynamic-text ${isWaiting ? 'fade' : ''}`} style={{ zIndex: 1 }}>
          {splitText.map((line, index) => (
            <span key={index} className={index === 0 ? 'light-bold' : 'bold-large'}>
              {line}
              {index < splitText.length - 1 && <br />}
            </span>
          ))}
        </span>
      </div>
    );
  }
}

export default TypeWriter;
