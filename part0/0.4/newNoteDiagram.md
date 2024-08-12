sequenceDiagram
    participant browser
    participant server

    Note right of browser: 'Save' button clicked
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note *with the 'note' field as the payload*
    activate server
    Note left of server: create and save a JSON object recording the note content and its creation time
    server-->>browser: *Redirect* to the HTML document at /exampleapp/notes
    deactivate server

    Note right of browser: Start to redirect
    Note right of browser: The following procedure is the same as that at the first visit
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: the JSON object list
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes