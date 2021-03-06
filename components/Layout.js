export default function Layout({ children }) {
  return (
    <>
      {children}
      <style jsx global>{`
        html {
          font-family: sans-serif;
          line-height: 1.15;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
        body {
          margin: 0;
        }
        article,
        aside,
        footer,
        header,
        nav,
        section {
          display: block;
        }
        h1 {
          font-size: 2em;
          margin: 0.67em 0;
        }
        figcaption,
        figure,
        main {
          display: block;
        }
        figure {
          margin: 1em 40px;
        }
        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }
        pre {
          font-family: monospace, monospace;
          font-size: 1em;
        }
        a {
          background-color: transparent;
          -webkit-text-decoration-skip: objects;
        }
        a:active,
        a:hover {
          outline-width: 0;
        }
        abbr[title] {
          border-bottom: none;
          text-decoration: underline;
          text-decoration: underline dotted;
        }
        b,
        strong {
          font-weight: inherit;
          font-weight: bolder;
        }
        code,
        kbd,
        samp {
          font-family: monospace, monospace;
          font-size: 1em;
        }
        dfn {
          font-style: italic;
        }
        mark {
          background-color: #ff0;
          color: #000;
        }
        small {
          font-size: 80%;
        }
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
        sub {
          bottom: -0.25em;
        }
        sup {
          top: -0.5em;
        }
        audio,
        video {
          display: inline-block;
        }
        audio:not([controls]) {
          display: none;
          height: 0;
        }
        img {
          border-style: none;
        }
        svg:not(:root) {
          overflow: hidden;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: sans-serif;
          font-size: 100%;
          line-height: 1.15;
          margin: 0;
        }
        button,
        input {
          overflow: visible;
        }
        button,
        select {
          text-transform: none;
        }
        [type='reset'],
        [type='submit'],
        button,
        html [type='button'] {
          -webkit-appearance: button;
        }
        [type='button']::-moz-focus-inner,
        [type='reset']::-moz-focus-inner,
        [type='submit']::-moz-focus-inner,
        button::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }
        [type='button']:-moz-focusring,
        [type='reset']:-moz-focusring,
        [type='submit']:-moz-focusring,
        button:-moz-focusring {
          outline: 1px dotted ButtonText;
        }
        fieldset {
          border: 1px solid silver;
          margin: 0 2px;
          padding: 0.35em 0.625em 0.75em;
        }
        legend {
          box-sizing: border-box;
          color: inherit;
          display: table;
          max-width: 100%;
          padding: 0;
          white-space: normal;
        }
        progress {
          display: inline-block;
          vertical-align: baseline;
        }
        textarea {
          overflow: auto;
        }
        [type='checkbox'],
        [type='radio'] {
          box-sizing: border-box;
          padding: 0;
        }
        [type='number']::-webkit-inner-spin-button,
        [type='number']::-webkit-outer-spin-button {
          height: auto;
        }
        [type='search'] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }
        [type='search']::-webkit-search-cancel-button,
        [type='search']::-webkit-search-decoration {
          -webkit-appearance: none;
        }
        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }
        details,
        menu {
          display: block;
        }
        summary {
          display: list-item;
        }
        canvas {
          display: inline-block;
        }
        [hidden],
        template {
          display: none;
        }
        .h00 {
          font-size: 4rem;
        }
        .h0 {
          font-size: 3rem;
        }
        .h1 {
          font-size: 3.5rem;
        }
        .h2 {
          font-size: 2.2rem;
        }
        .h3 {
          font-size: 1.75rem;
        }
        .h4 {
          font-size: 1.38rem;
        }
        .h5 {
          font-size: 1.125rem;
        }
        .h6 {
          font-size: 1rem;
        }
        .font-family-inherit {
          font-family: inherit;
        }
        .font-size-inherit {
          font-size: inherit;
        }
        .text-decoration-none {
          text-decoration: none;
        }
        .bold {
          font-weight: 700;
        }
        .regular {
          font-weight: 400;
        }
        .italic {
          font-style: italic;
        }
        .caps {
          text-transform: uppercase;
          letter-spacing: 0;
        }
        .left-align {
          text-align: left;
        }
        .center {
          text-align: center;
        }
        .right-align {
          text-align: right;
        }
        .justify {
          text-align: justify;
        }
        .nowrap {
          white-space: nowrap;
        }
        .break-word {
          word-wrap: break-word;
        }
        .line-height-1 {
          line-height: 1rem;
        }
        .line-height-2 {
          line-height: 1.125rem;
        }
        .line-height-3 {
          line-height: 1.5rem;
        }
        .line-height-4 {
          line-height: 2rem;
        }
        .list-style-none {
          list-style: none;
        }
        .underline {
          text-decoration: underline;
        }
        .truncate {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .list-reset {
          list-style: none;
          padding-left: 0;
        }
        .inline {
          display: inline;
        }
        .block {
          display: block;
        }
        .inline-block {
          display: inline-block;
        }
        .table {
          display: table;
        }
        .table-cell {
          display: table-cell;
        }
        .overflow-hidden {
          overflow: hidden;
        }
        .overflow-scroll {
          overflow: scroll;
        }
        .overflow-auto {
          overflow: auto;
        }
        .clearfix:after,
        .clearfix:before {
          content: ' ';
          display: table;
        }
        .clearfix:after {
          clear: both;
        }
        .left {
          float: left;
        }
        .right {
          float: right;
        }
        .fit {
          max-width: 100%;
        }
        .max-width-1 {
          max-width: 24rem;
        }
        .max-width-2 {
          max-width: 32rem;
        }
        .max-width-3 {
          max-width: 48rem;
        }
        .max-width-4 {
          max-width: 64rem;
        }
        .border-box {
          box-sizing: border-box;
        }
        .align-baseline {
          vertical-align: baseline;
        }
        .align-top {
          vertical-align: top;
        }
        .align-middle {
          vertical-align: middle;
        }
        .align-bottom {
          vertical-align: bottom;
        }
        .m0 {
          margin: 0;
        }
        .mt0 {
          margin-top: 0;
        }
        .mr0 {
          margin-right: 0;
        }
        .mb0 {
          margin-bottom: 0;
        }
        .ml0,
        .mx0 {
          margin-left: 0;
        }
        .mx0 {
          margin-right: 0;
        }
        .my0 {
          margin-top: 0;
          margin-bottom: 0;
        }
        .m1 {
          margin: 0.5rem;
        }
        .mt1 {
          margin-top: 0.5rem;
        }
        .mr1 {
          margin-right: 0.5rem;
        }
        .mb1 {
          margin-bottom: 0.5rem;
        }
        .ml1,
        .mx1 {
          margin-left: 0.5rem;
        }
        .mx1 {
          margin-right: 0.5rem;
        }
        .my1 {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .m2 {
          margin: 1rem;
        }
        .mt2 {
          margin-top: 1rem;
        }
        .mr2 {
          margin-right: 1rem;
        }
        .mb2 {
          margin-bottom: 1rem;
        }
        .ml2,
        .mx2 {
          margin-left: 1rem;
        }
        .mx2 {
          margin-right: 1rem;
        }
        .my2 {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .m3 {
          margin: 1.5rem;
        }
        .mt3 {
          margin-top: 1.5rem;
        }
        .mr3 {
          margin-right: 1.5rem;
        }
        .mb3 {
          margin-bottom: 1.5rem;
        }
        .ml3,
        .mx3 {
          margin-left: 1.5rem;
        }
        .mx3 {
          margin-right: 1.5rem;
        }
        .my3 {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .m4 {
          margin: 2rem;
        }
        .mt4 {
          margin-top: 2rem;
        }
        .mr4 {
          margin-right: 2rem;
        }
        .mb4 {
          margin-bottom: 2rem;
        }
        .ml4,
        .mx4 {
          margin-left: 2rem;
        }
        .mx4 {
          margin-right: 2rem;
        }
        .my4 {
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
        .mxn1 {
          margin-left: calc(0.5rem * -1);
          margin-right: calc(0.5rem * -1);
        }
        .mxn2 {
          margin-left: calc(1rem * -1);
          margin-right: calc(1rem * -1);
        }
        .mxn3 {
          margin-left: calc(1.5rem * -1);
          margin-right: calc(1.5rem * -1);
        }
        .mxn4 {
          margin-left: calc(2rem * -1);
          margin-right: calc(2rem * -1);
        }
        .m-auto {
          margin: auto;
        }
        .mt-auto {
          margin-top: auto;
        }
        .mr-auto {
          margin-right: auto;
        }
        .mb-auto {
          margin-bottom: auto;
        }
        .ml-auto,
        .mx-auto {
          margin-left: auto;
        }
        .mx-auto {
          margin-right: auto;
        }
        .my-auto {
          margin-top: auto;
          margin-bottom: auto;
        }
        .p0 {
          padding: 0;
        }
        .pt0 {
          padding-top: 0;
        }
        .pr0 {
          padding-right: 0;
        }
        .pb0 {
          padding-bottom: 0;
        }
        .pl0,
        .px0 {
          padding-left: 0;
        }
        .px0 {
          padding-right: 0;
        }
        .py0 {
          padding-top: 0;
          padding-bottom: 0;
        }
        .p1 {
          padding: 0.5rem;
        }
        .pt1 {
          padding-top: 0.5rem;
        }
        .pr1 {
          padding-right: 0.5rem;
        }
        .pb1 {
          padding-bottom: 0.5rem;
        }
        .pl1 {
          padding-left: 0.5rem;
        }
        .py1 {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
        .px1 {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }
        .p2 {
          padding: 1rem;
        }
        .pt2 {
          padding-top: 1rem;
        }
        .pr2 {
          padding-right: 1rem;
        }
        .pb2 {
          padding-bottom: 1rem;
        }
        .pl2 {
          padding-left: 1rem;
        }
        .py2 {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        .px2 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .p3 {
          padding: 1.5rem;
        }
        .pt3 {
          padding-top: 1.5rem;
        }
        .pr3 {
          padding-right: 1.5rem;
        }
        .pb3 {
          padding-bottom: 1.5rem;
        }
        .pl3 {
          padding-left: 1.5rem;
        }
        .py3 {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
        }
        .px3 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        .p4 {
          padding: 2rem;
        }
        .pt4 {
          padding-top: 2rem;
        }
        .pr4 {
          padding-right: 2rem;
        }
        .pb4 {
          padding-bottom: 2rem;
        }
        .pl4 {
          padding-left: 2rem;
        }
        .py4 {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
        .px4 {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .col {
          float: left;
        }
        .col,
        .col-right {
          box-sizing: border-box;
        }
        .col-right {
          float: right;
        }
        .col-1 {
          width: 8.33333%;
        }
        .col-2 {
          width: 16.66667%;
        }
        .col-3 {
          width: 25%;
        }
        .col-4 {
          width: 33.33333%;
        }
        .col-5 {
          width: 41.66667%;
        }
        .col-6 {
          width: 50%;
        }
        .col-7 {
          width: 58.33333%;
        }
        .col-8 {
          width: 66.66667%;
        }
        .col-9 {
          width: 75%;
        }
        .col-10 {
          width: 83.33333%;
        }
        .col-11 {
          width: 91.66667%;
        }
        .col-12 {
          width: 100%;
        }
        @media (min-width: 40.06rem) {
          .sm-col {
            float: left;
            box-sizing: border-box;
          }
          .sm-col-right {
            float: right;
            box-sizing: border-box;
          }
          .sm-col-1 {
            width: 8.33333%;
          }
          .sm-col-2 {
            width: 16.66667%;
          }
          .sm-col-3 {
            width: 25%;
          }
          .sm-col-4 {
            width: 33.33333%;
          }
          .sm-col-5 {
            width: 41.66667%;
          }
          .sm-col-6 {
            width: 50%;
          }
          .sm-col-7 {
            width: 58.33333%;
          }
          .sm-col-8 {
            width: 66.66667%;
          }
          .sm-col-9 {
            width: 75%;
          }
          .sm-col-10 {
            width: 83.33333%;
          }
          .sm-col-11 {
            width: 91.66667%;
          }
          .sm-col-12 {
            width: 100%;
          }
        }
        @media (min-width: 52.06rem) {
          .md-col {
            float: left;
            box-sizing: border-box;
          }
          .md-col-right {
            float: right;
            box-sizing: border-box;
          }
          .md-col-1 {
            width: 8.33333%;
          }
          .md-col-2 {
            width: 16.66667%;
          }
          .md-col-3 {
            width: 25%;
          }
          .md-col-4 {
            width: 33.33333%;
          }
          .md-col-5 {
            width: 41.66667%;
          }
          .md-col-6 {
            width: 50%;
          }
          .md-col-7 {
            width: 58.33333%;
          }
          .md-col-8 {
            width: 66.66667%;
          }
          .md-col-9 {
            width: 75%;
          }
          .md-col-10 {
            width: 83.33333%;
          }
          .md-col-11 {
            width: 91.66667%;
          }
          .md-col-12 {
            width: 100%;
          }
        }
        @media (min-width: 64.06rem) {
          .lg-col {
            float: left;
            box-sizing: border-box;
          }
          .lg-col-right {
            float: right;
            box-sizing: border-box;
          }
          .lg-col-1 {
            width: 8.33333%;
          }
          .lg-col-2 {
            width: 16.66667%;
          }
          .lg-col-3 {
            width: 25%;
          }
          .lg-col-4 {
            width: 33.33333%;
          }
          .lg-col-5 {
            width: 41.66667%;
          }
          .lg-col-6 {
            width: 50%;
          }
          .lg-col-7 {
            width: 58.33333%;
          }
          .lg-col-8 {
            width: 66.66667%;
          }
          .lg-col-9 {
            width: 75%;
          }
          .lg-col-10 {
            width: 83.33333%;
          }
          .lg-col-11 {
            width: 91.66667%;
          }
          .lg-col-12 {
            width: 100%;
          }
        }
        .flex {
          display: -ms-flexbox;
          display: flex;
        }
        @media (min-width: 40.06rem) {
          .sm-flex {
            display: -ms-flexbox;
            display: flex;
          }
        }
        @media (min-width: 52.06rem) {
          .md-flex {
            display: -ms-flexbox;
            display: flex;
          }
        }
        @media (min-width: 64.06rem) {
          .lg-flex {
            display: -ms-flexbox;
            display: flex;
          }
        }
        .flex-column {
          -ms-flex-direction: column;
          flex-direction: column;
        }
        .flex-wrap {
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
        }
        .items-start {
          -ms-flex-align: start;
          align-items: flex-start;
        }
        .items-end {
          -ms-flex-align: end;
          align-items: flex-end;
        }
        .items-center {
          -ms-flex-align: center;
          align-items: center;
        }
        .items-baseline {
          -ms-flex-align: baseline;
          align-items: baseline;
        }
        .items-stretch {
          -ms-flex-align: stretch;
          align-items: stretch;
        }
        .self-start {
          -ms-flex-item-align: start;
          align-self: flex-start;
        }
        .self-end {
          -ms-flex-item-align: end;
          align-self: flex-end;
        }
        .self-center {
          -ms-flex-item-align: center;
          -ms-grid-row-align: center;
          align-self: center;
        }
        .self-baseline {
          -ms-flex-item-align: baseline;
          align-self: baseline;
        }
        .self-stretch {
          -ms-flex-item-align: stretch;
          -ms-grid-row-align: stretch;
          align-self: stretch;
        }
        .justify-start {
          -ms-flex-pack: start;
          justify-content: flex-start;
        }
        .justify-end {
          -ms-flex-pack: end;
          justify-content: flex-end;
        }
        .justify-center {
          -ms-flex-pack: center;
          justify-content: center;
        }
        .justify-between {
          -ms-flex-pack: justify;
          justify-content: space-between;
        }
        .justify-around {
          -ms-flex-pack: distribute;
          justify-content: space-around;
        }
        .justify-evenly {
          -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
        }
        .content-start {
          -ms-flex-line-pack: start;
          align-content: flex-start;
        }
        .content-end {
          -ms-flex-line-pack: end;
          align-content: flex-end;
        }
        .content-center {
          -ms-flex-line-pack: center;
          align-content: center;
        }
        .content-between {
          -ms-flex-line-pack: justify;
          align-content: space-between;
        }
        .content-around {
          -ms-flex-line-pack: distribute;
          align-content: space-around;
        }
        .content-stretch {
          -ms-flex-line-pack: stretch;
          align-content: stretch;
        }
        .flex-auto {
          -ms-flex: 1 1 auto;
          flex: 1 1 auto;
          min-width: 0;
          min-height: 0;
        }
        .flex-none {
          -ms-flex: none;
          flex: none;
        }
        .order-0 {
          -ms-flex-order: 0;
          order: 0;
        }
        .order-1 {
          -ms-flex-order: 1;
          order: 1;
        }
        .order-2 {
          -ms-flex-order: 2;
          order: 2;
        }
        .order-3 {
          -ms-flex-order: 3;
          order: 3;
        }
        .order-last {
          -ms-flex-order: 99999;
          order: 99999;
        }
        .relative {
          position: relative;
        }
        .absolute {
          position: absolute;
        }
        .fixed {
          position: fixed;
        }
        .top-0 {
          top: 0;
        }
        .right-0 {
          right: 0;
        }
        .bottom-0 {
          bottom: 0;
        }
        .left-0 {
          left: 0;
        }
        .z1 {
          z-index: 1;
        }
        .z2 {
          z-index: 2;
        }
        .z3 {
          z-index: 3;
        }
        .z4 {
          z-index: 4;
        }
        .border {
          border-style: solid;
          border-width: 1px;
        }
        .border-top {
          border-top-style: solid;
          border-top-width: 1px;
        }
        .border-right {
          border-right-style: solid;
          border-right-width: 1px;
        }
        .border-bottom {
          border-bottom-style: solid;
          border-bottom-width: 1px;
        }
        .border-left {
          border-left-style: solid;
          border-left-width: 1px;
        }
        .border-none {
          border: 0;
        }
        .rounded {
          border-radius: 3px;
        }
        .circle {
          border-radius: 50%;
        }
        .rounded-top {
          border-radius: 3px 3px 0 0;
        }
        .rounded-right {
          border-radius: 0 3px 3px 0;
        }
        .rounded-bottom {
          border-radius: 0 0 3px 3px;
        }
        .rounded-left {
          border-radius: 3px 0 0 3px;
        }
        .not-rounded {
          border-radius: 0;
        }
        .hide {
          position: absolute;
          height: 1px;
          width: 1px;
          overflow: hidden;
          clip: rect(1px, 1px, 1px, 1px);
        }
        @media (max-width: 40rem) {
          .xs-hide {
            display: none;
          }
        }
        @media (min-width: 40.06rem) and (max-width: 52rem) {
          .sm-hide {
            display: none;
          }
        }
        @media (min-width: 52.06rem) and (max-width: 64rem) {
          .md-hide {
            display: none;
          }
        }
        @media (min-width: 64.06rem) {
          .lg-hide {
            display: none;
          }
        }
        .display-none {
          display: none;
        }
        * {
          box-sizing: border-box;
        }
        body {
          background: #fff;
          color: #222;
          min-width: 315px;
          overflow-x: hidden;
          font-smooth: always;
          -webkit-font-smoothing: antialiased;
        }
        main {
          max-width: 1280px;
          margin: 0 auto;
        }
        p {
          padding: 0;
          margin: 0;
        }
        .ampstart-accent {
          color: #f88;
        }
        #content:target {
          margin-top: calc(0px - 3.5rem);
          padding-top: 3.5rem;
        }
        .ampstart-title-lg {
          font-size: 3.5rem;
          line-height: 3.5rem;
          letter-spacing: 0.06rem;
        }
        .ampstart-title-md {
          font-size: 2.2rem;
          line-height: 2.5rem;
          letter-spacing: 0.06rem;
        }
        .ampstart-title-sm {
          font-size: 1.75rem;
          line-height: 2rem;
          letter-spacing: 0.06rem;
        }
        .ampstart-subtitle,
        body {
          line-height: 1.5rem;
          letter-spacing: normal;
        }
        .ampstart-subtitle {
          color: #f88;
          font-size: 1rem;
        }
        .ampstart-byline,
        .ampstart-caption,
        .ampstart-hint,
        .ampstart-label {
          font-size: 1.125rem;
          color: #4f4f4f;
          line-height: 1.125rem;
          letter-spacing: 0.06rem;
        }
        .ampstart-label {
          text-transform: uppercase;
        }
        .ampstart-footer,
        .ampstart-small-text {
          font-size: 1rem;
          line-height: 1rem;
          letter-spacing: 0.06rem;
        }
        .ampstart-card {
          box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
            0 1px 1px -1px rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        }
        .h1,
        h1 {
          font-size: 3.5rem;
          line-height: 3.5rem;
        }
        .h2,
        h2 {
          font-size: 2.2rem;
          line-height: 2.5rem;
        }
        .h3,
        h3 {
          font-size: 1.75rem;
          line-height: 2rem;
        }
        .h4,
        h4 {
          font-size: 1.38rem;
          line-height: 1.5rem;
        }
        .h5,
        h5 {
          font-size: 1.125rem;
          line-height: 1.125rem;
        }
        .h6,
        h6 {
          font-size: 1rem;
          line-height: 1rem;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          padding: 0;
          font-weight: 400;
          letter-spacing: 0.06rem;
        }
        a,
        a:active,
        a:visited {
          color: inherit;
        }
     
        @media (min-width: 40.06rem) {
          .sm-h00 {
            font-size: 4rem;
          }
          .sm-h0 {
            font-size: 3rem;
          }
          .sm-h1 {
            font-size: 3.5rem;
          }
          .sm-h2 {
            font-size: 2.2rem;
          }
          .sm-h3 {
            font-size: 1.75rem;
          }
          .sm-h4 {
            font-size: 1.38rem;
          }
          .sm-h5 {
            font-size: 1.125rem;
          }
          .sm-h6 {
            font-size: 1rem;
          }
        }
        @media (min-width: 52.06rem) {
          .md-h00 {
            font-size: 4rem;
          }
          .md-h0 {
            font-size: 3rem;
          }
          .md-h1 {
            font-size: 3.5rem;
          }
          .md-h2 {
            font-size: 2.2rem;
          }
          .md-h3 {
            font-size: 1.75rem;
          }
          .md-h4 {
            font-size: 1.38rem;
          }
          .md-h5 {
            font-size: 1.125rem;
          }
          .md-h6 {
            font-size: 1rem;
          }
        }
        @media (min-width: 64.06rem) {
          .lg-h00 {
            font-size: 4rem;
          }
          .lg-h0 {
            font-size: 3rem;
          }
          .lg-h1 {
            font-size: 3.5rem;
          }
          .lg-h2 {
            font-size: 2.2rem;
          }
          .lg-h3 {
            font-size: 1.75rem;
          }
          .lg-h4 {
            font-size: 1.38rem;
          }
          .lg-h5 {
            font-size: 1.125rem;
          }
          .lg-h6 {
            font-size: 1rem;
          }
        }
        @media (min-width: 40.06rem) {
          .sm-m0 {
            margin: 0;
          }
          .sm-mt0 {
            margin-top: 0;
          }
          .sm-mr0 {
            margin-right: 0;
          }
          .sm-mb0 {
            margin-bottom: 0;
          }
          .sm-ml0,
          .sm-mx0 {
            margin-left: 0;
          }
          .sm-mx0 {
            margin-right: 0;
          }
          .sm-my0 {
            margin-top: 0;
            margin-bottom: 0;
          }
          .sm-m1 {
            margin: 0.5rem;
          }
          .sm-mt1 {
            margin-top: 0.5rem;
          }
          .sm-mr1 {
            margin-right: 0.5rem;
          }
          .sm-mb1 {
            margin-bottom: 0.5rem;
          }
          .sm-ml1,
          .sm-mx1 {
            margin-left: 0.5rem;
          }
          .sm-mx1 {
            margin-right: 0.5rem;
          }
          .sm-my1 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
          }
          .sm-m2 {
            margin: 1rem;
          }
          .sm-mt2 {
            margin-top: 1rem;
          }
          .sm-mr2 {
            margin-right: 1rem;
          }
          .sm-mb2 {
            margin-bottom: 1rem;
          }
          .sm-ml2,
          .sm-mx2 {
            margin-left: 1rem;
          }
          .sm-mx2 {
            margin-right: 1rem;
          }
          .sm-my2 {
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .sm-m3 {
            margin: 1.5rem;
          }
          .sm-mt3 {
            margin-top: 1.5rem;
          }
          .sm-mr3 {
            margin-right: 1.5rem;
          }
          .sm-mb3 {
            margin-bottom: 1.5rem;
          }
          .sm-ml3,
          .sm-mx3 {
            margin-left: 1.5rem;
          }
          .sm-mx3 {
            margin-right: 1.5rem;
          }
          .sm-my3 {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .sm-m4 {
            margin: 2rem;
          }
          .sm-mt4 {
            margin-top: 2rem;
          }
          .sm-mr4 {
            margin-right: 2rem;
          }
          .sm-mb4 {
            margin-bottom: 2rem;
          }
          .sm-ml4,
          .sm-mx4 {
            margin-left: 2rem;
          }
          .sm-mx4 {
            margin-right: 2rem;
          }
          .sm-my4 {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .sm-mxn1 {
            margin-left: -0.5rem;
            margin-right: -0.5rem;
          }
          .sm-mxn2 {
            margin-left: -1rem;
            margin-right: -1rem;
          }
          .sm-mxn3 {
            margin-left: -1.5rem;
            margin-right: -1.5rem;
          }
          .sm-mxn4 {
            margin-left: -2rem;
            margin-right: -2rem;
          }
          .sm-ml-auto {
            margin-left: auto;
          }
          .sm-mr-auto,
          .sm-mx-auto {
            margin-right: auto;
          }
          .sm-mx-auto {
            margin-left: auto;
          }
        }
        @media (min-width: 52.06rem) {
          .md-m0 {
            margin: 0;
          }
          .md-mt0 {
            margin-top: 0;
          }
          .md-mr0 {
            margin-right: 0;
          }
          .md-mb0 {
            margin-bottom: 0;
          }
          .md-ml0,
          .md-mx0 {
            margin-left: 0;
          }
          .md-mx0 {
            margin-right: 0;
          }
          .md-my0 {
            margin-top: 0;
            margin-bottom: 0;
          }
          .md-m1 {
            margin: 0.5rem;
          }
          .md-mt1 {
            margin-top: 0.5rem;
          }
          .md-mr1 {
            margin-right: 0.5rem;
          }
          .md-mb1 {
            margin-bottom: 0.5rem;
          }
          .md-ml1,
          .md-mx1 {
            margin-left: 0.5rem;
          }
          .md-mx1 {
            margin-right: 0.5rem;
          }
          .md-my1 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
          }
          .md-m2 {
            margin: 1rem;
          }
          .md-mr2 {
            margin-right: 1rem;
          }
          .md-mb2 {
            margin-bottom: 1rem;
          }
          .md-ml2,
          .md-mx2 {
            margin-left: 1rem;
          }
          .md-mx2 {
            margin-right: 1rem;
          }
          .md-my2 {
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .md-m3 {
            margin: 1.5rem;
          }
          .md-mt3 {
            margin-top: 1.5rem;
          }
          .md-mr3 {
            margin-right: 1.5rem;
          }
          .md-mb3 {
            margin-bottom: 1.5rem;
          }
          .md-ml3,
          .md-mx3 {
            margin-left: 1.5rem;
          }
          .md-mx3 {
            margin-right: 1.5rem;
          }
          .md-my3 {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .md-m4 {
            margin: 2rem;
          }
          .md-mt4 {
            margin-top: 2rem;
          }
          .md-mr4 {
            margin-right: 2rem;
          }
          .md-mb4 {
            margin-bottom: 2rem;
          }
          .md-ml4,
          .md-mx4 {
            margin-left: 2rem;
          }
          .md-mx4 {
            margin-right: 2rem;
          }
          .md-my4 {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .md-mxn1 {
            margin-left: -0.5rem;
            margin-right: -0.5rem;
          }
          .md-mxn2 {
            margin-left: -1rem;
            margin-right: -1rem;
          }
          .md-mxn3 {
            margin-left: -1.5rem;
            margin-right: -1.5rem;
          }
          .md-mxn4 {
            margin-left: -2rem;
            margin-right: -2rem;
          }
          .md-ml-auto {
            margin-left: auto;
          }
          .md-mr-auto,
          .md-mx-auto {
            margin-right: auto;
          }
          .md-mx-auto {
            margin-left: auto;
          }
        }
        @media (min-width: 64.06rem) {
          .lg-m0 {
            margin: 0;
          }
          .lg-mt0 {
            margin-top: 0;
          }
          .lg-mr0 {
            margin-right: 0;
          }
          .lg-mb0 {
            margin-bottom: 0;
          }
          .lg-ml0,
          .lg-mx0 {
            margin-left: 0;
          }
          .lg-mx0 {
            margin-right: 0;
          }
          .lg-my0 {
            margin-top: 0;
            margin-bottom: 0;
          }
          .lg-m1 {
            margin: 0.5rem;
          }
          .lg-mt1 {
            margin-top: 0.5rem;
          }
          .lg-mr1 {
            margin-right: 0.5rem;
          }
          .lg-mb1 {
            margin-bottom: 0.5rem;
          }
          .lg-ml1,
          .lg-mx1 {
            margin-left: 0.5rem;
          }
          .lg-mx1 {
            margin-right: 0.5rem;
          }
          .lg-my1 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
          }
          .lg-m2 {
            margin: 1rem;
          }
          .lg-mt2 {
            margin-top: 1rem;
          }
          .lg-mr2 {
            margin-right: 1rem;
          }
          .lg-mb2 {
            margin-bottom: 1rem;
          }
          .lg-ml2,
          .lg-mx2 {
            margin-left: 1rem;
          }
          .lg-mx2 {
            margin-right: 1rem;
          }
          .lg-my2 {
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .lg-m3 {
            margin: 1.5rem;
          }
          .lg-mt3 {
            margin-top: 1.5rem;
          }
          .lg-mr3 {
            margin-right: 1.5rem;
          }
          .lg-mb3 {
            margin-bottom: 1.5rem;
          }
          .lg-ml3,
          .lg-mx3 {
            margin-left: 1.5rem;
          }
          .lg-mx3 {
            margin-right: 1.5rem;
          }
          .lg-my3 {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .lg-m4 {
            margin: 2rem;
          }
          .lg-mt4 {
            margin-top: 2rem;
          }
          .lg-mr4 {
            margin-right: 2rem;
          }
          .lg-mb4 {
            margin-bottom: 2rem;
          }
          .lg-ml4,
          .lg-mx4 {
            margin-left: 2rem;
          }
          .lg-mx4 {
            margin-right: 2rem;
          }
          .lg-my4 {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .lg-mxn1 {
            margin-left: -0.5rem;
            margin-right: -0.5rem;
          }
          .lg-mxn2 {
            margin-left: -1rem;
            margin-right: -1rem;
          }
          .lg-mxn3 {
            margin-left: -1.5rem;
            margin-right: -1.5rem;
          }
          .lg-mxn4 {
            margin-left: -2rem;
            margin-right: -2rem;
          }
          .lg-ml-auto {
            margin-left: auto;
          }
          .lg-mr-auto,
          .lg-mx-auto {
            margin-right: auto;
          }
          .lg-mx-auto {
            margin-left: auto;
          }
        }
        @media (min-width: 40.06rem) {
          .sm-p0 {
            padding: 0;
          }
          .sm-pt0 {
            padding-top: 0;
          }
          .sm-pr0 {
            padding-right: 0;
          }
          .sm-pb0 {
            padding-bottom: 0;
          }
          .sm-pl0,
          .sm-px0 {
            padding-left: 0;
          }
          .sm-px0 {
            padding-right: 0;
          }
          .sm-py0 {
            padding-top: 0;
            padding-bottom: 0;
          }
          .sm-p1 {
            padding: 0.5rem;
          }
          .sm-pt1 {
            padding-top: 0.5rem;
          }
          .sm-pr1 {
            padding-right: 0.5rem;
          }
          .sm-pb1 {
            padding-bottom: 0.5rem;
          }
          .sm-pl1,
          .sm-px1 {
            padding-left: 0.5rem;
          }
          .sm-px1 {
            padding-right: 0.5rem;
          }
          .sm-py1 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .sm-p2 {
            padding: 1rem;
          }
          .sm-pt2 {
            padding-top: 1rem;
          }
          .sm-pr2 {
            padding-right: 1rem;
          }
          .sm-pb2 {
            padding-bottom: 1rem;
          }
          .sm-pl2,
          .sm-px2 {
            padding-left: 1rem;
          }
          .sm-px2 {
            padding-right: 1rem;
          }
          .sm-py2 {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .sm-p3 {
            padding: 1.5rem;
          }
          .sm-pt3 {
            padding-top: 1.5rem;
          }
          .sm-pr3 {
            padding-right: 1.5rem;
          }
          .sm-pb3 {
            padding-bottom: 1.5rem;
          }
          .sm-pl3,
          .sm-px3 {
            padding-left: 1.5rem;
          }
          .sm-px3 {
            padding-right: 1.5rem;
          }
          .sm-py3 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          .sm-p4 {
            padding: 2rem;
          }
          .sm-pt4 {
            padding-top: 2rem;
          }
          .sm-pr4 {
            padding-right: 2rem;
          }
          .sm-pb4 {
            padding-bottom: 2rem;
          }
          .sm-pl4,
          .sm-px4 {
            padding-left: 2rem;
          }
          .sm-px4 {
            padding-right: 2rem;
          }
          .sm-py4 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
        @media (min-width: 52.06rem) {
          .md-p0 {
            padding: 0;
          }
          .md-pt0 {
            padding-top: 0;
          }
          .md-pr0 {
            padding-right: 0;
          }
          .md-pb0 {
            padding-bottom: 0;
          }
          .md-pl0,
          .md-px0 {
            padding-left: 0;
          }
          .md-px0 {
            padding-right: 0;
          }
          .md-py0 {
            padding-top: 0;
            padding-bottom: 0;
          }
          .md-p1 {
            padding: 0.5rem;
          }
          .md-pt1 {
            padding-top: 0.5rem;
          }
          .md-pr1 {
            padding-right: 0.5rem;
          }
          .md-pb1 {
            padding-bottom: 0.5rem;
          }
          .md-pl1,
          .md-px1 {
            padding-left: 0.5rem;
          }
          .md-px1 {
            padding-right: 0.5rem;
          }
          .md-py1 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .md-p2 {
            padding: 1rem;
          }
          .md-pt2 {
            padding-top: 1rem;
          }
          .md-pr2 {
            padding-right: 1rem;
          }
          .md-pb2 {
            padding-bottom: 1rem;
          }
          .md-pl2,
          .md-px2 {
            padding-left: 1rem;
          }
          .md-px2 {
            padding-right: 1rem;
          }
          .md-py2 {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .md-p3 {
            padding: 1.5rem;
          }
          .md-pt3 {
            padding-top: 1.5rem;
          }
          .md-pr3 {
            padding-right: 1.5rem;
          }
          .md-pb3 {
            padding-bottom: 1.5rem;
          }
          .md-pl3,
          .md-px3 {
            padding-left: 1.5rem;
          }
          .md-px3 {
            padding-right: 1.5rem;
          }
          .md-py3 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          .md-p4 {
            padding: 2rem;
          }
          .md-pt4 {
            padding-top: 2rem;
          }
          .md-pr4 {
            padding-right: 2rem;
          }
          .md-pb4 {
            padding-bottom: 2rem;
          }
          .md-pl4,
          .md-px4 {
            padding-left: 2rem;
          }
          .md-px4 {
            padding-right: 2rem;
          }
          .md-py4 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
        @media (min-width: 64.06rem) {
          .lg-p0 {
            padding: 0;
          }
          .lg-pt0 {
            padding-top: 0;
          }
          .lg-pr0 {
            padding-right: 0;
          }
          .lg-pb0 {
            padding-bottom: 0;
          }
          .lg-pl0,
          .lg-px0 {
            padding-left: 0;
          }
          .lg-px0 {
            padding-right: 0;
          }
          .lg-py0 {
            padding-top: 0;
            padding-bottom: 0;
          }
          .lg-p1 {
            padding: 0.5rem;
          }
          .lg-pt1 {
            padding-top: 0.5rem;
          }
          .lg-pr1 {
            padding-right: 0.5rem;
          }
          .lg-pb1 {
            padding-bottom: 0.5rem;
          }
          .lg-pl1,
          .lg-px1 {
            padding-left: 0.5rem;
          }
          .lg-px1 {
            padding-right: 0.5rem;
          }
          .lg-py1 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .lg-p2 {
            padding: 1rem;
          }
          .lg-pt2 {
            padding-top: 1rem;
          }
          .lg-pr2 {
            padding-right: 1rem;
          }
          .lg-pb2 {
            padding-bottom: 1rem;
          }
          .lg-pl2,
          .lg-px2 {
            padding-left: 1rem;
          }
          .lg-px2 {
            padding-right: 1rem;
          }
          .lg-py2 {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .lg-p3 {
            padding: 1.5rem;
          }
          .lg-pt3 {
            padding-top: 1.5rem;
          }
          .lg-pr3 {
            padding-right: 1.5rem;
          }
          .lg-pb3 {
            padding-bottom: 1.5rem;
          }
          .lg-pl3,
          .lg-px3 {
            padding-left: 1.5rem;
          }
          .lg-px3 {
            padding-right: 1.5rem;
          }
          .lg-py3 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          .lg-p4 {
            padding: 2rem;
          }
          .lg-pt4 {
            padding-top: 2rem;
          }
          .lg-pr4 {
            padding-right: 2rem;
          }
          .lg-pb4 {
            padding-bottom: 2rem;
          }
          .lg-pl4,
          .lg-px4 {
            padding-left: 2rem;
          }
          .lg-px4 {
            padding-right: 2rem;
          }
          .lg-py4 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
      
        body {
          font-size: 0.94rem;
          line-height: normal;
        }
        .h3 {
          color: #222;
        }
        .h7 {
          font-size: 0.94rem;
        }
        .h1,
        .h2,
        .h3,
        .h4,
        .h5,
        .h6,
        .h7,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        h7 {
          line-height: normal;
          letter-spacing: normal;
          font-family: Open Sans Condensed, sans-serif;
          text-transform: uppercase;
          font-weight: 700;
          color: #ec635e;
        }
        .pr7 {
          padding-right: 5rem;
        }
        .mb5 {
          margin-bottom: 2.5rem;
        }
        .pb5 {
          padding-bottom: 2.5rem;
        }
        @media (min-width: 52.06rem) {
          .md-h7 {
            font-size: 0.94rem;
          }
          .md-mb7 {
            margin-bottom: 5rem;
          }
          .md-px4 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .md-pt5 {
            padding-top: 2.5rem;
          }
          .md-pb5 {
            padding-bottom: 2.5rem;
          }
          .md-pl5 {
            padding-left: 2.5rem;
          }
          .md-pt6 {
            padding-top: 3rem;
          }
          .md-pl7 {
            padding-left: 5rem;
          }
          .md-pr7,
          .md-px7 {
            padding-right: 5rem;
          }
          .md-px7 {
            padding-left: 5rem;
          }
          .md-pt7 {
            padding-top: 5rem;
          }
          .md-pb7 {
            padding-bottom: 5rem;
          }
        }
        hr {
          width: calc(100% + 2 * 1.5rem);
          height: 1px;
          background-color: #f3f3f3;
          border: none;
          margin: 0 -1.5rem;
        }
        @media (min-width: 52.06rem) {
          hr {
            width: 100%;
            margin: 0;
          }
        }
        dd:after {
          content: '';
          display: block;
        }
        .commerce-loader,
        .commerce-loader:after,
        .commerce-loader:before {
          border-radius: 50%;
          width: 0.5rem;
          height: 0.5rem;
          animation-fill-mode: both;
          animation: a 1.44s infinite ease-in-out;
          will-change: contents;
        }
        .commerce-loader {
          color: #666;
          margin: 24% auto;
          animation-delay: 0.16s;
        }
        .commerce-loader:after,
        .commerce-loader:before {
          content: '';
          position: absolute;
          top: 0;
        }
        .commerce-loader:before {
          left: -1rem;
          animation-delay: 0s;
        }
        .commerce-loader:after {
          left: 1rem;
          animation-delay: 0.32s;
        }
        .commerce-hero-image .commerce-loader {
          margin-top: 200px;
        }
        .commerce-listing-banner .commerce-loader {
          margin-top: 100px;
        }
        @keyframes a {
          0%,
          80%,
          to {
            box-shadow: 0 1rem 0 -1rem;
          }
          40% {
            box-shadow: 0 1rem 0 0;
          }
        }
        .commerce-select-wrapper {
          position: relative;
          padding-right: 13px;
        }
        .commerce-select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border: none;
          border-radius: 0;
          background: none;
          color: #666;
        }
        .amp-mode-mouse .commerce-select:hover {
          color: #ec635e;
          cursor: pointer;
        }
        .ampstart-input {
          width: 100%;
        }
      
        .commerce-landing,
        .commerce-listing {
          max-width: none;
        }
      
        .commerce-listing-content {
          max-width: 1280px;
        }

        .commerce-listing-product-image {
          border-bottom: 1px dashed #dadada;
        }
        .amp-mode-mouse
          .commerce-listing-product:hover
          > .commerce-listing-product-name {
          text-decoration: underline;
        }
        

        @keyframes c {
          to {
            opacity: 1;
          }
        }

        .quantity {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 2px 0 0;
        }
        .quantity__minus,
        .quantity__plus {
          display: block;
          width: 22px;
          height: 23px;
          margin: 0;
          background: #ec635e;
          opacity:0.7;
          color:#fff;
          text-decoration: none;
          text-align: center;
          line-height: 23px;
        }
        
          .quantity__minus:hover,
          .quantity__plus:hover {
            opacity:1
            color: #fff;
          }
    
        .quantity__minus {
          border-radius: 3px 0 0 3px;
        }
        .quantity__plus {
          border-radius: 0 3px 3px 0;
        }
        .quantity__input {
          width: 32px;
          height: 19px;
          margin: 0;
          padding: 0;
          text-align: center;

          background: #fff;
          color: #000;
        }
        .quantity__minus:link,
        .quantity__plus:link {
          color: #8184a1;
        } 
        .quantity__minus:visited,
        .quantity__plus:visited {
          color: #fff;
        }
      `}</style>
    </>
  )
}