function Element() {
    return {
        width: '0px',
        height: '0px',
        left: '0px',
        top: '0px',
    }
}

function ImageElement() {
    return Object.assign(new Element(), {
        elementType: 'IMAGE',
        width: '210px',
        height: 'auto',
        fileName: null,
        src: null
    })
}

function TextElement() {
    return Object.assign(new Element(), {
        elementType: "TEXT",
        width: 'auto',
        height: 'auto',
        value: '双击修改'
    })
}