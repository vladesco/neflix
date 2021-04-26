exports.getRequestedFileName = (url: string) => {
    let separator = '/'
    if (url.includes('assets')) {
        separator = '/assets'
    }
    return url.slice(url.lastIndexOf(separator) + 1)
}

exports.injectStyle = (html: string, styles: string) => {
    return html.replace(
        '<head>',
        `<head>
            <style type="text/css">
                ${styles}
            </styles`
    )
}

exports.injectMarkup = (html: string, markup: string) => {
    return html.replace(
        '<div id="root"></div>',
        `<div id="root">
            ${markup}
         </div>`
    )
}

exports.injectState = (html: string, state: Object) => {
    return html.replace(
        '<body>',
        `<body>
            <script>
                window.STATE = ${JSON.stringify(state)}
            </script>
       `
    )
}
