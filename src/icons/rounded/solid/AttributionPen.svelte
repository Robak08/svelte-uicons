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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 24H1c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1-.45 1-1s-.45-1-1-1h-3c-1.65 0-3-1.35-3-3s1.35-3 3-3h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3Zm-7.44-11.02-.61 2.75a2.975 2.975 0 0 1-2.14 2.24L3.58 19.4c-.59.16-1.01-.56-.58-.99l3.72-3.72a.996.996 0 1 0-1.41-1.41L1.59 17c-.43.43-1.15.01-.99-.58l1.43-5.23c.29-1.07 1.16-1.9 2.24-2.14l2.75-.61 4.54 4.54Zm8.38-10.44c0 .68-.26 1.32-.74 1.8l-6.72 6.72-3.59-3.59L15.6.74c.99-.99 2.6-.99 3.59 0 .48.48.74 1.12.74 1.79Z"/></svg>
  