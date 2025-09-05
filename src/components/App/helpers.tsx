import React from 'react';

export const switcherBoolean = (cb: () => void) => {
    cb();
};

export const formatText = (text: string) => {
    const countW = 20;

    if (text.length <= countW) {
        return text;
    }

    const result: string[] = [];
    for (let i = 0; i < text.length; i += countW) {
        result.push(text.slice(i, i + countW));
    }

    const formatedText = result.map((line, i) => (
        <div key={i} style={{ fontSize: '0.6em' }}>
            {line}
            <br />
        </div>
    ));

    return formatedText;
};
