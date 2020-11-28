interface RenderObject {
    tag: string,
    innerHtml?: string,
    attributes?: {[key: string]: string}[],
    children?: RenderObject[],
}

class Renderer {
    /**
     * RenderHtmlFromObject
     */
    public RenderHtmlFromObject(object: RenderObject): HTMLElement {
        let tag = document.createElement(object.tag)
        object.innerHtml ? tag.innerHTML = object.innerHtml : null
        object.attributes && object.attributes.forEach(attr => {
            const key = Object.keys(attr)[0]
            tag.setAttribute(key, attr[key]);
        })
        object.children && object.children.forEach(child => {
            let element = this.RenderHtmlFromObject(child);
            tag.appendChild(element);
        })
        return tag
    }
}

export { Renderer, RenderObject }