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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 20c0 .55-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1Zm-9.91-1H5c-1.19 0-2.31-.52-3.07-1.43-.76-.91-1.08-2.1-.87-3.27l1.28-6.18a4.977 4.977 0 0 1 4.84-4.11A3.07 3.07 0 0 1 6.99 3c0-1.65 1.35-3 3-3h4c1.65 0 3 1.35 3 3 0 .35-.07.69-.19 1.01 2.39.04 4.42 1.75 4.84 4.11l1.28 6.18c.03.16.02.33.03.49A5.988 5.988 0 0 0 14.07 19ZM14 4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1h4ZM8.14 21c.45 1.72 2 3 3.86 3 1.07 0 2.02-.43 2.74-1.12a5.83 5.83 0 0 1-.65-1.88H8.14Z"/></svg>
  