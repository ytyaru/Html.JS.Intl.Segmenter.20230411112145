function lengthAsHalfWidth(text) { // https://qiita.com/yoya/items/5da038312279f98bdd28
    let len = 0;
    let width = 0
    for (const c of text) {
        const cp = c.codePointAt(0);
        if ((0x00 <= cp) && (cp < 0x7f)) {
            width = 1; // ASCII 記号/数字/アルファベット
        } else if ((0xff61 <= cp) && (cp < 0xffa0)) {
            width = 1;  // 半角カナ
        } else if (cp === 0x200d) {  // ZWJ
            width = -width;  // 合成絵文字のノリしろ
        } else if (((0xfe00 <= cp) && (cp <= 0xfe0f)) ||
                   ((0xe0100 <= cp) && (cp <= 0xe01fe))) {
            ;  // 異体字セレクタは幅0扱い
        } else if ((0x1f3fb <= cp) && (cp <= 0x1f3ff)) {
            ;  // 絵文字修飾も幅0扱い
        } else {
            width = 2;  // きっと全角
        }
        len += width;
    }
    return len;
}
String.prototype.HalfWidth = function() {
    let len = 0;
    let width = 0
    for (const c of this) {
        const cp = c.codePointAt(0);
        if ((0x00 <= cp) && (cp < 0x7f)) {
            width = 1; // ASCII 記号/数字/アルファベット
        } else if ((0xff61 <= cp) && (cp < 0xffa0)) {
            width = 1;  // 半角カナ
        } else if (cp === 0x200d) {  // ZWJ
            width = -width;  // 合成絵文字のノリしろ
        } else if (((0xfe00 <= cp) && (cp <= 0xfe0f)) ||
                   ((0xe0100 <= cp) && (cp <= 0xe01fe))) {
            ;  // 異体字セレクタは幅0扱い
        } else if ((0x1f3fb <= cp) && (cp <= 0x1f3ff)) {
            ;  // 絵文字修飾も幅0扱い
        } else {
            width = 2;  // きっと全角
        }
        len += width;
    }
    return len;
}
