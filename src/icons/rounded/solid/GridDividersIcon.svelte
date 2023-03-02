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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 2H1c-.55 0-1-.45-1-1s.45-1 1-1h22c.55 0 1 .45 1 1s-.45 1-1 1Zm1 11c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1ZM6 7.5v-1A2.5 2.5 0 0 0 3.5 4h-1A2.5 2.5 0 0 0 0 6.5v1A2.5 2.5 0 0 0 2.5 10h1A2.5 2.5 0 0 0 6 7.5Zm9 0v-1A2.5 2.5 0 0 0 12.5 4h-1A2.5 2.5 0 0 0 9 6.5v1a2.5 2.5 0 0 0 2.5 2.5h1A2.5 2.5 0 0 0 15 7.5Zm9 0v-1A2.5 2.5 0 0 0 21.5 4h-1A2.5 2.5 0 0 0 18 6.5v1a2.5 2.5 0 0 0 2.5 2.5h1A2.5 2.5 0 0 0 24 7.5Zm-18 12v-1A2.5 2.5 0 0 0 3.5 16h-1A2.5 2.5 0 0 0 0 18.5v1A2.5 2.5 0 0 0 2.5 22h1A2.5 2.5 0 0 0 6 19.5Zm9 0v-1a2.5 2.5 0 0 0-2.5-2.5h-1A2.5 2.5 0 0 0 9 18.5v1a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5Zm9 0v-1a2.5 2.5 0 0 0-2.5-2.5h-1a2.5 2.5 0 0 0-2.5 2.5v1a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5Z"/></svg>
  