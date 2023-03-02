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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 18v2c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4v-2c0-2.21 1.79-4 4-4h7v-4H9.55c-.69 0-1.04-.83-.55-1.32l2.45-2.45c.3-.3.79-.3 1.1 0L15 8.68c.49.49.14 1.32-.55 1.32H13v4h7c2.21 0 4 1.79 4 4Zm0-14v2c0 2.21-1.79 4-4 4h-2c-.55 0-1-.45-1-1V8c0-.27.11-.52.29-.71l4.38-4.38c-.36-.55-.97-.91-1.68-.91h-.59l-3.35 3.35c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l1.93-1.93h-3.17L5.68 9.72a.99.99 0 0 1-.71.29h-1C1.79 10 0 8.21 0 6V4c0-2.21 1.79-4 4-4h16c2.21 0 4 1.79 4 4ZM2 4v.59L4.59 2H4c-1.1 0-2 .9-2 2Zm8.59-2H7.42l-5.1 5.09c.36.55.97.91 1.68.91h.59l6-6ZM22 5.41 19.41 8H20c1.1 0 2-.9 2-2v-.59Z"/></svg>
  