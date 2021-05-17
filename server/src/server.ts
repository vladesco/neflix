const express = require('express')
const path = require('path')
const fs = require('fs')
const React = require('react')
const { promisify } = require('util')
const { renderer } = require('./component-renderer')
const {
    getRequestedFileName,
    injectStyle,
    injectMarkup,
    injectState,
} = require('./helpers')
const { contextManager } = require('./context')

const readFile = promisify(fs.readFile)
const app = express()
const useEffect = (fn: Function) => fn()

React.useEffect = contextManager.applyContext(useEffect)

app.get(/.*\.(js|css|map|jpg)$/, (req, res) => {
    const fileName = getRequestedFileName(req.originalUrl)
    const filePath = path.resolve(__dirname, `../dist/${fileName}`)
    fs.createReadStream(filePath).pipe(res)
})

app.get('**', async (req, res) => {
    renderer.clearComponent()
    renderer.setComponentLocation(req.originalUrl)
    renderer.renderComponent()

    const { pendingPromises } = contextManager.getCallInfo(useEffect)

    await Promise.all(pendingPromises)

    let templateHtml = await readFile(
        path.resolve(__dirname, '../dist/index.html'),
        { encoding: 'utf-8' }
    )

    renderer.renderComponent()

    const markup = renderer.componentMarkup
    const css = renderer.componentCss
    const state = renderer.componentState

    templateHtml = injectStyle(templateHtml, css)
    templateHtml = injectState(templateHtml, state)
    templateHtml = injectMarkup(templateHtml, markup)

    res.contentType('text/html')
    res.status(200)
    res.send(templateHtml)
})

module.exports = app
