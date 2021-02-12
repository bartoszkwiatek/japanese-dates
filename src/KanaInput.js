import React, { useState, useRef } from 'react';
import { toKana, toRomaji, toHiragana, toKatakana } from 'wanakana';

// Need IMEMode option to handle single kana characters like ん and い
function translateValue(string, type) {
  switch (type) {
    case 'romaji':
      return toRomaji(string, { IMEMode: true });
    case 'hiragana':
      return toHiragana(string, { IMEMode: true });
    case 'katakana':
      return toKatakana(string, { IMEMode: true });
    case 'kana':
    default:
      return toKana(string, { IMEMode: true });
  }
}

const KanaInput = ({ component, value, to, onChange, ...props }) => {
  const inputRef = useRef(null);
  const [parsedValue, setValue] = useState(translateValue(value, to));
  const handleChange = e => {
    const updatedValue = translateValue(e.target.value, to);
    setValue(updatedValue);
    inputRef.current.value = updatedValue;
    onChange(e);
  };


  return (
    <React.Fragment>
      {React.cloneElement(props.children, {
        ref: inputRef,
        value: parsedValue,
        onChange: handleChange,
      })}
    </React.Fragment>
  )

};

KanaInput.defaultProps = {
  component: 'input',
  type: 'text',
  value: '',
  to: 'kana',
  onChange: e => e,
};

export default KanaInput;