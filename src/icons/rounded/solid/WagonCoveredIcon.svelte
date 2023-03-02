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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M1.767 12h20.466l1.7-8.034a2.719 2.719 0 0 0-.691-2.5A2.69 2.69 0 0 0 20.81.682S19.252 1 19 1a6.307 6.307 0 0 1-1.854-.746 3 3 0 0 0-2.268-.062A12.355 12.355 0 0 1 12 1 12.354 12.354 0 0 1 9.123.193a3 3 0 0 0-2.267.06A6.316 6.316 0 0 1 5 1C4.748 1 3.192.683 3.192.683a2.683 2.683 0 0 0-2.431.782 2.711 2.711 0 0 0-.695 2.483ZM15 4a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0ZM7 4a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0Zm1 17a3 3 0 0 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 0 1-6 0 3 3 0 0 1 6 0Zm0-7v3a5.033 5.033 0 0 0-8 4h-4a5.032 5.032 0 0 0-8-4v-3Z"/></svg>
  