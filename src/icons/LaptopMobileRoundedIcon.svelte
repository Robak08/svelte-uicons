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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-laptop-mobile {customClass}"><path d="M2 15c0 .55.45 1 1 1h8c.55 0 1 .45 1 1s-.45 1-1 1H3c-1.65 0-3-1.35-3-3 0-1.3.84-2.4 2-2.82V5c0-2.76 2.24-5 5-5h10c2.76 0 5 2.24 5 5v1c0 .55-.45 1-1 1s-1-.45-1-1V5c0-1.65-1.35-3-3-3H7C5.35 2 4 3.35 4 5v7h4.5c.27 0 .52.11.71.29l.71.71h1.09c.55 0 1 .45 1 1s-.45 1-1 1h-1.5c-.27 0-.52-.11-.71-.29L8.09 14H3c-.55 0-1 .45-1 1Zm22-2v7c0 2.21-1.79 4-4 4h-2c-2.21 0-4-1.79-4-4v-7c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4Zm-2 0c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-7Z"/></svg>
  