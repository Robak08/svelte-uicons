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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 13.5a2.5 2.5 0 0 1-2.5 2.5h-4.036l-4.226 6.487A2.973 2.973 0 0 1 10.633 24a2.629 2.629 0 0 1-2.462-3.553L10.019 16H6a4 4 0 0 1-3.473-2.015L.2 10.16a1.443 1.443 0 0 1 .525-2 1.412 1.412 0 0 1 1.652.25l1.417 1.418A4 4 0 0 0 6.622 11H21.5a2.5 2.5 0 0 1 2.5 2.5ZM17.731 9l-4.5-7.487A2.972 2.972 0 0 0 10.629 0a2.63 2.63 0 0 0-2.462 3.553L10.285 9Z"/></svg>
  