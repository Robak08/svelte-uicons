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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 23c0 .55-.45 1-1 1-1.54 0-2.29-1.12-2.83-1.95-.5-.75-.75-1.05-1.17-1.05-.51 0-.9.44-1.51 1.15-.7.83-1.57 1.85-3.03 1.85s-2.32-1.03-3-1.87C10.88 21.43 10.5 21 10 21c-.39 0-.63.25-1.16.91C8.12 22.79 7.13 24 5 24c-2.76 0-5-2.24-5-5s2.24-5 5-5c.55 0 1 .45 1 1s-.45 1-1 1c-1.65 0-3 1.35-3 3s1.35 3 3 3c1.18 0 1.67-.6 2.29-1.36C7.89 19.91 8.63 19 10 19c1.47 0 2.32 1.03 3 1.87.58.7.96 1.13 1.46 1.13s.9-.44 1.51-1.15c.7-.83 1.57-1.85 3.03-1.85s2.29 1.12 2.83 1.95c.5.75.75 1.05 1.17 1.05.55 0 1 .45 1 1ZM8.99 16h.94c1.06 0 2.08-.42 2.83-1.17l7.72-7.72-3.59-3.59-7.72 7.72C8.42 11.99 8 13.01 8 14.07v.94c0 .55.44.99.99.99ZM23.26 4.33c.48-.48.74-1.12.74-1.8s-.26-1.32-.74-1.79c-.99-.99-2.6-.99-3.59 0L18.31 2.1l3.59 3.59 1.36-1.36Z"/></svg>
  