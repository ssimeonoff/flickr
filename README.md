### General Notes

- using localStorage to save galleries
- no BE

### UX

- Viewing a gallery is indenpendent from viewing search results
- Seaching for images does not disrupt viewing of an existing gallery
- Seaching for images does not clear selected images (can create a gallery from multiple searches)
- Saving a new gallery does not disrupt viewing of an existing gallery
- Saving a new gallery clears the search results
- Cancelling a new gallery clears the search results
- Selecting a photo from searched results, selects it (not implemented: opening the photo in full view)

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Dependencies

- axios (for the api request)
- styled-components (for the styling)
- font-swesome (for the icons)
- gh-pages (for the deploy)
