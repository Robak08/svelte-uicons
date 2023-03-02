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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2.446 5.825A7.168 7.168 0 0 1 2 4a4 4 0 0 1 8 0 7.168 7.168 0 0 1-.446 1.825A11.618 11.618 0 0 0 9 8H3a11.618 11.618 0 0 0-.554-2.175ZM9.511 10H2.489c-.217.5-.48 1.012-.753 1.537A11.781 11.781 0 0 0 0 17a11.08 11.08 0 0 0 .986 4.7A4 4 0 0 0 4.61 24h2.78a4 4 0 0 0 3.624-2.3A11.08 11.08 0 0 0 12 17a11.781 11.781 0 0 0-1.736-5.463A24.85 24.85 0 0 1 9.511 10Zm4.935-4.175A7.168 7.168 0 0 1 14 4a4 4 0 0 1 8 0 7.168 7.168 0 0 1-.446 1.825A11.618 11.618 0 0 0 21 8h-6a11.618 11.618 0 0 0-.554-2.175ZM21.511 10h-7.022c-.217.5-.48 1.012-.753 1.537A11.781 11.781 0 0 0 12 17a11.08 11.08 0 0 0 .986 4.7A4 4 0 0 0 16.61 24h2.78a4 4 0 0 0 3.624-2.3A11.08 11.08 0 0 0 24 17a11.781 11.781 0 0 0-1.736-5.463A24.85 24.85 0 0 1 21.511 10Z"/></svg>
  