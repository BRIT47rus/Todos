export const switcherBoolean = (cb: () => void) => {
    cb();
};

export const formatText = (text: string, width: number) => {
    const countW: number =
        width < 878 && width > 500
            ? 32
            : width < 500 && width > 358
            ? 20
            : width < 358
            ? 10
            : 50;

    if (text.length <= countW) {
        return text;
    }

    const result: string[] = [];
    for (let i = 0; i < text.length; i += countW) {
        result.push(text.slice(i, i + countW));
    }

    const formatedText = result.map((line, i) => (
        <div key={i}>
            {line}
            <br />
        </div>
    ));

    return formatedText;
};
