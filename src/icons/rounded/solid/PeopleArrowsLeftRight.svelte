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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m17.13 12.09-1.61 1.61c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L15.39 11h-6.8l1.29 1.29a.996.996 0 0 1-.71 1.7c-.26 0-.51-.1-.71-.29l-1.61-1.61a2.976 2.976 0 0 1 0-4.19l1.61-1.61A.996.996 0 1 1 9.87 7.7L8.58 8.99h6.8L14.09 7.7a.996.996 0 1 1 1.41-1.41l1.61 1.61a2.976 2.976 0 0 1 0 4.19ZM5 5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Zm2.32 10.35c-.09-.07-1.87-1.84-1.87-1.84a4.95 4.95 0 0 1 0-7.01c.18-.18.05-.49-.2-.49H4C1.79 6 0 7.79 0 10v3a4 4 0 0 0 2 3.46V23c0 .55.45 1 1 1s1-.45 1-1v-6h2v6c0 .55.45 1 1 1s1-.45 1-1v-6.15c0-.57-.23-1.14-.68-1.5ZM20 6h-1.25c-.26 0-.39.31-.2.49a4.95 4.95 0 0 1 0 7.01s-1.78 1.77-1.87 1.84c-.45.36-.68.92-.68 1.5v6.15c0 .55.45 1 1 1s1-.45 1-1v-6h2v6c0 .55.45 1 1 1s1-.45 1-1v-6.54c1.19-.69 2-1.99 2-3.46v-3c0-2.21-1.79-4-4-4Zm-1-1a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>
  