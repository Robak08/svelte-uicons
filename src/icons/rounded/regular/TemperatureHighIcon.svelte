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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 24c-6.078.117-9.334-7.638-5-11.889V5c.211-6.609 9.791-6.6 10 0v7.111c4.335 4.252 1.077 12.006-5 11.889Zm0-22a3 3 0 0 0-3 3v7.537a1 1 0 0 1-.332.744A5.018 5.018 0 0 0 11 22a5.018 5.018 0 0 0 3.332-8.719 1 1 0 0 1-.332-.744V5a3 3 0 0 0-3-3Zm0 18a3.007 3.007 0 0 1-1-5.829V5a1 1 0 0 1 2 0v9.171A3.007 3.007 0 0 1 11 20Zm0-4a1 1 0 0 0 0 2 1 1 0 0 0 0-2ZM21 6a3 3 0 0 1 0-6 3 3 0 0 1 0 6Zm0-4a1 1 0 0 0 0 2 1 1 0 0 0 0-2Z"/></svg>
  