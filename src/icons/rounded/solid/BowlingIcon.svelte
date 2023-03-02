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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2.446 5.825A7.168 7.168 0 0 1 2 4a4 4 0 0 1 8 0 7.168 7.168 0 0 1-.446 1.825A11.618 11.618 0 0 0 9 8H3a11.618 11.618 0 0 0-.554-2.175ZM9.511 10H2.489c-.217.5-.48 1.012-.753 1.537A11.781 11.781 0 0 0 0 17a11.08 11.08 0 0 0 .986 4.7A4 4 0 0 0 4.61 24h2.78a4 4 0 0 0 3.624-2.3A11.08 11.08 0 0 0 12 17a11.781 11.781 0 0 0-1.736-5.463A24.85 24.85 0 0 1 9.511 10ZM24 16a8.006 8.006 0 0 1-11.529 7.183 5.979 5.979 0 0 0 .357-.642A13.05 13.05 0 0 0 14 17a13.58 13.58 0 0 0-1.961-6.385c-.209-.4-.407-.795-.585-1.181A7.981 7.981 0 0 1 24 16Zm-6-1a1 1 0 1 0-1 1 1 1 0 0 0 1-1Zm2-3a1 1 0 1 0-1 1 1 1 0 0 0 1-1Zm2 3a1 1 0 1 0-1 1 1 1 0 0 0 1-1Z"/></svg>
  