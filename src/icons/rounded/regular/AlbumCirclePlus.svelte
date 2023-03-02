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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 19c0 .55-.45 1-1 1h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1Zm-6.06-7.88c.08.55.59.93 1.13.84.55-.08.92-.59.84-1.13C19.34 6.93 15.94 4 11.99 4c-4.41 0-8 3.59-8 8 0 3.98 2.97 7.39 6.91 7.93h.14a1 1 0 0 0 .99-.87 1.01 1.01 0 0 0-.86-1.13c-2.96-.4-5.18-2.96-5.18-5.95 0-3.31 2.69-6 6-6 2.96 0 5.51 2.2 5.94 5.12ZM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5ZM19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h10c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3h14c1.65 0 3 1.35 3 3v10c0 .55.45 1 1 1s1-.45 1-1V5c0-2.76-2.24-5-5-5Z"/></svg>
  