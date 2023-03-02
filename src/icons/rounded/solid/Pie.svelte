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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.3 20a4.527 4.527 0 0 1-4.482 4h-9.64A4.527 4.527 0 0 1 2.7 20a6.021 6.021 0 0 0 6.3.2 6.159 6.159 0 0 0 6 0 6.018 6.018 0 0 0 6.3-.2ZM13 3V1a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0Zm4 0V1a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0ZM9 3V1a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0Zm15 11a2.918 2.918 0 0 1-2.513 2.949 4.027 4.027 0 0 1-6.487.7 4.038 4.038 0 0 1-6 0 4.028 4.028 0 0 1-6.488-.7A2.918 2.918 0 0 1 0 14c0-3.624 5.353-8 12-8s12 4.376 12 8ZM10.985 9.65a.526.526 0 0 0-.635-.635 5.4 5.4 0 0 0-1.967.752 1.308 1.308 0 0 0 1.85 1.85 5.4 5.4 0 0 0 .752-1.967Zm4.632.117a5.4 5.4 0 0 0-1.967-.752.526.526 0 0 0-.635.635 5.4 5.4 0 0 0 .752 1.967 1.308 1.308 0 0 0 1.85-1.85Z"/></svg>
  