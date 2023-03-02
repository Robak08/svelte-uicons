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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.88 10.06C19.57 9.41 20 8.5 20 7.5 20 5.57 18.43 4 16.5 4c-.53 0-1.04.13-1.5.35V2c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1v4.93c0 .33-.17.65-.45.83L5.22 9.98A5 5 0 0 0 3.13 13h12.86c.55 0 1 .45 1 1s-.45 1-1 1H3v4c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5v-4.86c0-1.63-.79-3.15-2.12-4.08Zm-1.79-1.2-1.64-1.1a.967.967 0 0 1-.41-.58c.15-.69.76-1.19 1.47-1.19.83 0 1.5.67 1.5 1.5 0 .6-.38 1.12-.91 1.36Z"/></svg>
  