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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.9 2.551C21.329 4.289 19.729 7 15.309 7c-.841-.021-2.274.255-2.309-1a3.851 3.851 0 0 0-4-4 1 1 0 0 1 0-2 5.5 5.5 0 0 1 5.2 2.9A5.878 5.878 0 0 1 19.285 0c1.572-.132 3.155.783 2.615 2.551Zm.039 3.8c-1.83 2.132-5.173 2.884-8.239 2.629A7.09 7.09 0 0 1 14 11a17.161 17.161 0 0 1-2.168 7.555 1 1 0 0 1-1.665-1.109A15.5 15.5 0 0 0 12 11c0-.818-.495-6-5.495-6A6.41 6.41 0 0 0 0 11.5C0 19.588 7.927 24 12 24s12-4.412 12-12.5a7.476 7.476 0 0 0-2.06-5.153Z"/></svg>
  