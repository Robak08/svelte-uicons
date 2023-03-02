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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.635 20.321a1 1 0 0 1-.056 1.413l-.793.733C14.783 23.448 13.431 24 11.999 24s-2.783-.551-3.807-1.552l-3.943-3.643C1.314 15.871.273 11.626 1.504 7.701a1 1 0 1 1 1.908.598 8.98 8.98 0 0 0 2.224 9.064l3.935 3.635c1.336 1.306 3.542 1.286 4.837.02l.813-.752a.998.998 0 0 1 1.413.056Zm7.072 3.386a.997.997 0 0 1-1.414 0l-22-22A.999.999 0 1 1 1.707.293l2.725 2.725A10.92 10.92 0 0 1 12 0c2.938 0 5.7 1.145 7.778 3.222A10.924 10.924 0 0 1 23 11a10.92 10.92 0 0 1-3.018 7.568l3.725 3.725a.999.999 0 0 1 0 1.414ZM5.847 4.433l12.722 12.722A8.924 8.924 0 0 0 21 11.001c0-2.404-.936-4.664-2.636-6.364S14.404 2.001 12 2.001c-2.306 0-4.48.862-6.153 2.433Z"/></svg>
  