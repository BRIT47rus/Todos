import React from 'react';

export const switcherBoolean = (cb: () => void) => {
    cb();
};

export const formatText = (text: string) => {
    const t =
        text.length > 26 ? text.slice(0, 26) + '\n' + text.slice(26) : text;

    const formatedText = t.split('\n').map((line, i) => (
        <React.Fragment key={i}>
            {line}
            {i !== t.split('\n').length - 1 && <br />}
        </React.Fragment>
    ));
    return formatedText;
};
