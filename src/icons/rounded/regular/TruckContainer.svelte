<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M1 15h12a1 1 0 0 0 1-1V5.5A4.505 4.505 0 0 0 9.5 1h-5A4.505 4.505 0 0 0 0 5.5V14a1 1 0 0 0 1 1Zm1-9.5A2.5 2.5 0 0 1 4.5 3h5A2.5 2.5 0 0 1 12 5.5V13H2ZM6 6v4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm4 0v4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm13.641 4.76-.9-2.7C21.988 4.949 16.319 3.4 16 7.5V17H1a1 1 0 0 0-1 1v1.5a3.5 3.5 0 0 0 3.857 3.482 3.4 3.4 0 0 0 2.12-1.059A3.517 3.517 0 0 0 12 19.5V19h4v.5a3.5 3.5 0 0 0 7 0v-.769A2 2 0 0 0 24 17v-4.026a6.989 6.989 0 0 0-.359-2.214ZM18 17v-4h4v4Zm.5-10a2.467 2.467 0 0 1 2.343 1.688l.77 2.312H18V7.5a.5.5 0 0 1 .5-.5ZM3.658 20.992A1.5 1.5 0 0 1 2 19.5V19h3v.357a1.594 1.594 0 0 1-1.342 1.635ZM10 19.5a1.535 1.535 0 1 1-3-.5h3Zm9.5 1.5a1.5 1.5 0 0 1-1.5-1.5V19h3v.5a1.5 1.5 0 0 1-1.5 1.5Z"/></svg>
  