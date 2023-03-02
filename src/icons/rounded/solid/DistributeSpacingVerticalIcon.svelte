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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 4H1c-.55 0-1-.45-1-1s.45-1 1-1h22c.55 0 1 .45 1 1s-.45 1-1 1Zm1 17c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1Zm-4-7.5v-3C20 8.57 18.43 7 16.5 7h-9C5.57 7 4 8.57 4 10.5v3C4 15.43 5.57 17 7.5 17h9c1.93 0 3.5-1.57 3.5-3.5Z"/></svg>
  