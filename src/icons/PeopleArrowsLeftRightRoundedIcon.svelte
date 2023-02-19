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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-people-arrows-left-right {customClass}"><path d="M2.5 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0ZM7 15H4c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2 .55 0 1-.45 1-1s-.45-1-1-1c-2.21 0-4 1.79-4 4v3a4 4 0 0 0 2 3.46V23c0 .55.45 1 1 1s1-.45 1-1v-6h2v6c0 .55.45 1 1 1s1-.45 1-1v-7c0-.55-.45-1-1-1ZM19 5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Zm1 1c-.55 0-1 .45-1 1s.45 1 1 1c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1v-6h2v6c0 .55.45 1 1 1s1-.45 1-1v-6.54c1.19-.69 2-1.99 2-3.46v-3c0-2.21-1.79-4-4-4Zm-2.87 1.91L15.52 6.3a.996.996 0 1 0-1.41 1.41L15.4 9H8.6l1.29-1.29A.996.996 0 1 0 8.48 6.3L6.87 7.91a2.976 2.976 0 0 0 0 4.19l1.61 1.61c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41l-1.29-1.29h6.8l-1.29 1.29a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l1.61-1.61a2.976 2.976 0 0 0 0-4.19Z"/></svg>
  