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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.04 19.3c.63.63.18 1.7-.7 1.7H5c-2.76 0-5-2.24-5-5V8c0-.49.07-.96.2-1.41.22-.74 1.13-1 1.68-.45l3.11 3.11-2.18 7.46c-.16.53.15 1.09.68 1.24.53.15 1.09-.15 1.24-.68l.37-1.28h3.77l.37 1.28a1.002 1.002 0 0 0 1.24.68c.53-.16.83-.71.68-1.24l-.54-1.83 4.41 4.41ZM24 16V8c0-2.76-2.24-5-5-5H5c-.19 0-.37.01-.56.03L1.71.29C1.32-.1.68-.1.29.29s-.39 1.03 0 1.42l5.35 5.34V7c.21-.61.74-1 1.35-1 .6 0 1.14.39 1.33.98l1.14 3.89 3.55 3.55V8.01c0-1.1.9-2 2-2h1.5c2.48 0 4.5 2.02 4.5 4.5v3a4.51 4.51 0 0 1-4.42 4.5l5.71 5.71c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41l-2.06-2.06a5.004 5.004 0 0 0 2.35-4.24ZM8.29 14l-.6-2.06-1.08-1.08-.92 3.13h2.6ZM19 13.5v-3A2.5 2.5 0 0 0 16.5 8H15v8h1.5a2.5 2.5 0 0 0 2.5-2.5Z"/></svg>
  