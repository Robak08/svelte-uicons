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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 10a.988.988 0 0 0-.024-.217l-1.3-5.868A4.968 4.968 0 0 0 17.792 0H6.208a4.968 4.968 0 0 0-4.88 3.915L.024 9.783A.988.988 0 0 0 0 10v1a3.984 3.984 0 0 0 1 2.643V19a5.006 5.006 0 0 0 5 5h12a5.006 5.006 0 0 0 5-5v-5.357A3.984 3.984 0 0 0 24 11Zm-22 .109 1.28-5.76A2.982 2.982 0 0 1 6.208 2H7v3a1 1 0 0 0 2 0V2h6v3a1 1 0 0 0 2 0V2h.792a2.982 2.982 0 0 1 2.928 2.349l1.28 5.76V11a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2ZM18 22H6a3 3 0 0 1-3-3v-4.127A3.978 3.978 0 0 0 4 15h1a3.99 3.99 0 0 0 3-1.357A3.99 3.99 0 0 0 11 15h2a3.99 3.99 0 0 0 3-1.357A3.99 3.99 0 0 0 19 15h1a3.978 3.978 0 0 0 1-.127V19a3 3 0 0 1-3 3Z"/></svg>
  