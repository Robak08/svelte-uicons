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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.5 19a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm9.5 2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm5-3.5a1 1 0 0 0-1-1H9c-1.654 0-3-1.346-3-3V5c0-2.757-2.243-5-5-5a1 1 0 1 0 0 2c1.654 0 3 1.346 3 3v9c0 2.757 2.243 5 5 5h14a1 1 0 0 0 1-1Zm-5-3h-6V2.5A2.5 2.5 0 0 1 15.5 0h1A2.5 2.5 0 0 1 19 2.5V15ZM17 2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V4h2V2.5ZM21 4v11a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3ZM11 15V4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3Z"/></svg>
  