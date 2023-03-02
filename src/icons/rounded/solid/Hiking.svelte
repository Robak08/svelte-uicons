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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m9.609 19.2-.6 3.974a1 1 0 0 1-.98.8.99.99 0 0 1-.2-.02 1 1 0 0 1-.781-1.179l.6-3.974a1 1 0 0 1 1.961.4ZM10 2.5A2.5 2.5 0 1 1 12.5 5 2.5 2.5 0 0 1 10 2.5ZM20 7a1 1 0 0 0-1 1v2h-2.382l-1.171-2.342A3 3 0 0 0 12.764 6h-2.346a1.5 1.5 0 0 0-1.476 1.231l-1.049 5.76A2.988 2.988 0 0 0 9.2 16.08l3.8 2.463V23a1 1 0 0 0 2 0v-5a1 1 0 0 0-.456-.839l-1.206-.783 1.13-6.206.637 1.275A1 1 0 0 0 16 12h3v11a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1ZM6.4 15.893a2.7 2.7 0 0 1-.73.107A2.765 2.765 0 0 1 3 12.971a7.68 7.68 0 0 1 4.065-6.295L5.91 12.61a4.974 4.974 0 0 0 .49 3.283Z"/></svg>
  