import React, {Component} from 'react';

class Icon extends Component {
  constructor(){
    super();

    this.state = {
      
    }
  }

  componentDidMount(){
    
  }

  render () {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 183 189.17"
          className={this.props.className}
        >
        <g style={{ isolation: "isolate" }}>
          <g data-name="Layer 2">
            <g data-name="Layer 1">
              <g data-name="12 month">
                <g>
                  <g>
                    <image
                      width="183"
                      height="178"
                      opacity="0.46"
                      transform="translate(0 11.17)"
                      xlinkHref="data:image/png;base64,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"
                      style={{ mixBlendMode: "multiply" }}
                    ></image>
                    <path
                      fill="#b2362d"
                      d="M41.28 98.07a10.57 10.57 0 01-.83-2.07c-.3-1.11-.37-2.14-.21-5.17.06-1 .15-2.39.3-4a3.65 3.65 0 00-1.88 0 4.3 4.3 0 00-2.2 1.83A45 45 0 0033 94.1a32.34 32.34 0 00-2.37 5.18c-.88 3-.29 3.85-1.06 6.79-.73 2.78-1.48 3.34-2.41 5.73a24.19 24.19 0 00-1.21 11.61A28.92 28.92 0 0029.07 134a20.27 20.27 0 00-5.58 4.53c-3.67 4.29-3.63 8.07-7.85 12.21a19.54 19.54 0 01-3.47 2.72 5.36 5.36 0 00-3.16.75c-2.69 1.74-2.6 5.83-2.57 7.09.15 6.1 4.78 11.48 9.81 14a15.76 15.76 0 006.48 1.81 17 17 0 0011.77-4.38 21.16 21.16 0 012.56-1.35 20.94 20.94 0 014.22-1.38c4.16-.94 8.51-5.14 11.47-8a50.87 50.87 0 005.88-6.79 14.52 14.52 0 009.05-5.88 9.12 9.12 0 013.32 2.59c.79 1 1.14 1.89 1.51 1.81s.21-1.66.9-3.92c.07-.24.91-2.94 1.66-2.87.43 0 .48.93 1.51 2.72.59 1 .89 1.54 1.21 1.51.63-.07.24-2.14 1.5-4.08 1-1.59 2-1.24 3.77-3.16 1.39-1.49.93-1.79 2.42-3.62.85-1.05 1.32-1.35 4.37-3.93 2-1.64 2.92-2.47 3.17-2.71 1.78-1.78 2.06-2.75 5.43-8 2.11-3.29 2.5-3.68 3-4.08 2.21-1.69 3.16-.63 6.18-2.26a19 19 0 005.88-5.43 22.18 22.18 0 001.36-2l-2.41-3.32c1.37-1.19 3.54-3 6.33-5.13s3.82-2.72 5.58-4.22a39.3 39.3 0 006-6.48 11.45 11.45 0 005.43 3.31 9.56 9.56 0 006.49-.3c1.89-.88 2.71-2.24 2.87-2.11.46.37-7.24 10.86-7.24 10.86-2.34 3.17-5.73 7.74-10 13.27l-5.13 2.57c.36 1 .71 2 1.06 3q-1.44 5.28-2.87 10.56a58.76 58.76 0 008-5.28 60 60 0 006-5.43l-2.56-4.67a74.64 74.64 0 016.33-9.2c3.18-4 5.59-6.11 11.31-11.47 8.61-8 13-12.12 14.94-14.48 4.3-5.14 7.47-9 9.2-15.08 1.55-5.48 1.14-9.93.75-14a46.34 46.34 0 00-7.24-22 40.52 40.52 0 00-14.18-13.57c-7.05-4-13.37-4.57-19.15-5.13a55.45 55.45 0 00-19.76 1.21 54.73 54.73 0 00-21.75 11.47c-8.8 7.56-12.63 15.83-18.1 27.6A145.49 145.49 0 0066.32 77a24.34 24.34 0 01-6.94 12.37 31 31 0 01-8.14 5.12 49.57 49.57 0 01-9.96 3.58z"
                    ></path>
                    <path
                      fill="none"
                      stroke="#231f20"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M41.28 98.07a10.57 10.57 0 01-.83-2.07c-.3-1.11-.37-2.14-.21-5.17.06-1 .15-2.39.3-4a3.65 3.65 0 00-1.88 0 4.3 4.3 0 00-2.2 1.83A45 45 0 0033 94.1a32.34 32.34 0 00-2.37 5.18c-.88 3-.29 3.85-1.06 6.79-.73 2.78-1.48 3.34-2.41 5.73a24.19 24.19 0 00-1.21 11.61A28.92 28.92 0 0029.07 134a20.27 20.27 0 00-5.58 4.53c-3.67 4.29-3.63 8.07-7.85 12.21a19.54 19.54 0 01-3.47 2.72 5.36 5.36 0 00-3.16.75c-2.69 1.74-2.6 5.83-2.57 7.09.15 6.1 4.78 11.48 9.81 14a15.76 15.76 0 006.48 1.81 17 17 0 0011.77-4.38 21.16 21.16 0 012.56-1.35 20.94 20.94 0 014.22-1.38c4.16-.94 8.51-5.14 11.47-8a50.87 50.87 0 005.88-6.79 14.52 14.52 0 009.05-5.88 9.12 9.12 0 013.32 2.59c.79 1 1.14 1.89 1.51 1.81s.21-1.66.9-3.92c.07-.24.91-2.94 1.66-2.87.43 0 .48.93 1.51 2.72.59 1 .89 1.54 1.21 1.51.63-.07.24-2.14 1.5-4.08 1-1.59 2-1.24 3.77-3.16 1.39-1.49.93-1.79 2.42-3.62.85-1.05 1.32-1.35 4.37-3.93 2-1.64 2.92-2.47 3.17-2.71 1.78-1.78 2.06-2.75 5.43-8 2.11-3.29 2.5-3.68 3-4.08 2.21-1.69 3.16-.63 6.18-2.26a19 19 0 005.88-5.43 22.18 22.18 0 001.36-2l-2.41-3.32c1.37-1.19 3.54-3 6.33-5.13s3.82-2.72 5.58-4.22a39.3 39.3 0 006-6.48 11.45 11.45 0 005.43 3.31 9.56 9.56 0 006.49-.3c1.89-.88 2.71-2.24 2.87-2.11.46.37-7.24 10.86-7.24 10.86-2.34 3.17-5.73 7.74-10 13.27l-5.13 2.57c.36 1 .71 2 1.06 3q-1.44 5.28-2.87 10.56a58.76 58.76 0 008-5.28 60 60 0 006-5.43l-2.56-4.67a74.64 74.64 0 016.33-9.2c3.18-4 5.59-6.11 11.31-11.47 8.61-8 13-12.12 14.94-14.48 4.3-5.14 7.47-9 9.2-15.08 1.55-5.48 1.14-9.93.75-14a46.34 46.34 0 00-7.24-22 40.52 40.52 0 00-14.18-13.57c-7.05-4-13.37-4.57-19.15-5.13a55.45 55.45 0 00-19.76 1.21 54.73 54.73 0 00-21.75 11.47c-8.8 7.56-12.63 15.83-18.1 27.6A145.49 145.49 0 0066.32 77a24.34 24.34 0 01-6.94 12.37 31 31 0 01-8.14 5.12 49.57 49.57 0 01-9.96 3.58z"
                    ></path>
                  </g>
                  <g>
                    <g data-name="left wing">
                      <path
                        fill="#8f272d"
                        d="M78.07 46.87c-1.57-.82-2.56-3.06-5.41-3.55a8.46 8.46 0 00-5.87 1.54 14.36 14.36 0 01-7.11-3.55c-6.75-6.43-3.68-17.84-3.24-19.63a26.48 26.48 0 016.18-11.13 5.75 5.75 0 00.31 5.26 5 5 0 002.47 1.85A131 131 0 0177 6.69c2.2-1.85 4.38-3.54 6.49-5.1-.27.26-2.56 2.56-2 5.41a6 6 0 002.79 3.71c3.32 2.25 6.28.82 10.51 1.39 4 .54 9.19 2.88 10.73 6 4.59 9.5-20.28 32.51-27.45 28.77z"
                      ></path>
                      <path
                        fill="#231f20"
                        d="M78.05 46.92a16.78 16.78 0 01-2.44-2.07 5.84 5.84 0 00-2.78-1.43 6.63 6.63 0 00-3.13.16 10.58 10.58 0 00-2.86 1.36h-.07A13.79 13.79 0 0158 39.57a15.2 15.2 0 01-1.3-2.27 17 17 0 01-.87-2.48 21.28 21.28 0 01-.68-5.21 30.8 30.8 0 011.77-10.32 27.58 27.58 0 015.48-8.94.3.3 0 01.42 0 .3.3 0 01.07.33 5.64 5.64 0 00-.2 4 4.51 4.51 0 002.82 2.69l-.35.09Q69.3 13 73.82 8.93c1.51-1.35 3.05-2.67 4.65-3.93l4.76-3.77a.42.42 0 01.57.62 6.43 6.43 0 00-1.94 4 4.72 4.72 0 001.9 3.85 9 9 0 002 1.21 7.28 7.28 0 002.22.53c1.54.13 3.17-.06 4.83 0a19.23 19.23 0 019.51 2.78 9.83 9.83 0 013.63 3.56 7.49 7.49 0 01.41 5.09 24.57 24.57 0 01-4.53 8.78 54 54 0 01-6.66 7.19 50.41 50.41 0 01-7.83 5.86 23.78 23.78 0 01-4.42 2.08 6.48 6.48 0 01-4.87.14zm0-.09a6.38 6.38 0 004.7-.19 23.06 23.06 0 004.35-2.13 48 48 0 007.61-6 53.07 53.07 0 006.37-7.29 24.08 24.08 0 004.22-8.51 6.76 6.76 0 00-.36-4.43 8.79 8.79 0 00-3.26-3.17 18.26 18.26 0 00-9-2.64c-1.59 0-3.21.18-4.92 0a8.23 8.23 0 01-2.5-.64 9.52 9.52 0 01-2.16-1.37 6.37 6.37 0 01-1.65-2 5.14 5.14 0 01-.45-2.6 7.25 7.25 0 012.24-4.57l.54.64L79 5.64c-1.61 1.21-3.14 2.51-4.65 3.85-3 2.66-5.92 5.47-8.68 8.4a.35.35 0 01-.35.08 5.14 5.14 0 01-3.19-3.1 5.56 5.56 0 01-.28-2.25 6.75 6.75 0 01.53-2.19l.49.32a27 27 0 00-5.43 8.72 30.73 30.73 0 00-1.86 10.14 20.56 20.56 0 00.59 5.13 18 18 0 00.83 2.45 15.4 15.4 0 001.29 2.23 13.34 13.34 0 008.57 5.36h-.06a11 11 0 012.91-1.35 6.76 6.76 0 013.19-.15 6 6 0 012.84 1.47 15.71 15.71 0 002.36 2.08z"
                      ></path>
                    </g>
                    <g data-name="right wing">
                      <path
                        fill="#8f272d"
                        d="M91.06 45.79a17.37 17.37 0 014.79-5.56 18.36 18.36 0 017.88-3.23c4.12-.86 9.83-6.15 16.69-26 .08.56 1 6.38 3.36 6.67a2.64 2.64 0 001.9-.8 22.29 22.29 0 005.72-6.65 76.47 76.47 0 003.86-9.87c.19.05-4.61 13.32-.15 18.86a3.8 3.8 0 002.31 1.54c3.3.59 6.37-4.71 6.5-4.94a83 83 0 01-11.13 19.63c-1.37 1.77-4.21 4.63-9.89 10.35-3.57 3.59-5.85 5.73-9 5.72a11.51 11.51 0 01-4.79-1.39c-4.32-1.95-4-3.67-6.53-4.24-4.17-1-7.37 3.31-10.13 1.65a3.6 3.6 0 01-1.39-1.74z"
                      ></path>
                      <path
                        fill="#231f20"
                        d="M91 45.79a16.94 16.94 0 018.79-7.85 19 19 0 012.87-.86 10 10 0 002.82-.87 14.47 14.47 0 004.42-3.87 49.4 49.4 0 005.93-10.29c1.64-3.63 3-7.36 4.34-11.12a.27.27 0 01.33-.16.3.3 0 01.17.21 19.33 19.33 0 00.89 3.6 8.33 8.33 0 00.78 1.65 2.45 2.45 0 001.22 1.11 1.62 1.62 0 001.51-.36c.48-.36 1-.77 1.43-1.18a24.1 24.1 0 002.56-2.69 18.7 18.7 0 002.07-3.06c.55-1.12 1.06-2.27 1.53-3.42s.9-2.33 1.3-3.52l.58-1.79.29-.91V.28a.89.89 0 00.05-.1l.13-.13a.35.35 0 01.31 0 .4.4 0 01.23.31v.33l-.12.47a52.62 52.62 0 00-1.58 7.31 20.66 20.66 0 00.14 7.36 7.72 7.72 0 001.52 3.2 3 3 0 002.88 1.26 5.82 5.82 0 002.92-1.82 15.39 15.39 0 002.18-2.9.47.47 0 01.65-.17.47.47 0 01.19.58 82.61 82.61 0 01-8.67 16.32c-.88 1.28-1.78 2.52-2.74 3.75s-2.06 2.32-3.12 3.44c-2.15 2.2-4.34 4.34-6.52 6.51-1.09 1.08-2.18 2.16-3.37 3.18a11.41 11.41 0 01-4.06 2.41 7.54 7.54 0 01-4.72-.28 23.6 23.6 0 01-4.2-2 12.47 12.47 0 01-1.83-1.48 6.7 6.7 0 00-1.72-1.38 6 6 0 00-4.33-.06c-1.44.44-2.78 1.24-4.32 1.59a3.09 3.09 0 01-2.3-.33A3.57 3.57 0 0191 45.79zm.1 0a3.53 3.53 0 001.43 1.67 2.85 2.85 0 002.16.24c1.46-.37 2.78-1.22 4.25-1.72a6.31 6.31 0 014.66 0 7.16 7.16 0 011.88 1.44 12.29 12.29 0 001.77 1.39 22.86 22.86 0 004.1 1.91 6.79 6.79 0 004.31.2 10.56 10.56 0 003.74-2.32c1.14-1 2.2-2.1 3.28-3.19l6.41-6.6c1.05-1.1 2.12-2.21 3.06-3.37s1.84-2.43 2.7-3.68a86 86 0 008.62-16.11l.85.41a16.45 16.45 0 01-2.32 3.06 6.66 6.66 0 01-3.42 2.05 3.32 3.32 0 01-2.1-.29 4.88 4.88 0 01-1.58-1.3 8.66 8.66 0 01-1.7-3.58 21.62 21.62 0 01-.1-7.65A52.93 52.93 0 01134.75 1l.12-.44V.45a.33.33 0 00.23.25.39.39 0 00.29 0c.14-.1.11-.12.11-.1v.09l-.29.89-.59 1.79c-.42 1.2-.86 2.38-1.34 3.55s-1 2.32-1.58 3.45a19.89 19.89 0 01-2.16 3.17 24.5 24.5 0 01-2.65 2.74 17.47 17.47 0 01-1.49 1.21 2.17 2.17 0 01-2 .43 3.06 3.06 0 01-1.52-1.35 8.77 8.77 0 01-.82-1.76 20 20 0 01-.89-3.72h.5c-1.34 3.76-2.78 7.49-4.45 11.12a50 50 0 01-6.07 10.32 14.71 14.71 0 01-4.55 3.9 9.85 9.85 0 01-2.88.86 19 19 0 00-2.85.84 16.58 16.58 0 00-5.07 3 18.36 18.36 0 00-3.69 4.66z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#8f272d"
                        d="M112.39 40.38a28.19 28.19 0 0018.7-24.73c-.16.42-1.4 3.74.46 6.49a4 4 0 002 1.86c1.73.54 4.08-.8 5.69-3.47"
                      ></path>
                      <path
                        fill="#231f20"
                        d="M112.37 40.34a28.41 28.41 0 0012.83-9.7 27.63 27.63 0 003.8-7.14 29.6 29.6 0 001.6-7.88l1 .22a8.08 8.08 0 00-.45 3.83 5.76 5.76 0 00.57 1.82 9.7 9.7 0 00.52.85 4 4 0 00.59.74 2.83 2.83 0 003.45.19 9 9 0 003-2.77h.07v.06a8.14 8.14 0 01-2.77 3.18 4.4 4.4 0 01-2.09.73 2.92 2.92 0 01-2.18-.77 5.38 5.38 0 01-.75-.85c-.22-.29-.4-.57-.61-.91a6.62 6.62 0 01-.76-2.1 8.52 8.52 0 01.48-4.36.51.51 0 01.66-.3.52.52 0 01.33.52 28.79 28.79 0 01-1.88 8.09 28.49 28.49 0 01-4 7.22 27.73 27.73 0 01-6 5.7 28.9 28.9 0 01-7.32 3.73h-.06c-.01 0-.06-.1-.03-.1z"
                      ></path>
                    </g>
                  </g>
                  <path
                    fill="none"
                    stroke="#231f20"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    d="M156 61.87a27.31 27.31 0 01.93 11.43 29.05 29.05 0 01-9.72 17.64"
                  ></path>
                  <g>
                    <path
                      fill="#231f20"
                      d="M80.08 112.72a3.29 3.29 0 012.25 0 4.1 4.1 0 011.75 1.17 4 4 0 011 1.88 3.24 3.24 0 01-.32 2.23 9.92 9.92 0 01-1.76-1.1 8.35 8.35 0 01-1.14-1.05 8.43 8.43 0 01-.91-1.27 10.73 10.73 0 01-.87-1.86z"
                    ></path>
                    <path
                      fill="#231f20"
                      d="M111.65 96.79a4.61 4.61 0 012.95-.15 6.13 6.13 0 014.18 3.9 4.48 4.48 0 010 3c-.84-.64-1.45-1.2-2-1.73l-1.64-1.51-1.62-1.54c-.58-.6-1.18-1.17-1.87-1.97z"
                      data-name="rib"
                    ></path>
                    <path
                      fill="#231f20"
                      d="M120.89 88.14a4.8 4.8 0 013.14-.29 6.26 6.26 0 012.82 1.51 6.18 6.18 0 011.71 2.7 4.7 4.7 0 01-.09 3.16c-.79-.78-1.39-1.43-2-2s-1.12-1.13-1.68-1.65-1.13-1-1.77-1.56-1.31-1.13-2.13-1.87z"
                      data-name="rib"
                    ></path>
                    <path
                      fill="#231f20"
                      d="M128.47 82.87a3.86 3.86 0 012.75-.38 5.18 5.18 0 013.84 3.72 3.86 3.86 0 01-.27 2.76c-.76-.65-1.3-1.17-1.82-1.66l-1.4-1.31-1.38-1.36c-.5-.53-1.04-1.05-1.72-1.77z"
                      data-name="rib"
                    ></path>
                    <path
                      fill="none"
                      stroke="#231f20"
                      strokeMiterlimit="10"
                      strokeWidth="3"
                      d="M77.94 111.8a27.24 27.24 0 005.88-.75 26.73 26.73 0 005.43-2"
                      data-name="main"
                    ></path>
                    <path
                      fill="none"
                      stroke="#231f20"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M109.14 98.55a53 53 0 008.62-7.87 60.55 60.55 0 006.63-9.5c6.41-10.56 9.62-15.85 11.76-20.61 3.08-6.87 3.91-10.62 8.28-15.06a29.53 29.53 0 015.72-4.51"
                      data-name="main"
                    ></path>
                  </g>
                  <g
                    stroke="#231f20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-name="front leg"
                  >
                    <g data-name="front foot">
                      <path
                        fill="#fff"
                        d="M67.68 149.36c-.79-1.48-.87-3.54-.15-3.93s1.29.66 2.11.31.48-1.35 1.21-1.66 1.75.84 3.48.52l.29-.07c1.23-.36 1.58-1.43 2.11-1.81s1.74-.37 4.52 1.51c-1 2.2-2.11 4.41-3.17 6.61l-3-3.9-2.28 6.26-1.8-1.28a5.6 5.6 0 01-3.32-2.56z"
                        data-name="front nails"
                      ></path>
                      <path
                        fill="none"
                        d="M74.62 144.53l.45 2.41"
                        data-name="front nail"
                      ></path>
                      <path
                        fill="none"
                        d="M69.7 146.1l1.65 6.07"
                        data-name="front nail"
                      ></path>
                      <path
                        fill="none"
                        d="M79.62 135.44a8.66 8.66 0 00-3.71 4.17 8.4 8.4 0 00-.62 3.55"
                      ></path>
                      <path
                        fill="none"
                        d="M74.83 136.05a8.11 8.11 0 00-3.71 3.87 8 8 0 00-.6 4.43"
                        data-name="toes"
                      ></path>
                      <path
                        fill="none"
                        d="M73.13 133a15 15 0 00-4.38 4.35"
                        data-name="toes"
                      ></path>
                    </g>
                    <path
                      fill="none"
                      d="M96 86.41a21.65 21.65 0 00-5.78 26.22 34.24 34.24 0 01-2.78 4.22 35.16 35.16 0 01-10.36 9"
                      data-name="arm curve"
                    ></path>
                    <path
                      fill="none"
                      d="M110.54 87.72a18.73 18.73 0 002.15 21"
                      data-name="arm curve"
                    ></path>
                    <path
                      fill="none"
                      strokeWidth="2"
                      d="M97.37 108.74a17 17 0 00-3.67 1.44 17.49 17.49 0 00-3.44 2.45"
                    ></path>
                    <path
                      fill="none"
                      strokeWidth="2"
                      d="M94.26 114a12.58 12.58 0 00-6.78 2.89"
                      data-name="crease"
                    ></path>
                  </g>
                </g>
                <g>
                  <path
                    fill="none"
                    stroke="#231f20"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    d="M29.11 107.42a44 44 0 015.09-4.57 40.91 40.91 0 015.13-3.37 43.87 43.87 0 014.78-2.19c4.58-1.84 6.87-2.83 9.55-3a21.8 21.8 0 017.79.87 15.33 15.33 0 002.92-3.29 16 16 0 002.54-7.37c.21-2.81.92-5.11 1.92-5.25s2.7 2.3 3.75 6.16a63.34 63.34 0 001 6.88 40.07 40.07 0 011 5.83 20 20 0 01-.5 5.5 25 25 0 013.08 22.25 39.31 39.31 0 00-4.16 4.36 24.82 24.82 0 00-3.75 5.62c-1.17 2.67-.4 3.84-1.06 9.62-.23 1.95-.5 3.53-.69 4.51a16.33 16.33 0 01-3.94 3.3 16.83 16.83 0 01-8.31 2.32 17.68 17.68 0 00-4.37 1.92c-3.37 2.07-4.73 4.54-7.17 7.41a40.53 40.53 0 01-7.51 6.86"
                  ></path>
                  <path
                    fill="#fff"
                    stroke="#231f20"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    d="M16.91 134.66a18.86 18.86 0 00-.77 4.79 21 21 0 00.53 5.21 28.92 28.92 0 002.07 6.3 6.7 6.7 0 004 0 7.4 7.4 0 004.34-4.48 8.28 8.28 0 00.45-4.19c-.52-.39-1.33-1-2.29-1.78s-1.87-1.52-2.9-2.5c-1.94-1.83-2.28-2.54-3.55-3a5.52 5.52 0 00-1.88-.35z"
                  ></path>
                  <g>
                    <image
                      width="16"
                      height="15"
                      transform="translate(29 146.17)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAACXBIWXMAAAsSAAALEgHS3X78AAABCElEQVQoU5XT204CMRSF4a8IEYgaDcYYw/s/mXeiiOKJQbYXbXGE8bSSSXvR/a+1dzspInQppZTqFgHRcTh1AVJKPfRxiB42WGGNTRu0ByjFQ5xiUvZvuMcDnrGOiM0eoFU8wRSXGKEpxTNcY44mIqLfKk4YyM7Tsi6xKJBznMhpngrUFiD3OsJF+R5ltyWOcIUx3pWhbgHFvS87nBfYHDey26KAhnIrzReAT/ca8wG38sAaeforHMgJ1vUm+i33Y5zJ8e4KpB4MbFJK28KqXlkHBTCW487wIt//Vl0PqbYQcswave3+oyqgkV1f5aE923H/Tiki2rewN6TftPsS018Lqzp/pv/oA6Oqgqiumn53AAAAAElFTkSuQmCC"
                      style={{ mixBlendMode: "darken" }}
                    ></image>
                    <path
                      fill="none"
                      stroke="#231f20"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      d="M32.81 155.86a14.77 14.77 0 011.66-4.36c.84-1.45 1.38-2.36 2.4-2.63 1.81-.49 3.61 1.46 3.78 1.65"
                    ></path>
                  </g>
                  <path
                    fill="none"
                    stroke="#231f20"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M66.59 99.84A11.73 11.73 0 0167 96.3c.31-1.09.49-1.13 1.09-2.92a17.3 17.3 0 00.91-3.62c.16-1.27.07-2 .17-2a13.63 13.63 0 01.67 3.62c.07.72 0 .56.21 3a25.78 25.78 0 00.29 2.92 17 17 0 00.58 2.33"
                  ></path>
                  <g data-name="right eye">
                    <g data-name="right eyebrow">
                      <image
                        width="19"
                        height="13"
                        transform="translate(42 104.17)"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAACXBIWXMAAAsSAAALEgHS3X78AAABH0lEQVQoU53T2UoDQRCF4a/GUXHFDfHW938uEVTckihOkmkvuiZOXMGCYuiu4ufUmeoopfgpIiLG5/JbM+JzfQRo0GIzz3Ms0PM9eA0WEQNgO3MP+1meYoY3dBI8hq5gCdrGMc5w8ANsigc84xXzUkq/guVoWwm5xEWCuwTAbvZ0eMQdbhL8Vkrp22xssIPzzDlu8aQqoCrdV9UeZH+rjrtA36aqFoc4ReAaV5ioSqg/YvDxJL9N3jcREYOyLRxlTlT596rZg8EdXrL+pCrbUD1cllJKqyppEthk8xTdYGxGgYjoVRtm2b/M1GbTMot3qrljRWuRq1DQR0SMV2MYs1NHm/nYpV+3na+LO16NVvVgicVfT+e7+PwC4j+QId4BszuMbCIYF34AAAAASUVORK5CYII="
                        style={{ mixBlendMode: "darken" }}
                      ></image>
                      <path
                        fill="none"
                        stroke="#231f20"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        d="M45.7 112.48a5.79 5.79 0 011.63-4.13c2.17-1.95 6.55-1.65 10 1.54"
                      ></path>
                    </g>
                    <path
                      fill="none"
                      stroke="#231f20"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      d="M46.7 135.6a13.38 13.38 0 0112.71-7.6"
                    ></path>
                    <path
                      fill="#fff"
                      stroke="#231f20"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="M49.26 132a12.07 12.07 0 01-4.6-5.72c-1.67-4.58-.17-10 3.79-14a11.21 11.21 0 018 4.8 10.85 10.85 0 01.28 11.14 13.34 13.34 0 00-7.47 3.78z"
                      data-name="main"
                    ></path>
                    <path
                      stroke="#231f20"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="0.5"
                      d="M44.82 126.62c-.16-1.85 1.62-3.83 3.67-4.48a5.45 5.45 0 015.55 1.5 5.72 5.72 0 011.32 4.77 9 9 0 00-6.1 3.54 14.38 14.38 0 01-2.46-2.16c-1.19-1.32-1.9-2.1-1.98-3.17z"
                      data-name="right pupil"
                    ></path>
                    <g>
                      <image
                        width="16"
                        height="16"
                        transform="translate(41 120.17)"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAAA4ElEQVQ4T6XTwW7CMAwG4K/tBmib0DQJTuNheHIehiMXNLFpFGh3qDOlrBxGLVlJbOf3bzsp2rY1Rh5uOXbbTZGfF6v1YKbimkFczBXapNdAPYDddlOiRJUpXDJtFqt18wcgMle6sqaYYRJxNb5xxBmXxCTvQQKY4gVzPIXvCx+xb9HEqqRXd6XLPMcS76HLsM0ipkhNHmIwwTNe8Zb5P3FIAMlYGik5g1bX5VqXbZ/59mGrI+Z3dPkUSjzq6rzVxINuGqc0yiEGxzif4wL9MQ4zYORDykDuf8q53P2Z/is/r2BzdBe/ze8AAAAASUVORK5CYII="
                        style={{ mixBlendMode: "soft-light" }}
                      ></image>
                      <circle
                        cx="48.93"
                        cy="128.02"
                        r="1.27"
                        fill="#fff"
                      ></circle>
                    </g>
                  </g>
                  <g data-name="left eye">
                    <path
                      fill="#fff"
                      stroke="#231f20"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="M26 117.67c.66-.28 1.73.88 2.46 1.68a17.17 17.17 0 013.25 5.54c.81 2 1.21 3 1.17 3.84-.15 2.83-2.94 4.7-3.8 5.24a45.3 45.3 0 01-2.42-6.3 30.24 30.24 0 01-1.16-7c-.11-2.22.12-2.84.5-3z"
                      data-name="main"
                    ></path>
                    <g data-name="left eyebrow">
                      <image
                        width="14"
                        height="11"
                        transform="translate(22 110.17)"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzklEQVQoU43RQUsDQQyG4SfdSlFEKCrVq///PwkePNhiL1bp2jYeNiPL1oO5JDPkTb75JjLTOCIiWlk5ISeNMT5HxAxzLCrDAXscMvN0Bha0wBJ3uKqeT2ywxb7B84Ki6iWe8DABb/CMTUT0mZlNDsO224JOeDW87xr3+MAO3/gFA01qhzVecMQKjzXgsuBTA7OadgWt8Y7eYE7W4A6ziIix1B5vBe/wVcO2BV8Y5B4zM8euNoO6Ag6ZmeV2VxuPZ2CLiIjpZ/91fwb+N34A6l9kqqxioNcAAAAASUVORK5CYII="
                        style={{ mixBlendMode: "darken" }}
                      ></image>
                      <path
                        fill="none"
                        stroke="#231f20"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        d="M26.09 115.35a3.15 3.15 0 012.82-2.58 3.21 3.21 0 013.25 3.08"
                      ></path>
                    </g>
                    <path
                      stroke="#231f20"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="0.5"
                      d="M29.07 134a8.41 8.41 0 01-1.33-4.33 3.43 3.43 0 01.8-2.79 2.51 2.51 0 012.41-.42 3.19 3.19 0 011.71 3.45 4.35 4.35 0 01-1.24 2.09 9.1 9.1 0 01-2.35 2z"
                      data-name="left pupil"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      </>
    );
  }
}

export default Icon;