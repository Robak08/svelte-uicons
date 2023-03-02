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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.552 12.139C21.15 9.561 21.6 6.247 18 6h-8v4.584c.872.857 2.1 1.887 2 3.243V15.5A2.5 2.5 0 0 1 9.5 18h-1A2.5 2.5 0 0 1 6 15.5v-1.671c-.1-1.353 1.127-2.39 2-3.243V6H3a3.031 3.031 0 0 0-2.245.981 2.93 2.93 0 0 0-.747 2.28 31.916 31.916 0 0 0 3.136 10.805A6.976 6.976 0 0 0 9.437 24h2.127a6.955 6.955 0 0 0 5.736-3H19c5.091.162 7.377-7.84 1.552-8.861ZM19 19h-.643a32.94 32.94 0 0 0 1.743-4.91c1.891.325 1.9 1.457 1.9 1.91a3 3 0 0 1-3 3ZM9.026 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm4 0V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm-8 0V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0ZM8 13.829c-.056-.551.684-1.058 1-1.415.317.363 1.055.86 1 1.415V15.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5Z"/></svg>
  