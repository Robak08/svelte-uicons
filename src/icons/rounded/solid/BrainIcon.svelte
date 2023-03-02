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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 0a4.01 4.01 0 0 0-3.9 3.1C3.33 3.51 2 5.1 2 7v.02C.75 7.96 0 9.43 0 11c0 .89.24 1.74.69 2.5C.24 14.26 0 15.11 0 16c0 1.69.86 3.24 2.27 4.17A5.459 5.459 0 0 0 7.5 24h.04c1.94-.01 3.46-1.7 3.46-3.64V2.01C11 .9 10.11 0 9 0Zm4 2.01v18.35c0 1.94 1.52 3.63 3.46 3.64h.04c2.42 0 4.51-1.56 5.23-3.83A4.978 4.978 0 0 0 24 16c0-.89-.24-1.74-.69-2.5.45-.76.69-1.61.69-2.5 0-1.57-.75-3.04-2-3.98V7c0-1.9-1.33-3.49-3.1-3.9-.41-1.77-2-3.1-3.9-3.1-1.11 0-2 .9-2 2.01Z"/></svg>
  