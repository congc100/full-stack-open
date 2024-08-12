sequenceDiagram
    participant browser
    participant server

    Note right of browser: 'Save' button clicked
    Note right of browser: Create the record object: {content: "1111", date: "2024-08-12T21:12:45.938Z"}
    Note right of browser: Push the record object into the note list and redraw the whole list
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa *with the record object as the payload*
    activate server
    Note left of server: Parse and save the record object
    server-->>browser: 201 Created
    deactivate server
