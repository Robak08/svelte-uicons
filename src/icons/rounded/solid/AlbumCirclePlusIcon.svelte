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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 19h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2ZM12.02 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Zm0 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm2 6.5c0-.09.01-.18.02-.27-1.62.42-3.41.41-5.32-.51-2.65-1.27-4.53-3.87-4.68-6.8-.25-4.73 3.65-8.64 8.38-8.41 2.93.14 5.54 2.02 6.82 4.66.93 1.91.94 3.7.53 5.32h.01c1.64-.05 3.13.54 4.25 1.55V5c-.01-2.76-2.25-5-5.01-5h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h10.53a5.98 5.98 0 0 1-1.54-4Z"/></svg>
  