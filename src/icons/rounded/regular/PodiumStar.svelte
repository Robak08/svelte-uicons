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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 10h-1.967a1.067 1.067 0 0 0-.08 0H4V7c0-1.654 1.346-3 3-3h.172A3.004 3.004 0 0 0 10 6h3c1.654 0 3-1.346 3-3s-1.346-3-3-3h-3a3.004 3.004 0 0 0-2.828 2H7C4.243 2 2 4.243 2 7v3H1a1 1 0 1 0 0 2h1.153l1.304 7.821A4.984 4.984 0 0 0 8.389 24h7.223a4.985 4.985 0 0 0 4.932-4.179L21.848 12h1.153a1 1 0 1 0 0-2ZM10 2h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2Zm8.57 17.493A2.99 2.99 0 0 1 15.611 22H8.388a2.99 2.99 0 0 1-2.959-2.507L4.18 12h15.639l-1.249 7.493ZM8.043 15.876a.787.787 0 0 1 .77-.558h1.853l.563-1.756c.111-.347.407-.562.771-.562s.66.215.771.562l.563 1.756h1.853a.79.79 0 0 1 .77.558.79.79 0 0 1-.292.905l-1.507 1.101.573 1.771a.79.79 0 0 1-.297.906.788.788 0 0 1-.953-.005L12 19.465l-1.481 1.089a.803.803 0 0 1-.953.005.788.788 0 0 1-.297-.906l.572-1.771-1.506-1.101a.788.788 0 0 1-.292-.905Z"/></svg>
  