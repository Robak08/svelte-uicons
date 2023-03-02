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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7.98 16.11c0 .47-.41.86-.89.86h-.83v-1.72h.84c.48 0 .89.39.89.86ZM15 8h6.54c-.35-.91-.88-1.75-1.59-2.46l-3.48-3.49A7.037 7.037 0 0 0 14.01.46V7c0 .55.45 1 1 1Zm-2.91 7.25h-.84v3.5h.84c.48 0 .89-.39.89-.86v-1.78c0-.47-.41-.86-.89-.86ZM22 10.49V19c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h4.51c.16 0 .32.01.49.02V7c0 1.65 1.35 3 3 3h6.98c.01.16.02.32.02.49ZM9.23 16.11c0-1.16-.96-2.11-2.14-2.11H6c-.55 0-1 .45-1 1v4.44c0 .35.28.62.62.62s.62-.28.62-.62v-1.22h.84c1.18 0 2.14-.95 2.14-2.11Zm5 0c0-1.16-.96-2.11-2.14-2.11H11c-.55 0-1 .45-1 1v4.44c0 .35.28.56.62.56h1.46c1.18 0 2.14-.95 2.14-2.11v-1.78Zm4.79-1.48c0-.35-.28-.62-.62-.62h-2.31c-.35 0-.62.28-.62.62v4.81c0 .35.28.62.62.62s.62-.28.62-.62v-1.8h1.24c.35 0 .62-.28.62-.62s-.28-.62-.62-.62h-1.24v-1.14h1.69c.35 0 .62-.28.62-.62Z"/></svg>
  