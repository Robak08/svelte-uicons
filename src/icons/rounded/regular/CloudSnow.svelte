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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.493 23.6a1 1 0 0 1-.868-.5L9 22.01l-.625 1.09a1 1 0 1 1-1.734-1l.633-1.1H6a1 1 0 0 1 0-2h1.274l-.633-1.1a1 1 0 1 1 1.734-1L9 17.99l.625-1.09a1 1 0 1 1 1.734 1l-.633 1.1H12a1 1 0 0 1 0 2h-1.274l.633 1.105a1 1 0 0 1-.866 1.5ZM16.5 20H16a1 1 0 0 1 0-2h.5c6.59-.1 7.509-9.506 1.083-10.894a3.011 3.011 0 0 1-2.158-1.672A6 6 0 0 0 4.086 6.967a6.159 6.159 0 0 0 .023 2.18 3 3 0 0 1-.962 2.762 3.522 3.522 0 0 0 .153 5.314 1 1 0 1 1-1.258 1.554A5.533 5.533 0 0 1 1.8 10.43a1 1 0 0 0 .345-.9 8.146 8.146 0 0 1-.033-2.889A7.946 7.946 0 0 1 8.5.137a8.056 8.056 0 0 1 8.734 4.44 1.04 1.04 0 0 0 .743.569C26.759 7.092 25.505 19.818 16.5 20Zm-1.007-4.4a1 1 0 0 1-.868-.5L14 14.01l-.625 1.09a1 1 0 1 1-1.734-.995L12.274 13H11a1 1 0 0 1 0-2h1.274l-.633-1.1a1 1 0 1 1 1.734-1L14 9.99l.625-1.09a1 1 0 1 1 1.734.995L15.726 11H17a1 1 0 0 1 0 2h-1.274l.633 1.105a1 1 0 0 1-.866 1.5Z"/></svg>
  