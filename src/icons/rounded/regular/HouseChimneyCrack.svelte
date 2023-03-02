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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 5.724V2a1 1 0 1 0-2 0v2.366L14.797.855a4.98 4.98 0 0 0-5.594 0l-7 4.724A4.995 4.995 0 0 0 0 9.724V19c0 2.757 2.243 5 5 5h3.913c.822 0 1.572-.516 1.867-1.283l1.29-3.358A1.002 1.002 0 0 0 11.137 18H8.381a.356.356 0 0 1-.323-.192.349.349 0 0 1 .007-.364l4.957-7.369a.169.169 0 0 1 .271-.009.156.156 0 0 1 .024.146l-1.369 4.497a.999.999 0 0 0 .957 1.292h2.869c.097 0 .154.052.186.096a.22.22 0 0 1 .029.206l-1.74 5.045a2.002 2.002 0 0 0 1.891 2.653h2.861c2.757 0 5-2.243 5-5V9.724a4.992 4.992 0 0 0-2-4ZM22 19c0 1.654-1.346 3-3 3h-2.861l1.74-5.045a2.234 2.234 0 0 0-.291-2.02A2.235 2.235 0 0 0 15.774 14h-1.52l.977-3.206a2.146 2.146 0 0 0-.332-1.918A2.144 2.144 0 0 0 13.16 8c-.729 0-1.405.364-1.803.967l-4.96 7.374A2.367 2.367 0 0 0 8.381 20h1.301l-.769 2H5c-1.654 0-3-1.346-3-3V9.724c0-.999.494-1.929 1.322-2.487l7-4.724a2.985 2.985 0 0 1 3.355 0l7 4.724a2.995 2.995 0 0 1 1.322 2.487V19Z"/></svg>
  