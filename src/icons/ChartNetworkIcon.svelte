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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-chart-network {customClass}"><path d="M20 12a3.994 3.994 0 0 0-3.172 1.566l-.07-.03a5 5 0 0 0-6.009-6.377l-.091-.172a3.995 3.995 0 1 0-1.779.913l.073.137a4.992 4.992 0 0 0-1.134 6.7L5.933 16.5a4 4 0 1 0 1.455 1.377l1.838-1.718a4.993 4.993 0 0 0 6.539-.871l.279.119A4 4 0 1 0 20 12ZM6 4a2 2 0 1 1 2 2 2 2 0 0 1-2-2ZM4 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm8-7a3 3 0 0 1-1.6-5.534l.407-.217A3 3 0 1 1 12 15Zm8 3a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"/></svg>
  