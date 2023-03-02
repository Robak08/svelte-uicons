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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.784 23.621A1 1 0 0 1 23 24h-8a1 1 0 0 1-.97-1.245c1.231-4.947 8.773-4.935 9.943.016a1 1 0 0 1-.189.85Zm-4.7-18.078-3.819-3.476a5 5 0 0 0-4.958-.7L3.2 4.138A5.012 5.012 0 0 0 .125 8.106C.121 8.143 0 13.385 0 13.385c0 .217.006.489.022.788l19.8-7.911a5.442 5.442 0 0 0-.739-.719Zm-1.96 10.418A2 2 0 0 0 20.8 14.4l-.072-.177a3.992 3.992 0 0 0 .976-4.42l-.53-1.3c-.074-.184-.164-.353-.249-.527l-3.683 1.469.381.937a1 1 0 1 1-1.853.753l-.385-.948-9.519 3.805.363.915a1 1 0 0 1-1.858.738l-.362-.911-3.683 1.472a5.3 5.3 0 0 0 .189.575l.529 1.3a3.955 3.955 0 0 0 4.02 2.466l.083.2a2 2 0 0 0 3.707-1.5Z"/></svg>
  